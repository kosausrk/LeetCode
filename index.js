//Leet Code: Best Time to Buy and Sell Stock with Cooldown

let prices = [1, 2, 2, 0, 3]; //Sample set 

let maxProfit = function() {
    let memo = new Map(); // Key: `${i},${buying}`, Value: maxProfit **we use template literals to make code cleaner 

    function calculateMaxProfit(i, buying) {
        // if list is empty theres no profit (return 0)
        if (i >= prices.length) {
            return 0;
        }

        //shorthand so we dont have to nest the value pair each time in our code 
        let key = `${i},${buying}`;
        // if val exists return respective profit 
        if (memo.has(key)) {
            return memo.get(key);
        }


        //recurssion begins 
        let result; //based on decision tree for all possibilities 
        if (buying) {
            // Option 1: Buy the stock on day i
            let buy = calculateMaxProfit(i + 1, false) - prices[i]; 
            // Option 2: Do nothing (cooldown)
            let cooldown = calculateMaxProfit(i + 1, true);
            // Choose the option with the maximum profit
            result = Math.max(buy, cooldown);
        } else {
            // Option 1: Sell the stock on day i
            let sell = calculateMaxProfit(i + 1, true) + prices[i];
            // Option 2: Do nothing (cooldown)
            let cooldown = calculateMaxProfit(i + 1, false);
            // Choose the option with the maximum profit
            result = Math.max(sell, cooldown);
        }

        // store (index, buying), profit 
        memo.set(key, result);
        return result;
    }

    // Start the recursion from day 0 with the ability to buy
    return calculateMaxProfit(0, true);
};

console.log(maxProfit()); 
