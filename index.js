var Letter = require('./letter.js');
var Word = require('./word.js');
var prompt = require('prompt');
var inquirer = require('inquirer');

console.log("Welcome to Marvel Hangman!");
console.log("Guess a letter of the of a Marvel character");
console.log("Goodluck!");
console.log("-----------------------------");


var guessesRemaining = 10;
var guessedLetters = [];
wordsWon = 0;
var wordBank = ['hulk', 'blackpanther', 'ironman', 'thor', 'loki', 'blackwidow', 'antman', 'spiderman', 'hawkeye']
var currentWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);


prompt.start();

game = {
  startGame: function(word) {
    this.resetGuesses();
    this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
    this.currentWrd.getLet();
    this.promptUser();
  },
resetGuesses: function(){
    this.guessesRemaining = 10;
  },

 promptUser: function(){
    inquirer.prompt {[{
    type: "input",
    name: "guessedLetter",
    message: "Guess a letter: ",
            }]}
      .then(function (inquireResponse) {
        console.log(guessedWord.checkLetter(inquirerResponse.guessedLetter)
        
        if(manyGuessed ==0) {
        console.log("Incorrect");
        
      } else {
        console.log("Correct");
          if(self.currentWrd.findWord()){
            console.log("You win!");
            console.log("-------------------");
            return;
          }
      if (guessesRemaining === 0) {
                        console.log("No more Guesses!");
                        wordsWon--;
                        console.log("Words Win: " + wordsWon);
inquirer.prompt(
        keepPromptingUser : function(){
        name: "chosenLtr",
        type: "input",
       message: "Choose a letter:",
       validate: function(value) {
        if(isLetter(value)){
          return true;
        } else{
          return false;
        }

}

      console.log("Guesses remaining: " + self.guessesRemaining);
      console.log("-------------------");
      if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
        self.promptUser();
      }
      else if(self.guessesRemaining ==0){
        console.log("Game over. Correct Word ", self.currentWrd.character);
      } else {
        console.log(self.currentWord.wordFound());
      }
    });

  }


}
