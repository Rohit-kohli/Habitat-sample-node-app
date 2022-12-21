var app = require('./app');
var http = require('http');
var nconf = require('nconf');

nconf.file({ file: process.argv[2] || './dev-config.json' });

var port = nconf.get('port');
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
