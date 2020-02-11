// Complete the countingValleys function below.
function countingValleys(s) {
    const characterArray = s.split("");
    console.log("characterArray = ", characterArray);
    let level = 0;
    let valleys = 0;
    let mountains = 0;
    for (let character of characterArray) {
        if (character == "D") {
            if (level == 0) { valleys++; console.log("valleys = ", valleys); }
            level--;
        } else {
            if (level == 0) { mountains++; console.log("mountains = ", mountains);  }
            level++;
        }
        console.log("level = ", level);
    } 
    return valleys;
}
console.log("countingValleys('DUDUDU') = ", countingValleys('DUDUDU'));
console.log("countingValleys('DDUDUUDU') = ", countingValleys('DDUDUUDU'));
console.log("countingValleys('UDDDUDUUDU') = ", countingValleys('UDDDUDUUDU'));