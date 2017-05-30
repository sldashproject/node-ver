var http = require("http");
var express = require("express");
var fs = require("fs");
var path = require("path");
var mysql = require("mysql");
var bodyParser  = require('body-parser');
var app = express();

// folder setting for starting web page 
// if it doesn't exist this config, web page couldn't read css or js files.
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/images', express.static(path.join(__dirname, '/images')));

// setting port
app.set('port', process.env.PORT || 8080);

// setting urlencoding and using json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// main page load
app.get('/', function(req, res){
    fs.readFile('index.html', function(err, data){
        if(!res) console.log(err);
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

// main page load
app.get('/index.html', function(req, res){
    fs.readFile('index.html', function(err, data){
        if(!res) console.log(err);
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

// Angular-1.6 page load
app.get('/Angular1.6.html', function(req, res){
    fs.readFile('Angular1.6.html', function(err, data){
        if(!res) console.log(err);
        else {
             res.writeHead(200, {'Content-Type':'text/html'});
             res.end(data);
        }
    });
});

// ReactJS page load
app.get('/reactjs.html', function(req, res){
    fs.readFile('reactjs.html', function(err, data){
        if(!res) console.log(err);
        else {
             res.writeHead(200, {'Content-Type':'text/html'});
             res.end(data);
        }
    });
});

// Chart JS page load
app.get('/chartjs.html', function(req, res){
    fs.readFile('chartjs.html', function(err, data){
       if(!res) console.log(err);
       else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
       }
    });
});

// Google Chart page load
app.get('/googleChart.html', function(req, res) {
    fs.readFile('googleChart.html', function(err, data) {
        if(!res) console.log(err);
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

// High Chart page load
app.get('/highChart.html', function(req, res){
    fs.readFile('highChart.html', function(err, data){
        if(!res) console.log(err);
        else {
             res.writeHead(200, {'Content-Type':'text/html'});
             res.end(data);
        }
    });
});

// Vue page load
app.get('/Vue.html', function(req, res) {
    fs.readFile('Vue.html', function(err, data) {
        if(!res) console.log(err);
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

// mysql connection
var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database:'dashboard'
});

// add data to db
app.post('/addList', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var query = "insert into test(name,email) values('"+name+"','"+email+"')";
    console.log(query);
    var implementation = connection.query(query,function(err,result){
        if (err) {
            console.error(err);
        }
        else 
        {
            res.status(200).send('success');
        }
    });
});

// get all data from db
app.get('/getList', function(req, res) {
    var query = "select * from test";
    var implementation = connection.query(query,function(err,rows){
        if (err) {
            console.error(err);
        }
        else {
            res.setHeader('Access-Control-Allow-Methods', 'GET');
            res.json(rows);
        }
    });
});

// update list to db
app.post('/updateList', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var id = req.body.id;
    var query = "update test set name='"+name+"', email='"+email+"' where id="+id;
    console.log(query);
    var implementation = connection.query(query,function(err, rows) {
        if (err) {
            console.error(err);
        }
        else {
            res.status(200).send('success');
        }
    });
});

// delete list from db
app.post('/deleteList', function(req, res) {
    var id = req.body.id;
    var query = "delete from test where id="+id;
    console.log(query);
    var implementation = connection.query(query,function(err, rows) {
        if (err) {
            console.error(err);
        }
        else {
            res.status(200).send('success');
        }
    });
});

// server start
var server = http.createServer(app).listen(app.get('port'), function(){ 
    console.log('start');
});