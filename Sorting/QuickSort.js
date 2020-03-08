// helper function to swap two numbers
const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

// Helper function to set the last element at
// the correct position and return its index
const pivot = (arr, start, end) => {
  //pivot contains the element to be set at correct position
  let pivot = arr[end];
  //   pIndex contains the index of the pivot
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pIndex, i);
      pIndex++;
    }
  }
  swap(arr, pIndex, end);
  return pIndex;
};

//Actual Quick Sort ALgorithm

const QuickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let partitionIndex = pivot(arr, start, end);
    QuickSort(arr, start, partitionIndex - 1);
    QuickSort(arr, partitionIndex + 1, end);
  }
};

const arr = [100, 90, 80, 70, 60, 50];

QuickSort(arr);

console.log(arr);
