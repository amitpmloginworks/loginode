require('dotenv').config({silent: true});
var net = require('net');
var HOST = '10.0.0.183';   
console.log('create process.env', process.env);
var PORT = process.env.PORT || 5000
var http = require('http');
var client = new net.Socket();


http.createServer(function (req, res) {
  console.log('create server');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('manager changed!');
 
  client.connect(PORT, HOST, function() {
  console.log('changed'+process.env.port)
  console.log('CONNECTED TO: ' + HOST + ':' +PORT);
  process.exit();
  
  
  })


}).listen(process.env.PORT || 3000); 
