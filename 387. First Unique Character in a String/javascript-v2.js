/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // BigO(n)
  // Directly use the sArray to reference the Map element.
  const map = new Map();
  sArray = s.split("");
  for (let i = 0; i < sArray.length; i++) {
    if (!map.hasOwnProperty(sArray[i])) {
      map[sArray[i]] = 1;
    } else {
      map[sArray[i]] += 1;
    }
  }
  for (let j = 0; j < sArray.length; j++) {
    if (map[sArray[j]] === 1) {
      return j;
    }
  }
  return -1;
};
