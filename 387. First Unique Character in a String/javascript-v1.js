/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // BigO(n^2)
  // Calculate all the single character and store in hashmap.
  // Then loop the map by the sArray to find the first unique character.
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
    for (const [key, value] of Object.entries(map)) {
      if (key === sArray[j] && value === 1) {
        return j;
      }
    }
  }
  return -1;
};
