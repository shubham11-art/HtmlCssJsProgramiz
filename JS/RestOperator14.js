// Rest Operator seperate Video

//*// When destructuring an array - the rest operator combines the remaining elements of an array into a variable:
// let [x, ...remaining] = [1, 2, 3, 4];
// console.log(x);    // O/P  1
// console.log(remaining); // O/P  [2, 3, 4]  i.e array
//console.log(...remaining);  //O/P 2, 3, 4  i.e  value

//*// The rest parameter allows us to represent an indefinite number of arguments as an array. By using the rest parameter, a function can be called with any number of arguments.
//*// Rest operator combines the values into an Array.

// function sum(a,b,c){
//     console.log(a+b+c);
// }
// sum(1,2,3,4,5,6);
// O/P  6  i.e a,b,c ne pahilya teench value ghetlya.

// SYNTAX
// 3 dots and variable name(without space)

// function sum(...input){
//     console.log(input);
// }
// sum(1,2,3,4,5,6);
// O/P  [1,2,3,4,5,6]   i.e an array

// function sum(...input){
//     console.log(...input);
// }
// sum(1,2,3,4,5,6);
// O/P   1 2 3 4 5 6   i.e values

// Note: i.e Rest Operator is 3 dots and variable name(without space). tyat bagha only variable name(input) gets assigned an array and whole rest Operator(...input) get assigned values.

// To sum them i can use for of loop(i can get output of this in 3 different ways)
//1. function sum(...input){
//     let total = 0;
// for(let i of input){
//     total += i;
// }
// console.log(total);
//  }
// sum(1,2,3,4,5,6);
// O/P 21

//2. function sum(...input){
//     let total = 0;
// for(let i of input){
//     total += i;
// }
// return total;
//  }
// console.log(sum(1,2,3,4,5,6));
// O/P 21

//3. function sum(...input){
//     let total = 0;
// for(let i of input){
//     total += i;
// }
// return total;
//  }
// const addition = sum(1,2,3,4,5,6);
// console.log(addition);
// O/P 21

// FUN suppose
// function sum(...input){
//     let total = 0;
// for(let i of input){
//     total += i;
// console.log(total);
// }
//  }
// sum(1,2,3,4,5,6);
// O/P
// 1
// 3
// 6
// 10
// 15
// 21

// FUN Game
// function sum(a,b,...c){
//     console.log(a);
//     console.log(`${a} ${b}`);
//     console.log(c);
//     console.log(...c);
//     console.log(c[0]);
//     console.log(c.length);
//     console.log(c.indexOf['bhajji']);
// }
// sum('sachin','sehwag','dravid','dhoni','bhajji');
// O/P
// sachin
// sachin sehwag
// [ 'dravid', 'dhoni', 'bhajji' ]
// dravid dhoni bhajji
// dravid
// 3
// 2
