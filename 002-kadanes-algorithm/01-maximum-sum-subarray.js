/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

const maxSubArray = function (nums) {
  let maxSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIndex = i;
        endIndex = j;
      }
    }
  }
  return {
    sum: maxSum,
    subArr: nums.slice(startIndex, endIndex + 1),
  };
};

// Using Kadane's Algorithm

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
