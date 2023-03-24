//11:49:30
//https://flaviocopes.com/

// ECMAScript 2019 / ES10

//11:50:30
// flat method
// Array.{flat,flayMap}

// Ex:
// Old Way
// const arr = [
//     ['a', 's'],
//     ['f', 'g',['e','f']]
// ];

// const newArray = arr.reduce((acc, value) =>{
//     return acc.concat(value);
// });

// console.log(newArray);
// O/P [ 'a', 's', 'f', 'g', [ 'e', 'f' ] ]
// Nested array flat zala nahi

// New Way
// const arr = [
//     ['a', 's'],
//     ['f', 'g',['e','f']]
// ];

// console.log(arr.flat(2)) ...// .flat(x), where x is a argument, which represents upto what level we want to flatten. Level=Nested array. We can pass value Infinity to flatten all the arrays nested inside main array.
//O/P [ 'a', 's', 'f', 'g', 'e', 'f' ]

//11:54:00
// Object.fromEntries()

// from ES8
////3. Object.entries()
// It returns, array of  an array, an array containing arrays of each key:value pair as values(i.e values return hotat array chya form madhe).
// let person = {name : 'abc', age : 21}
//console.log(Object.entries(person));
// O/P [ [ 'name', 'abc' ], [ 'age', 21 ] ]

// Object.entries() converts object into an array
// Object.fromEntries() converts array back into an object
// let person = {name : 'abc', age : 21}
// const arrObj = Object.entries(person);
// console.log(arrObj);
// O/P [ [ 'name', 'abc' ], [ 'age', 21 ] ]
// console.log(Object.fromEntries(arrObj));
// O/P { name: 'abc', age: 21 }
