const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // checking for correct data
  if((typeof sampleActivity !== 'object') && 
  (sampleActivity > 0 && sampleActivity < 16) && 
  !(isNaN(sampleActivity)) && 
  (typeof sampleActivity !== 'number') &&
  (Number.isInteger(Number(sampleActivity)))) {
    // formula carbon-dating
    var result = (Math.log(Math.round(sampleActivity/MODERN_ACTIVITY*10000)/10000)/-0.693) * HALF_LIFE_PERIOD;
    // return
    return Math.floor(result);
  } else {
    return false;
  }

};
