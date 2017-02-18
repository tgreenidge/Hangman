//This file contains the code to generate a dictionary
var request = require('request'),
         fs = require('fs');

/* 
  API URL that filters all words with
  - difficulty levels 1 and 2 
  - minimum length of 4 letters
  - maximum length of 8 letters 

*/
var url = 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?difficulty=1|difficulty=1&minLength=4&maxLength=8';

//** TO DO  save dictionary
request(url, function(error, response, body){
  if(error){
    throw error;
  }else{
    if(response.statusCode === 200){
      
      //Save the dictionary words to an array
      var words = JSON.stringify(body.split('\n'));

      //Save the words in a file called dictionaryWords.js to be used for game play
      fs.writeFile('./client/dictionaryWords.js', words, (error) => {
        if (error) throw error;
        console.log('Words are saved to words file!');
      });
    
    }
  }
});



