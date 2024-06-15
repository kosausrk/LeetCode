/**
 * @param {number[]} nums
 * @return {number}
 */


let removeDuplicates = function(nums) {
    let appears = [] 
    for (let i =0; i < nums.length; i++){
        console.log(nums[i])
        if (!appears.includes((nums[i]))){
            appears.push(nums[i])
        }
    }
    console.log(appears)
};

let arr = [1,1,2]
removeDuplicates(arr)

//Implementation accounting for In-Place Algoirhtim 
/**
 let removeDuplicates = function(nums) {
    let appears = [];
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!appears.includes(nums[i])) {
            appears.push(nums[i]);
            nums[index] = nums[i]; //inserts back into original place  [1,2,2] -> push 1, nums[0] = 1 
            index++;
        }
    }
    
    // Adjust the length of the original array to the number of unique elements
    nums.length = index;
    return index;
};

 */