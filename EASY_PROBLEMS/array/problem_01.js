// ● Find the Largest Element in an Array
// Problem: Write a function to return the largest number in an array.
// Testcase 1:
// Input: [3, 1, 4, 1, 5, 9]
// Output: 9
let arr = [3, 1, 4, 1, 5, 9];
let largest = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log("largest:", largest);
