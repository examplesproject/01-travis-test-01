var http = require('http');

http.createServer(function(request, response) {
	
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.end('Hello World\n') // missing semi-colon will fail the build
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');