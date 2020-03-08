const BinarySearch = function(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(start + end / 2);
  if (middle == value) return middle;

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor(start + end / 2);
  }
  if (arr[middle] == value) return middle;
  else return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 10, 15, 18, 20];

console.log(BinarySearch(arr, 5));
