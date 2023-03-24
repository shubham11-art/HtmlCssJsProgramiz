//1// Display Date and Time

// const date = new Date(2017, 2, 12, 9, 25, 30);

// date.toDateString();
// date.toLocaleTimeString();
// date.toLocaleDateString();

// Output
// Date: Sun Mar 12 2017  // Day
// Time: 9:25:30 AM
// Date: Mar 12 2017     // NoDay

//2// Check Leap Year

// Two Ways
// Using if...else
// Using newDate()

//1. Using if...else

//A year is a leap year if the following conditions are satisfied:
// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// Output
// Enter a year: 2000
// 2000 is a leap year

//2. Using newDate()

// function checkLeapYear(year) {

//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// Output
// Enter a year: 2000
// 2000 is a leap year

// Working
// If a month of February contains 29 days, it will be a leap year.
// The getDate() method returns the day(i.e tarikh) of the month.(getDay() mhanje War.)

//3// Format the Date
// Format i.e lihitoy kas

// let currentDate = new Date();

// // get the day from the date
// let day = currentDate.getDate(); // Tarikh

// // get the month from the date
// // + 1 because month starts from 0
// let month = currentDate.getMonth() + 1;

// // get the year from the date
// let year = currentDate.getFullYear();

// // if day is less than 10, add 0 to make consistent format
// if (day < 10) {
//     day = '0' + day; // 0 + 8 = 08
// }

// // if month is less than 10, add 0
// if (month < 10) {
//     month = '0' + month;   // 0 + 7 = 07
// }

// // display in various formats
// const formattedDate1 = month + '/' + day + '/' + year;
// console.log(formattedDate1);

// const formattedDate2 = month + '-' + day + '-' + year;
// console.log(formattedDate2);

// const formattedDate3 = day + '-' + month + '-' + year;
// console.log(formattedDate3);

// const formattedDate4 = day + '/' + month + '/' + year;
// console.log(formattedDate4);

// Output;
// 08 / 26 / 2020;
// 08 - 26 - 2020;
// 26 - 08 - 2020;
// 26 / 08 / 2020;

//4// Display Current Date
// .toDateString
// .toLocaleDateString
// .toLocaleTimeString

//5// Compare The Value of Two Dates

// const d1 = new Date();
// const d2 = new Date();

// // comparisons
// const compare1 = d1 < d2;
// console.log(compare1);

// const compare2 = d1 > d2;
// console.log(compare2);

// const compare3 = d1 <= d2;
// console.log(compare3);

// const compare4 = d1 >= d2;
// console.log(compare4);

// const compare5 = d1.getTime() === d2.getTime();
// console.log(compare5);

// const compare6 = d1.getTime() !== d2.getTime();
// console.log(compare6);

// Output
// false
// false
// true
// true
// true
// false

// You can then directly compare these two dates using comparison operators >, <, <=, or >=.

//However, to use comparison operators like ==, !=, ===, or !==, you have to use date.getTime().
// The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date.

//6// Create Countdown Timer

// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// // countdown timer
// let x = setInterval(function() {

//     // get today's date and time in milliseconds
//     let now = new Date().getTime();

//     // find the interval between now and the countdown time
//     let timeLeft = countDownDate - now;

//     // time calculations for days, hours, minutes and seconds
//     const days = Math.floor( timeLeft/(1000*60*60*24) );
//     const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
//     const minutes = Math.floor( (timeLeft/1000/60) % 60 );
//     const seconds = Math.floor( (timeLeft/1000) % 60 );

//     // display the result in the element with id="demo"
//     console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

//     // clearing countdown when complete
//     if (timeLeft < 0) {
//         clearInterval(x);
//         console.log('CountDown Finished');
//     }
//     }, 2000);

// Output
// 0d 23h 59m 57s
// 0d 23h 59m 55s
// 0d 23h 59m 53s
// 0d 23h 59m 51s
// ...

// Note: You can also use a custom starting countdown time by passing a specific date.
// For example,
// let countDownDate = new Date("Aug 5, 2025 14:22:36").getTime();

// Working

// countDownDate
// madhe atacha time milliseconds + jo paryantcha timer pahije to add karayacha in millisecends i.e 1day = 24*60*60*1000 milliseconds ani jevhade dicas pahije te yala multiplya karayache.
// now
// madhe atacha time in milliseconds

