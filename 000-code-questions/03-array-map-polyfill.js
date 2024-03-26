// map

// let arr = [1, 2, 3, 4];

// let double = arr.map((element, index, arr) => element * 2);

// let doubleWithIndex = arr.map((element, index, arr) => element * 2 + index);

// console.log(double);
// console.log(doubleWithIndex);

// Ployfill for map

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

let arr = [1, 2, 3, 4];

let double = arr.myMap((element, index, arr) => element * 2);

let doubleWithIndex = arr.myMap((element, index, arr) => element * 2 + index);

console.log(double);
console.log(doubleWithIndex);

