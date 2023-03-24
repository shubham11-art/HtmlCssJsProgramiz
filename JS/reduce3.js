//   6: 19:00
//  .reduce() ====> Single Value

//  flattens an Array means it convert 3d or 2d array into a single dimensional array

//  The reduce() method executes a reducer function for array element.
//**//  The reduce() method returns a single value: the function's accumulated result. i,e here operations ase astat jithe aaplyala single value expected asate
//  The reduce() method does not execute the function for empty array elements.
//**//  The reduce() method DOES NOT CHANGE THE ORIGINAL ARRAY.

// The reducer function takes four arguments:
// Accumulator
// Current Value
// Current index
// Source Array

//  syntax

//  let arr;
//  let newArray = arr.reduce((accumulator, currentValue, currentIndex, arr)=>{
//  },initialValue);

//**//  working - cuurentValue kay karnar tar every time value access karnar and accumulator is like container which stores the value ani yamulech aaplyala single value bhetate.
//**//  initialVlaue mhanje it get passed to the accumulator.

//   Use

// let arr = [4, 5, 6];

// let newarr = arr.reduce((accumulator, curValue)=>{
//     return accumulator += curValue;

// });

// addition          ===>  +=
//    multiplication ===>  *=
//    substraction   ===>  -=

// console.log(newarr);

// Deprecated
// Flatten an array i.e converting 2D/3D into 1D
// 2D/3D means array in an array i.e array chya aat elements mhanun array asto

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

// ES10 madhe new feature aale ahe to flatten an array because in .reduce() we Cant flatten nested array.
// That method is .flat()
// New Way
// const arr = [
//     ['a', 's'],
//     ['f', 'g',['e','f']]
// ];

// console.log(arr.flat(2)) ...// .flat(x), where x is an argument, which represents upto what level we want to flatten. Level=Nested array. We can pass value Infinity to flatten all the arrays nested inside main array.
//O/P [ 'a', 's', 'f', 'g', 'e', 'f' ]
