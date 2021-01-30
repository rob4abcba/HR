// 1. Order of increments matter (consider when r = 1 and previous num IS the current num) 
// 2. Loop once in order to ensure order of array elements are counted appropriately 
// 3. The third number in the set of 3 doesn't need to be tracked, just the first two. 
// Have a hashmap of each number's count AND a hashmap for each previous num + current num count 
// (this serves as the final count for the third in set) 
// 4. Don't worry about floating division - doesn't seem to matter in these test cases

function countTriplets1(arr, r) {
    console.log("arr = ", arr);
    console.log("r = ", r);
    
    let count = 0;
    let num_counts = {};
    let triplet_store = {};
  
    for (const num of arr) {
        console.log("Before if: num_counts["+num+"] = ", num_counts[num]);
        if(!num_counts[num]){
            num_counts[num] = 0;
            console.log("After if: num_counts["+num+"] = ", num_counts[num]);
            console.log("After if: num_counts = ", num_counts);
        }

        // *no care for remainders*
        const prev_num = num / r;
        console.log("Before if: num_counts["+prev_num+"] = ", num_counts[prev_num]);
        if(!num_counts[prev_num]){
            num_counts[prev_num] = 0;
            console.log("After if: num_counts["+prev_num+"] = ", num_counts[prev_num]);
            console.log("After if: num_counts = ", num_counts);
        }
        const prev_count = num_counts[prev_num];
        console.log("After set prev_count = num_counts[prev_num]: prev_count =  ", prev_count);

        console.log("Before if: triplet_store["+prev_num+"] = ", triplet_store[prev_num]);
        console.log("Before if: triplet_store = ", triplet_store);
        if(!triplet_store[prev_num]){
            triplet_store[prev_num] = 0;
            console.log("After if: triplet_store["+prev_num+"] = ", triplet_store[prev_num]);
            console.log("After if: triplet_store = ", triplet_store);
        }
        // prev_num used to store aggregate of 2nd and 1st position counts
        count += triplet_store[prev_num];
        console.log("Aft incr count by val in triplet_store: count = ", count);
        
        num_counts[num]++;
        console.log("After increment: num_counts["+num+"] = ", num_counts[num]);
        console.log("After increment: num_counts = ", num_counts);
        console.log("Before if: triplet_store["+num+"] = ", triplet_store[num]);
        console.log("Before if: triplet_store = ", triplet_store);
        if(!triplet_store[num]){
            triplet_store[num] = 0;
            console.log("After if: triplet_store["+num+"] = ", triplet_store[num]);
            console.log("After if: triplet_store = ", triplet_store);
        }
        // storing current num (2nd pos) counts plus previous (1st pos) counts
        triplet_store[num] = triplet_store[num] + prev_count;
        console.log("After add prev_count: triplet_store["+num+"] = ", triplet_store[num]);
        console.log("After add prev_count: triplet_store = ", triplet_store);
    }
    return count;
}

console.log("countTriplets1([1,4,4,16,64], 4) = ", countTriplets1([1,4,4,16,64], 4));
console.log("countTriplets1([1,2,1,2,4], 2) = ", countTriplets1([1,2,1,2,4], 2));


// WORKING
function countTriplets2(arr, r) {
    console.log("");
    console.log("");
    console.log("arr = ", arr);
    console.log("r = ", r);
    var map2 = {}; //MC: For "key" of 2nd item in triplet, "value" is # of 1st items that go with it.

    //MC: For "key" of 3rd item in triplet, "value" is # of 1st & 2nd item combinations that go with it.
    var map3 = {}; //MC: The values = the number of triplets ending at the listed "key"
    var count = 0; //MC: The sum of all the values of all the keys in map3 object

    //MC: If you never use index i, then better to use the "for (const value of arrary)" syntax.
    for (var i = 0; i < arr.length; ++i) {
        var n = arr[i]; //MC: Since only care about value arr[i] and not care about i, then should have used the "for (const value of arrary)" syntax.
        console.log("");
        console.log("n = ", n);
        console.log("map3[n] = ", map3[n]);
        console.log("map3 = ", map3);
        if (map3[n]) {
            count += map3[n];
            console.log("Aft incr by map3[n]: count = ", count);
        }
        console.log("map2[n] = ", map2[n]);
        console.log("map2 = ", map2);
        if (map2[n]) {
            map3[n * r] = map3[n * r] ? map3[n * r] + map2[n] : map2[n];
            console.log("map3[n*r] = ", map3[n*r]);
            console.log("map3 = ", map3);
        }
        map2[n * r] = map2[n * r] ? map2[n * r] + 1 : 1;
        console.log("map2[n*r] = ", map2[n*r]);
        console.log("map2 = ", map2);
    }

    return count;
}
console.log("countTriplets2([1,4,4,16,64], 4) = ", countTriplets2([1,4,4,16,64], 4));
console.log("countTriplets2([1,2,1,2,4], 2) = ", countTriplets2([1,2,1,2,4], 2));