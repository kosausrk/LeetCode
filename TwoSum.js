/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length;i++){
        for (let j = i+1; j < nums.length;j++){
            let combine = nums[i] + nums[j]
            if (combine === target){
                return new Array(i, j)
            }
        }
    }  
};