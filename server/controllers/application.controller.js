const Application = require("../models/application.model.js");

exports.getAll = (req, res) => {
  Application.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else {
      res.json(data);
    }
  });
};
