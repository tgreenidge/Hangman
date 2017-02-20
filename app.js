var express     = require('express'),
    app         = express(),
    http        = require('http'),
    server      = http.createServer(app),
    io          = require('socket.io')(server),
    bodyParser  = require('body-parser'),
    dictionary  = require('./dictionary/dictionaryWords');

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
io.on('connection', function(socket){
  console.log('we have connection');

  socket.on('gameStart', function(data){
    //get option for game from button clicked
    var option = data.option;

    //generate random number to correspond with index of word in dictionary
    var randomNumber = Math.floor((Math.random() * dictionary.words.length));
    
    //set secret word that player has to guess
    var secretWord = dictionary.words[randomNumber];
  
    // Print dashes on screen that corresponds with word length
    // Don't send object to prevent user access in browser tools
    io.emit('printDashes',  {wordLength: secretWord.length});

    //start clock
    io.emit('startClock');
    
    //show input box for word

    // create a new game
    // //Loop for 6 guesses
    // var numGuessesRemaining = 6;

    // while(numGuesses >= 1 ){
    //   //get input from user
    //   //check to see if input
    //   if(option === "option1"){

    //   } else {

    //   }
    // }
    io.on('stopGame', function(){
      //

    });

    io.on('setUserInput', function(data){
      //call appropriate game function

    });

    //this test works
    //io.emit('changeDashesToLetters', {indices: [2, 3], letter: "l"});
  });
  
  


  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


//-------------------------------Game Play Functions-----------------------------------------\\

function gameFlow(){
  var guessesRemaining = 6;
  while (guessesRemaining >= 0){
    //display get input from user

  }
};

//Determines the indices of all letter occurances in a word
function getIndicesOfLetterInWord(wordData, letterData){
  var letterIndices = [];

  for(var i = 0; i < data1.word.length; i++){
    if(wordData.word[i] === letterData.toLowerCase()){
      letterIndices.push(i);
    }
  }
  return letterIndices;
};


//Game.prototype.stop = function(){
  //save time to database Only if winner is the player
  //If option 1 
    //grab time from dom and save to database
  //If option 2
    //grab time from dom and
//}





