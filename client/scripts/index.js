
//var socket = io();

//Displays the current year in the footer of the Index.html
function postPresentYear(){
  var year = document.getElementById("copyright-year");
  year.innerText = new Date().getFullYear();
};


// Print dashes on screen that corresponds with word length
var printDashes = function (word){
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
var getIndicesOfLetterInWord = function(word, letter){
  var letterIndices = [];

  for(var i = 0; i < word.length; i++){
    if(word[i] === letter.toLowerCase()){
      letterIndices.push(i);
    }
  }

  return letterIndices;
};

//Replaces dashes to letters of respective index and returns string with indices and dashes
var changeDashesToLetters = function(word, indices, letter){
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

//Displays the string as either the correct letters in word or incorrectly guessed letters
var displayLetters = function(str, isCorrectLetter){
  var textContent;

  if(isCorrectLetter){
    textContent= document.getElementById("word-display");
  } else {
    textContent= document.getElementById("letters-guessed-display");
  }

  textContent.innerHTML = str;
};

var secretWord;


var getDictionaryWord = function(randNum){
  //This function get the word in the dictionary that corresponds with the random number and sets
  // the secret word to that word
  $.ajax({
    url: 'dictionaryWords.JSON',
    dataType:'JSON',
    success:function(data){
      secretWord = data.words[randNum];
    },
    error:function(){
      console.log(error);
    }
  });
};


//Tests
//printDashes("HelloWorld");

// console.log(getIndicesOfLetterInWord("hello", "e"));
// console.log(getIndicesOfLetterInWord("helloyellow", "l"));
// console.log(getIndicesOfLetterInWord("hello", "t"));

// var n = getIndicesOfLetterInWord("helloworld", "l");
// displayLetters(changeDashesToLetters("HelloWord",n, "l"), true);
// displayLetters(changeDashesToLetters("HelloWord",n, "l"), false);


console.log(getDictionaryWord(1));

//getgetDictionaryWord(randomNum);
//ToDo

