//  Write a program to check whether the digits in-between the first and last  
// digit are less than first and last digit, if yes then print true, otherwise print  false.  
// Testcase1 : 1672  
// Output : false

let test= 84719  
let temp=String(test)
let firstNum=temp[0]
let lastNum=temp[temp.length-1]
let flage=true
for(let i=1;i<temp.length-1;i++){
    // console.log(temp[i])
    if(!(firstNum > temp[i] && lastNum > temp[i])){
        flage=false
        break
    }
}
console.log(flage)