var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io')(server),
    bodyParser = require("body-parser");

//---------------------------------Express setup---------------------------------\\
server.listen(process.env.PORT || 3000);

app.set('client', __dirname + '/client');
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page Route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

// Catch all other urls
app.get('*', function(req, res) { 
  res.status(404)
  .send('<div class="error-page container-fluid" onload="loadError()"><h1>Page Not Found</h1></div>');
});


//-------------------Socket.io Connection Setup------------------------------------\\
io.sockets.on('connection', function(){
  console.log('we have connection');

  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });
});



