
var socket = io();

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

printDashes("HelloWorld");