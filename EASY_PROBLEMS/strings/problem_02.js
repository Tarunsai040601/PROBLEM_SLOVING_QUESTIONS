// Testcase1 : 721  
// Output : 127  
// Explanation : Reverse of the number 721 is 127.  
// Testcase1 : 765  
// Output : 567  
// Explanation : Reverse of the number 765 is 567. 

let number=765
console.log("the number and its type:",number,"the type is:",typeof(number))
let temp_value=number
let res=""

while(temp_value>0){
    let data=temp_value%10
    res+=data
    temp_value=Math.floor(temp_value/10)

}
console.log(res,typeof(res))