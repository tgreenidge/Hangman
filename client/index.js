
//var socket = io();

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
      console.log(word[i]);
      letterIndices.push(i);
    }
  }

  return letterIndices;
};

//Displays dashes to letters on index.html
var changeDashesToLetters = function(word, indices, letter){
  var displayedChars = document.getElementById("word-display");
  var displayedText = displayedChars.innerText.split("");
  
  for(var i = 0; i < indices.length; i++){
    if(indices[i] === 0){
      displayedText[i] = letter;
    }else {
      displayedText[indices[i] * 2] = letter;
    }
  }
  
  return displayedText.join("");
}

//Tests
printDashes("HelloWorld");

// console.log(getIndicesOfLetterInWord("hello", "e"));
// console.log(getIndicesOfLetterInWord("helloyellow", "l"));
// console.log(getIndicesOfLetterInWord("hello", "t"));

// var n = getIndicesOfLetterInWord("helloworld", "l");
// console.log(n);
// console.log(changeDashesToLetters("HelloWord",n, "l"));
