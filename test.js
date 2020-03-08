// // function charCount(str) {
// //   let obj = {};

// //   for (let value of str) {
// //     value = value.toLowerCase();
// //     obj[value] > 0 ? obj[value]++ : (obj[value] = 1);
// //   }

// //   return obj;
// // }

// // let str = 'Manish Sharma';

// // let result = charCount(str);

// // console.log(result);

// let arr = [1, 2, 3, 4, 5];

// // console.log(arr.indexOf(2));

// arr.splice(2, 2);

// console.log(arr);

// const legend = 'Mahendra Singh Dhoni';
// console.log(`Happy Birthday ${legend}.`);
// // Happy Birthday Mahendra Singh Dhoni.

// // Life is
// // lying
// // between
// // const
// // and
// // let

// let obj = {
//   name: 'manish',
//   age: 20,
//   interest: 'coding'
// };

// let library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false
//   }
// ];

// for (const key in library) {
//   console.log(library[key].author);
//   console.log(library[key].title);
//   console.log(library[key].readingStatus);
//   console.log(' ');
// }

// function bubble_Sort(arr) {
//   var len = arr.length,
//     i,
//     j,
//     stop;

//   for (i = 0; i < len; i++) {
//     for (j = 0, stop = len - i; j < stop; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// }

// const heightChecker = height => {
//   let count = 0;
//   let newArr = [...height];
//   height.sort();
//   for (let i = 0; i <= height.length; i++) {
//     if (height[i] != newArr[i]) {
//       count++;
//     }
//   }
//   return count;
// };

// let arr = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7];

// console.log(bubble_Sort(arr));

// console.log(heightChecker(arr));

// function oddEven(arr) {
//   if (arr.length < 0) return 'invalid input';

//   let temp = [];

//   let count = 0;

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       temp.push(arr[i]);
//       count++;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       temp.push(arr[i]);
//       count++;
//     }
//   }
//   return temp;
// }

// function swap(arr, first_Index, second_Index) {
//   var temp = arr[first_Index];
//   arr[first_Index] = arr[second_Index];
//   arr[second_Index] = temp;
// }

// function bubble_Sort(arr) {
//   var len = arr.length,
//     i,
//     j,
//     stop;

//   for (i = 0; i < len; i++) {
//     for (j = 0, stop = len - i; j < stop; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// }

// var sortedSquares = function(arr) {
//   const newArr = arr.map(element => {
//     return element ** 2;
//   });
//   const temp = bubble_Sort(newArr);
//   return temp;
// };

// sortedSquares([-7, -3, 2, 3, 11]);

// var commonChars = function(arr) {
//   let count = [{}, {}, {}];
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//       console.log(i[k]);
//     }
//   }
// };

// commonChars(['bella', 'label', 'roller']);

// function AddDigits(num) {
//   if (num < 10) {
//     return num;
//   } else {
//     let num1 = Math.floor(num / 10);
//     let num2 = Math.floor(num % 10);
//     return Math.floor(AddDigits(num1 + num2));
//   }
// }

// console.log(AddDigits(72));

// let removeDuplicates = function(nums) {
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] != nums[j]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i + 1;
// };

// let arr = [1, 1, 2];

// console.log(removeDuplicates(arr));
// console.log(arr);

// let removeElement = function(nums, val) {
//   let currentLength = nums.length;
//   let count = 0;
//   if (currentLength < 0) return 'invalid input';
//   nums.forEach((element, index) => {
//     if (element == val) {
//       console.log(index);
//       nums.splice(index, 1);
//       index--;
//     }
//   });
//   console.log(nums);
// };

// let nums = [0, 1, 2, 2, 3, 2, 0, 4, 2];

// removeElement(nums, 2);
// [0, 1, 2, 3, 0, 4];

// var removeElement = function(nums, val) {
//   return nums.splice(
//     0,
//     nums.length,
//     ...nums.filter(v => {
//       return v != val;
//     })
//   ).length;
// };

// const nums = [3, 2, 2, 3];
// const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
// const num3 = [1];

// console.log(removeElement(nums2, 2));

// function swap(arr, first_Index, second_Index) {
//   var temp = arr[first_Index];
//   arr[first_Index] = arr[second_Index];
//   arr[second_Index] = temp;
// }

// function bubble_Sort(arr) {
//   var len = arr.length,
//     i,
//     j,
//     stop;

//   for (i = 0; i < len; i++) {
//     for (j = 0, stop = len - i; j < stop; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }

//   return arr;
// }

// const heightChecker = height => {
//   const newArr = [...arr];
//   let count = 0;
//   let newArr = [...height];
//   bubble_Sort(newArr);
//   for (let i = 0; i <= height.length; i++) {
//     if (height[i] != newArr[i]) {
//       count++;
//     }
//   }
//   return count;
// };

