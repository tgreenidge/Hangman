# Hangman
This is a web browser version of the popular game Hangman. Built with Nodejs on an Express server,
this game utilizes sockets(Socket.io) to facilitate real time changes during game play. 

Play game online at:
https://hangman-extreme.herokuapp.com/

# Instructions to get app running on local machine

- Clone project or fork from this repository
- Install [nodejs](https://nodejs.org/en/)
- Install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
- Install game dependencies

- In the root folder of the Hangman project in the command line, type:

 ```npm install```

- Start the node server from the root folder:
  
  ```node app```

- View in browser on localhost:3000

#### Instructions to create  a different list of words that is found in the dictionaryWords.js file
   
Manipulate the parameters for the API to select your preferences
 
API: http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words
 
Parameters: see document for online parameters

- From the root folder of the project, type the following in the command line:

``` node dictionary.js ```

- This will replace the file in the **client** folder called **dictionaryWords.js**

** Modify below**
- Go to **client/dictionaryWords.js** file, and assign the to the beginning of the array


# Game Play

## Game Rules
### Play against the computer 
- The computer choses a word
- If the player does not guess correctly under 6 tries, the computer wins
- On each try, player can guess either a letter or a word

### Guesses
If player tries to solve the answer by guessing the word:
  - If the word is correct, the player wins the game
  - If the word is incorrect, no letters are revealed in the answer

If player tries to solve the answer by guessing one letter at a time:
  - Correct letters in the answer are revealed in their correct positions
  - Incorrect letter guesses are displayed under "Incorrect Guesses on page"


### Word Lengths 
- The words are of 4 to 8 letters only

## Leader Board
Ranks players based on number of correctly solved words average time to solve challenges.


# Process
 I wanted to create features that allow me to utilize JavaScript/Nodejs, Databases, and Sockets. I intially started working on pieces of the requirements that were to be

 1. Creation of basic game play functions, with tests on UI to ensure required components were displayed
 2. Creation of a dictionary
 3. Initial mock up of UI to test game play functionality when a game option was chosen
 4. Develop/Test Game object and methods
 5. Develop/Test Player object
 6. Integrate Game/Player functionality
 7. Integrate Game/Player Functionality with UI
 8. Add user database
 9. Display LeaderBoard

# Techology Stack
- Node.js
- Express
- Twitter Bootstrap
- Socket.io
- Github
- Heroku
- PostgresSQL

Waffle.io was also used as a project management tool to keep track of requirements, bugs, and other issues

# Ideas for Future Enhancement

Enable multiplayer game among other players on the web using sockets. This option will only be shown if there are other members connected to the app. 
 - The computer choses a word
 - The first player that solves first under 6 guesses wins.
 - If no player guesses correctly under 6 tries, the computer wins

