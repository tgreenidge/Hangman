var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io')(server);



//Express setup
server.listen(process.env.PORT || 3000);
app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

//Sockets Connection Setup
// io.sockets.on('connection', function(){
//   console.log('we have connection');

//   // socket.on('disconnect', function(){
//   //   console.log('user disconnected');
//   // });
// });



