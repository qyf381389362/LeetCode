const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  let nums = line.split(' ');
  console.log(missingNumber());
});
var missingNumber = function (nums) {

};