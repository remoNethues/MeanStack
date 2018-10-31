var http=require('https');
var fs=require('fs');


function onResuest(request,response){
    response.writeHead(200,{"Context-Type":"text/plain"});
    console.log("inside the request");
    fs.createReadStream("./Html/index").pipe(response);
    console.log("request serviced");

}



http.createServer(onResuest).listen(8888);
console.log("Server Started...");
