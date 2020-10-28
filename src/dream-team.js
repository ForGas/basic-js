const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // checking for correct data
  if (typeof members !== 'object' || members === null || members === undefined)
    return false;
  //init
  var name = [];
  let index = 0;
  //algorithm
  for (let i = 0; i < members.length; i++) {
    if ((members[i] !== null) && 
    (members[i] !== undefined) &&
    (typeof members[i] === 'string')) {
      for (let j = 0; j < members[i].length; j++) {
        // check for isLetter
        if (members[i][j].toLowerCase() != members[i][j].toUpperCase()) {
        name[index] = members[i][j].toUpperCase();
        index++;
        break;
        } 
      }
    }
  }
  
  return name.sort().join('');
};
