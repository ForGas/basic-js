const CustomError = require("../extensions/custom-error");

const chainMaker = {
  //init
  length: 0,
  string: '',

  getLength() {
    return this.length;
  },

  addLink(value) {
    this.length += 1;
    //creating a chain item
    this.string += `( ${value} )~~`;
    //context
    return this;
  },

  removeLink(position) {
    // check is integer
    if (Number.isInteger(position)) {
      // check range
      if ((position <= this.length) && (position > 0)) {
        //init
        var count = 0;
        // algorithm
        for(let i = 0; i < this.string.length; i++) {
          if ((this.string[i] === '(') && (this.string[i + 1] !== ')')) {
            // count the brackets
            count++;
            // looking for a position
            if(count === position) {
              var temp = '';
              for(let j = i; j < this.string.length; j++) {
                temp += this.string[j];
                // look for the end of the value and erase it
                if(this.string[j] === ')') {
                  this.string = this.string.replace(temp + '~~', '');
                  this.length = this.length - 1;
                }
              }
            }
          }     
        }
      } else {
        // clear current result
        this.string = '';
        this.length = 0;
        // throw error from invalid position
        throw new Error('Error');
      }
        
    } else {
      // clear current result
      this.string = '';
      this.length = 0;
      // throw error from invalid data
      throw new Error('Error');
    }
    //context
    return this;
  },

  reverseChain() {
    // if our line is empty
    if(this.string !== null) {
      var splitString = this.string.split('~~').filter(e => e !== '');
      this.string = splitString.reverse().join('~~') + '~~';

    } else {
      // then we do nothing
      this.string = '';
    }
    //context
    return this;
  },

  finishChain() {
    // creat result
    var result = '';
    for(let i = 0; i < this.string.length - 2; i++)
    result += this.string[i];
    // clear current result
    this.string = '';
    this.length = 0;
    //return
    return result;
  }
};

module.exports = chainMaker;
