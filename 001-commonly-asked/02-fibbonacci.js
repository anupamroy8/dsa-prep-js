// Fibbonacci Number
// outputs a arr of numbers till that position in Fibonnaci series.

// Using for

// const fib = (n) => {
//   let arr = [0, 1];

//   for (i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// };

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(10));

// Using Recursion

const fib = (n) => {
  if(n<=1) return n;
  console.log(n)
  return fib(n-1) + fib(n-2)
}

// console.log(fib(2));
console.log(fib(5));
// console.log(fib(10));
