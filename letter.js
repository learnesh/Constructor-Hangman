var Letter = function(letter) {
  this.letter = character;
  this.appear =false;
  this.letter = function() {
    return !(this.appear) ? "_" : this.character
  };
  
    Letter.prototype.toString = function () {
    if(this.letter === ' '){ 
      this.appear = true;
      return ' ';
    }if(this.appear === false){ 
      return '_';
    } 
    else {
        return this.letter;
    }


  };
};

module.exports = Letter;
