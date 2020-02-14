function stockmax(prices) {
    console.log(" ")
    console.log("pricesBeforeDoWhileLoop = ", prices)
    console.log("...prices = ", ...prices)

    let profit = 0;
    do {
        console.log("pricesInsideDoWhileLoop = ", prices)
        let currentMax = Math.max( ...prices ) // Spread operator to take the elements in prices array.
        console.log("currentMax = Math.max( ...prices ) = ", currentMax)
        let indexOfCurrentMax = prices.indexOf( currentMax )
        console.log("indexOfCurrentMax = prices.indexOf( currentMax ) = ", indexOfCurrentMax)

        // sold (number of stock * max stock value)
        // Since problem states you can only buy 1 stock per day, 
        // the indexOfCurrentMax = the max number of stocks you can own 
        // by the time you reach that index in the array. 
        // Therefore, gross proceeds of sale = max stock value * # of shares
        //                                   = max stock value * indexOf(currentMax)
        profit += currentMax * indexOfCurrentMax
        console.log("currentMax * indexOfCurrentMax = ", currentMax * indexOfCurrentMax)
        console.log("Add gross proceeds of sale = currentMax * indexOfCurrentMax to the existing profit")
        console.log("profit = ", profit)
        // buy  (remember to remove the max value)
        // The splice starts from index 0 and removes indexOfCurrentMax+1 items (i.e. up to indexOfCurrentMax) from the price array.
        // The prices array is mutated to now only contain the portion AFTER the currentMax.
        // However, the RETURN value is the portion of the prices array that was REMOVED.
        // Therefore, the .reduce acts on the removed portion.
        profit = prices.splice(0, indexOfCurrentMax+1).reduce( function(total,current, index, array) {
            console.log("total = ", total)
            console.log("current = ", current)
            console.log("index = ", index)
            console.log("array = ", array)
            console.log("newtotal = oldtotal - current = ", total-current)
            return total-current
        }, profit ) + currentMax; // Since reduce subtracted ALL the prices regardless of BUY or SELL, need to add SALE price back in.
        console.log("profitAfterAddBackCurrentMax = ", profit)
    } while( prices.length )    
        console.log("profitFinal = ", profit)
        console.log(" ")
        return profit
    }
    console.log("stockmax([5,3,2]) = ", stockmax([5,3,2]))
    console.log("stockmax([1,2,100]) = ", stockmax([1,2,100]))
    console.log("stockmax([1,3,1,2]) = ", stockmax([1,3,1,2]))