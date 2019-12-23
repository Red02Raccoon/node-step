var express = require("express");
var passport = require("passport");
var Product = require("./../models/product.model");

var router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

const logger = function(req, res, next) {
  console.log(req.params);
  next();
};

/* GET products. */
router.get("/", function(req, res, next) {
  Product.find({}, (err, products) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(products);
  });
});

/* GET product by id. */
router.get("/:id", logger, function(req, res, next) {
  Product.findOne({ _id: req.params.id }, (err, product) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(product);
  });
});

/* POST product. */
router.post("/", function(req, res, next) {
  var product = new Product(req.body); // create document
  product.save(err => {
    if (err) {
      return next(err);
    }
    res.status(201).send(product);
  });
});

/* DELETE product by id. */
router.delete("/:id", function(req, res, next) {
  // 204 - ресурс удален полностью
  // 200 - ресурс помечен как удаленный (нужно добавить тогда свойство в документ)
  Product.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      return next(err);
    }
    res.status(204).send();
  });
});

router.use(function(err, req, res, next) {
  console.info({ err });

  if (req.app.get("env") !== "development") {
    delete err.stack;
  }

  res.status(err.statusCode || 500).json(err);
});

module.exports = router;
