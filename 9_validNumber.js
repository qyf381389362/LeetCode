const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  console.log(isNumber(line));
});
var isNumber = function (s) {
  let isNull = s.match(/\S/g);
  if (s === '' || s === undefined || isNull === null || isNaN(+s)) {
    return false;
  }
  return true;
};