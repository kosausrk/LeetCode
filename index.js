//Leet Code: Best Time to Buy and Sell Stock with Cooldown



let myArr = [1,2,3] //-3
let profit = 0; 
for (let i=0; i < myArr.length;i++){
    if (myArr[i]){
        profit = profit - myArr[i]
    }
    console.log("number: " + myArr[i])
}

console.log(profit)