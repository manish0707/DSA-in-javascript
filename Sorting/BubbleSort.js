/**
 * Bubble sort moves one element at its
 * correct position in one interation
 */

const bubble_sort = arr => {
  let noSwaps;
  //Loops through the entrire array
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    //Moves the largest number at the end
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    //If on swapping is done then we
    //Come out of the loop
    if (noSwaps) break;
  }
  //Returning the result
  return arr;
};

let arr = [50, 40, 30, 20, 10, 5, 2];

console.log(bubble_sort(arr));
