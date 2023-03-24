//11:38:35
//https://flaviocopes.com/

// ECMAScript 2017 / ES8

// Async Await

// 11:39:20
//1. String Padding
// padStart(value) and padEnd(value)
// padStart(value) and padEnd(value), madhe aapan ji pan value denar tevhada space start and end la respectively add honar. Remember that this space includes the 1st and last word of that string.

// Ex :
// let name = 'shubham hushar ahe'.padStart(10);
// console.log(name);
// O/P shubham hushar ahe   no space added (line la add hot nahiye dont know why)

// let name = 'shubham'.padStart(10);  OR // let name = 'shubham';
//                                           console.log(name.padStart(10));
//  console.log(name);
// O/P     shubham    3 spaces added at the start(i.e 3+ 7 letters of shubham)

// let name = 'shubham'.padEnd(10);  OR   let name = 'shubham';
//                                        console.log(name.padEnd(10));
//  console.log(name);
// O/P  shubham       3 spaces added at the end(i.e 3+ 7 letters of shubham)

//11:43:20
// These both are used to run a loop
//2. Object.values(objectName)
// It returns an array containing only values in the form of a string.
// Ex : let person = {name : 'abc', age : 21}
//console.log(Object.values(person));
// O/P [ 'abc', 21 ]

//3. Object.entries(objectName)
// It returns, array of  an array, an array containing arrays of each key and value pair.
// let person = {name : 'abc', age : 21}
//console.log(Object.entries(person));
// O/P [ [ 'name', 'abc' ], [ 'age', 21 ] ]

//ES 10
// Object.fromEntries()
// Object.entries() converts object into an array
// Object.fromEntries() converts array back into an object
// let person = {name : 'abc', age : 21}
// const arrObj = Object.entries(person);
// console.log(arrObj);
// O/P [ [ 'name', 'abc' ], [ 'age', 21 ] ]
// console.log(Object.fromEntries(arrObj));
// O/P { name: 'abc', age: 21 }
