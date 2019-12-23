const fs = require("fs");
const sumArray = require("./myModule");

// read and write file sync
// const readWrite = () => {
//   var data = fs.readFileSync("test.csv", "utf-8");

//   fs.writeFileSync("test_2.csv", data + "I updated it!!!");
//   var newData = fs.readFileSync("test_2.csv", "utf-8");

//   return {
//     data,
//     newData
//   };
// };
// console.log("readWrite result", readWrite());

// read file async
// fs.readFile("test_2.csv", "utf-8", (err, res) => {
//   console.log("read file async", {
//     err,
//     res
//   });
// });

// use custom module
const sum = sumArray([1, 2, 3, 4]);
console.log("sum", { sum });