// timeLeft / 1 day(in milliseconds) = days remaining
// timeLeft / 1 hr ()

// % gheun divide kelel mala samzlele nahiye.

//7// Include a JS file in Another JS file
// React madhe je import export vaprato te ahe

// const message = "hello world";

// const number = 10;

// function multiplyNumbers(a, b) {
//   return a * b;
// }

//1. exporting variables and function
// export { message, number, multiplyNumbers };

// import the variables and function from module.js
// import { message, number, multiplyNumbers } from './modules.js';

// console.log(message); // hello world

// console.log(number); // 10

// console.log(multiplyNumbers(3, 4)); // 12
// console.log(multiplyNumbers(5, 8)); // 40

//2. You could also do individual export. For example,
// export const message = 'hello world';
// export const number = 10;

// Note : This helps in writing cleaner, maintainable, and modular code.

//8// Generate a Random Number Between Two Numbers

// If you want to find a random integer in between min (inclusive) to max (inclusive), you can use the following formula:

// Math.floor(Math.random() * (max - min + 1)) + min

//9// Get The Current URL

// const url1 = window.location.href;
// const url2 = document.URL;
// console.log(url1);
// console.log(url2);
// Output

// https://www.google.com/
// https://www.google.com/

// Both the window.location.href and the document.URL properties return the URL of the current page.

//10// Validate An Email Address

// validated by using regex_pattern.

//11// Implement a Stack

// The stack is a data structure that follows Last In First Out (LIFO) principle. The element that is added at last is accessed at first. This is like stacking your books on top of each other. The book that you put at last comes first.

//12// Implement a Queue

// A queue is a data structure that follows First In First Out (FIFO) principle. The element that is added first is accessed at first. This is like being in a queue to get a movie ticket. The first one gets the ticket first.

//13// Check if a Number is Float or Integer
// Positive integers and Negative integers. Purna number and not float/decimal number.

// Two ways
// Using Number.isInteger()
// Using Regex

//1. Using Number.isInteger()

// function checkNumber(x) {

//     // check if the passed value is a number
//     if(typeof x == 'number' && !isNaN(x)){

//         // check if it is integer
//         if (Number.isInteger(x)) {
//             console.log(`${x} is integer.`);
//         }
//         else {
//             console.log(`${x} is a float value.`);
//         }

//     } else {
//         console.log(`${x} is not a number`);
//     }
// }

// checkNumber('hello');
// checkNumber(44);
// checkNumber(3.4);
// checkNumber(-3.4);
// checkNumber(NaN);

// Output
// hello is not a number
// 44 is integer.
// 3.4 is a float value.
// -3.4 is a float value.
// NaN is not a number

// NOTE
// The Number.isInteger() method is used to check if the number is an integer value.

//2. Using Regex

// function checkNumber(x) {

//     let regexPattern = /^-?[0-9]+$/;

//     // check if the passed number is integer or float
//     let result = regexPattern.test(x);

//     if(result) {
//         console.log(`${x} is an integer.`);
//     }
//     else {
//         console.log(`${x} is a float value.`)
//     }

// }

// checkNumber(44);
// checkNumber(-44);
// checkNumber(3.4);
// checkNumber(-3.4);

// Output
// 44 is an integer.
// -44 is an integer.
// 3.4 is a float value.
// -3.4 is a float value.

// The pattern /^-?[0-9]+$/ looks for the integer value.
// The test() method of the RegExp object is used to test the pattern with the given value.

// Note: The above program only works for numbers.

//14// Get the Dimensions of an Image

// const img = new Image();

// // get the image
// img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// // get height and width
// img.onload = function() {
//   console.log('width ' + this.width)
//   console.log('height '+ this.height);
// }

// Output
// width 1040
// height 922

// new Image() constructor is used to create an image object.

// The Image() constructor creates a new image element instance.

// img.src is then used to add the image using an image URL source.

// The img.onload() function is used to access the height and width of the image.

//15// Convert Date to Number

// const d1 = new Date();
// console.log(d1);

// // converting to number
// const result = d1.getTime();
// console.log(result);
// Run Code
// Output

// Mon Nov 09 2020 10:52:32 GMT+0545 (Nepal Time)
// 1604898452084
