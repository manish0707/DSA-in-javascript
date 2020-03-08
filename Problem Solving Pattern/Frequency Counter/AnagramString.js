function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let count = {};

  for (const value of str1) {
    if (count[value] > 0) count[key]++;
    else count[value] = 1;
  }

  for (const value2 of str2) {
    if (!count[value2]) return false;
    else count[value2] -= 1;
  }
  return true;
}

console.log(isAnagram('ramm', 'nam'));
