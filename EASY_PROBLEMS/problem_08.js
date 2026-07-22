// Write a program to print the vowels in the given string in reverse order.  
// Testcase1 : Helloworld  
// Output : ooe  
// Explanation : Vowels in the given string Helloworld are e,o,o . The  reverse order of eoo is ooe.  
let str="JackspArrow"
let vowels="aeiouAEIOU"
let is_vowels=""
for(let i=0;i<str.length;i++){
    if (vowels.includes(str[i])){
        is_vowels=str[i]+is_vowels
    }
}
console.log("is_vowels:",is_vowels)
