var serverModule = require('./server-module');
var http = require('http');
http.createServer(serverModule.handleRequests).listen(8000);