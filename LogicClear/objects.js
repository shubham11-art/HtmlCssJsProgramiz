//***// Object = An object is written in a key/value pair. The key/value pair is called a property.
// for..of loop is for the iterables, object is not iterable.

//    REVISION   REVISION

//1. Create Object object literal, const objectName = new Object();, function sum (){key: value, key: value, key: value }
//const person = new sum();

//2. Remove a Property from an Object   1) delete objectName.key      2) delete objectName['key']

//3. Check if a Key Exists in an Object 1) "key" in objectName;  2) objectName.hasOwnProperty('key');
// Both returns Boolean value

//4. Clone a JS Object   1)Assign it to another variable.   2)Object.assign({}, objectName)  // Best Method    3)Spread Syntax
// 4)JSON.parse(JSON.stringyfy(objectName));

//5. Looping Through an Object    1) for..in loop to access key (yaat ObjectName[key] = value of that key)
//                                2) for..of(Object.values) loop to access values
//                                3) for..of(Object.entries) loop to access both key and value.

// [                                      // NOTE
//  For iterating through an ARRAY......  1) for..of loop gives elements
//                                        2) for..in loop gives index   ]

// [                                      // NOTE
//  For iterating over a STRING......     1) for..of loop gives letters
//                                        2) for..in loop gives index   ]

//6. Merge Property of Two Objects      1)Using Object.assign()    2)Using Spread Operator

//7. Count the Number of Keys/Properties in an Object        1)for...in loop      2)Object.keys(ObjectName)

//8. Add Key/Value Pair to an Object    1) Dot Notation(objectName.key = ;)    2) Bracket Notation(objectName['key'] = ;)
// like we delete, we add

//9. Convert Objects to Strings         1)JSON.stringify(objectName)           2) String(objectName)

//10. Replace all Instances of a Character in a String      1)Using Regex(Regular Expression)     2)Using Built-in Methods(.split() and .join())

//2 in Programiz// You can create an object in three different ways:

//1.Using object literal
// const person = { key: value, key: value, key: value };

//2.By creating instance of Object directly
// SYNTAX
// const objectName = new Object();
// const person = new Object ( { key: value, key: value, key: value } );

//3.By using constructor function
// function sum (){key: value, key: value, key: value }
// const person = new sum();

// here new sum() creates a new object.
// as assigned to a variable person, person is a object now.

//***//NOTE
// jar fakt new sum(); lihil asta without assigning it to anything tar sum will not become an object te functionach rahat.

//3// Remove a Property from an Object

//the delete operator is used to remove a property from an object.
// We can use it in TWO WAYS

// SYNTAX
// delete objectName.key      //withoutSpace
// delete objectName['key']   //withoutSpace and quote is compulsory

//You can use the delete operator with . or [ ] to remove the property from an object.
// .key => . barobar direct key ch naav pass karayach where key could be a function,an object, an array or of any data type.
// ['key']  key ch naav pass karayach where key could be a function,an object, an array or of any data type.

//***// Note: You should not use the delete operator on predefined JavaScript object properties

//4// Check if a Key Exists in an Object

// TWO METHODS are used
// In both ways key is passed in quotes.

//1. in operator is used to check if a key exists in an object.
// Returns Boolean value

//SYNTAX
// "key" in objectName;
// "name" in person;  // O/P is Boolean value.

//2. the hasOwnProperty() method is used to check if a key exists in an object.
// Returns Boolean value

//SYNTAX
// objectName.hasOwnProperty('key');
// person.hasOwnProperty('name');

//Ex
// const person = {
//   id: 1,
//   name: "John",
//   age: 23,
// };

// // check if key exists
// const hasKey = "name" in person; // const hasKey = person.hasOwnProperty('name');

// console.log(hasKey) // true

// if (hasKey) {
//   console.log("The key exists.");
// } else {
//   console.log("The key does not exist.");
// }
// Output  The key exists.

//5// Clone a JS Object
// 4 WAYS
// Assign it to another variable.                 // reference type objects will be created, not a copy
// Object.assign({}, objectName)  // Best Method // shallow Copy - only 1st level is copied
// Spread Syntax                                 // shallow Copy - only 1st level is copied
// JSON.parse(JSON.stringyfy(objectName));       // Deep copy - Any level objects are copied

//1. // Assign it to another variable.

//const person = {
// name: 'John',
// age: 21,
//}
// const copy = person;
// console.log(copy); // {name: "John", age: 21}

//In the above program, the copy variable has the same value as the person object. However, if you change the value of the copy object, the value in the person object will also change. For example,

// copy.name = 'Peter';
// console.log(copy.name); // Peter
//console.log(person.name); // Peter

// The change is seen in both objects because objects are 'reference types'. And both <code>copy</code> and <code>person</code> are pointing to the same object.

