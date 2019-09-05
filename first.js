// function first(name){
//     console.log("Hello "+name);
// }
// first("World");
var http = require('http');
var module1 = require('./module-1');
var module2 = require('./module-2');
var fs = require('fs');
var url = require('url');
function renderHTML(path,res){
    fs.readFile(path,null,function(error,data){
        if(error){
            res.writeHead(404);
            res.write("File not found");
        }
        else{
            res.write(data);
        }
        res.end();
    });
}
function requestHandler(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(module1.Variable);
    module1.myFunction();
    res.write(module2.demovariable);
    module2.demoFunction();
    var path = url.parse(req.url).pathname;
    console.log(path);
    switch(path){
        case '/':
            renderHTML('./index.html',res);
            break;
        case '/login':
            renderHTML('./login.html',res);
            break;
        default:
            res.writeHead(404);
            res.write("Route not defined");
            res.end();
    }
}
// http.createServer(requestHandler).listen(8000);
// http.createServer(function(){ //Anonymous function
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write(module1.Variable);
//     module1.myFunction();
//     res.write(module2.demovariable);
//     module2.demoFunction();
//     res.end();
// }).listen(80000);