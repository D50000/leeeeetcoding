/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // BigO(3n > n)
  const newS = s.replace(/[\W_]+/g, "").toLowerCase();
  for (let i = 0; i < newS.length / 2; i++) {
    if (newS[i] !== newS[newS.length - i - 1]) {
      return false;
    }
  }
  return true;
};
