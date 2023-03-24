//1.  .indexOf()
// Ex let array = ["a", "b", "c", "d", "e"];
//forward search
// console.log(array.indexOf("c"));
// console.log(array.indexOf("c", 3));

//2.  .lastIndexOf()
// Ex let array = ["a", "b", "c", "d", "e"];
// backward search
// console.log(array.lastIndexOf("c"));
// console.log(array.lastIndexOf("c", 3));

//3.  .includes()
// Ex let array = ["a", "b", "c", "d", "e"];
//forward search
// console.log(array.includes("c"));

//4. .find()
//Syantax  // arrayName.find(function(elements, index, array, this){
// console.log(elements, index, array,);
// })
// use to find an element  // returns only 1st match
// const price = [10, 20, 30, 40];
//price.find(function(elements, index, array, this){
// console.log(elements < 30);
// O/P
// 10

// assigning to a variable
//const findPrice = price.find(function(elements, index, array, this){
// (elements < 30);
// }
// console.log(findPrice);

//5. .findIndexOf()
//Syantax  // arrayName.findIndexOf(function(elements, index, array, this){
// console.log(elements, index, array,);
// })
// use to find an index no  // returns index no of only 1st match
// const price = [10, 20, 30, 40];
//price.findIndexOf(function(elements, index, array, this){
// console.log(elements < 30);
// O/P
// 0

//6. .filter()
// syntax same as .find() /.findIndexOf()
// returns a new array

//7.  .sort() and .reverse()
//let array = ["c", "a", "d", "e", "b"];
// console.log(array.sort());
//O/P [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(array.reverse());
// O/P [ 'b', 'e', 'd', 'a', 'c' ]

//array.sort()
// console.log(array.reverse());
//O/P  [ 'e', 'd', 'c', 'b', 'a' ]
