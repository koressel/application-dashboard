module.exports = app => {
    const applications = require("../controllers/application.controller.js");
  
    app.get("/applications", applications.getAll);
    app.get("/", (req,res) => {
      res.render(index.html);
    });
  };