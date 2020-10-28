const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // init
    var count = 1;
    var object = 1;

    for(let i = 0; i < arr.length; i++) {
      // check one nesting
      if (typeof arr[i] === 'object' && object === 1) {
        count += this.calculateDepth(arr[i]);
        object++;
      } else {
          // check the second nesting
          if (typeof arr[i] === 'object') {
            var countTwo = 1;
            countTwo += this.calculateDepth(arr[i]);
            // if the second nesting is deeper
            if(count < countTwo)
            count = countTwo;
          }
        }
    }
    return count;
  }
};