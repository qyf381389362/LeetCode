const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', (line) => {
  
})
var missingNumber = function (nums) {
  let max = nums.length;
  let temp = {};
  let result;
  for (let i = 0 ; i <= max; i++) {
    temp[i] = 0;
  }
  nums.forEach(element => {
    temp[element]++;
  });
  for (let key in temp) {
    if (temp[key] === 0) {
      result = key;
    }
  }
  if (isNaN(+result)) {
    return 1;
  }
  return +result;
}
