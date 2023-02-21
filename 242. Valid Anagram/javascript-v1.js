/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArray = s.split("");
  const tArray = t.split("");

  if (sArray.length !== tArray.length) {
    return false;
  }
  // BigO(2n)
  const hashMap = new Map();
  for (let i = 0; i < sArray.length; i++) {
    if (hashMap.hasOwnProperty(sArray[i])) {
      hashMap[sArray[i]] += 1;
    } else {
      hashMap[sArray[i]] = 1;
    }
  }

  for (let j = 0; j < tArray.length; j++) {
    if (hashMap.hasOwnProperty(tArray[j])) {
      hashMap[tArray[j]] -= 1;
      if (hashMap[tArray[j]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};
