const Application = require("../models/application.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  res.json({info: 'This is some json data.'});
  // Application.getAll((err, data) => {
  //   if (err)
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving customers."
  //     });
  //   else res.send(data);
  // });
};
