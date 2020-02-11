// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    console.log("c =  ", c)
    const outIndex = c.length - 1;
    console.log("outIndex =  ", outIndex)
    let index = 0;
    let jumps = 0;
    let nextIndex = 0;
    while (index < outIndex) {
        if (c[index + 2]==0) {
            nextIndex = index + 2;
            console.log("Safe to jump 2 spots from c[" + index + "] to c[" + nextIndex +"]")
            jumps++;
            index +=2;
        } else {
            nextIndex = index + 1;
            console.log("Can only jump 1 spot from c[" + index + "] to c[" + nextIndex +"]")
            jumps++;
            index ++;
        }
        console.log("jumps = ", jumps);
        console.log("index = ", index);
    }
    return jumps;
}
console.log("jumpingOnClouds([0,1,0,0,1,0]) = ", jumpingOnClouds([0,1,0,0,1,0]))