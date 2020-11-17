const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});