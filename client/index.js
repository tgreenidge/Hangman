
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


//printDashes("HelloWorld");

console.log(getIndicesOfLetterInWord("hello", "e"));
console.log(getIndicesOfLetterInWord("helloyellow", "l"));
console.log(getIndicesOfLetterInWord("hello", "t"));

