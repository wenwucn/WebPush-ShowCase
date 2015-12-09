//server
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/browser_test')).listen(8080);