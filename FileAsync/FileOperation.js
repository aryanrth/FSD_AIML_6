const fs = require("fs");
function DataWriteCB() {
  fs.writeFile("data.pdf", "hello writing pdf file data", (err) => {
    if (err) {
      console.log("Error while writing in file" + err);
    }
    console.log("data written successfully");
  });

  console.log("resources closed");
}
fs.readFile("data.pdf", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Error while reading the file:" + err);
  }
  console.log(data);
});
const obj = { DataWriteCB };
module.exports = obj;
