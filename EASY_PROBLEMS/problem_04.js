// Write a program to print middle character(s) in the given string or
// number.
// Testcase1 : Wonder
// Output : nd
// Explanation : The middle characters in the given word Wonder is nd.
// Testcase1 : World
// Output : r
// Explanation : The middle character in the given word World is r.  Test Case 1 : 6969
// Output : 96
// Explanation : The middle character in the given number 6969 is 96.

let str = "6969";
let length_str = str.length;
console.log("length:", length_str);

if(length_str%2===0){
    let mid_value=str[length_str/2-1]+str[length_str/2]
    console.log(mid_value)
}
else{
    let mid=str[Math.floor(length_str/2)]
    console.log(mid)
}
