function insertionSort1(arr) {
    console.log("insertionSort1: arr=" + arr);
    for (let i = 1; i < arr.length; i++) {
        console.log("i="+i);
      
        // Start comparing current element with every element before it
        for (let j = i - 1; j > -1; j--) {
            console.log("j="+j);
            console.log("Compare pair at index j="+j, "arr[j]="+arr[j], "arr[j+1]="+arr[j+1]);

            // Swap elements as required
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                console.log("After swap j="+j, "arr[j]="+arr[j], "arr[j+1]="+arr[j+1]);
            }
            console.log("j loop: arr="+arr);
        }
        console.log("i loop: arr="+arr);
    }
    return arr;
}
const arr1 = [6,5,4,7,3,8,2,1];
console.log("insertionSort1([6,5,4,7,3,8,2,1])="+insertionSort1(arr1));
