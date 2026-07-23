// Write a program to print all the Upper case letters in the string in reverse  order and then followed by the lower case letters .  
// Testcase1 : NumberOne  
// Output : ONumberne  
let TestCase="ClassLeader  "
let res=""
for(let i=0;i<TestCase.length;i++){
    if(TestCase[i]===TestCase[i].toUpperCase()){
        res=TestCase[i]+res
    }
    else{
         res=res+TestCase[i]
    }
}
console.log("res:",res)