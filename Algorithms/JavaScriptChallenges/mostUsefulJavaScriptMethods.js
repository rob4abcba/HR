// Most useful JavaScript methods You must need to know
// Jobayer Hossain

// Apr 27, 2020 · 8 min read

// In this article, we will focus on some of the important JavaScript methods. 
// The sections will be broken down by module.

// Javascript String Methods
// 1. charAt()
// When we want to access the individual characters in a string.
const name = "Thor"
console.log(name.charAt(0)) // MC: String is like an array of characters so just do string[i] to get ith character
//T
// In another way, we also find a specific character in our string. 
// This method is like an array value finding.
const movie = "Thor"
console.log(movie[0])
//T

// 2. concat()
const fristName = "Jon";
const lastName = "Doe";
console.log(fristName.concat(" ",lastName))

// 3.includes()
// Includes method checks if a specific value exists or not, and it returns a boolean value.
// Note: The includes methods are case-sensitive.
const country = "Bangladesh is my Born country"
console.log(country.includes("Bangladesh")) //true
console.log(country.includes("bangladesh")) //false

// 4. endsWith()
// This method helps to check which sentence uses in a substring in the last position.
// Note: The endsWith method is also case-sensitive.
const dialog = "I will must tech you who am i?"
console.log(dialog.endsWith("i?")) //true
console.log(dialog.endsWith("i")) //false

// 5.indexOf()
// This indexOf method searches for a specified value, 
// and if a value exists then, return values position index, 
// otherwise return -1 value if not found.
const para = 'The quick brown fox';
console.log(para.indexOf('quick')) //4
console.log(para.indexOf('Jump')) //-1

// 6.lastIndexOf()
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// Note: The lastIndexOf method also is case-sensitive.
const list = ["Mango", "Apple", "Mango"];
list.lastIndexOf("Mango"); //2

// 7.replace()
// The replace method replaces characters in a string with another group of characters.
const grettings = "Welcome to Dhaka";
grettings.replace("Dhaka","Noakkhali")
//"Welcome to Noakkhali"

// 8.splice()
// This method returns a new substring based on the indexes provided.
const sing = "I am a disco dancer"
console.log(sing.slice(0,5))// I am // MG: Does NOT include character at 5

// 9.split()
// Using substrings to split a string into an array. It returns the new array.
const ask = "How are you?"
const res = ask.split(" ") //["How", "are", "you?"] // MC: You choose delimiter for split

// 10.startsWith()
// This method returns the boolean value if the string begins with a substring.
const myName = "I am Jobayer Hossain"
myName.startsWith("I")//true
myName.startsWith("am")//false

// 11.substr()
// This method accepts two input values as the number and extracts a string 
// with a beginning number to end several target string positions.
const helloMsg = "Hello How are you?"
const res = helloMsg.substr(1,4) //"ello"

// 12.toLowerCase()
// It converts a string to lower case.
const str1 = "Hellow World"
const str1Res = str1.toLowerCase()//"hellow world"
// Note: The toLowerCase() the function doesn't accept any parameters. 
// and does not changers the original string.

// 13.toUpperCase()
// The method transforms a string to uppercase letters.
const str2 = "Hellow World"
const str2Res = str2.toUpperCase() //"HELLOW WORLD"
// Note: The toUpperCase() method does not modify the original string.

// 14.trim()
// The trim()the method removes all whitespace on the string 
// at the beginning and ending positions.
const str3 = "   Hellow   World! "
const str3Res = str3.trim() //"Hellow   World!"
// Note: The trim() method does not modify the initial string, 
// and it does not accept any parameters.

// 15.trimStart()
// This method removes whitespace only from the start.
const str4 = "       Hello World!     ";
const str4Res = str4.trimStart() // "Hello World!     "

// 16.trimEnd()
// This method removes whitespace only from the end.
const str5 = "    HelloWorld    ";
const str5Res = str5.trimEnd() // "    HelloWorld"

// Javascript Number Methods

// 1.isNaN()
// This method returns true if the value is not a number.
console.log(isNaN(123)) // false
console.log(isNaN(true)) // false
console.log(isNaN(true)) // false
console.log(isNaN("Hello")) // true
console.log(isNaN("2020/4/13")) // true
console.log(isNaN(undefined)) // true
console.log(isNaN(NaN)) // true

