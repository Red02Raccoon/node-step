var mongoose = require("mongoose");

const config = require("./configs");

const dbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// mongoose.connection.on("connected", () => {
//   console.log("connected to mongo: ", dbURI);
// });

// mongoose.connection.on("error", () => {
//   console.log("connection error");
// });

mongoose
  .connect(config.MONGODB_URI, dbOptions)
  .then(() => {
    console.log("i am connected");
  })
  .catch(error => {
    console.log("some error", { error });
  });

module.exports = mongoose;
