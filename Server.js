var http = require("http");
var https = require("https");
var express = require("express");
var fs = require("fs");
var path = require("path");
var mysql = require("mysql");
var bodyParser  = require('body-parser');
var connection  = require('express-myconnection'); 
var app = express();

app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/images', express.static(path.join(__dirname, '/images')));

// [CONFIGURE APP TO USE bodyParser]
app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.IP || '192.168.2.2');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post('/addList', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    console.log(name+": "+email);
    var query = "insert into test(name,email) values('"+name+"','"+email+"')";
    var implementation = connection.query(query,function(err,result){
        if (err) {
            console.error(err);
            throw err;
        }
        res.redirect('Angular1.6.html');
    });
});

app.get('/getList', function(req, res) {
    var query = "select * from test";
    var implementation = connection.query(query,function(err,rows){
        if (err) {
            console.error(err);
            throw err;
        }
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.json(rows);
    });
});

var server = http.createServer(app).listen(app.get('port'), function(){ 
    console.log('start');
});