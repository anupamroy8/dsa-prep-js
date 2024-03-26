// filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let oddNumbers = arr.filter((element, index, arr) => element % 2 !== 0);

// console.log(oddNumbers);

// filter polyfill

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = arr.myFilter((element, index, arr) => element % 2 !== 0);

console.log(oddNumbers);
