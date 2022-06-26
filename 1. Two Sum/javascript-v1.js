/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Brute force solution. BigO(n^2)
  // Loop and find every ele and every rest of the element is match for the rule.
  ans = [];
  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (x === y) continue;
      if (nums[x] + nums[y] === target) {
        ans = [x, y];
        return ans;
      }
    }
  }
};
