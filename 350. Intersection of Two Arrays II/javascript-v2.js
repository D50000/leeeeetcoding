/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // BigO(n)
  const map = new Map();
  const ans = new Array();
  for (let i = 0; i < nums1.length; i++) {
    if (!map.hasOwnProperty(nums1[i])) {
      map[nums1[i]] = 1;
    } else {
      map[nums1[i]] += 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.hasOwnProperty(nums2[i])) {
      if (map[nums2[i]] === 1) {
        delete map[nums2[i]];
      } else {
        map[nums2[i]] -= 1;
      }
      ans.push([nums2[i]]);
    }
  }
  return ans;
};
