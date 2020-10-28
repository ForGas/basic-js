const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //init
  var step = 1;
  // Hanoi tower algorithm
  for (let i = 1; i < disksNumber; i++) {
    step = ((step * 2 ) + 1);
  }
  // result object
  var result = {
     turns: step,
     seconds: Math.floor((step/turnsSpeed) * 3600)
  };

  return result;
};



