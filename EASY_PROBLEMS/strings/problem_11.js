// Write a program to convert all the upper case letters in the given string 
// to  lower case letter and vice versa.  
let data="Korean"
let result=""
for(let i=0;i<data.length;i++){
    if(data[i]===data[i].toUpperCase()){
       result+=data[i].toLowerCase()

    }
    else{
       result+=data[i].toUpperCase()
    }
}
console.log("result:",result)