//2 // Object.assign()

// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = Object.assign({}, person);

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);

// Output

// {name: "John", age: 21}
// Peter
// John

//The Object.assign() method is part of the ES6 standard. The Object.assign() method performs deep copy and copies all the properties from one or more objects.

//Note: The empty {} as the first argument ensures that you don't change the original object.

//3// Spread Syntax

// program to clone the object
// declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);

// Output

// {name: "John", age: 21}
// Peter
// John

//The spread syntax can be used to make a shallow copy of an object. This means it will copy the object.
//However, the deeper objects are referenced.
//For example,

// const person = {
//     name: 'John',
//     age: 21,

//     // the inner objects will change in the shallow copy
//     marks: { math: 66, english: 73}
// }

// // cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson); // {name: "John", age: 21, marks: {…}}

// // changing the value of clonePerson
// clonePerson.marks.math = 100;

// console.log(clonePerson.marks.math); // 100
// console.log(person.marks.math); // 100

// Here, when the inner object value math is changed to 100 of clonePerson object, the value of the math key of the person object also changes.

//4// // JSON.parse()

// declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = JSON.parse(JSON.stringify(person));

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);

// Output

// {name: "John", age: 21}
// Peter
//John

// Note: JSON.parse() only works with Number and String object literal. It does not work with an object literal with function or symbol properties.

//6// Looping Through an Object

// NOTE
//***// for...in  and for...of madhe jithe jithe me key or value as lihitoy tithe kontahi naav lihun(thapa/sum/ganesh) aapan output gheu shakato.

//**// NOTE OneLine
// for..in loop to access key (yaat ObjectName[key] ne value access karu shakato.)
// for..of(Object.values) loop to access values
// for..of(Object.entries) loop to access both key and value.

//**// The for...of loop is used to iterate through the values of an iterable. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList etc
//***// Object.entries() will convert object into array i.e iterable madhe.
//**// The for...of loop cannot be used to iterate over an object.

//SYNTAX
// for(variableName value of iterable){

//}

// Ex

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// // using Object.entries
// // using for...of loop
// for (let [key, value] of Object.entries(student)) {
//     console.log(key + " - " +  value);
// }

// Output

// name - John
// age - 20
// hobbies - ["reading", "games", "coding"]

// In the above program, the object is looped using the Object.entries() method and the for...of loop.
// The Object.entries() method returns an array of a given object's key/value pairs. The for...of loop is used to loop through an array.

//NOTE
// Object.entries chya aadhi jar fakt key or value pass kel tar it prints

// //for (let key/value of Object.entries(student)) {
//     console.log(key);
// }

// Output
//[ 'name', 'John' ]
// [ 'age', 20 ]
// [ 'hobbies', [ 'reading', 'games', 'coding' ] ]

//    AND AND AND

// Object.values() will return of values so we can only get values also by using for...of loop.

//for (let value/key of Object.values(student)) {
//     console.log(value/key);
// }

// Output

// John;
// 20
// [("reading", "games", "coding")];

// for...in Method

//The for...in loop is used to iterate through the keys of an object.
//SYNTAX
// for(variableName key/element in objectName){

//}

// **// NOTE
// arrayName[i] = Element of that index
// objectName[key] = Value of that key in that Object

//Ex for...in loop

// const student = {
//   name: "John",
//   age: 20,
//   hobbies: ["reading", "games", "coding"],
// };

// // using for...in
// for (let key in student) {
//   let value;

//   // get the value
//   value = student[key];

//   console.log(key + " - " + value);
// }

//NOTE
//The for...in loop will also count inherited properties.

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// const person = {
//     gender: 'male'
// }

// // inheriting property
// student.__proto__ = person;

// for (let key in student) {
//     let value;

//     // get the value
//     value = student[key];

//     console.log(key + " - " +  value);
// }

// Output

// name - John
// age - 20
// hobbies - ["reading", "games", "coding"]
// gender - male

// inherited property nantar suddha jar aaplyala fakt original object madhil keys access karayachya astil tar we use hasOwnProperty() method.
// If you want, you can only loop through the object's own property by using the hasOwnProperty() method.

// if (student.hasOwnProperty(key)) {
//     ++count:
// }

// EX
// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// const person = {
//     gender: 'male'
// }

// // inheriting property
// student.__proto__ = person;

// for (let key in student) {
//     let value;
// if (student.hasOwnProperty(key)) {
//
//     // get the value
//     value = student[key];

//     console.log(key + " - " +  value);
// }
// }

// Output

// name - John
// age - 20
// hobbies - ["reading", "games", "coding"]

//7// Merge Property of Two Objects

// TWO WAYS

//1. Using Object.assign()
// SYNTAX
// Object.assign(object1, object2, etc)

