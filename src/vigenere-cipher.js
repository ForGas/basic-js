const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(value) {
    if((!value) && (value !== undefined)) {
      this.reverseMachine = true;
      this.directMachine = false;
    } else {
      this.directMachine = true;
      this.reverseMachine = false;
    }
  }

  encrypt(message, key) {
        // creat alphabet
        var alphabets = [];
        for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); ++i)
        alphabets.push(String.fromCharCode(i));

        //init
        var index = 0;
        var indexKey = 0;
        var cipher = '';
    
        for (var i = 0; i < message.length; i++) {
          // index current word
          index = alphabets.indexOf(message[i].toUpperCase());
          var count = 0;

          // check cipher update if it end
          if(indexKey >= key.length && i < message.length)
            indexKey = 0;

          // check for English letters
          if(indexKey < key.length && index !== -1) {
            // position from cipher symbol
            for (var j = alphabets.indexOf(key[indexKey].toUpperCase()); j < alphabets.length; j++) {
              if (count < alphabets.length) {

                // check before update alphabetical order
                // checking current letter index with iteration
                if(index === count){
                  cipher += alphabets[j];
                  break;
                }

                // update position if iteration alphabetically failed
                if (j === 25){
                  j = 0;
                  count++;
                }

                // check after update alphabetical order
                // checking current letter index with iteration
                if(index === count){
                  cipher += alphabets[j];
                  break;
                }
              }
              count++;
            }
            indexKey++;
          } else {
            // adding other characters
            cipher += message[i];
          }
        }
    
    // directMachine = true and empty
    if(this.directMachine)
    return cipher;
    else {
      //reverseMachine = false;
      var temp = cipher.split(' ').reverse();

      for(let i = 0; i < temp.length; i++)
      temp[i] = temp[i].split('').reverse().join('');

      cipher = temp.join(' ')
      return cipher;
    }
    
  }

  decrypt(message, key) {
    // creat alphabet
    var alphabets = [];
    for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); ++i)
    alphabets.push(String.fromCharCode(i));
    
    //init
    var decipher = '';
    var index = 0;
    var indexKey = 0; 

    for (var i = 0; i < message.length; i++) {

      var count = 0;
      index = alphabets.indexOf(message[i].toUpperCase());

      // check cipher update if it end
      if(indexKey >= key.length && i < message.length)
        indexKey = 0;

      if(indexKey < key.length && index !== -1) {
        for(let j = alphabets.indexOf(key[indexKey].toUpperCase()); j < alphabets.length; j++) {
          if (count < alphabets.length) {

            //check before update alphabetical order
            if(alphabets[j] === message[i] ) {
              // return the initial letter
              decipher += alphabets[count];
              break;
            }

            // update position if iteration alphabetically failed
            if (j === 25){
              j = 0;
              count++;
            }
            
             //check after update alphabetical order
            if(alphabets[j] === message[i] ) {
              // return the initial letter
              decipher += alphabets[count];
              break;
            }
          }
          count++; 
        } 
        indexKey++;
      } else {
        decipher += message[i];
      }
    } 

    if(this.directMachine)
    return decipher;
    else {
      //reverseMachine = false;
      var temp = decipher.split(' ').reverse();

      for(let i = 0; i < temp.length; i++)
      temp[i] = temp[i].split('').reverse().join('');

      decipher = temp.join(' ')
      return decipher;
    }
  }
}


module.exports = VigenereCipheringMachine;
