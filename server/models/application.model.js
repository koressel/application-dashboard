const { Pool, Client} = require("pg");

const pool = new Pool({
  user: 'server',
  host: 'localhost',
  database: 'applicationDashboard',
  password: 'server123',
  port: 5432,
});

const Application = function(application) {
  this.tile = application.title,
  this.company = application.company
};

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

Application.getAll = result => {
  pool
  .connect()
  .then(client => {
      return client
      .query('SELECT * FROM applications')
      .then(res => {
        client.release();
        result(null, res.rows);
      })
      .catch(err => {
        client.release();
        console.log(err.stack);
        result(err, res);
      })
  });
};

Application.addNew = (data, result) => {
  console.log('From model:')
  console.log(data)
  // pool
  // .connect()
  // .then(client => {
  //   const sql = "INSERT INTO applications(position,company,date,notes,response,interview,offer) VALUES('Test','Test','2021-09-09','No Notes',true,false,false);";
  //   return client.query(sql)
  //   .then(res => {
  //     client.release();
  //     result(null, res.rows);
  //   })
  //   .catch(err => {
  //     client.release();
  //     console.log(err.stack);
  //     result(err, res);
  //   })
  // });
}

module.exports = Application;