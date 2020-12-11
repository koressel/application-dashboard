module.exports = app => {
    const applications = require("../controllers/application.controller.js");
  
    app.get("/applications", applications.getAll);
  };