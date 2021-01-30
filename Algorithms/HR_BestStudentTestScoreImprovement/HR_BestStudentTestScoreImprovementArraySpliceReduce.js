
// function stockmax(scores) {
//     console.log(" ")
//     console.log("scoresBeforeDoWhileLoop = ", scores)
//     console.log("...scores = ", ...scores)
// scores -> scores
// ? -> students
// improvement -> improvement

// students = ['Mary', 'Steve', 'Steve', 'Mary', 'Steve']
// scores = [19, 70, 99, 80, 100]
function calculateMostImprovement(students, scores) {
    console.log(" ")
    console.log("students = ", students);
    console.log("scores = ", scores);

    let improvement = 0;
    do {
        console.log("scoresInsideDoWhileLoop = ", scores)
        let currentMax = Math.max( ...scores ) // Spread operator to take the elements in scores array.
        console.log("currentMax = Math.max( ...scores ) = ", currentMax)
        let indexOfCurrentMax = scores.indexOf( currentMax )
        console.log("indexOfCurrentMax = scores.indexOf( currentMax ) = ", indexOfCurrentMax)

        improvement += currentMax
        console.log("improvement = ", improvement)
        // The splice starts from index 0 and removes indexOfCurrentMax+1 items (i.e. up to indexOfCurrentMax) from the price array.
        // The scores array is mutated to now only contain the portion AFTER the currentMax.
        // However, the RETURN value is the portion of the scores array that was REMOVED.
        // Therefore, the .reduce acts on the removed portion.
        improvement = scores.splice(0, indexOfCurrentMax+1).reduce( function(total,current, index, array) {
            console.log("total = ", total)
            console.log("current = ", current)
            console.log("index = ", index)
            console.log("array = ", array)
            console.log("newtotal = oldtotal - current = ", total-current)
            return total-current
        }, improvement ) + currentMax; // Since reduce subtracted ALL the scores regardless of BUY or SELL, need to add SALE price back in.
        console.log("improvementAfterAddBackCurrentMax = ", improvement)
    } while( scores.length )    
        console.log("improvementFinal = ", improvement)
        console.log(" ")
        return improvement
    }
    console.log("stockmax([5,3,2]) = ", stockmax([5,3,2]))
    console.log("stockmax([1,2,100]) = ", stockmax([1,2,100]))
    console.log("stockmax([1,3,1,2]) = ", stockmax([1,3,1,2]))