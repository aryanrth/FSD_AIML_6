const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h2>Welcome to the page</h2>");
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
