//1// We will use these three ways to print 'Hello, World!'.

// console.log('Hello World');
// alert('Hello World');
// confirm('Hello World');
// document.write('Hello World');
//document.write() is used when you want to print the content to the HTML document(i.e in the HTML code directly ).

//2// Add Two Numbers Entered by the User
// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
// const sum = num1 + num2;

// display the sum
//console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//**// The above program asks the user to enter two numbers. Here, parseInt() is used because prompt() takes input from the user as a string. And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.
// Ex
// var d = parseInt("2");
// console.log(d);
// console.log(typeof d);

//To include variables inside ``, you need to use the ${variable} format.

// const sum = (a) => (num = Math.sqrt(a));
// console.log(sum(49));

// Fat arrow function dont need return word because it's a single line code.

// function sum(a) {
//   num = Math.sqrt(a);  or  let num = Math.sqrt(a);
//   return num;
// }
// console.log(sum(49));

//3// Math.sqrt()
//If 0 or a positive number is passed in the Math.sqrt() method, then the square root of that number is returned.
//If a negative number is passed, NaN is returned.
//If a string is passed, NaN is returned.

//4//**// Destructuring assignment
//JavaScript program to swap two variables

//take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

//using destructuring assignment
//**// [a, b] = [b, a];
// values will be swapped

//*// add elements to arr array
//const arr = ['work', 'exercise', 'eat'];
//console.log(arr);
//**// arr[3] = 'hello';
//console.log(arr);

// Output
// ['work', 'exercise', 'eat']
// ['work', 'exercise', 'eat', 'hello']
