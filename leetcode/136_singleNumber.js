var singleNumber = function(nums) {
  let temp = {};
  let resutl;
  for (let i = 0 ; i < nums.length; i++) {
      let temp_num = nums[i];
      if(!temp[temp_num]) {
          temp[temp_num] = 1;
      } else {
          temp[temp_num]++;
      }
  }
  for (let key in temp) {
      if (temp[key] === 1) {
          result = key;
      }
  }
  return +result;
};