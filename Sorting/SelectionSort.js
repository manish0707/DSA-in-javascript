// find the index of smallest value in the array
// and then swap the value with the first Element

const selection_sort = arr => {
  for (let i = 0; i < arr.length; i++) {
    //contains the index of smallest value
    let smallest = i;

    //Finds the index of smallest value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }

    //Swap the first elmemts value with the smallest
    if (i !== smallest) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  //Returning the result
  return arr;
};

const arr = [10, 9, 8, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// console.log(smallestNumber(arr));
console.log(selection_sort(arr));

// console.log(selection_sort(arr));
