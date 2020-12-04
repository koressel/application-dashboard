const Application = require("../models/application.model.js");

// Retrieve all Customers from the database.
exports.getAll = (req, res) => {
  Application.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else {
      res.send(data)
    }
  });
};
