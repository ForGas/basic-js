const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // checking for correct data
  if (date === null || date === undefined) {
    return 'Unable to determine the time of year!';
  } else if(typeof date !== 'object') {
    throw new Error('THROWN');
  } else if ((Object.prototype.toString.call(date) !== '[object Date]')) {
    throw new Error('THROWN');
  } else {
    //init
    var seasons = ['spring', 'summer', 'autumn ', 'winter'];
    let month = date.getMonth();
    //check
    if (month === 11) {
      // 11 winter
      return seasons[3];
    } else if (month >= 0 && month < 2) {
      // 0 1 winter
      return seasons[3];
    }else if (month > 1 && month < 5) {
      // 2 3 4 spring
      return seasons[0];
    } else if (month > 4 && month < 8) {
      //5 6 7 summer
      return seasons[1];
    } else if (month > 7 && month < 11) {
      // 8 9 10 autumn
      return seasons[2];
    } else {
      return 'FAIL';
    }
  }
  
};
