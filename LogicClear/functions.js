//1// Random Number
//1. To find the random value BETWEEN any two numbers using formula:
//Math.random() * (highestNumber - lowestNumber) + lowestNumber
//Output greater than 1 and less than 10.

//2.Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber
//Output Between 1 (inclusive) to 10 (exclusive), i.e. (1 to 9).

//3. Math.floor(Math.random() * (max - min + 1)) + min
// If you want to find the random integer in between min (inclusive) to max (inclusive), you can use the following formula:

//2// Binary
//The JavaScript built-in method toString([radix]) returns a string value in a specified radix (base). Here, toString(2) converts the decimal number to binary number.
// i.e toString(2) in the base means return Binary number.

//3// ASCII stands for American Standard Code for Information Interchange.

// ASCII is a numeric value that is given to different characters and symbols for computers to store and manipulate. For example, the ASCII value of the letter 'A' is 65. Total Values 127.

//ASCII Value of Character Using charCodeAt()
//The charCodeAt() method takes in an index value and returns an integer representing its UTF-16 (16-bit Unicode Transformation Format) code.
//If you don't pass the index value, the default index value will be 0. If the index value is out of range, it gives NaN.

//ASCII Value of Character Using codePointAt()
//The codePointAt() method returns a Unicode code point value.
//If you don't pass the index value, the default index value will be 0. If the index value is out of range, it gives undefined.
// Ex Suppose i passed abc, but it only takes 1st character i.e a and return its Unicide code point.

//4// //**// Set Default Parameter Value For a Function

// function sum(x = 3, y = 5) {
//     return x + y;
// }

// console.log(sum(5, 15));
// console.log(sum(7));
// console.log(sum());

// Output
// 20
// 12
// 8;

//***// Caller chya values has a Preference over the default values

// explanation
//In the above example, the default value of x is 3 and the default value of y is 5.
//sum(5, 15) - When both arguments are passed, x takes 5 and y takes 15.
//sum(7) - When 7 is passed to the sum() function, x takes 7 and y takes the default value 5.
//sum() - When no argument is passed to the sum() function, x takes the default value 3 and y takes the default value 5.

// Ex 2 Using Previous Parameter in Another Parameter

//let calculate = function(x = 15, y = x + 2) {
//    return x + y;
// }

// const result1 = calculate(10);
// console.log(result1);
// const result2 = calculate();
// console.log(result2);

// Output
// 22
// 32

//You can also pass a parameter as the default value for another parameter.

//5// Check If a Variable is of Function Type
// Jas typeOf(...) gives us the type of value passed

//tasach the instanceof operator is used to check the type of variable(value passed).
// it returns the boolean value

// Use kasa ahe
// Ex variable(value passed) instanceof Function => variable function ahe ki nahi
// Ex variable(value passed) instanceof string => variable string ahe ki nahi

//The Object.prototype.toString.call() method returns a string that specifies the object type.

//***// OneLine - typeOf(...) returns the data type of a variable passed.
//           instanceof  returns Boolean Value as we already pass dataType.
// Object.prototype.toString.call()  returns the data type of a variable passed.

//6// setTimeout()
// function greet() {
//   console.log("Hello world");
// }

// setTimeout(greet, 3000);
// console.log("This message is shown first");

//          SAME AS

// setTimeout(greet, 3000);
// console.log("This message is shown first");
// function greet() {
//   console.log("Hello world");
// }

//          SAME AS

// setTimeout(function greet() {
//   console.log("Hello world");
// }, 3000);
// console.log("This message is shown first");

//          SAME AS

// setTimeout(function () {
//   console.log("Hello world");
// }, 3000);
// console.log("This message is shown first");

//***// Named function aslyamule order doesnt matter
//***// In last two examples, i think, setTimeout(); is a caller so functions inside it get executed. It takes anynoums function as we are not calling it outside otr anywhere.

//NewOne
// program to pass parameter to function in setTimeout()
// function greet(x, y) {
//     console.log(x);
//     console.log(y);
// }

// // passing parameter
// setTimeout(greet, 3000, 'hello', 'world');
// console.log('This message is shown first');

//          SAME AS

// setTimeout(function greet(x, y) {
//     console.log(x);
//     console.log(y);
// }, 3000, 'hello', 'world');
// console.log('This message is shown first');

//***// setTimeout(arguments) are like function, time, argument, argument..... this argument is passed to the function as values of its parameter used inside setTimeout.

//7// Functional Overloading
//In programming, function overloading refers to the concept where multiple functions with the same names can have different implementations. However, in JavaScript, if there are multiple functions with the same name, the function that is defined at the last gets executed
