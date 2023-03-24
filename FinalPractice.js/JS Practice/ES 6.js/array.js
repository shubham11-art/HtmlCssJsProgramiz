// Arrays

// let array = ['a', 'b', 'c', 'd', 'e'];

// console.log(array[2]);
// console.log(array.length);
// console.log(array[array.length-1]);
// O/P
//c
//5
//e

//2.
// for in
//let array = ['a', 'b', 'c', 'd', 'e'];
// for (let elements in array) {
//   console.log(elements);
// }
//O/P index numbers
// 0
// 1
// 2
// 3
// 4

// for of
//let array = ['a', 'b', 'c', 'd', 'e'];
// for (let elements of array) {
//   console.log(elements);
// }
//O/P elements of an array
//a
// b
// c
// d
// e

// .forEach()
//Syantax  // arrayName.forEach(function(elements, index, array, this){
// console.log(elements, index, array,);
// })
//let array = ["a", "b", "c", "d", "e"];
// array.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });
//   OR  OR  OR
// array.forEach((element, index, array)=> {
//   console.log(element, index, array);
// });
// O/P single element, single index, single array ch O/P asach ahe jar individual kadhal tar
// a 0 [ 'a', 'b', 'c', 'd', 'e' ]
// b 1 [ 'a', 'b', 'c', 'd', 'e' ]
// c 2 [ 'a', 'b', 'c', 'd', 'e' ]
// d 3 [ 'a', 'b', 'c', 'd', 'e' ]
// e 4 [ 'a', 'b', 'c', 'd', 'e' ]

//**// Array Methods
//1. .toString()
//**//The JavaScript method toString() converts an array to a string of (comma separated) array values.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.toString();
// O/P Banana,Orange,Apple,Mango

//2. .join()
//**// The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition "you can specify" the separator:
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.join(" *///-/+/@/#/$/%/^/&/ ");
// O/P Banana * Orange * Apple * Mango

//3. JavaScript Array delete() [delete arrayName[0=index]]
//Warning !
//Array elements can be deleted using the JavaScript operator delete.
//Using delete leaves undefined holes in the array.
//Use pop() or shift() instead.

//Ex

// <p id="demo1"></p>
//<p id="demo2"></p>

/* <script>
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo1").innerHTML = "The first fruit is: " +fruits[0]; 
  delete fruits[0]; 
  document.getElementById("demo2").innerHTML = "The
  first fruit is: " + fruits[0];
</script>; */
// banana delete kela ani nantar print kela tar undefined dakhaval

//O/P
//The first fruit is: Banana
//The first fruit is: undefined

//4. Merging (Concatenating) Arrays
//The .concat() method creates a new array by merging (concatenating) existing arrays:
//**//The .concat() method does not change the existing arrays. It always returns a new array.

// Ex
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
//**// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);
//O/P
// [Cecilie,Lone,Emil,Tobias,Linus]

//**// The concat() method can take any number of array arguments:

//Example (Merging Three Arrays)
//const arr1 = ["Cecilie", "Lone"];
//const arr2 = ["Emil", "Tobias", "Linus"];
//const arr3 = ["Robin", "Morgan"];
//**//const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);
//O/P
// [Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan]

//The concat() method can also take strings as arguments:

//Example (Merging an Array with Values)
//const arr1 = ["Emil", "Tobias", "Linus"];
//const myChildren = arr1.concat("Peter");
// console.log(myChildren);
//O/P
// [Emil,Tobias,Linus,Peter]

//Array slice()
//**// The .slice() method slices out a piece of an array into a new array.
//**// Slices from given index number to slice()
//**// The slice() method creates a new array.
//**// The slice() method does not remove any elements from the source array.

//This example slices out a part of an array starting from array element 1 ("Orange"):

//Example
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits.slice(1);
// O/P
// [Orange,Lemon,Apple,Mango]

//**// The slice() method can take two arguments like slice(1, 3).
//**// The method then selects elements from the start argument, and up to (but not including) the end argument.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// O/P
// [Orange,Lemon]

//5.  .every(function (value, index){})
//**// Whether every element satisfies or not
// It checks the given condition for each and every element of an array and returns the boolean value.
// Returns true if and only if all the elements of an array satisfie the condition. otherwise returns false.
// like logical And(&&) operator
//EX
// var a = [10,30,50];
// var every = a.every(function (value, index){
// return value> 10
// })
// console.log(every);
//O/P false

//6. .some(function (value, index){})
// atleast one elements satisfies or not
// opposite to .every()
// Returns true if any of the elements of an array satisfie the condition. otherwise returns false.
// like logical OR(||) operator
//EX
// var a = [10,30,50];
// var some = a.some(function (value, index){
// return value> 10
// })
// console.log(some);
//O/P true

//7. for() loop in array
// let arr = [10, 12, 17];
// let sum = [];
// let arae;
// for loop madhe i is the index no.
// arr[i] => array madhun ya index no. chi value access kartoy
// for (i = 0; i < arr.length; i++) {
//   arae = arr[i] * 5;
//   sum.push(arae);
// }
// console.log(sum);
// O/P [50, 60, 85 ]
// for(loop) wont return an array

//8.   .map()
// let arr = [10, 12, 17];

// let sum = arr
//   .map((element) => {
//     return element * 5;
//   });
// console.log(sum);
// O/P [50, 60, 85 ]
// .map() returns an array

//**// for() and .map() is used to perform the given operation on each and every element. so to perform the same operation on each and every element we should use .map(). Ka? karan .map() can directly access the elements of an array.

// Sort an Array see on W3school

// Finding min value
//let arr = [10, 12, 17, 58, 14, 98, 75, 15];
// let sum = function (zen) {
//   return Math.min.apply(null, zen);
// };
// console.log(sum(arr));
