/**
 * @param {number[]} height
 * @return {number}
 */


//Unoptmized O(N^2) time complexity 
// let sample = [1,2,3,4]
// let result = 0 
// for (let i = 0; i < sample.length;i++){
//     for (let j = i +1; j < sample.length;j++){
//         let area =  (j -i) * (Math.min(sample[i],sample[j])) //Width * Height
//         console.log(area + " with values" + sample[i] + " and " + sample[j])
//          result = Math.max(area, result)
//     }
// }
// console.log(result)


//Optimized Method **Using left and right pointers, shifting O(N) time complexity 
let maxArea = function(samples) {
    
    let result = 0 
    let left= 0
    let right = samples.length -1
    let area= 0 
    while (left < right){
        area = (right - left) * Math.min(samples[left], samples[right]) //Width * Length
        result = Math.max(result, area)

        if (samples[left] < samples[right]){ //if the height of left is less, move onto next candle for left 
            left +=1
        }
        
        else{ //otherwise subtract right by one to move closer to middle
            right -= 1; 
        }
    }
    return result
};