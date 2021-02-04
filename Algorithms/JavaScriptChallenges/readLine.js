// Declare second integer, double, and String variables.
var i2;
var d2;
var s2;

// Read and save an integer, double, and String to your variables.

/* The parseInt() function parses a string argument and returns an integer of the specified radix 
(the base in mathematical numeral systems).*/
i2 = parseInt(readLine());

/* The parseFloat() function parses an argument and returns a floating point number. */
d2 = parseFloat(readLine());

/* readLine() allows reading of a stream (such as STDIN) on a line-by-line basis. */
s2 = readLine();

// Print the sum of both integer variables on a new line.
console.log(i + i2);
// Print the sum of the double variables on a new line.
console.log((d + d2).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + s2);