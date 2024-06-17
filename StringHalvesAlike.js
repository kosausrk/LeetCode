/**
 * @param {string} s
 * @return {boolean}
 */


let halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let half1 = s.substring(0,s.length /2).split("")
    let half2 = s.substring(s.length/2, s.length).split("")

    console.log(half1 + " and " + half2)

    let half1VowelsCount = 0
    let half2VowelsCount = 0

    for (let i =0; i< half1.length;i++){
        if (vowels.includes(half1[i])){
            half1VowelsCount+=1 
        }

        if (vowels.includes(half2[i])){
            half2VowelsCount+=1 
        }
    }

    if (half1VowelsCount === half2VowelsCount){
        return true 
    }else{
        return false
    }
};