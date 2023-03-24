//13:44:00
// Java Script Objectg Notation => JSON

// Like a Object only == curly brackets{}, key:value pair. Difference is JSON considers all data as string so we have " " .
// EX {
//     "name" : "India",
// "population":"140"
// }

// A common use of JSON is to exchange data to/from a web server/s. When sending data to a web server, the data has to be a string. JSON used to transfer data or communicate between two servers. earlier we used XML for this.

// There are 2 methods which are used 90% in the name of JSON

//1. JSON.stringify() Convert a JavaScript object into JSON text and stores that JSON text in a string.
// Ex:
// const obj = {name: "John", age: 30, city: "New York" male : true};
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);
// console.log(tyoeOf myJSON);
// O/P {"name":"John","age":30,"city":"New York","male":true}
//Note:  number and boolean values " " madhe nahi yet.
// string

//2. JSON.parse() Converts JSON text into JavaScript object.
//EX
// const myJSON = {"name":"John","age":30,"city":"New York","male":true}
// const obj = JSON.parse(myJSON);
// console.log(obj);
// O/P {name: "John", age: 30, city: "New York" male : true};
