function bubbleSort1(arr) {
    console.log("bubbleSort1: arr=" + arr);
    for (let i = 0; i < arr.length; i++) { // MC: i increases from 0 up to (arr.length - 1)
        console.log("i="+i);
        for (let j = 0; j < arr.length - i - 1; j++) { // MC: As i increases, inner loop j decreases
            // MC: Subtract 1 from end condition of loop because j = left number of pair
            // and need to account for right number of pair being j+1 below.
            // MC: 1st pass j incr fr 0 to (arr.length - 1)
            console.log("Compare pair at index j="+j, "arr[j]="+arr[j], "arr[j+1]="+arr[j+1]);
            // if (arr[j + 1] < arr[j]) {
            if (arr[j] > arr[j + 1]) { // MC: King of Hill rises to the right (higher index) of array
                console.log("Get ready to swap");
                // ES6 way of swapping array elements
                // [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                // ES5 way of swapping array elements
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                console.log("After swap j="+j, "arr[j]="+arr[j], "arr[j+1]="+arr[j+1]);
            }
            console.log("j loop: arr="+arr);
        }
        console.log("i loop: arr="+arr);
    }
    return arr;
}

// Slightly optimised solution for a nearly sorted array, by reducing the number of passes needed
function bubbleSort2(arr) {
    console.log("bubbleSort2: arr=" + arr);
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {  // MC: i decreases from arr.length down to 1.
        console.log("i="+i);
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) { // MC: 1st pass j incr fr 0 to (arr.length - 1)
            console.log("Compare pair at index j="+j, "arr[j]="+arr[j], "arr[j+1]="+arr[j+1]);
            if (arr[j + 1] < arr[j]) {
                // Swap
                console.log("Get ready to swap");
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                console.log("After swap j="+j, "arr[j]="+arr[j], "arr[j+1]="+arr[j+1]);
                // Make 'noSwaps' false
                noSwaps = false;
                console.log("noSwaps="+noSwaps);
            }
            console.log("j loop: arr="+arr);
        }
        // End the iterations if there were no swaps made in one full pass
        // MC: If no swaps for the bigger loop of j=0 to x
        // then of course no swaps for the continually smaller loops j=0 to (x-1), then j=o to (x-2), etc.
        if (noSwaps) {
            console.log("No swaps made in one full pass. Time to break out of loop.")
            break;
        }
        console.log("i loop: arr="+arr);
    }
    return arr;
}
const arr1 = [6,5,4,7,3,8,2,1];

console.log("bubbleSort1([6,5,4,7,3,8,2,1])="+bubbleSort1(arr1));
console.log("bubbleSort2([6,5,4,7,3,8,2,1])="+bubbleSort2([6,5,4,7,3,8,2,1]));
