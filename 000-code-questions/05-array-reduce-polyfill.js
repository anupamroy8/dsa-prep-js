// reduce

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = arr.reduce((acc, cv, index, arr) => {
//   return acc + cv;
// }, 0);

// console.log(sum);

// reduce polyfill

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = arr.myReduce((acc, cv, index, arr) => {
  return acc + cv;
}, 0);

console.log(sum);

