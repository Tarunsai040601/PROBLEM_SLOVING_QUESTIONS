// Write a program to print the sum of the digits in the number.  
// Testcase1 : 101  
// Output : 2  
// Explanation : Sum of the digits in the number 1+0+1 = 2, Answer is 2.  
// Testcase1 : 567  
// Output : 18  
// Explanation : Sum of the digits in the number 5+6+7 = 18, Answer is  18.


let number=567
console.log("the number and its type:",number,"the type is:",typeof(number))
let temp_value=number
let res=0

while(temp_value>0){
    let data=temp_value%10
    res+=data
    temp_value=Math.floor(temp_value/10)

}
console.log(res,typeof(res))

