// Complete the repeatedString function below.
function repeatedString(s, n) {
    console.log("s = ", s);
    console.log("n = ", n);

    // How many "a" in string s ?
    // Find number of matches in a string
    // MC: I can simplify this for sure
    // function aCount(s) {
    //     const characters = {};
    //     for (let character of s) {
    //         characters[character] = characters[character] + 1 || 1;
    //         console.log("characters[character] =  ", characters[character]);
    //         let aCount = characters["a"];
    //         console.log("aCount = ", aCount);
    //     }
    // return aCount;
    // }
    const aPerStr = ( s.match(/a/g) || [] ).length;
    console.log("aPerStr = ", aPerStr);

    // How many string s in n ?
    // Number of times string s can be repeated within limit of n character
    // Floor is better than Trunc.  
    // Floor rounds toward negative infinity whether + or - number.
    // Trunc rounds toward zero whether + or - number.
    // Floor has better browser support
    // Also use const not let.  Once we calc it, we don't change it.
    // let strInstances = Math.trunc(n/s.length);
    const strPerN = Math.floor(n/s.length);
    console.log("strPerN = ", strPerN);

    // What remaining part of string s remains ?
    // Additional characters to get to the limit n
    let sRemainder = n % s.length;
    console.log("sRemainder = ", sRemainder);

    // How many "a" in the remainder part of string s ?
    // Find number of matches in remainder string
    // MC: This for loop not necessary.  Already have built-in .substring method.
    // let aRemainder = 0
    // for (let index = 0; index < sRemainder; index++) {
    //     if (s[index] == "a") {
    //         aRemainder++
    //         console.log("aRemainder = ", aRemainder);
    //     }
    // }
    // return aCount*sNum + aRemainder;
    const remainderMatches = (s.substring(0,sRemainder).match(/a/g) || [] ).length;
    console.log("remainderMatches = ", remainderMatches);

    // Add it up
    return aPerStr*strPerN + remainderMatches;
}

console.log ("repeatedString('aba', 10) = ", repeatedString('aba', 10) );