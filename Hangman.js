const prompt = require('prompt-sync')();

//_ _ _ _ _ 
let mistakes = 5; 

let word = "audio"
let hangmanList = word.split("")
let userList = ["_", "_","_","_","_"]
let usedWords = []

console.log(userList)
while (mistakes > 0){
    let letter = prompt("Choose a letter: ")
    if (hangmanList.includes(letter)){
        console.log("Letter " + letter + " was found")
        let foundIndex = hangmanList.indexOf(letter)
        userList[foundIndex] = letter
        console.log(userList)
    } else{
        if (!usedWords.includes(letter)){
            console.log("Word not in list")
            usedWords.push(letter)
            console.log("Used Words: " + usedWords)
            mistakes--
        } else{
            console.log("Already guessed " + letter )
        }
    }
    console.log("Mistakes left: " + mistakes)
    if (hangmanList.toString() === userList.toString()){
        console.log("You found the word! ")
        mistakes = 0
    }
}

