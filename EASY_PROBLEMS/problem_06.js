let num=84719  
console.log("num:",num,typeof(num));
let temp=String(num)
console.log("temp:",temp,typeof(temp))
let firstIndex=Number(temp[0])
let lastIndex=Number(temp[temp.length-1])
let result=true
for(let i=1;i<temp.length-1;i++){
  let data=Number(temp[i])
  if(!(data<firstIndex && data<lastIndex)){
    result=false
    break
  }
}
console.log(result)

 