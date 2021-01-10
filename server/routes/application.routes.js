module.exports = app => {
    const applications = require("../controllers/application.controller.js");
  
    app.get("/applications", applications.getAll);

    app.post("/new-application", applications.create);

    // app.post("/new-application", (req, res) => {
    //   let applicationData = req.body;
    //   applications.addNew(applicationData);
    //   res.sendStatus(200);
    // });
  };