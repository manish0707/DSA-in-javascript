function maxSumofSubarray(arr, windowSize) {
  //case if array is empty
  if (arr.length < 1) return 'Invalid';

  //Calculate the sum of first window
  let windowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    windowSum += arr[i];
  }

  //Calculating the sum of other subarray and find max
  //maxSum keeps track of maximum sum of subarray

  let maxSum = windowSum;
  for (let k = windowSize; k < arr.length; k++) {
    maxSum = maxSum + arr[k] - arr[k - windowSize];
    if (windowSum < maxSum) {
      windowSum = maxSum;
    }
  }

  //Returning the sum
  return maxSum;
}
// maxSumofSubarray([1, 2, 3, 5, 1, 7], 3);
console.log(maxSumofSubarray([1, 2, 3, 5, 1, 7], 3));
