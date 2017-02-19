// Let Player 1  =  "secret Keeper"
  //


//Game components 
  //Timer/clock - time elapsed = Time start - time now
  //player
  //word
  //guesses
var Game = function(player, option){
  this.guessesRemaining = 6;
  this.player = player;
  this.option = option;
  this.dictLength;
  this.secretWord;
  // if(option === 1){

  // }else{

  // }
  //Set the length of the dictionary to generate appropriate randomNumber
  this.setSecretWordorDictLength(false);
};

Game.prototype.start  = function(){
  
  
  var thisGame = this;
  console.log(this);
  //!!!!!ensure that when start button is clicked on DOM, timer elapsed is displayed
  //Random number to be generated to get random word from dictionary
  var len = thisGame.dictLength;
  var randomNumber;
  //Random index from dictionary list 
  randomNumber = Math.floor(Math.random() * len);
  console.log(randomNumber);

  //set secretWord for this instance of the game
  this.setSecretWordorDictLength(true, randomNumber);
};

Game.prototype.stop = function(){
  //save time to database Only if winner is the player
  //If option 1 
    //grab time from dom and save to database
  //If option 2
    //grab time from dom and
}

// Print dashes on screen that corresponds with word length
Game.prototype.printDashes = function (word){
  var letters = document.getElementById("word-display");
  var dashes = "";

  for(var i = 0; i < word.length; i++){
    if(i === word.length -1){
      dashes += "_";
    }else{
      dashes += "_" + " ";
    }
  } 
  letters.innerHTML = dashes;
};

//Determines the indices of all letter occurances in a word
Game.prototype.getIndicesOfLetterInWord = function(word, letter){
  var letterIndices = [];

  for(var i = 0; i < word.length; i++){
    if(word[i] === letter.toLowerCase()){
      letterIndices.push(i);
    }
  }

  return letterIndices;
};

//Replaces dashes to letters of respective index and returns string with indices and dashes
Game.prototype.changeDashesToLetters = function(word, indices, letter){
  var displayedChars = document.getElementById("word-display");
  var displayedText = displayedChars.innerText.split("");
  
  for(var i = 0; i < indices.length; i++){
    if(indices[i] === 0){
      displayedText[i] = letter.toUpperCase();
    }else {
      displayedText[indices[i] * 2] = letter.toUpperCase();
    }
  }
  
  return displayedText.join("");
}

//Displays the string as either the correct letters in word or incorrectly guessed letters on DOM
Game.prototype.displayLetters = function(str, isCorrectLetter){
  var textContent;

  if(isCorrectLetter){
    textContent= document.getElementById("word-display");
  } else {
    textContent= document.getElementById("letters-guessed-display");
  }

  textContent.innerHTML = str;
};


Game.prototype.setSecretWordorDictLength = function(setWord, randNum){
  var thisGame = this;
  //This function get the word in the dictionary that corresponds with the random number and sets
  //the secret word of the game or the length of the dictionary
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);
    }
    if(setWord) {
      thisGame.secretWord = responseObject.words[randNum];
    } else {
      thisGame.dictLength = responseObject.words.length;
    }
  };
  xhr.open('GET', '../dictionary/dictionaryWords.json', true);
  xhr.send(null);
};


game1 = new Game("Tisha", 1);
game1.start();