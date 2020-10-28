const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //check for empty parameters
  if(!str && str !== null)
  return 0;

  //init
  var string = '';
  //default object
  var temp = {
    separator: '+',
    repeatTimes: 0,
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|',
  }
  // assigning a value if passed
  if(options.repeatTimes)
  temp.repeatTimes = options.repeatTimes
  // assigning a value if passed
  if(options.separator)
  temp.separator = options.separator
  // assigning a value if passed
  if(options.addition)
  temp.addition = options.addition.toString();
  else {
    // if passed value false
    if (options.addition === false)
    temp.addition = options.addition;
    // if passed value null
    else if(options.addition === null)
    temp.addition = 'null';
  }
  // assigning a value if passed
  if(options.additionRepeatTimes)
  temp.additionRepeatTimes = options.additionRepeatTimes
  // assigning a value if passed
  if(options.separator)
  temp.additionSeparator = options.additionSeparator

  // creating an improved addition
  if(temp.additionRepeatTimes > 0) {
    var arr = [];
    for(let i = 0; i < temp.additionRepeatTimes; i++) {
      //check for the last element
      if ((i + 1) !== temp.additionRepeatTimes)
      //if not the last element then add additionSeparator
      arr[i] = temp.addition + temp.additionSeparator;
      else
      arr[i] = temp.addition;
    }
    temp.addition = arr.join('');
  }
  // creat repeater string
  // check repeatTimes
  if(temp.repeatTimes > 0 && options.repeatTimes) {
    for(let i = 0; i < temp.repeatTimes; i++) {
      //check for the last element
      if ((i + 1) !== temp.repeatTimes)
      //if not the last element then add separator
      string += str + temp.addition + temp.separator;
      else
      string += str + temp.addition;
    }
  } else {
    string = str + temp.addition
  }
  
  return string;
};
  