const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user.model");
const config = require("./configs");

module.exports = function(password) {
  var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: config.JWT_SECRET
  };

  password.use(
    new JWTStrategy(opts, function(jwt_payload, done) {
      User.findOne({ _id: jwt_payload._id }, function(err, user) {
        if (err) return done(err, false);
        if (user) {
          return done(null, user);
        }
        done(null, false);
      });
    })
  );
};
