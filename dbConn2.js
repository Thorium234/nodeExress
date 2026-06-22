/*MySQL Driver for Node.js

To use MySQL database as a backend, you need to install and include a MySQL driver from Node Package Manager (NPM).

The NPM repository hosts mysql module, it is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.

If you have installed the latest version of Node.js runtime (V10 or newer), npm is already available. To install the mysql module, use the following command in the command terminal −

npm install mysql

Note − that the official website of MySQL also provides a Connector/Node.js X DevAPI driver. From the version 8.0 onwards, MySQL supports NoSQL Document Store. The Connector/Node.js driver is especially needed if you intend to use the NoSQL features of MySQL. In this tutorial, we are using the mysql module, installed from NPM.
Establishing Connection

First step is to import the mysql module in your code by the following require() statement −
*/
var mysql = require('mysql');

/*The createConnection() function in this module uses the credentials provided as arguments and returns the connection object.

createConnection(connectionUri: string | mysql.ConnectionConfig): mysql.Connection

The most common usage of createConnection() function is as follows −
*/
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: " "
});

//You have to use the connect() method of the connection object.

con.connect(function (err) {
   if (err) throw err;
   console.log("Connected!");
});

//If the connection is successful, youll get "Connected!" message in the console.
