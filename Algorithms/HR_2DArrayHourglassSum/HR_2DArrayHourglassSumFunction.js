// Complete the hourglassSum function below.
function hourglassSum(arr) {
    console.log("arr = ", arr);
    // Compute baseline value and set it equal to the initial max
    let max = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            let temp = arr[i+0][j+0] + arr[i+0][j+1] + arr[i+0][j+2] + arr[i+1][j+1] + arr[i+2][j+0] + arr[i+2][j+1] + arr[i+2][j+2];
            console.log("temp = ", temp);
            console.log("max5 = ", max);
            // if (temp > max) {
            //     max = temp; // My silly mistake before was having this be "let max = temp"
            //     console.log("max4 = ", max);
            // }
            max = Math.max(max, temp);
            console.log("max3 = ", max);
        }
        console.log("max2 = ", max);
    }
    console.log("max1 = ", max);
    return max;
}
let array2d = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]
console.log(hourglassSum(array2d));