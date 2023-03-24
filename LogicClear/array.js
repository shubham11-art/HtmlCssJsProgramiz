//var a = [];
// console.log(a.shfit());
//console.log(a.pop());
//O/P undefined ==> automatic value/dataType if no value given.
//var a = [];
// console.log(a.push());
//console.log(a.unshfit());
//O/P 0 ==> gives length

//***// .unshift() and .push() madhe aapan ji value denar of any data type will be added into the array.

// .join() is used to convert an array into string so => return vale of .join() is string
// .join("") => sign inside the brackets are called as delimiter

// return value depends upon what that method is returning like string or new array, or number(index no) or element(value/undefined) etc

// Empty Array
// const array = [1, 2, 3];

// function myArr(arr) {
//   console.log(array);
//   arr = [];
//   return arr;
// }
// myArr(array);
// console.log(myArr(array));
// O/P
// [1, 2, 3]
// [1, 2, 3]
// []
//i.e  console.log(myArr(array)) yaache 2 output yetayet calling kelyanantar aatla console ani return value i.e bahercha console.
// varcha myArr(array); yaat pan return value save ahe but baher console naslyamule tyane ti print keli nahi.

// REVISION

//1. Remove Specific Item From an Array                1) .push() and for loop      2) .splice() and if

//2. Check if An Array Contains a Specified Value      1) .includes()                2) .indexOf()

//3. Insert Item in an Array                           1) .splice()                 2) arrayName[i] = element;

//4. Append/Add an Object to An Array          1) .push(objectName)      2) .splice(array.length, 0, objectName)     3)Spread Operator

//5. Check if An Object is An Array            1) Array.isArray(arrayName) (Return Boolean Value)

//6. Empty an Array            1) Substituting New Array    2) .splice(0, array.length)       3) Setting Length 0

//7. Add Element to Start of an Array      1) .unshift()     2) .splice()      3) Spread Operator     4) .concat()

//8. Remove Duplicates From Array     1) indexOf() and push()      2) Set

//9. Merge Two Arrays and Remove Duplicate Items    1) concat() and for Loop      2) Spread Syntax and Set

//10. Sort Array of Objects by Property Values

//11. Create Two Dimensional Array              Using for loop
// NOTE
// I can insert empty array in an array through index. Where that empty arrays will be elements of original array having index 0 to n. Ani inserted empty array madhil elements will be elements of that empty array having index 0 to n.

//12. Extract Given Property Values from Objects as Array     1) .map()       2) for...loop

//13. Compare Elements of Two Arrays       1) JSON.stringify()      2) for Loop

//14. Get Random Item From an Array

//15. Perform Intersection Between Two Arrays      1) Set      2) filter() Method
// Je elements same ahet tevhdech print karayache.

//16. Split Array into Smaller Chunks      1) .slice() and for..loop    2) .splice() and while..loop

//17. Check If A Variable Is undefined or null     1) Check undefined or null    2) typeof

//18. Illustrate Different Set Operations 1) Set Union Operation 2) Set Intersection Operation 3) Set Difference Operation 4) Set Subset Operation

// Programing

// Array
// 1. Declaring Empty array to .push() generated outcome.
// 2. arrayName[i], to access elements/values of that perticular array.

//***// NOTE
// Mazya jya methods ahet tya die heart pahije.
// Tya function ani JS barobar use karayachya. Yaat kay add karayachay, kay remove karaychay, kay get karayachay ya nusar use of methods, controlStatements and loops tharnar ahe.
// so logic develope karun ya saglyanch mishran aaplyala vaprayach asat

//1// Remove Specific Item From an Array

// TWO Methods
// .push() and for loop
// .splice()

//1. .push()

// function removeItemFromArray(array, n) {
//     const newArray = [];

//     for ( let i = 0; i < array.length; i++) {
//         if(array[i] !== n) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

// console.log(result);

// Output
// [1, 3, 4, 5]

// Push karayache aslyamule mi for...loop through ashi condition takali ki jo remove karaychay tya veli push sathi control gelach nahi pahije.

//2. .splice()

// function removeItemFromArray(array, n) {
//   const index = array.indexOf(n);

