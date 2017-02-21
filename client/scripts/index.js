
var socket = io();

//Displays the current year in the footer of the Index.html
function postPresentYear(){
  var year = document.getElementById('copyright-year');
  year.innerText = new Date().getFullYear();
};

//Triggers function to intitiate Leader Board display
function showLeaderBoard(){
  socket.emit('getLeaders');
}

//Rules appear/hide when user requests to see rules
function toggleRules(){
  var rules = document.getElementById('rules-explanation');
  if(rules.style.display === 'block'){
    rules.style.display = 'none';
  }else {
    rules.style.display = 'block';
  }
}


//Triggers game start
function startGame(button){
  //get option from value
  var option = button.value;

  // hide game options div
  var gameOptions = document.getElementById('game-options');
  gameOptions.style.display = 'none';

  //show End Game Submit button
  var endButton = document.getElementById('end-game-button');
  endButton.style.display = 'block';

  //display the word "Hangman" in the nav
  var navBar = document.getElementById('nav-bar');
  navBar.innerHTML = '<h1>Hangman</h1>';

  //emit gameStart to backend with option values
  socket.emit('gameStart', {option: option});
};

//Triggers Game end
function endGame(){
  //emit 'stopGame'
  socket.emit('stopGame');
  
  //stop Timer
  socket.emit('stopClock');

  //hide endGame Button
  var endButton = document.getElementById('end-game-button');
  endButton.style.display = 'none';

  //show game options
  var gameOptions = document.getElementById('game-options');
  gameOptions.style.display = 'block';

  //hide user-input box
  var userInput = document.getElementById('user-input');
  userInput.style.display = 'none';
}

//validate user enters a letter only, and emit letter to backend
function validateInput(){
  //ensure letter is displayed,
    //if not, display error message to enter a letter
    // if letter 
    //emit letter
  var letterGuessed = document.getElementById('letter-guessed').value;

  //letters only Regex
  var letters = /^[A-Za-z]+$/;

  
  if(letterGuessed.match(letters)){
    //send letter to backend for testing in game play 
    socket.emit('setUserInput', {letter: letterGuessed});
  } else {
    //FIX THIS!!
    alert('Enter letter characters only');
    //show user-input box
    var userInput = document.getElementById('user-input');
    userInput.style.display = 'block';
  }
  
}

function updateTimeElapsed(secondsElapsed){
  var timeDisplay = document.getElementById('time-elapsed-display');
  var minutes; 
  var timeElapsed;

  //convert to minutes and seconds
};

//Displays the string as either the correct letters in word or incorrectly guessed letters on DOM
function displayLettersOnScreen(str, isCorrectLetter){
  var textContent;

  if(isCorrectLetter){
    textContent= document.getElementById('word-display');
  } else {
    textContent= document.getElementById('letters-guessed-display');
  }

  textContent.innerHTML = str;
}


socket.on('displayLeaderBoard', function(data){
  
  //make leader-board div visible
  var board = document.getElementById('leader-board');
  var endButton = document.getElementById('end-game-button');
  board.style.display = 'block';
  
  //traverse array of leaders
  //display on board
});

socket.on('showInputTextBoxes', function(){
  //show user-input box
  var userInput = document.getElementById('user-input');
  userInput.style.display = 'block';
  socket.emit('finishedShowInputTextBoxes');
})

// Print dashes on screen that corresponds with word length
socket.on('printDashes', function (data){
  //console.log(word);
  var letters = document.getElementById('word-display');
  var dashes = '';

  for(var i = 0; i < data.wordLength; i++){
    if(i === data.wordLength -1){
      dashes += '_';
    }else{
      dashes += '_' + ' ';
    }
  } 
  letters.innerHTML = dashes;
});



//Replaces dashes to letters of respective index and returns string with indices and dashes
socket.on('changeDashesToLetters', function(data){
  var letter = data.letter;
  var indices = data.indices;

  var displayedChars = document.getElementById('word-display');
  var displayedText = displayedChars.innerText.split("");
  
  for(var i = 0; i < indices.length; i++){
    if(indices[i] === 0){
      displayedText[i] = letter.toUpperCase();
    }else {
      displayedText[indices[i] * 2] =  letter.toUpperCase();
    }
  }

  displayLettersOnScreen(displayedText.join(''), true);
});


socket.on('displayLetters', function(data){
  displayLettersOnScreen(data.str, data.isCorrectLetter);
});

socket.on('startClock', function(){
  //stet
  var startTime; 
});

//test for socket in game play...............REMOVE ME
socket.on('sayHi', function(){
  alert("HI");
});

socket.on('displayGuessesRemaining', function(data){
  var guessesRemaining = document.getElementById('guesses-remaining-text');
  guessesRemaining.innerHTML = data.guessesRemaining;
  //console.log(guessesRemaining.innerText);
});

