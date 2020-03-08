const mergeSortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  else {
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return mergeSortedArray(left, right);
  }
};

const arr = [5, 4, 3, 32, 1, 50, 2, 1, 100];

console.log(mergeSort(arr));
