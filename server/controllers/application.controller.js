const Application = require("../models/application.model.js");

exports.getAll = (req, res) => {
  Application.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving applications."
      });
    else {
      res.json(data);
    }
  });
};

exports.create = (req, res) => {
  Application.addNew(req.body, (err, data) => {
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while trying to save a new application."
    });
  else {
    console.log(data)
    res.status(200);
  }
  });
};
