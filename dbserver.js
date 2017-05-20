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
    socket.emit('news', { message: 'success to connect' });

    // Socket has connected, increase socket count
    socketCount++;
    // Let all sockets know how many are connected
    io.sockets.emit('connectDb', socketCount);
});