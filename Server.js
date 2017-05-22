var http = require("http");
var https = require("https");
var express = require("express");
var fs = require("fs");
var path = require("path");
var mysql = require("mysql");
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

var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database:'dashboard'
});

app.post('/createTable', function(req, res){
    let tablename = req.body.tablename;
    let query = 'create table ? (id int(11) unsigned not null, name varchar(30) not null)';
    let implementation = connection.query(query,tablename,function(err,result){
        if (err) {
            console.error(err);
            throw err;
        }
        console.log(implementation);
        res.send(200,'success');
    });
});

var server = http.createServer(app);

server.listen(8080, function(){ 
    console.log('start');
});