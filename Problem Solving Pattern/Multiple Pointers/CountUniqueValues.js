// Counting unique values from the array using
// multiple pointers

function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j <= arr.length - 1) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 5, 6]));