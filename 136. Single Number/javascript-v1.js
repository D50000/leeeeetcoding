/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // BigO(n)
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.hasOwnProperty(nums[i])) {
      map[nums[i]] = 1;
    } else {
      delete map[nums[i]];
    }
  }
  let ans;
  for (const [key, value] of Object.entries(map)) {
    ans = key;
  }
  return ans;
};
