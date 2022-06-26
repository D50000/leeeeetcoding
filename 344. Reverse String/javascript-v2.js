/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // Use the ES6 destructure with while to loop it.
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[r], s[l]] = [s[l], s[r]];
    l++;
    r--;
  }
};
