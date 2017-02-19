# Hangman
Try to beat the computer in this game of Hangman



# Instructions to create  a different list of words that is found in the dictionaryWords.js file
   Manipulate the parameters for the API to select your preferences
   API:
   Parameters: 

  - From the root folder of the project, type the following in the command line:

 ``` node dictionary.js ```

  - This will replace the file in the **client** folder called **dictionaryWords.js**
  
  ** Modify below**
  - Go to **client/dictionaryWords.js** file, and assign the to the beginning of the array


# Instructions to get app running

- Install [nodejs](https://nodejs.org/en/)
- Install npm

In the command line, type:

 ```npm install```


# Game Play
Play game online at:
https://hangman-extreme.herokuapp.com/


## Game Player Options
### Play against the computer 
- The computer choses a word
- If the player does not guess correctly under 6 tries, the computer wins


### Play against the clock


### Word Lengths 
- 4 to 8 letters

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
- Waffle.io

# Ideas for Future Enhancement

Enable game play among other players using sockets. This option will only be shown if there are other members connected to the app. 
 - The computer choses a word
 - The first player that solves first under 6 guesses wins.
 - If no player guesses correctly under 6 tries, the computer wins