//2. Using Spread Operator
//  SYNTAX
//  {...object1, ...object2, ...etc}

// Ex

// const person = {
//   name: "Jack",
//   age: 26,
// };

// // object 2
// const student = {
//   gender: "male",
// };

// // merge two objects
// const newObj = Object.assign(person, student);

// console.log(newObj);

// Output
// {
//     name: "Jack",
//     age: 26,
//     gender: "male"
// }

//1. Object.assign()

//2. Spread Operator

// EX
// const person = {
//   name: "Jack",
//   age: 26,
// };

// // object 2
// const student = {
//   gender: "male",
// };

// // merge two objects
// const newObj = { ...person, ...student };

// console.log(newObj);

// Output
// {
//     name: "Jack",
//     age: 26,
//     gender: "male"
// }

//***// NOTE
// In both the above examples, if the two objects have the same key, then the second object's key overwrites the first object's key.

//8// Count the Number of Keys/Properties in an Object

// TWO WAYS
// for...in loop
// object.keys(ObjectName)

//1.  for....in loop
// the for...in loop increases the count by 1 for every key/value in an object.

// Ex

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// let count = 0;

// // loop through each key/value
// for(let key in student) {

//     // increase the count
//     ++count;
// }

// console.log(count);

// Output
// 3

// NOTE
// ++count => Yaach only work is, jenvha condition true hoil tenvha control loop madhe yaeil ani tyamule ++count will happen. Jenvha condtion false hoil tenvha contrl aat janar nahi ani count band hoil.

// NOTE
// While using the for...in loop, it will also count inherited properties.

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// const person = {
//     gender: 'male'
// }

// student.__proto__ = person;

// let count = 0;

// for(let key in student) {

//     // increase the count
//     ++count;
// }

// console.log(count); // 4

// NOTE
// If you only want to loop through the object's own property, you can use the hasOwnProperty() method inside the for....in loop.

// if (student.hasOwnProperty(key)) {
//     ++count;
// }

// Use
//   let count = 0;
// for(let key in student) {
//   if (student.hasOwnProperty(key)) {
//         ++count;
//  }
//  }
// console.log(count);

//2. Object.key()

// Ex

// program to count the number of keys/properties in an object

// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// // count the key/value
// const result = Object.keys(student).length;

// console.log(result);

// Output
// 3

//***// NOTE
// The Object.keys() method returns an array of a given object's own enumerable property names i.e. ["name", "age", "hobbies"].
// The length property returns the length of the array.

//9// Add Key/Value Pair to an Object

// like we delete, we add

// TWO WAYS
// Dot Notation(objectName.key = ;)
// Bracket Notation(objectName['key'] = ;)

//1. Dot Notation
// const person = {
//     name: 'Monica',
//     age: 22,
//     gender: 'female'
// }

// // add a key/value pair
// person.height = 5.4;

// console.log(person);

// Output
// {
//     name: "Monica",
//     age: 22,
//     gender: "female",
//     height: 5.4
// }

//2. Bracket Notation
// const person = {
//     name: 'Monica',
//     age: 22,
//     gender: 'female'
// }

// // add a key/value pair
// person['height'] = 5.4;

// console.log(person);

// Output
// {
//     name: "Monica",
//     age: 22,
//     gender: "female",
//     height: 5.4
// }

//10// Convert Objects to Strings

// TWO WAYS
// JSON.stringify(objectName)
// String(objectName)

//1. JSON.stringify(objectName)

// const person = {
//     name: 'Jack',
//     age: 27
// }

// const result =  JSON.stringify(person);

// console.log(result);
// console.log(typeof result);

// Output
// {"name":"Jack","age":27}
// string

//2. String(objectName)

// const person = {
//     name: 'Jack',
//     age: 27
// }

// const result1 = String(person);
// const result2 = String(person['name']);

// console.log(result1);
// console.log(result2);

// console.log(typeof result1);

// Output
// [object Object]
// Jack
// string

//11// Replace all Instances of a Character in a String

// TWO WAYS
// Using Regex(Regular Expression)
// Using Built-in Methods(.split() and .join())

//1. Regex(Regular Expression)
// RegEx is used with the .replace() method to replace all the instances of a character in a string.

// const string = 'Learning JavaScript Program';

// const result = string.replace(/a/g, "A");

// console.log(result);

// Output
// LeArning JAvAScript ProgrAm

//2. Built-in Methods(.split() and .join())

//.split() methos ,returns an array, so we can use .join() method 'joins' an array into the 'String'.

// const string = 'Learning JavaScript Program';

// const splitString = string.split('a');
// console.log(splitString);

// const result = splitString.join('A');

// console.log(result);

// Output
// ['le', 'rning', 'j', 'v, 'Script', 'progr', 'm']
// LeArning JAvAScript ProgrAm