// 2.parseFloat()
// The function parses a string and returns a floating-point number.
console.log(parseFloat("40")) //40
console.log(parseFloat(" 50.55  ")) //50.55
console.log(parseFloat("My ID 40")) //NaN
// ref:w3Schools

// 3.parseInt()
// This function parses a string and delivers an integer.
console.log(parseInt("10")) //10
console.log(parseInt("  30.90")) //30
console.log(parseInt("36 10 20")) //36
console.log(parseInt("ID 404")) // NaN
// ref:w3schools

// JavaScript Array methods

// 1.concat()
// The concat function is used to join two arrays and returns a new array.
const marvelHeros =  ["Thor","Ant-man"]
const dcHeros = ["WonderWoman","Bat Man"]
const joniArrays = marvelHeros.concat(dcHeros)
//["Thor","Ant-man", "WonderWoman","Bat Man"]

// 2.every()
// This method tests if all elements in an array pass a test.
const agesArray = [32,42,53]
const hasAudlt = agesArray.every(age=> age < 18) //false

// 3.filter()
// This method generates a new array with all array elements that pass a condition.
const numberArrays = [5,9,12,22,53]
const filterdLessThen20 = numberArrays.filter(num => num < 20) 
//[5, 9, 12]

// 4.find()
// This function returns the value of the array that passes a condition.
const districts = ["comilla","Noakhalli","Lakshimipur"]
const myDistrict = districts.find((district) => {
     return district == "Lakshimipur"
})
//"Lakshimipur"

// 5.findIndex()
// This method returns the index of the first item that passes a test.
const array1 = [5, 12, 8, 230, 44];
const lessThen15 = array1.findIndex(num => num > 15) //3
// ref: mdn

// 6.forEach()
// forEach method work looks like a for loop. It loops through all the elements in the array and returns a single piece of the element.
const friendsArray = ["Jon", "Doyt", "cherry"];
const friendsName = friendsArray.forEach(name => console.log(name))
// "Jon"
// "Doyt"
// "cherry"
// ref:mdn

// 7.indexOf()
// The indexOf() function accepts a parameter and the index of the item or -1 if it does not exist.
const bestFriends = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(bestFriends.indexOf("bison"))

// 8.join()
// The join method concats all array elements into a single string with a separator.
const arrays3 = ['Fire', 'Air', 'Water'];
console.log(arrays3.join())
// "Fire,Air,Water"

9.map()
The map() function it’s loop throw all array element and return a new array based on a transformation with each item.
let numsArray = [1, 2, 3, 4];
const singleValue = numsArray.map((num) => num + 1);
console.log(singleValue);
//[ 2, 3, 4, 5 ]

10.lastIndexOf()
The lastIndexOf() method works like the indexOf method but the main difference between indexOfmethod search form beginning to end, and lastIndexOf() method searches end to beginning.
const movies = ["Avangers", "Thor","Ant Man", "Thor"];
console.log(movies.lastIndexOf("Thor"));
//3

11.pop()
The pop() method removes the last elements from the array.
const movies = ["Avangers", "Thor", "AntMan", "SpiderMan"];
// ["Avangers", "Thor", "AntMan", "SpiderMan"];
movies.pop();
//[ 'Avangers', 'Thor', 'AntMan' ]

12.push()
The push method adds an element to the end of the array position and returns a new array.
const movies = ["Avengers", "AntMan", "SpiderMan"];
// ["Avengers", "AntMan", "SpiderMan"];
movies.push("Thor");
// ["Avengers", "AntMan", "SpiderMan", "Thor"];

13.reduce()
The method does a function on every element of the array, occurring in a single amount value.
const number = [1, 2, 3, 4];
const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum); //10

14.reverse()
The reverse method reverses the index of the element in the array.
const number = [1, 2, 3, 4];
const reversed = number.reverse();
console.log(reversed); //[ 4, 3, 2, 1 ]

15.shift()
The shift method removes the first element in an array.
const friends = ["Nahid", "Sagor", "Jahid"];
friends.shift();
console.log(friends); //[ 'Sagor', 'Jahid' ]

16.slice()
The slice method accepts two parameters starting and ending positions. it returns a new array without the starting and ending position elements.
const candidate = ["Sagor", "Jahid", "JonDoe"];
const selectedCandidate = candidate.slice(0, 2);
console.log(selectedCandidate); //[ 'Sagor', 'Jahid' ]

