// var a = 5;
// var b = 8;
// var c = a + b;
// console.log(c);
// console.log(square);

// function square(num) {
//   var ans = num * num;
//   console.log(ans);
//   // scope chain
//   console.log(c);
// }

// square(2);

// // const square = () => {};

// // hoisting
// console.log(d);
// var d = 9;
// console.log(d);

// // hoisted but in temporal dead zone
// console.log(num); // not accessed
// let num;
// console.log(num); // accessed

// block scoped let and const
// jar nested function asel ani baherchya block madhe let or const intialized astil tar, tya baherchya function madhe te block aahet i.e tya function chya aat kitihi block asudya he baheril aatmadhe access hotat. i.e jya block madhe defined aahe tya block sathich to accessible asto.
// function one() {
//   let num = 10;
//   const sum = 12;
// }

// // block Scope
// // these curly braces can be of function, loop etc

// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }

// block scope madhe baher ka access nahi karu shakat karan it gets deleted after execution.

// Closures

// function x() {
//   var a = 1;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z());

// functions

// function sum(params) {}
// sum();

// function sum(a, b) {
//   var total = a + b;
//   return total;
//   console.log(total);
// }
// console.log(sum(1, 2));

// var one = function name(params) {

// }
// one()

// Function madhe caller kon aahe, return kay kartoy, ani kontya scope varti kartoy he mahtavache aahe.

// Sumya Interview
// non primitive data types - array and object where we store multiple dataType values.
// microtask queue, handles promises, promise.all to handle all calls, fail zalyavar .then and .catch ani catch madhun parat promise return karun resolve karayach.
// const variable la aapan value assign karu shakato how? tar object madhe referencing karun.

// JavaScript

// Loops madhe Initialization, Condition, Iteration ya 3 gosti aahet and then Code(operation) to be executed.

// Fat Arrow Function
// const sum = ()=>{}
// sum();

// Array
// let arr = [1, "a", 3, "bunty", "nikhil"];

// arr.length
// arr[index]

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let element in arr) {
//   console.log(element);
// }
// for (let elements of arr) {
//   console.log(elements);
// }

// .forEach() == Combination of for..in and for..of
// arr.forEach((elements, index, arr, this)=>{console.log(elements);})

// Searching Methods
//indexOf  // arr.indexOf("nikhil"); OR console.log(arr.indexOf("a", 3));
//lastIndexOf  // console.log(arr.lastIndexOf(3)); OR console.log(arr.lastIndexOf(3, 1));
//includes  // console.log(arr.includes("sham")); OR console.log(arr.includes(3));

//***// .find((element)=>{}), .findIndex((element)=>{}), .filter((element)=>{}) => They all take same callback as .forEach() but here in these 3 methods only element pass karto ani tyach O/P gheto.

// .find(()=>{}) // takes callback(single argument = element) and returns 1st matched element
// console.log( arr.find((element) => { return element < 4;  }) );

// .findIndex(()=>{}) // takes callback(single argument = index) and returns index of 1st matched ekement
// console.log( arr.findIndex((value) => { return value == "bunty";}));

// .filter(()=>{})  // returns an array of elements of satisfied condition
// let variable = arr.filter((elements, index, arr) => { return index > 200;});
// console.log(variable);

// Sorting
// let arr = ["a", "d", "z", "f", "p"];

// arr.sort();   // Ascending sort
// arr.reverse(); // Reverse the original array
// arr.sort();
// arr.reverse(); // Descending sort
// console.log(arr);

// CRUD Operation

// Add element to an array
// arr[index] = value; // value will be added to the array arr at index.
// arr[index];  // return the element at that index.

// arr.push("akshay", 2);
// console.log(arr.push("akshay", 2)); // returns length of an array
// console.log(arr);                   // returns array

// arr.unshift("naad");
// console.log(arr.unshift("naad"));   // returns length of an array
// console.log(arr);                    // returns array

// arr.pop();
// console.log(arr);                    // returns array
// console.log(arr.pop());              // returns popped element

// arr.shift();
// console.log(arr);                    // returns array
// console.log(arr.shift());            // returns shifted element

// Splice Method
// arr.splice(index, deleteCount, Update/add at index)  // updates or adds an element
// arr.splice(index, 1);  // deletes an element
// let deletedElement = arr.splice(index, 1);  // Returns deleted element or empty array if no element deleted.

// Array Programiz Learning
// array elements jar access karayache astil tar, for..of, for..loop and arr[i], for..in and arr[i], .map(), .forEach().
// for..of, for..loop, for..in, if..else madhe aapan variables declare karat nahi, te Jya function madhe wrap kele aahet tyat declare karayache.
// set.has() // has only works for set.

//**// Array varti logic lavtana pan sop aahe, fakt kay karayachay tar --  kashyacha access pahije, tyanusar loop kas run karnar, elements access kase karnar, te delete or push kase karnar, store kuthe karayache ani return kay karnar yevhadach lekshya dyayach ani tya sathi array methods yen garjech aahe.

// String

// Escape Chracter - \ before the quotes.

// string.indexOf()
// string.lastIndexOf()
// string.search() // returns index of 1st match
// string.match()  // returns array of matched element

// string.slice()
// string.substring()
// string.substr()

// string.replace()
// string.replace(/a/g, "")

// string.charAt()
// string[index]

// string.toUpperCase()
// string.toLowerCase()
// string1.concat(string2) and with backtick syntax
// string.trim()
// string.trimStart()
// string.trimEnd()

// string.split(Basis)

// string var mi for..of, for..in loop vaprushakato.
// string.include() pan gheu shakato

// String - Programiz - Learnings
// string var seperately split, reverse, join etc like array nahi vapru shakat. Either sagale ekdach i.e string.split("").reverse().join(""); Or each operation assigning to various variable karayach i.e let sort = string.split(""); let words = sort.sort();   let hug = words.join("");
//

// Object
// Inside object function - getData(){}
// this cha scope in object ha object purtach asto.

// delete objectName.key
// delete objectName["key"]

// add key: value to object
// objectName.key = value;
// objectName["key"] = value;

// "key" in objectName  // boolean value
// objectName.hasOwnProperty("key") // boolean value

// for...in // give keys // objectName[key] - gives value of that key
// objectName[key]  // returns value of that key

//*// Khalchya methods kayam Capital letter ne suru honar karan variables small ne hotat.
// Object.assign(objectName)  // ha object dusarya variable la assign karto
// Object.keys(objectName)  // returns an aaray
// Object.values(objectName)
// Object.entries(objectName) // convrts object to an array and returns an aaray of each key:value pair
// Object.fromEntries()     // converts array back into the object.

//*// Shallow Copy vs Deep copy
// There are two ways to clone an object in Javascript:

// Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
// A shallow copy can be achieved using the spread operator (…) or using Object.assign

// Deep copy: means that all levels of the object are copied. This is a true copy of the object.
// A deep copy can be achieved using JSON.parse + JSON.stringify

//*// Just assigning an object to another variable creates reference type and doesnt do either shallow or deep copy.
