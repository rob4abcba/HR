function twoStrings2(s1, s2) {
    var map = {};
    console.log("s1 = ", s1);
    console.log("s2 = ", s2);
    for (let i of s1) {
        console.log("i = ", i);
        map[i] = 1; // No need to keep track of multiple occurrences for this problem statement.
    }
    console.log("map = ", map);
    for (let i of s2) {
        console.log("i = ", i);
        console.log("map[i] = ", map[i]);
        if (map[i])
            return "YES"; // Just a single character in common is enough to trigger a "YES".
    }
    return "NO"; // This means not even a single character is in common.

}
console.log("twoStrings2('abcd', 'efg') = ", twoStrings2('abcd', 'efg'))
console.log("twoStrings2('frank', 'myfrankenstein') = ", twoStrings2('frank', 'myfrankenstein'))