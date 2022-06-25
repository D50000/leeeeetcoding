/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // BigO(n^3)
  let bigNums;
  let smallNums;
  if (nums1.length > nums2.length) {
    bigNums = nums1;
    smallNums = nums2;
  } else {
    bigNums = nums2;
    smallNums = nums1;
  }
  const ans = new Array();
  for (let i = 0; i < smallNums.length; i++) {
    if (bigNums.indexOf(smallNums[i]) !== -1) {
      bigNums.splice(bigNums.indexOf(smallNums[i]), 1);
      ans.push(smallNums[i]);
    }
  }
  return ans;
};