17.sort()
The sort() method sorts elements in an array with order base. But we can pass a callback function to define which patters sorted our data.
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); //[ 1, 2, 3, 4, 5 ]
ref:mdn

18.splice()
// The splice method accepts a minimum of 2 parameters index and how many elements remove 
// from an array. This function mutates the array.
const months = ["Jan", "March", "April", "June"];
months.splice(3, 0, "Feb");
console.log(months); //[ 'Jan', 'March', 'April', 'Feb', 'June' ]
19.unshift()
The unshift method adds elements in the beginning position of an array and returns a new array length.
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); //[ 1, 2, 3, 4 ]

JavaScript Object methods

1.Object.assign()
Create a new object from multiple objects.
ref:mdn
const person = { name: "Jobayer Hossain", id: 23 };
const address = { city: "Dhaka", age: 35 };
const info = Object.assign(person, address);
console.log(info);
//{ name: 'Jobayer Hossain', id: 23, city: 'Dhaka', age: 35 }
2.Object.freeze()
The Object.freeze method freezes all object all properties.
const person = {
 name: "Jon Doe",
 designation: "Front-End Developer",
 skill: { 
   design: "Photoshop",
   codeing: "Javascript",
  },
};
Object.freeze(person);
person.name = "Jobayer Hossain";
person.skill.design = "Figma";
console.log(person);
//{
  name: 'Jon Doe',
  designation: 'Front-End Developer',
  skill: { design: 'Figma', codeing: 'Javascript' }
}
3.Object.keys()
Object.keys() returns all the keys of an object.
const person = {
  name: "Jobayer Hossain",
  age: 21,
  role: "Front-End Developer",
  skill: "HTML CSS JS React",
};
const ObjKeys = Object.keys(person);
console.log(ObjKeys);
//[ 'name', 'age', 'role', 'skill' ]
4.Object.values()
Object.values() returns all the values of an object.
const person = {
 name: "Jobayer Hossain",
 age: 21,
 role: "Front-End Developer",
 skill: "HTML CSS JS React",
};
const ObjValue = Object.values(person);
console.log(ObjValue);
//['Jobayer Hossain',21,'Front-End Developer','HTML CSS JS React']
JavaScript Math
Image for post
Photo by ThisisEngineering RAEng on Unsplash
1.Math.abs()
Math.abs() method returns the absolute value of a number .
console.log(Math.abs(5 - 2)); //3
console.log(Math.abs(5.9 - 5.1)); //0.8000000000000007
2.Math.sin()
This method returns a numeric value within -1 and 1, which describes the sine in radians. ref: w3schools
console.log(Math.sin(1)); //0.8414709848078965
console.log(Math.sin(-1)); //-0.8414709848078965
console.log(Math.sin(0)); //0
2.Math.cos()
The cos() method returns the cosine of a number.
const getRadius = (a, b) => {
return Math.cos(a) * b;
};
console.log(getRadius(1, 10)); //5.403023058681398
3. Math.exp()
The exp() method returns e^[number].
ref:mdn
console.log(Math.exp(5)); //148.4131591025766
console.log(Math.exp(6)); //148.4131591025766
4.Math.floor()
floor() method rounds a number down.
console.log(Math.floor(5.0524352345)); //5
5.Math.log()
The log() method returns the common logarithm of a number.
console.log(Math.log(4)); //1.3862943611198906
6.Math.min()
The Math.min() method accepts a value as a parameter and it returns the lowest value.
console.log(Math.min(5, 10)); //5
console.log(Math.min(87, 210)); //87
7.Math.max()
The Math.max() method accepts a value as a parameter and it returns the highest value.
console.log(Math.max(5, 10)); //10
console.log(Math.max(87, 210)); //210
8.Math.random()
Respond to a random number between 0 and 1.
console.log(Math.random()); //0.9671211951447136
console.log(Math.random()); //0.8787034350662186
console.log(Math.random()); //0.2373625260886849
9.Math.round()
The round() method rounds a number.
console.log(Math.round(2.9)); // 3
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.4)); // 2
10.Math.sqrt()
The sqrt() method returns the square root of a number:
console.log(Math.sqrt(16)); //4
console.log(Math.sqrt(81)); //9