var numbers = [2, 4, 6];
console.log("numbers=", numbers);
 
numbers.original = [];
 
numbers.forEach(function (element, index, numbers) {
    // numbers[index] *= 2;
    numbers.original.push(element);
    numbers[index] *= 2;
    console.log("numbers="+numbers+"  numbers.original="+numbers.original);
});
 
function listNumbers(element, index) {
    console.log('index' + index + ' has element ' + element);
}
 
console.log("numbers.original.forEach(listNumbers)");
numbers.original.forEach(listNumbers);
console.log("numbers.forEach(listNumbers)");
numbers.forEach(listNumbers);