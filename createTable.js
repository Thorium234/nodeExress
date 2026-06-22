var mysql = require('mysql');
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
  // password: "mypassword",
   database: "nodedb"
});
var qry =`CREATE TABLE IF NOT EXISTS employee (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(20) NOT NULL,
   age INT,
   salary FLOAT
);`;
con.connect(function (err) {
   if (err) throw err;
   console.log("Connected!");
   con.query(qry, function (err, result) {
      if (err) throw err;
      console.log("Created table successfully");
   });
   con.query("SHOW TABLES;", function (err, result) {
      if (err) throw err;
      console.log("Showing tables\n");
      for (var i = 0; i < result.length; i++) {
         console.log(JSON.stringify(result[i]));
      }
   })
   con.end();
});
