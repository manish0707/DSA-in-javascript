// Counting non repeated elemnets in an array
// Frequency Counter method

function countUniqueValues(arr) {
  let count = {};
  for (const element of arr) {
    if (count[element] > 0) count[element]++;
    else count[element] = 1;
  }
  for (const key in count) {
    if (count[key] == 1) {
      console.log(key);
    }
  }
}

countUniqueValues([1, 1, 2, 3, 3, 4, 5, 5, 20, 25, 25]);
