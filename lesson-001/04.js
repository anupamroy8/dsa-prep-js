// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if(nums[i] + nums[j] === target) return [i, j]
//     }
//   }
// };

// Alternate solution using Map

const twoSum = function (nums, target) {
  let numberToMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numberToMap.has(complement)) return [numberToMap.get(complement), i];
    numberToMap.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 18));
