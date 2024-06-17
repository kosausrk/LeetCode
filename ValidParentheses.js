/**
 * @param {string} s
 * @return {boolean}
 */
let sample = "()([";
let dictMap = new Map();
dictMap.set("(", ")");
dictMap.set("{", "}");
dictMap.set("[", "]");

let isValid = function(s) {
    let stack = [];
    if (s.length === 1) { // edge case if sample is 1 length
        return false;
    }
    for (let i = 0; i < s.length; i++) { 
        let char = s[i]; // individual bracket ex: (
        if (dictMap.has(char)) { // true
            stack.push(char); // ["("]
        } else { // closing bracket found ex: )
            let lastElement = stack.pop();
            if (dictMap.get(lastElement) !== char) { // If the found closing bracket is different from the character, means mismatch was found
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid(sample)); // Expected output: false
