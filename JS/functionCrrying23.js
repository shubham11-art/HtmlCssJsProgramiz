//13:14:50
// codeburst.com

// Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.
//**// In other wodrs, when a function, instead of taking all arguments at one time, takes the first argument and return a new function that takes the second argument and returns a new function which takes the third argument, and so on, till all arguments have benn fulfilled.

// Every argument is a function in itself with single argument in it. Here, Sum() is one function and we have passed 3 arguments (5) (3) (8) which are functions themselves. 5 is taken as 1st argument but for 3 and 8 there is a return function.(It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. )

//  function sum (num1) {
//           console.log(num1);
//     return function(num2) {
//         console.log(num1, num2);
//         return function(num3) {
//             console.log(num1, num2, num3);
//         }

//     }

// }
// sum (5)(3)(8);

// O/P
//  5
// 5 3
// 5 3 8

// Same with the Fat Arrow Function
//  const sum = (num1) => {
//           console.log(num1);
//     return (num2) => {
//         console.log(num1, num2);
//         return (num3) => {
//             console.log(num1, num2,num3);
//         }

//     }

// }
// sum (5)(3)(8);
// O/P
//  5
// 5 3
// 5 3 8

// As we know fat arrow function can be shorten down , if we are returning a single line code. No need to write return and { these brackets}.

// const sum = (num1) =>(num2) => (num3) => console.log(num1, num2, num3);
//     sum (5)(3)(8);
// O/P  5 3 8

// Now if i want sum,
// const sum = (num1) =>(num2) => (num3) => console.log(num1+num2+num3);
//     sum (5)(3)(8);
// O/P 16

//Currying madhe function madhun Function return karto ('n' no of arguments = 'n' no of functions )

// Note: See Akshay Saini's video for more. Tyat tyane currying .bind method ani closure methos ne samjavali ahe.
