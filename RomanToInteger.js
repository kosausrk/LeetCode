//Beats 97% of JS users in memory consumption 


let romanToInt = function(s) {
    let romanList = s.split("")
    let value = 0
    let romanVals = new Map()
    romanVals.set("I", 1)
    romanVals.set("V", 5)
    romanVals.set("X", 10)
    romanVals.set("L", 50)
    romanVals.set("C", 100)
    romanVals.set("D", 500)
    romanVals.set("M", 1000)
    
    for (let i = 0; i < romanList.length;i++){
        //Conversions 
        //IV (5-2) * (1) =3 -> (5-1) = 4
        let romanLetter = romanList[i] //Ex: I

        //Subtraction Exceptions (If the value in front is less than preceedeing, you have to account for the numeral exception, so its the larger preceeding nuymeral subtracted from whats in front of it. IX is 5-1 = 4. we do this to save space instead of writing IIII)
        if (i >0 && romanVals.get(romanLetter) > romanVals.get(romanList[i-1])){
            value += romanVals.get(romanLetter) - 2 * romanVals.get(romanList[i-1])
        } 
        else{
            value += romanVals.get(romanLetter)
        }
    }
    console.log(value)
}

romanToInt("IIIIXXXXXXLLLCDM") 






