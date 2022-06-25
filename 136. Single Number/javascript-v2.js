/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // BigO(n) Use set for more faster.
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  const first = [...set][0]; // Spread the set to array, and get get first element.
  return first;
};
