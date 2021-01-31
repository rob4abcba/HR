function selectionSort1(arr) {
    console.log("selectionSort1: arr=" + arr);
    let min;
    for (let i = 0; i < arr.length; i++) {
        console.log("i="+i);
        // Assume a minimum value        
        min = i;
        console.log("min=i="+min);
        for (let j = i + 1; j < arr.length; j++) {
            console.log("Compare values at index j="+j, "arr[j]="+arr[j], "min="+min, "arr[min]="+arr[min]);
            if (arr[j] < arr[min]) {
                console.log("Found a new min");
                min = j;
                console.log("min=j="+min);
            }
            console.log("j loop: arr="+arr);
        }
      
        // Swap if new minimun value found
        if (min !== i) {
          console.log("Swap elem at index i="+i, "arr[i]="+arr[i], "min="+min, "arr[min]="+arr[min]);
          [arr[i], arr[min]] = [arr[min], arr[i]];
          console.log("After swap: arr="+arr);
        }
        console.log("i loop: arr="+arr);
    }
    return arr;
}
const arr1 = [6,5,4,7,3,8,2,1];
console.log("selectionSort1([6,5,4,7,3,8,2,1])="+selectionSort1(arr1));