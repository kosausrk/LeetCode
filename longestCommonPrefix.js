//Too much time was spent on this question


/**
 * @param {string[]} strs
 * @return {string}
 */

let mystrs = ["test","",""]
let longestCommonPrefix = function(strs) {
   
   if (strs.length === 0){
        return ""
   }

    let commonPrefix = strs[0] //setting up first element in array as prefix 

    //Going through all elements to compare subsequent elemnts 

    for (let i =1; i < strs.length; i++){
        while (strs[i].indexOf(commonPrefix) != 0){ //condtion that checks if next elements share the same prefix, if not, continue till you find a common one 
            commonPrefix = commonPrefix.substring(0, commonPrefix.length -1) //If the prefix doesn't exist in the next element, shorten it's length by 1 and then compare 
        }
        if (commonPrefix == ""){ //Exit case 
            return "" 
        }
    }
    return commonPrefix
};

console.log(longestCommonPrefix(mystrs))
