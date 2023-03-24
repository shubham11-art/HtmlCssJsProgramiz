//10:47:40

// Object Oriented Programming in JS
// react, Redux ye sab ab functional prohramming ke aur jaa rahe hai from class.

// Object Literal
// It is a key:value pair data structure
// object = school bag
// Object literal is like a single container where we store different kind of datatypes as a one( like variables, methodas, properties, function etc).

// varibales store single type of data.
// in array we can store multiple data types but we use it to store same type of data(datatypes).

// 10:51:20
// How to Creat an Object
// key are the variables, 'value' is the value stored in it. Functions inside an object are called methods. To get access , we write, objectname.key

// 1st Way
// SYNTAX
// let/const variableName = {
//     key : 'value',
//     key : 'value',
//     key : function(){

//     }
// }

// Ex :let bioData = {
//     myName : "Bunty",
//     myAge : 26,
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${ bioData.myAge}`);
//     }
// }

// console.log(bioData.myName);
// bioData.getData();

// Here Object is bioData, variables are myName, myage, function is getData.

//10:58:00
//2nd Way
// No need to write functions as well after es6
// Ex :let bioData = {
//     myName : "Bunty",
//     myAge : 26,
//     getData (){
//         console.log(`My name is ${bioData.myName} and my age is ${ bioData.myAge}`);
//     }
// }

// console.log(bioData.myName);
// bioData.getData();

//10:59:00
// If want object as a value inside another Object
// Object bioData has a key myName which has Object as a value.
// Ex :let bioData = {
// //     myName : {
//           realName : "Bunty",
//           surName : "gunjal"
// },
//     myAge : 26,
//     getData (){
//         console.log(`My name is ${bioData.myName.realName} and my age is ${ bioData.myAge}`);
//     }
// }

// console.log(bioData.myName.surName);
// bioData.getData();

//11:02:00
//***// this Object
// 'this' object contains the information about current context means current scope. i.e jya context madhe use kelay tyachi information.
// therefore 'this' object can have differet values depending on where it is placed.

// Ex 1. console.log(this)/console.log(this. ....) In this case current contex/scope of 'this' is Window global object  i.e 'this' can access all variables and properties and methods and functions of Window object.

//Ex 2. function name (){
//     console.log(this);
// }
// name();
// here also 'this' has a current contex/scope as Window global object i.e 'this' can access all variables and properties and methods and functions of Window object.

//Ex 3. let surname = 'gunjal';
//  function name (){
//     console.log(this.surname);
// }
// name();
// here also 'this' has a current contex/scope as Window global object i.e 'this' can access all variables and properties and methods and functions of Window object.

//Ex 4. const data = {
//     myAge : 26,
//     myName (){
//         console.log(this);
//     }
// }
// data.myName();
// O/P { myAge: 26, myName: [Function: myName] }
// Here 'this' has a current contex/scope as object scope i.e scope of object data. i.e 'this' has access to all variables and  properties and methods and functions of object data only. i.e scope of this has been blocked by object data.

//***//Ex 5. const data = {
//     myAge : 26,
//     myName :() =>{
//         console.log(this);
//     }
// }
// data.myName();
// O/P {} i.e Window Object
// In Fat Arrow Function current contex/scope of 'this' is not a functional/object scope but Window Object.
//***// this object does not work with Fat Arrow Function because after object oriented programming ES6 arrow Functions ka classes ke saath koi lena dena nahi hai.

// Ex 6. let bioData = {
// //     myName : {
//           realName : "Bunty",
//           surName : "gunjal"
// },
//     myAge : 26,
//     getData (){
//         console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`);
//     }
// }
// bioData.getData();
// O/P My name is Bunty and my age is 26
// here 'this' = bioData i.e scope of 'this' is object scope(bioData cha scope).  Ethe aapan object madhe object use kela hota so i thought baherchya object madhun aatala access nahi honar BUT ZALA.
