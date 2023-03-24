//1// //**// Program to Check if a number is Positive, Negative, or Zero
// let num = 10;

// 3 possibilities so if, elseif and else i.e 3 conditions will be checked

// How conditioned are checked

// if true tar tyacha console
// if false tar else if check hote, jar else if true tar tyacha console
// jar if and else if donhi false alya tar mg saglyat shevatacha console print hoto.

//   OR OR OR

// if false zla tar tyachya else(jo  else if  madhe ahe) la janar ani tithe if aslyamule condition check honar. jar else if  madhil if chi condition false zali tar tyachya else la janar which is last else.

// if (num > 0) {
//   console.log("positive");
// } else if ((num == 0)) {
//   console.log("zero");
// } else {
//   console.log("negative");
// }

// varchya  if and  elseif chi condition baherchya if la dili ani tya paiki ek nested if la check karun ek else var sodali ahe.
// Working bahercha if false zala tar baherchya else la janar ani aatla if false zala tar aatlya else la janar.
// if (num >= 0) {
//   if (num == 0) {
//     console.log("zero");
//   } else {
//     console.log("positive");
//   }
// } else {
//   console.log("negative");
// }

// else la pan deu shakato but generally condition nasate karan if la deto jar false zali tar else print honar or execute honar.

//2// //**// program to find the largest among three numbers

//Comparison and Logical AND Operators

// take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// display the result
// console.log("The largest number is " + largest);

//3//.toFixed(x)
// Used with numbered outcome.This rounds up the decimal number to 'x' decimal values.

//4//  //**// Prime Numbers
// This condition is must
//  for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//5// All Prime Numbers in an Interval
// Don for(loops) ka vaparale karan 1)mala Range of values access/check karayachya hotya ani 2) tya values sathi condition check karayachi hoti.

//6//  //**// Find the Factorial of a Number
// 3 condition hotya so if... else if... else vapral
// yatil(if... else if... else) ekasathi mala for(loop) lagnar karan factorial mhanje multiplication of a range.
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }

//7// //**// Multiplication Table

//  Multiplication Table Up to 10

// const number = parseInt(prompt("Enter an integer: "));

// //creating a multiplication table
// for (let i = 1; i <= 10; i++) {
//   // multiply i with number
//   const result = i * number;

//   // display the result
//   console.log(`${number} * ${i} = ${result}`);

// Multiplication Table Up to a Range

// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// }

//8// Simple Calculator

//9// Sum of Natural Numbers Using

//1.  for Loop

// const number = parseInt(prompt('Enter a positive integer: '));

// let sum = 0;

// // looping from i = 1 to number
// // in each iteration, i is increased by 1
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }
// console.log('The sum of natural numbers:', sum);

//2. while...loop
// const number = parseInt(prompt('Enter a positive integer: '));

// let sum = 0, i = 1;

// // looping from i = 1 to number
// while(i <= number) {
//     sum += i;
//     i++;
// }
// console.log('The sum of natural numbers:', sum);

//10// //**// Check if the Numbers Have Same Last Digit

// const a = prompt("Enter a first integer: ");
// const b = prompt("Enter a second integer: ");
// const c = prompt("Enter a third integer: ");

// // find the last digit
// const result1 = a % 10;
// const result2 = b % 10;
// const result3 = c % 10;

// // compare the last digits
// if (result1 == result2 && result1 == result3) {
//   console.log(`${a}, ${b} and ${c} have the same last digit.`);
// } else {
//   console.log(`${a}, ${b} and ${c} have different last digit.`);
// }

//10// Find LCM

//111// Find the Factors of a Number

// const num = prompt("Enter a positive number: ");

// console.log(`The factors of ${num} is:`);

// // looping through 1 to num
// for (let i = 1; i <= num; i++) {
//   // check if number is a factor
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

//12//parseFloat()
//The parseFloat() method parses a value as a string and returns the first number.
// i.e string la ignore karun tyanantar jar number asel tar to number return karto
// If the first character cannot be converted, NaN is returned.
// Leading and trailing spaces are ignored.
// Only the first number found is returned.
//EX
// parseFloat(10);      // 10
// parseFloat("10");      //10
// parseFloat("10.33");      //10.33
// parseFloat("10.33 a");      //10.33
// parseFloat("34 45 66");      //34
// parseFloat("He was 40");      //NaN

//13// Find HCF
// Conditions can be given like this
//for (let i = 1; i <= number1 && i <= number2; i++) {

//     // check if is factor of both integers
//     if( number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }

//14// Sum of natural Numbers(JavaScript Recursion)

// Recursion is a process of calling itself. A function that calls itself is called a recursive function.

// function recurse() {
//     // function code
//     recurse();
//     // function code
// }

//recurse();

// Here, the recurse() function is a recursive function. It is calling itself inside the function.

//A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
//Once the condition is met, the function stops calling itself. This is called a base condition.

//Ex
// program to find the sum of natural numbers using recursion

// function sum(num) {
//     if(num > 0) {
//         return num + sum(num - 1);
//     }
//     else {
//         return num;
//     }
//  }

// // take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// const result = sum(number);

// // display the result
// console.log(`The sum is ${result}`);

// Output
// Enter a positive integer: 5
//The sum is 15

//Working
// sum(5) returns 5 + sum(4)
// sum(4) returns 5 + 4 + sum(3)
// sum(3) returns 5 + 4 + 3 + sum(2)
// sum(2) returns 5 + 4 + 3 + 2 + sum(1)
// sum(1) returns 5 + 4 + 3 + 2 + 1 + sum(0)
// sum(0) returns 5 + 4 + 3 + 2 + 1 + 0
