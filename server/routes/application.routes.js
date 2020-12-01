module.exports = app => {
    const applications = require("../controllers/application.controller.js");
  
    // Create a new Customer
    // app.post("/customers", customers.create);
  
    // Retrieve all Customers
    // app.get("/applications", applications.findAll);
    app.get("/applications", applications.getAll);
  
    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", customers.findOne);
  
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
  
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
  
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
  };