var express = require('express'); //Web server
var app = express();
var fs = require('fs'); //File system

//listening server
app.listen(8080, function(){
    console.log("start Server");
});

//folder setting and read file
app.get('/', function(req,res){
    fs.readFile('index.html', function(error, data){
       if(error) {
            console.log(error);
       }
       else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
       }
    });
});