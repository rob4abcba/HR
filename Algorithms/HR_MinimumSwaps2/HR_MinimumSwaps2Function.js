function minimumSwaps(arr) {
    console.log("arr = ", arr)
    // We know that the array will be sequential, so to calc the targetIndex of 
    // each value we need to calculate the min value of the array. 
    // Next, see the targetIndex calculation.
    let minValue = Math.min(...arr);
    console.log("minValue = ", minValue)
    // MG: The minValue is not necessarily 1, but whatever the minValue is, the rest of the digits count up sequentially from that minValue
    let targetIndex = 0;
    let currentValue = 0;
    let numberSwaps = 0;
    let i = 0;
    
    // Process every value in the array.
    while (i < arr.length) {
        console.log("i = ", i)
        //Calculate the final targetIndex of each value. 
        // MG: The minValue is not necessarily 1, but whatever the minValue is, the rest of the digits count up sequentially from that minValue
        targetIndex = arr[i] - minValue;
        console.log("arr[i] = ", arr[i])
        console.log("targetIndex = ", targetIndex)
    
        // Check whether the value is in its correct targetIndex. If not, throw (swap) it to its rigthful position.
        if (targetIndex != i) {
            currentValue = arr[i]; // MC: Save our item that we now intend to move to its rightful spot.
            arr[i] = arr[targetIndex]; // MC: Move the number that was occupying our targetIndex here at index i for now.
            arr[targetIndex] = currentValue; // MC: Now we can place our item in its intended targetIndex
            console.log("arr = ", arr)
            numberSwaps++;
            console.log("numberSwaps = ", numberSwaps)
        } else {
            // If the value is already in its final position, go to the next value.
            i++;
        }
    }
    return numberSwaps; }

console.log("minimumSwaps([4,3,5,2,1]) = ", minimumSwaps([4,3,5,2,1]))