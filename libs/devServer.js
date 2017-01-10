// var express = require('express');
//
// var server = express();
// server.use(express.static(__dirname.substr(0, __dirname.length - 5) + '/bin'));
//
// server.get('*', function(req, res){
//   res.sendFile('index.html');
// });
//
// var port = 8080;
// server.listen(port, function() {
//     console.log('server listening on port ' + port);
// });
var express = require('express');

var server = express();
server.use(express.static(__dirname.substr(0, __dirname.length - 5) + '/bin'));

server.get('/*', function(req, res){
  res.sendFile(__dirname.substr(0, __dirname.length - 5)+'/bin' + '/index.html');
});

var port = 8080;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