//   // if the element is in the array, remove it
//   if (index > -1) {
//     // remove item
//     array.splice(index, 1);
//   }
//   return array;
// }

// const result = removeItemFromArray([1, 2, 3, 4, 5], 2);

// console.log(result);

//Output
//[(1, 3, 4, 5)];

// NOTE
// The above program(.splice()) only works for arrays without duplicate elements.
// Only the first element of an array that matches is removed.
// For example,
// [1, 2, 3, 2, 5] results in [1, 3, 2, 5]

//2// Check if An Array Contains a Specified Value

// TWO WAYS

// .includes()
// arrayName.includes()

// indexOf()
// arrayName.indexOf()

// 1. includes()

// const array = ["you", "will", "learn", "javascript"];

// const hasValue = array.includes("javascript");

// // check the condition
// if (hasValue) {
//   console.log("Array contains a value.");
// } else {
//   console.log("Array does not contain a value.");
// }

// Output
// Array contains a value.

//2. indexOf()

// const array = ['you', 'will', 'learn', 'javascript'];

// const hasValue = array.indexOf('javascript') !== -1;

// // check the condition
// if(hasValue) {
//     console.log('Array contains a value.');
// } else {
//     console.log('Array does not contain a value.');
// }

// Output
// Array contains a value.

//***/ NOTE
// Return value jar Boolean Value asel tar => we can use if....else with it.

//3//  Insert Item in an Array

// TWO WAYS
// splice()
// Using for Loop (array[i] = element;)

//1. .splice()

// function insertElement() {
//   let array = [1, 2, 3, 4, 5];

//   // index to add to
//   let index = 3;

//   // element that you want to add
//   let element = 8;

//   array.splice(index, 0, element);
//   console.log(array);
// }

// insertElement();

// Output
//[(1, 2, 3, 8, 4, 5)];

//2.  Using for Loop (array[i] = element;)

// function insertElement() {
//     let array = [1, 2, 3, 4];

//     // index to add to
//     let index = 3;

//     // element that you want to add
//     let element = 8;

//     for (let i = array.length; i > index; i--) {

//         //shift the elements that are greater than index
//         array[i] = array[i-1];
//     }

//     // insert element at given index
//     array[index] = element;

//     console.log(array);
// }

// insertElement();

// Output
// [1, 2, 3, 8, 4]

// NOTE : for..loop ugachach use kela ahe.

//***// NOTE
// array[i] => i is just a variableName, i can use any variableName like index/thapa/amba etc.

//4// Append an Object to An Array

// THREE WAYS

// .push(objectName)
// .splice()
// Spread Operator

//1. .push()

// function insertObject(arr, obj) {
//   // append object
//   arr.push(object);

//   console.log(arr);
// }

// // original array
// let array = [1, 2, 3];

// // object to add
// let object = { x: 12, y: 8 };

// // call the function
// insertObject(array, object);

// Output
// [(1, 2, 3, { x: 12, y: 8 })];

//2. .splice()

// function insertObject(arr, obj) {
//   // find the last index
//   let index = arr.length;

//   // appending object to end of array
//   arr.splice(index, 0, object);

//   console.log(arr);
// }

// // original array
// let array = [1, 2, 3];

// // object to add
// let object = { x: 12, y: 8 };

// // call the function
// insertObject(array, object);

// Output
// [(1, 2, 3, { x: 12, y: 8 })];

//3. Spread Operator

// function insertObject(arr, obj) {

//    // append object
//     arr = [...arr, object];

//     console.log(arr);
// }

// // original array
// let array = [1, 2, 3];

// // object to add
// let object = {x: 12, y: 8};

// // call the function
// insertObject(array, object);

// Output
// [1, 2, 3, {x: 12, y: 8}]

//5// Check if An Object is An Array

// NOTE
// For an array, the typeof operator returns as object. So title is Such.

// Method
// Array.isArray(arrayName)
// Return Boolean Value

// function checkObject(arr) {
//   // check if arr is array
//   const result = Array.isArray(arr);

//   if (result) {
//     console.log(`[${arr}] is an array.`);
//   } else {
//     console.log(`${arr} is not an array.`);
//   }
// }

// const array = [1, 2, 3];

