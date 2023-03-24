//11:45:00
//https://flaviocopes.com/

// ECMAScript 2018 / ES9

// Rest/Spread properties
// Asynchronous iteration
// Promise.prototype.finally()

//11:47:40
// Rest/Spread properties
//+*// Je aapan Array barobar karat hoto with the help of Rest/Spread operator now we can do the same with Object

//1. Spread Operator
// let person = {name : 'abc', age : 21}
// let sPerson = {...person}; here i can also add more key:value pairs if i want like
// console.log(sPerson);
// O/P  {name : 'abc', age : 21}
//let sPerson = {...person, college : 'abc', area : 'nagar'};

//2. Rest Operator
//let { x, ...remaining } = { x: 1, a: 2, b: 3, c: 4 };
//console.info(x); //O/P  1
//console.info(remaining); //O/P  {a: 2, b: 3, c: 4} i.e object
//console.info(...remaining); //O/P  Found non-callable @@iterator
//       OR OR OR
// assiging like a destructring
// let rest = { x: 1, a: 2, b: 3, c: 4 };
// let { x, ...remaining } = rest;
//console.info(x); //O/P  1
//console.info(remaining); //O/P  {a: 2, b: 3, c: 4} i.e object
//console.info(...remaining); //O/P  Found non-callable @@iterator
