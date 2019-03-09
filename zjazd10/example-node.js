/*
function myFunction (x,y) {
    let z = x+y;
     return`Suma liczb ${x} i ${y} jest ${z}`;
}

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});    
    res.end(myFunction(5,4));
}).listen(3000);
*/


const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('./index.html');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(req, res) {  res.statusCode = 200;  
res.setHeader('Content-Type', 'text/html');  
res.end(index);});
server.listen(port, hostname, function() {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});