// call the function
//checkObject(array);

// Output
// [1,2,3] is an array.

//6// Empty an Array

//THREE WAYS

// Substituting New Array
// .splice()
// Setting Length 0

//1. Substituting New Array

// function emptyArray(arr) {

//     // substituting new array
//     arr = [];

//     return arr;
// }

// const array = [1, 2 ,3];
// console.log(array);

// // call the function
// const result = emptyArray(array);
// console.log(result);

// Output
// [1, 2, 3]
// []

//2.  .splice(0, array.length)

// function emptyArray(arr) {

//     // substituting new array
//     arr.splice(0, arr.length);

//     return arr;
// }

// const array = [1, 2 ,3];
// console.log(array);

// // call the function
// const result = emptyArray(array);
// console.log(result);

// Output
// [1, 2, 3]
// []

//3. Setting Length 0

// program to empty an array

// function emptyArray(arr) {

//     // setting array length to 0
//     arr.length = 0;

//     return arr;
// }

// const array = [1, 2 ,3];
// console.log(array);

// // call the function
// const result = emptyArray(array);
// console.log(result);

// Output
// [1, 2, 3]
// []

//7// Add Element to Start of an Array

// FOUR WAYS
// .unshift()
// .splice()
// Spread Operator
// .concat()

//1. .unshift()

// function addElement(arr) {

//     // adding new array element
//     arr.unshift(4);

//     console.log(arr);
// }

// const array = [1, 2, 3];

// // calling the function
// // passing array argument
// addElement(array);

// Output
// [4, 1, 2, 3]

//2. splice()

// function addElement(arr) {

//     // adding element to array
//     arr.splice(0, 0, 4);

//     console.log(arr);
// }

// const array = [1, 2, 3];

// // calling the function
// addElement(array);

// Output
// [4, 1, 2, 3]

//3. Spread Operator

// function addElement(arr) {

//     // adding element to array
//     arr = [4, ...arr];

//     console.log(arr);
// }

// const array = [1, 2, 3];

// // calling the function
// addElement(arr);

// Output
// [4, 1, 2, 3]

//4. concat()

// function addElement(arr) {

//     // adding element to array
//     arr = [4].concat(arr);

//     console.log(arr);
// }

// const array = [1, 2, 3];

// // calling the function
// addElement(array);

// Output
// [4, 1, 2, 3]

//8// Remove Duplicates From Array

// TWO WAYS

// indexOf() and push()
// Set

//1. indexOf() and push()

// function getUnique(arr){

//     let uniqueArr = [];

//     // loop through array
//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3, 4];

// // calling the function
// // passing array argument
// getUnique(array);

// Output
// [1, 2, 3, 4]

// Working
// The for...of loop is used to loop through all the elements of an arr array.
// The indexOf() method returns -1 if the element is not in the array
//  i is not index here but element.
// uniqueArr.indexOf(i) => yaatil i is element of defined array. So uniqueArr.indexOf(i) will return -1 till it is empty but once elements are pushed it will return some value tenha condition false hoil ani duplicate elements wont be pushed inside.

//2. set()

// function getUnique(arr){

//     // removing duplicate
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3];

// // calling the function
// getUnique(array);

// Output
// [1, 2, 3]

// In the above program, Set is used to remove duplicate items from an array.
// A Set is a collection of unique values.
// The array is converted to Set and all the duplicate elements are automatically removed.
// The spread syntax ... is used to include all the elements of the Set to a new array.

//9// Merge Two Arrays and Remove Duplicate Items

//TWO WAYS
// concat() and for Loop
// Spread Syntax and Set

//1.  concat() and for Loop

// function getUniqueAfterMerge(arr1, arr2){

//     // merge two arrays
//     let arr = arr1.concat(arr2);
//        OR OR OR
//     // merge two arrays
//     let arr = [...arr1, ...arr2];

//     let uniqueArr = [];

//     // loop through array
//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }

// const array1 = [1, 2, 3];
// const array2 = [2, 3, 5]

// // calling the function
// // passing array argument
// getUniqueAfterMerge(array1, array2);

// Working
// i is not index but element of an array.

// Output
// [1, 2, 3, 5]

