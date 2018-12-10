var http = require('http');
//const appInsights = require("applicationinsights");
//appInsights.setup(process.env['APPINSIGHTS_INSTRUMENTATIONKEY']);
//appInsights.start();

var server = http.createServer(function(request, response) {
    console.log("Request Made");
    //appInsights.defaultClient.trackNodeHttpRequest({request: request, response: response});
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
