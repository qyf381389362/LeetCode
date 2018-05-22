const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', (line) => {
  let nums = line.split(' ');
  console.log(missingNumber('[3,0,1,4,5,9]'));
})
var missingNumber = function (nums) {
  let new_nums = nums.match(/[^\[,\]]/g);
  let max = Math.max(...new_nums);
  // let max = Math.max.apply(null, new_nums);
  
  return max;
}