//2. Spread Syntax and Set

// function getUniqueAfterMerge(arr1, arr2){

//     // merge two arrays
//     let arr = [...arr1, ...arr2];
//        OR OR OR
//     // merge two arrays
//     let arr = arr1.concat(arr2);

//     // removing duplicate
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);
// }

// const array1 = [1, 2, 3];
// const array2 = [2, 3, 5]

// // calling the function
// getUniqueAfterMerge(array1, array2);

// Output
// [1, 2, 3, 5]

//10// Sort Array of Objects by Property Values

// Sorting by custom function
// He baghun ghya Programiz var
// yaane aapan numbers pan tyanchya value nusar sort karu shakato

//11// Create Two Dimensional Array

// Two Dimensional Array Using for Loop

// function twoDimensionArray(a, b) {
//     let arr = [];

//     // creating two dimensional array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i] = [];
//         }
//     }
//           OR OR OR OR

//     // creating two dimensional array
//     for (let i = 0; i< a; i++) {
//             arr[i] = [];
//     }

//     // inserting elements to array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i][j] = j;
//         }
//     }
//     return arr;
// }

// const x = 2;
// const y = 3;

// const result = twoDimensionArray(x, y);
// console.log(result);

// Output
// [[0, 1, 2], [0, 1, 2]]

// WORKING

// Of creating two dimensional array
// It will work without loop of j
// Empty array madhe mi punha empty array taktoay as a element mhanun. i.e tya array madhe arr[0] = [],  arr[1] = [], arr[2] = [] etc (depends on value of i)

// of inserting elements to array
// arr[i][j] => arr[i] will access 1st empty array ani mg [][j] => empty array cha index zala j .
// So [][j] = value; i.e empty array chya j ya index la hi value/element insert kara.

//***// NOTE
// I can insert empty array in an array through index(arr[i] = []). Where that empty arrays will be elements of original array having index 0 to n. Ani inserted empty array madhil elements will be elements of that empty array having index 0 to n.
// Accessing elements of empty array. arr[i][j]; where i = index of empty array and j = index of elements inside that empty array.

//12// Extract Given Property Values from Objects as Array

// TWO WAYS
// .map()
// for...loop

//1. .map()

// function extractValue(arr, prop) {

//     // extract value from property
//     let extractedValue = arr.map(item => item[prop]);

//     return extractedValue;

// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// // passing an array of objects and property 'a' to extract
// const result = extractValue(objArray, 'a');
// console.log(result);

// Output
// [1, 4, 8]

// Working
// map method mule arr madhil elements map zale je item madhe save zale. As elements are objects so item = object now. As we know object['key'] gives us value of that key. So in this case item['a'] will give value of a. As object['key'] this returns array so we got an array.

//2. for..loop

// function extractValue(arr, prop) {

//     let extractedValue = [];

//     for (let i=0; i < arr.length ; ++i) {

//         // extract value from property
//         extractedValue.push(arr[i][prop]);
//     }
//     return extractedValue;
// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// // passing an array of objects and property 'a' to extract
// const result = extractValue(objArray, 'a');
// console.log(result);

// Output
// [1, 4, 8]

// Working
// arr[i][prop] => arr[i] this will access elements. Again same as elements are an objects. So element[prop] = object['key'] will access value of that key.
// Thats why prop is a string to act as a ['key']. 'a' = 'key'.

//13// Compare Elements of Two Arrays
// Compare means i am comparing elements/values of an array

// TWO WAYS
// JSON.stringify()
// for Loop

//1. JSON.stringify()

// function compareArrays(arr1, arr2) {

//     // compare arrays
//     const result = JSON.stringify(arr1) == JSON.stringify(arr2)

//     // if result is true
//     if(result) {
//         console.log('The arrays have the same elements.');
//     }
//     else {
//         console.log('The arrays have different elements.');
//     }

// }

// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];

// compareArrays(array1, array2);

// Output
// The arrays have the same elements.

// The JSON.stringify() method converts an array into JSON string.
// JSON.stringify([1, 3, 5, 8]); // "[1,3,5,8]"

//2.  for Loop

