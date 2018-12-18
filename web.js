require('dotenv').config({silent: true});
var net = require('net');
var HOST = '10.0.0.183';   
var PORT = process.env.PORT || 5000
var http = require('http');
var client = new net.Socket();

console.log('changed'+process.env.port)
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World changed!');
 
  client.connect(PORT, HOST, function() {
  
  console.log('CONNECTED TO: ' + HOST + ':' +PORT);
  process.exit();
  
  
  })


}).listen(process.env.PORT || 3000); 
