const mysql = require('mysqld');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'abc123Mehak',
  database: 'teamtracker',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// create a new MySQL connection
pool.getConnection((error, conn) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
    var sql = "INSERT INTO signup (First_Name, Last_Name, User_id, Email, Phone_Number, User_Role, Password )  VALUES(?,?,?,?,?,?,?)";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
  
      });
  }

});
/*const pool = require('./dbConnection');
 
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the MySQL server.');
 
    // Perform your database operations here
    // Example: SELECT * FROM users
    var sql = "INSERT INTO signup (First_Name, Last_Name, User_id, Email, Phone_Number, User_Role, Password )  VALUES(?,?,?,?,?,?,?)";
    connection.query(sql)
    .then((data)=>{

        console.log("1 record inserted",data);
      
    }).catch((error) => {
      throw error;
    });
 
    connection.release();
  } catch (error) {
    console.error('Error connecting to the MySQL server:', error);
  }
})();*/
