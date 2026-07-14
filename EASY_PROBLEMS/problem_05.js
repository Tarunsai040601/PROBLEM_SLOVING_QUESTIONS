// Write a program to check whether the sum of digits in the number except  
// first digit and digit is equal to the sum of first digit and last digit of that  number. If both the sums are equal then print equal otherwise print not  equal  
// Testcase1 : 75547  
// Output : equal  
// Explanation : In the given number 7557, first digit and last digit sum  that is sum(7,7)=14 is equal to sum of remaining numbers that is  sum(5,5,4) = 14. So both sums are equal.  
// Testcase1 : 765  
// Output : not equal  
// Explanation : Sum(7,5)=12 and Sum(6)=6, both sums are not equal.

let num = 765;
console.log("num:", num, typeof num);
let temp = num;
let res = "";
while (temp > 0) {
  let digit = temp % 10;
  res += digit;
  temp = Math.floor(temp / 10);
}
console.log("res:", res);
console.log("length:", res.length);
let stored = res;

let data = Number(stored[0]) + Number(stored[stored.length - 1]);
console.log("Value:", data);

let midTerm = 0;
for (let i = 1; i < stored.length - 1; i++) {
  let convert = Number(stored[i]);
  midTerm += convert;
}
if (data === midTerm) {
  console.log("equal");
} else {
  console.log("not equal");
}
