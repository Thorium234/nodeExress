var mysql = require('mysql');
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "mypassword",
   database: "world"
});

var qry =`select * from city where name like 'D%' and countrycode='IND' order by district, population;`;
con.connect(function (err) {
   if (err) throw err;
   console.log("Connected!");
  
   con.query(qry, function (err, results) {
      if (err) throw err;
      console.log(results);
   });

   con.end();
});
