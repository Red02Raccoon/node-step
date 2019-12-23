var mongoose = require("mongoose");

const dbURI =
  "mongodb://Raccoon:raccoon1234@ds033831.mlab.com:33831/db_express_test";
const dbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose
  .connect(dbURI, dbOptions)
  .then(() => {
    console.log("i am connected");
  })
  .catch(error => {
    console.log("some error", { error });
  });

// mongoose.connection.on("connected", () => {
//   console.log("connected to mongo: ", dbURI);
// });

// mongoose.connection.on("error", () => {
//   console.log("connection error");
// });

module.exports = mongoose;
