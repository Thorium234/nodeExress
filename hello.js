/*http = require('node:http');
listener = function (request, response) {
 // Send the HTTP header
 // HTTP Status: 200 : OK
 // Content Type: text/html
 response.writeHead(200, {'Content-Type': 'text/html'});

 // Send the response body as "Hello World"
 response.end('<h2 style="text-align: center;">Hello World</h2>');
};

server = http.createServer(listener);
server.listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');
*/
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})