// heightChecker(arr);

// var sortArrayByParityII = function(A) {
//   const odd = A.filter(element => {
//     return element % 2 != 0;
//   });
//   const even = A.filter(element => {
//     return element % 2 == 0;
//   });
//   let arr = [];
//   for (let i = 0; i < A.length; i++) {

//   }
//   console.log(A);
// };

// const arr = [4, 2, 5, 7];

// sortArrayByParityII(arr);

// var moveZeroes = function(nums) {
//   let arr = [];
//   nums.forEach((element, index) => {
//     if (element != 0) {
//       arr.push(element);
//     }
//   });
//   nums.forEach((element, index) => {
//     if (element == 0) {
//       arr.push(element);
//     }
//   });

//   nums.splice(0, nums.length, ...arr);
//   return nums;
// };

// const arr = [0, 1, 0, 3, 12];

// console.log(moveZeroes(arr));

// var findDuplicates = function(nums) {
//   nums.sort();
//   let duplicate = [];
//   nums.forEach((element, index) => {
//     if (nums[index] == nums[index + 1]) {
//       duplicate.push(element);
//     }
//   });
//   return duplicate;
// };
// const arr = [4, 3, 2, 7, 8, 2, 3, 1];

// console.log(findDuplicates(arr));

// var containsDuplicate = function(nums) {
//   if (nums.length < 1) {
//     return false;
//   }
//   let flag = false;
//   let count = {};
//   for (const value of nums) {
//     if (value in count) count[value]++;
//     else count[value] = 1;
//   }
//   for (const key in count) {
//     if (count[key] >= 2) {
//       flag = true;
//     }
//   }
//   if (flag) {
//     return true;
//   } else return false;
// };

// const reverseString = function(str) {
//   const length = str.length;
//   let newStr = '';
//   for (let index = str.length - 1; index >= 0; index--) {
//     newStr = newStr + str[index];
//   }
//   return newStr;
// };

// console.log(reverseString('Manish Sharma'));

// console.log('tesing...');

// var twoSum = function(numbers, target) {
//   let i = 0;
//   let j = numbers.length - 1;
//   let sum = 0;

//   while (i < j) {
//     sum = numbers[i] + numbers[j];
//     if (sum === target) {
//       return [i + 1, j + 1];
//     } else if (sum > target) {
//       j--;
//     } else {
//       i++;
//     }
//   }
// };
// const arr = [2, 4, 6, 8];

// console.log(twoSum(arr, 10));

// var majorityElement = function(nums) {
//   let count = {};
//   let majority = [];
//   for (const value of nums) {
//     if (value in count) count[value]++;
//     else count[value] = 1;
//   }
//   for (const key in count) {
//     if (count[key] > Math.floor(nums.length / 3)) {
//       majority.push(key);
//     }
//   }
//   return majority;
// };

// const arr = [1, 1, 1, 3, 3, 2, 2, 2];
// console.log(majorityElement(arr));

// var missingNumber = function(nums) {
//   nums.sort((num1, num2) => {
//     return num1 - num2;
//   });
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] != i) return i;
//   }
// };

// const arr = [3, 0, 1];

// console.log(missingNumber(arr));

// var singleNumber = function(nums) {
//   let count = {};
//   for (const value of nums) {
//     if (value in count) count[value]++;
//     else count[value] = 1;
//   }
//   for (const key in count) {
//     if (count[key] == 1) return key;
//   }
// };

// const arr = [0, 1, 0, 1, 0, 1, 99];

// console.log(singleNumber(arr));

// 389. Find the Difference

// var findTheDifference = function(s, t) {
//   let str1Count = {};
//   let str2Count = {};
//   for (const value of s) {
//     if (value in str1Count) str1Count[value]++;
//     else str1Count[value] = 1;
//   }
//   for (const value of t) {
//     if (value in str2Count) str2Count[value]++;
//     else str2Count[value] = 1;
//   }
//   for (const key in str2Count) {
//     if (str2Count[key] != str1Count[key] || str2Count[key] > str1Count[key]) {
//       return key;
//     }
//   }
// };

// const str1 = 'abcd';
// const str2 = 'aabcd';

// console.log(findTheDifference(str1, str2));

// function FirstReverse(str) {

//   str = str.split("");

//   let start = 0;
//   let end = str.length - 1;

//   while(start<end) {
//     let temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;
//     start++;
//     end--;
//   }
//   str = str.join("");
//   // code goes here
//   return str;

// }

// keep this function call here
// console.log(FirstReverse("Manish Sharma"));

// let char = 'a';

// console.log(char);

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function(element, index) {
//   console.log(element , index);
// });
