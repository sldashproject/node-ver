var http = require("http");
var https = require("https");
var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));

app.get('/', function(req, res){
    fs.readFile('index.html', function(err, data){
        if(!res) console.log(err);
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.get('/index.html', function(req, res){
    fs.readFile('index.html', function(err, data){
        if(!res) console.log(err);
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.get('/Angular1.6.html', function(req, res){
    fs.readFile('Angular1.6.html', function(err, data){
        if(!res) console.log(err);
        else {
             res.writeHead(200, {'Content-Type':'text/html'});
             res.end(data);
        }
    });
});

app.get('/chartjs.html', function(req, res){
    fs.readFile('chartjs.html', function(err, data){
       if(!res) console.log(err);
       else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
       }
    });
});

app.get('/googleChart.html', function(req, res) {
    fs.readFile('googleChart.html', function(err, data) {
        if(!res) console.log(err);
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.get('/highChart.html', function(req, res){
    fs.readFile('highChart.html', function(err, data){
        if(!res) console.log(err);
        else {
             res.writeHead(200, {'Content-Type':'text/html'});
             res.end(data);
        }
    });
});

var server = http.createServer(app).listen(8080, function(){ 
    console.log('start');
});

var mysql = require("mysql");
var io = require("socket.io").listen(3000);

var socketCount = 0;

var connection = mysql.createPool({
  host     : "localhost",
  user     : "root",
  password : ""
});

connection.getConnection(function(err){
    if(!err) console.log("connected");
    else console.log(err);
});

io.sockets.on('connection', function(socket)
{
    // Socket has connected, increase socket count
    socketCount++;
    // Let all sockets know how many are connected
    io.sockets.emit('connectDb', socketCount);
});