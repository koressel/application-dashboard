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
        console.log(res.rows);
      })
      .catch(err => {
        client.release();
        console.log(err.stack);
        result(err, res);
      })
  })

  // pool
  //   .connect()
  //   .then(client => {
  //       return client
  //       .query('$1', [1])
  //       .then(res => {
  //         client.release();
  //         console.log(res.rows[0]);
  //       })
  //       .catch(err => {
  //         client.release();
  //         console.log(err.stack);
  //       })
  //   })
  // pool.query('SELECT * FROM applications', (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     result(err);
  //   }
  //   result(null, res)
  //   pool.end()
  // })
};

module.exports = Application;