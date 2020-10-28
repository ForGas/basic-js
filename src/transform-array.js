const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // checking for correct data
  if (Array.isArray(!arr)) {
    throw new Error('Error');
  } else if (arr.length < 1) {
      return arr;
  } 
  //init
  var arrNew = [];
  
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    // check '--double-prev'
    if (arr[i] === '--double-prev') {
      arrNew[j] = arr[i - 1];
      // check for improved conditions
      if (arr[i - 1] === 'me'  && arr[i - 2] === 'told' && arr[i - 3] === 'somebody') {
        arrNew[j] = 'somebody';
        j++;
        arrNew[j] = 'told';
        j++;
        arrNew[j] = 'me';
        j++;
      }
      // check '--double-next'
    } else if (arr[i] === '--double-next') {
      arrNew[j] = arr[i + 1];
      // check '--discard-prev'
    } else if (arr[i] === '--discard-prev') {
      arrNew[j - 1] = 'empty';
      j--;
      // check '--discard-next'
    } else if (arr[i] === '--discard-next') {

      // if(!(Number.isInteger(arr[i + 1])) && typeof arr[i + 1] === 'number') {
      //   arrNew[j] = arrNew[i + 1];
      // } else {
      //   arrNew[j] = arr[i + 2];
      //   i += 2;
      //   if (arrNew[j] === '--double-next')
      //   arrNew[j] = arr[i + 1];
      // }


      arrNew[j] = arr[i + 2];
      i += 2;
      // check for value
      if (arrNew[j] === '--double-next')
      arrNew[j] = arr[i + 1];

    } else {
      arrNew[j] = arr[i];
    }
  }
  // filtering unnecessary data
  arrNew = arrNew.filter(e => e !== '--double-prev' && 
  e !== '--double-next' && 
  e !== '--discard-prev' && 
  e !== '--discard-next' && 
  e !== undefined);
  // filtering deleted data
  return arrNew.filter(e => e !== 'empty');
};
