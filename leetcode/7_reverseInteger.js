const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on('line', (line) => {
  let x = +line;
  console.log(reverse(x));
});
let reverse = function (x) {
  let num_string = x < 0 ? x.toString().substring(1) : x.toString();
  let num_arr = num_string.split('');
  let num = num_arr.reverse().join('');
  num = x < 0 ? '-' + num : num;
  num = Number(num);
  return num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31) ? 0 : num;
};
