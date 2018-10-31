var http=require('http');

function onRequest(request, response) {
    response.writeHead(200, { "Context-Type" : "text/plain" });
    response.write("Hello From the Server");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server Started...");

