var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic(__dirname, {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function(req, res){
    var done = finalhandler(req, res)
    serve(req, res, done)
})

// Listen
var port = process.env.PORT || 3000;
server.listen(port)
console.log(`Server Listening On Port ${port}\n   type 'http://localhost:3000' into browser`);
