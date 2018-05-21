const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  console.log(myAtoi(line));
});
var myAtoi = function (str) {
  if (str === '') { return 0; } 
  let arr = str.match(/\S+/g);
  if (arr === null) { return 0; }
  let toNum = arr[0];
  let array = toNum.split('');
  let firstStr = arr[0].split('')[0];
  let result = [], flag = 1;
  if (firstStr === '-' || firstStr === '+') {
    if (firstStr === '-') {
      flag = -1;
    }
    for (let i = 1; i < array.length; i++) {
      if (Number.isInteger(+array[i])) {
        result.push(array[i]);
      } else {
        break;
      }
    }
  } else if (!Number.isInteger(+firstStr)) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (Number.isInteger(+array[i])) {
        result.push(array[i]);
      } else {
        break;
      }
    }
  }
  let finalNum = flag * Number(result.join(''));
  if (finalNum > Math.pow(2,31) - 1) {
    return 2147483647;
  } else if (finalNum < -Math.pow(2, 31)) {
    return -2147483648;
  } else {
    return finalNum;
  }
};
