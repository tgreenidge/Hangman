var express     = require('express'),
    app         = express(),
    http        = require('http'),
    server      = http.createServer(app),
    io          = require('socket.io')(server),
    bodyParser  = require('body-parser'),
    dictionary  = require('./dictionary/dictionaryWords'),
    Promise     = require ('bluebird');

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

    //!!!!!!!!!! Change this to get info from front end
    var player = "Tisha"

    //start clock
    io.emit('startClock');
    
    // create a new game and pass in option and word, player, and socket
    var thisGame = new HangmanGame(option, secretWord, player, socket);

    thisGame.startGame();
    
    io.on('stopGame', function(){
      //

    });

    

    //this test works
    //io.emit('changeDashesToLetters', {indices: [2, 3], letter: "l"});
  });
  
  


  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


//-------------------------------Hangman Game and Methods-----------------------------------------\\

function HangmanGame (option, secretWord, player, gameSocket) {
  this.maxGuesses = 6;
  this.secretWord = secretWord;
  this.timeStarted; //build into start game !!!!!!!!!!!!!!
  this.timeEnded;
  this.player = player;
  this.socket = gameSocket;
};

HangmanGame.prototype.startGame = function() {
  console.log("Game has Started")
  console.log(this.secretWord) //REMOVE ME
  //start clock function  TODOOOOOO!!!!!!!!!
  
  var guessesRemaining = this.maxGuesses;
  
  // Print dashes on screen that corresponds with word length
  this.socket.emit('printDashes', {wordLength: this.secretWord.length});


  while (guessesRemaining) {
    //display the number of guesses Remaining for this game
    this.socket.emit('displayGuessesRemaining', {guessesRemaining: guessesRemaining});

    
    //display unsolved letters ..... TODO!!!!

    //show Input text Boxes
    this.socket.emit('showInputTextBoxes');
    

    var userInput;

    // //get user input
    this.socket.on('setUserInput', function(data, cb){
      console.log("here", guessesRemaining);
      userInput = data;
      cb(null, 'done');
      // this.socket.emit('finishedsetUserInput');
    });

    // this.socket.on('finishedsetUserInput', function(){
    //   //do nothing
    //   //this is here to wait ensure user input is received
    // });



    // var indicesOfLetterInWord;
    // //process User input
    // if(userInput.letter){
    //   indicesOfLetterInWord = this.getIndicesOfLetterInWord(userInput.letter);
      
    //   //if the user guessed a correct letter
    //   if(indicesOfLetterInWord.length){
        

    //   }else{
    //     //send letter to be posted to incorrect letters on frontend
    //     this.socket.emit('displayLetters', {str: userInput.letter, isCorrectLetter: false});
    //   }

    // }else{
    //   //userInput is a word, so check against secretWord
    //   if(userInput.word.toLowerCase === secretWord.toLowerCase){
    //     //end game and emit winner
    //     //this.socket.emit()
    //   }
    // }
    

  
    guessesRemaining--;
  }
  //Loop is done before correct guesses
    //call stop game
}

//Determines the indices of all letter occurances in a word
HangmanGame.prototype.getIndicesOfLetterInWord = function(letter) {
  var letterIndices = [];
  for(var i = 0; i < this.secretWord.length; i++){
    if(this.secretWord[i] === letter.toLowerCase()){
      letterIndices.push(i);
    }
  }
  return letterIndices; //chane return to emit?? 
}



HangmanGame.prototype.stopGame =  function(){
  //save time to database Only if winner is the player
  //If option 1 
    //grab time from dom and save to database
  //If option 2
    //grab time from dom and
  //emit winner info
}





