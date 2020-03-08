// Helper Methods for Radix Sort

//Gives the last ith digit of the number
const getDigit = (number, i) => {
  return Math.floor((Math.abs(number) / Math.pow(10, i)) % 10);
};

//Counts the nunmber of digits in a number
const countDigits = number => {
  let count = 0;
  while (number != 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
};

//Give the digitCount of the largest
//Number in the array
const getlargestDigitCount = arr => {
  let maxDigitCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = countDigits(arr[i]);
    maxDigitCount = Math.max(maxDigitCount, temp);
  }
  return maxDigitCount;
};

//Implentation of Radix Sort

const radixSort = arr => {
  let largestNumber = getlargestDigitCount(arr);
  for (let i = 0; i <= largestNumber; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      buckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

console.log(radixSort([5, 4000, 300, 100, 55, 2900]));
