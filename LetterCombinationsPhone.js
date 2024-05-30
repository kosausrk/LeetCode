/**
 * @param {string} digits
 * @return {string[]}
 * Number cannot have 1 in digit 
 */
let letterCombinations = function (digits) {

    let phone = new Map();
    
    phone.set("2", "abc");
    phone.set("3", "def");
    phone.set("4", "ghi");
    phone.set("5", "jkl");
    phone.set("6", "mno");
    phone.set("7", "pqrs");
    phone.set("8", "tuv");
    phone.set("9", "wxyz");

    if (digits.length === 0) {
        return [];
    }
    
    // Start with an array containing an empty string
    let combinations = [''];

    for (let i = 0; i < digits.length; i++) {
        let currentDigit = digits[i]; //2
        let currentLetters = phone.get(currentDigit); //abc
        let newCombinations = [];

        // Build new combinations -> Appends each subsequent values to list 
        for (let j = 0; j < combinations.length; j++) {
            let combination = combinations[j];
            for (let k = 0; k < currentLetters.length; k++) {
                newCombinations.push(combination + currentLetters[k]);
            }
        }

        // Update combinations with newCombinations
        combinations = newCombinations;
    }

    return combinations;
};
