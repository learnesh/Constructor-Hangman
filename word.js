var letter = require('./letter.js');

function Word(wordFound) {
  this.word = wrd;
  this.lettArr = [];
  this.wordFound = false;

  this.getLet = function() {
    for(var i = 0; i<this.Word.length; i++){
      this.letters.push(new Letter(this.Word[i]));
    }
  };
console.log(letArr)
// };

  this.FindtheWord = function() {
    if(this.Word.every(function(lttr){
      return lettArr.appear === true;
    })){
      this.wordFound = true;
      return this.showLetters();

    }

  };
this.wordGuess = function(){
  var guessAgain = false;
  for(var i = 0; i<this.Word.length; i++){
    if(this.Word[i].String() === "_") {
      guessAgain = true;
     
    }
    else{
      return = guessAgain; 
    }
  };

  this.checkLetter = function(Letterguess) {
    var Return = 0;
   
    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.appear = true;
        whatToReturn++;
      }
    });
    return this.found;
  };

  this.wordFound = function() {
    var display = '';
    that.letters.forEach(function(lttr){
      var currentLetter = lttr.wordFound();
      display+= currentLetter;
    });

    return display;
  };
}

module.exports = Word;
