// Write a program to print the vowels in the given string and repeated  vowel should be printed only single time.  
// Testcase1 : Helloworld  
// Output : eo  
// Explanation : Vowels in the given string Helloworld are e,o,o . The  single vowels among them are eo .  
let str="Helloworld"
let vowels="aeiouAEIOU"
let is_vowels=""
for(let i=0;i<str.length;i++){
    if (vowels.includes(str[i]) && !is_vowels.includes(str[i])){
        is_vowels+=str[i]
    }
}
console.log("is_vowels:",is_vowels)
