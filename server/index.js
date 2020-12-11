const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/application.routes.js")(app);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});