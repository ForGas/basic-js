const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // checking for correct data
  if (backyard !== undefined && backyard !== NaN && backyard.length > 0) {
    // init
    const col = backyard[0].length;
    const rows = backyard.length;
    let count = 0;
    // algorithm
    for(let i = 0; i < rows; i++) {
      for (let j = 0; j < col; j++) {
          if (backyard[i][j] === '^^') {
          count++;
        }
      }
    }

    return count;
  } else {
    return 0;
  }
};
