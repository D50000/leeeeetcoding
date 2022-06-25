/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // HashMap solution.
  // Map store { value: index }, and check diff first for avoiding re-match the ele.
  // Just declare not initialize the map, then set the value: index into map. If it is exist just return the answer.
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashmap.hasOwnProperty(diff)) {
      return [i, hashmap[diff]];
    } else {
      hashmap[nums[i]] = i;
    }
  }
};
