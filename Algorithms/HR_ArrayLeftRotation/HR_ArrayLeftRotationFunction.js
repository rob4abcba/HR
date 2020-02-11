// Complete the rotLeft function below.
function rotLeft(a, d) {
    console.log("a = ", a);
    console.log("d = ", d);
    // shift() Remove an item from the beginning of an array
    // push() Add items to the end of an array
    for (let i = 0; i < d; i++) {
        let item = a.shift();
        a.push(item);
        console.log("a = ", a);
    } 
    return a
}
console.log("rotLeft([2,5,6,1,7,3],3) = ", rotLeft([2,5,6,1,7,3],3));