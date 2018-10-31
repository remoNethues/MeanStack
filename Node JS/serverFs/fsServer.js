var http=require('https');
var fs=require('fs');


function onResuest(request, response){
    response.writeHead(200,{"Context-Type":"text/plain"});
    console.log("inside the request");
    fs.createReadStream("./Html/index.html").pipe(response);
    console.log("request serviced");
    response.end();
}



http.createServer(onResuest).listen(8088);
console.log("Server Started...");
