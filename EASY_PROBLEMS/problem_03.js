// Write a program to print factorial of the number.  
// Testcase1 : 3  
// Output : 6  
// Explanation : Factorial of the number 3 is 3*2*1 = 6.  
// Testcase1 : 4  
// Output : 24  
// Explanation : Factorial of the number 4 is 4*3*2*1 = 24. 


let num=4
let factorical=1
for (let i=1;i<num+1;i++){
    console.log(i)
    factorical=factorical*i
}
console.log("the factorial of 3:",factorical)