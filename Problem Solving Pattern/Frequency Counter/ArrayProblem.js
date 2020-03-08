// compare two arrays if square of each element in the first array is
// present in the second array irrespective of their order
// Ex.: first arr = [1,2,3,4]  second arr = [16, 4, 9, 1];

// Function with O(n^2) time complexity

// function compareArray(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let elementIndex = arr2.indexOf(arr1[i] ** 2);
//     if (elementIndex === -1) {
//       return false;
//     }
//     arr2.splice(elementIndex, 1);
//   }
//   return true;
// }

// let arr1 = [1, 2, 3];
// let arr2 = [9, 16, 1];

// console.log(compareArray(arr1, arr2));

// Function with O(n) time Complexity

function same(arr1, arr2) {
  let array1Count = {};
  let array2Count = {};

  if (arr1.length != arr2.length) return false;

  //Count the elements in the first array
  for (const value of arr1) {
    if (array1Count[value] > 0) array1Count[value]++;
    else array1Count[value] = 1;
  }
  //Count the elements in the second array
  for (const value2 of arr2) {
    if (array2Count[value2] > 0) array2Count[value2]++;
    else array2Count[value2] = 1;
  }
  //Comparing logic
  for (const key in array1Count) {
    if (!(key ** 2 in array2Count)) return false;
    if (array1Count[key] != array2Count[key]) return false;
  }
  return true;
}

const arr1 = [1, 2, 4, 4, 6];
const arr2 = [36, 4, 16, 1, 16];
console.log(same(arr1, arr2));
