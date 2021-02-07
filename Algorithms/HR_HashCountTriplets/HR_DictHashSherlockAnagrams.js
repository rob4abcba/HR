// The order of letters in a pair of anagrams doesn't matter, only what the letters are. 
// Therefore: 1) Start by iterating over the string to extract substrings 
// 2) Instead of storing every substring to later compare it against every other single substring: 
// Sort substring alphabetically before storing 
// 3) Store the sorted string in a map of string to number of occurences 
// 4) Every time you find a new substring, sort it, 
// if there is already a match or several in your hashmap, 
// add the number of already existing occurences to your anagram counter, increment in hashmap

function sherlockAnagrams1(s) {
    console.log(s);
    console.log(s.length);
    let count = 0;
    // Size of our sliding window
    for (let i = 1; i < s.length; i++) {
        let found = {};
        // Starting index of our sliding window
        for (let j = 0; j + i <= s.length; j++) {
            let substr = s.substr(j, i);
            console.log(substr);
            substr = substr.split('').sort().join('');
            console.log(substr);
            if(found[substr]){
                count += found[substr];
                found[substr]++;
            } else {
                found[substr] = 1;
            }
            console.log(count);
            console.log(found);
        }
    }
    return count;
}
console.log(sherlockAnagrams1('abba'));
// console.log(sherlockAnagrams1("pizzahutpi"));


