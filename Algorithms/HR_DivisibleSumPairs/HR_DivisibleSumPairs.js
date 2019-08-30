'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let divisible = 0;
    for (var i = 0, item1; item1 = ar[i]; i++) {
        // Look no need to do ar[i] in the body of the loop
        console.log("Looping: i = ", i, "item1 = " + item1);
        for (var j = i+1, item2; item2 = ar[j]; j++) {
            // Look no need to do ar[i] in the body of the loop
            console.log("Looping: j ", j, "item2 = " + item2);
            if ((item1 + item2) % k == 0) {
                console.log(item1 + " + " + item2 + " is divisible by" + k);
                divisible = divisible + 1;
                console.log("divisible = ", divisible)
            } else {
                console.log(item1 + " + " + item2 + " is NOT divisible by" + k);
            }
        }
    }
    return divisible;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = divisibleSumPairs(n, k, ar);

    ws.write(result + "\n");

    ws.end();
}
