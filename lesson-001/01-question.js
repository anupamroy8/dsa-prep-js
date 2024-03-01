// Question1 Palindrome Number?
// Output Boolean

const isPalindrome = (x) => {
  if(x<0) return false;
  return x === +x.toString().split("").reverse("").join("");
};

console.log(isPalindrome(112211));
console.log(isPalindrome(121));
console.log(isPalindrome(5555));
console.log(isPalindrome(-919));
console.log(isPalindrome(565));
console.log(isPalindrome(123456));