// function compareArrays(arr1, arr2) {
//   // check the length
//   if (arr1.length != arr2.length) {
//     return false;
//   } else {
//     let result = false;

//     // comparing each element of array
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] != arr2[i]) {
//         return false;
//       } else {
//         result = true;
//       }
//     }
//     return result;
//   }
// }

// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];

// const result = compareArrays(array1, array2);

// // if result is true
// if (result) {
//   console.log("The arrays have the same elements.");
// } else {
//   console.log("The arrays have different elements.");
// }

// Output
// The arrays have the same elements

//***// Note: The above program does not work if the array element contains objects.
// For example,
// array1 = [1, {a : 2}, 3, 5];

//14// Get Random Item From an Array

// function getRandomItem(arr) {

//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     // get random item
//     const item = arr[randomIndex];

//     return item;
// }

// const array = [1, 'hello', 5, 8];

// const result = getRandomItem(array);
// console.log(result);

// Output
// 'hello'

//15// Perform Intersection Between Two Arrays
// Je elemengts same ahet tevhdech print karayache.

// Two WAYS
// Set
// filter() Method

//1. Set

// function performIntersection(arr1, arr2) {

//     // converting into Set
//     const setA = new Set(arr1);
//     const setB = new Set(arr2);

//     let intersectionResult = [];

//     for (let i of setB) {

//         if (setA.has(i)) {
//             intersectionResult.push(i);
//         }

//     }

//     return intersectionResult;

// }

// const array1 = [1, 2, 3, 5, 9];
// const array2 = [1, 3, 5, 8];

// const result = performIntersection(array1, array2);
// console.log(result);

// Output
// [1, 3, 5]

//2. filter() Method

// function performIntersection(arr1, arr2) {

//     const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);

//     return intersectionResult;

// }

// const array1 = [1, 2, 3, 5, 9];
// const array2 = [1, 3, 5, 8];

// const result = performIntersection(array1, array2);
// console.log(result);

// Output
// [1, 3, 5]

// Note: You could also use the includes() method to check if the array elements are in both arrays.
// const intersectionResult = arr1.filter(x => arr2.includes(x))

//16// Split Array into Smaller Chunks

// TWO WAYS
// .slice() and for..loop
// .splice() and while..loop

//1. .slice() and for..loop
// function splitIntoChunk(arr, chunk) {

//     for (i=0; i < arr.length; i += chunk) {

//         let tempArray;
//         tempArray = arr.slice(i, i + chunk);
//         console.log(tempArray);
//     }

// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunk = 2;
// splitIntoChunk(array, chunk);

// Output
// [1, 2]
// [3, 4]
// [5, 6]
// [7, 8]

// Working
// The for loop iterates through the elements of an array. During each iteration, the value of i is increased by chunk value (here 2).
// The slice() method extracts elements from an array where:
// The first argument specifies the starting index.
// The second argument specifies the ending index(exclusive).

// .slice() doesnt change original array but returns new one.
// ethe pratyek velela Original array varach operation perform hotay through changing index.

//2. .splice() and while..loop

// function splitIntoChunk(arr, chunk) {

//     while(arr.length > 0) {

//         let tempArray;
//         tempArray = arr.splice(0, chunk);
//         console.log(tempArray);
//     }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunk = 2;
// splitIntoChunk(array, chunk);

// Output
// [1, 2]
// [3, 4]
// [5, 6]
// [7, 8]

// Working
// The while loop is used to iterate over the array until the array is empty.
//**// Ani .splice() is not like .slice()(doesnt change original array).
//**//  .splice() is cutting/changing original array tyamule .splice(0, chunk) he agrument work kartay karan pratyek veli original array navyapasun cut hotoy.
// ani .splice() madhe we are printting the deleted elements.

//17// Check If A Variable Is undefined or null

// TWO WAYS
// Check undefined or null
// typeof

//1. Check undefined or null

// function checkVariable(variable) {

//     if(variable == null) {
//         console.log('The variable is undefined or null');
//     }
//     else {
//        console.log('The variable is neither undefined nor null');
//     }
// }

// let newVariable;

// checkVariable(5);
// checkVariable('hello');
// checkVariable(null);
// checkVariable(newVariable);

// Output
// The variable is neither undefined nor null
// The variable is neither undefined nor null
// The variable is undefined or null
// The variable is undefined or null

//***// NOTE
// In the above program, a variable is checked if it is equivalent to null. The null with == checks for both null and undefined values.
// This is because null == undefined evaluates to true.

//The following code:
// if(variable == null) { ... }
//is equivalent to
//if (variable === undefined || variable === null) { ... }

//***// NOTE
// i.e if condition checks the value stored in the variable or i etc.

//2. typeof

// function checkVariable(variable) {

//     if( typeof variable === 'undefined' || variable === null ) {
//         console.log('The variable is undefined or null');
//     }
//     else {
//        console.log('The variable is neither undefined nor null');
//     }
// }

// let newVariable;

// checkVariable(5);
// checkVariable('hello');
// checkVariable(null);
// checkVariable(newVariable);

// Output
// The variable is neither undefined nor null
// The variable is neither undefined nor null
// The variable is undefined or null
// The variable is undefined or null

//***// Note:
//We cannot use the typeof operator for null as it returns object.

//18// Illustrate Different Set Operations

// TWO WAYS
// Set Union Operation
// Set Intersection Operation
// Set Difference Operation
// Set Subset Operation

//1. Set Union Operation

// function union(a, b) {
//     let unionSet = new Set(a);
//     for (let i of b) {
//         unionSet.add(i);
//     }
//     return unionSet
// }

// // two sets of fruits
// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);

// const result = union(setA, setB);

// console.log(result);

// Output
// Set {"apple", "mango", "orange", "grapes", "banana"}

// Working
// The set union operation combines elements of both sets into one.
// A new set unionSet is created using new Set(). The unionSet variable contains all the values of setA. Then, the for...of loop is used to iterate through all the elements of setB and add them to unionSet using the add() method.
// The set does not contain duplicate values. Hence, if the set contains the same value, the latter value is discarded.

//***// NOTE
// new Set(); method creates the set
// The set does not contain duplicate values.

//2. Set Intersection Operation

// function intersection(setA, setB) {
//     let intersectionSet = new Set();

//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionSet.add(i);
//         }
//     }
//     return intersectionSet;
// }

// // two sets of fruits
// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);

// const result = intersection(setA, setB);

// console.log(result);

// Output
// Set {"apple"}

// The set intersection operation represents elements that are present in both setA and setB.
//A new set intersectionSet is created using new Set(). Then, the for...of loop is used to iterate through the setB. For every element that is present in both setA and setB, they are added to the intersection set.

//3. Set Difference Operation

// function difference(setA, setB) {
//     let differenceSet = new Set(setA)
//     for (let i of setB) {
//         differenceSet.delete(i)
//     }
//     return differenceSet
// }

// // two sets of fruits
// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);

// const result = difference(setA, setB);

// console.log(result);

// Output
// Set {"mango", "orange"}

// The set difference operation represents elements that are present in one set and not in another set.
// Pahilyat la jo element dusryat milel to pahilyatun delete hoil.

// The differenceSet contains all the elements of setA. Then, the for...of loop is used to iterate through all the elements of setB. If the element that is present in setB is also available in setA, that element is deleted using delete() method.

//4. Set Subset Operation

// function subset(setA, setB) {
//     for (let i of setB) {
//         if (!setA.has(i)) {
//             return false
//         }
//     }
//     return true
// }

// // two sets of fruits
// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['apple', 'orange']);

// const result = subset(setA, setB);

// console.log(result);

// Output
// true

// The set subset operation returns true if all the elements of setB are in setA.

// The for...of loop is used to loop through the elements of setB. If any element that is present is setB is not present in setA, false is returned.

//***// Find Largest Number
// let array = [5, 15, 88, 11, 2, 3];
// let newarray = array[0];
// function maximum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > newarray) {
//       newarray = arr[i];
//     }
//   }
// }
// maximum(array);
// console.log(newarray);

// let highest = -Infinity;
// let secondHighest = -Infinity;

// function sum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     highest = Math.max(highest, arr[i]);
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < highest) secondHighest = Math.max(secondHighest, arr[i]);
//   }
// }
// sum(array);
// console.log(highest, secondHighest);
