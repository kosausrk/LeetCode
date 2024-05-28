let test = "121" 
let myArr = test.split("")
let newArr = []

for (let i = myArr.length -1; i >= 0;i--){ 
    newArr.push(myArr[i])
}

if (newArr.toString() === myArr.toString()){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}

