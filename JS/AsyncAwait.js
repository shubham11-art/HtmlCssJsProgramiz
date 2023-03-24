// HTML file for this Section
//{ <h1>Students List</h1>}
// <ul id="students"></ul>

// Harry CallBacks

// CallBacks can be sync. or async. == .forEach() is sync. and setTimeout, XMLHttpRequest is Async.
// XMLHttpRequest ki value true/false karke hum use async. or sync. kar sakate hai respectively

// const students = [
//   // server's response jo hum XHR or fetch() through lete hai
//   {
//     name: "harry",
//     subject: "abc",
//   },
//   { name: "rohan", subject: "xyz" },
// ];

// function enrollStudent(student, callback) {
//     callback madhe aapan kahihi deu shakato i.e alert, functkion, console etc)
//   // callback will holdback function getStudents from executing till execution of enrollment is over
//   // setTimeout ka use kela karan enrollment sathi mi ji request pathavnar so ti resolve honyasathi vel milava ani mg update yeil.
//   setTimeout(function () {
//     students.push(student);
//     console.log("Student Enrolled");
//     callback();
//   }, 1000);
// }
// //getStudents() madhe mi ti updated list magtoy server kadun
// function getStudents() {
//   setTimeout(function () {
//     let str = " ";
//     students.forEach(function (element) {
//       str += `<li> ${element.subject} </li>`;
//     });
//     document.getElementById("students").innerHTML = str;
//     console.log("Student Fetched");
//   }, 5000);
// }

// let newStudent = { name: "sunny", subject: "pqr" };
// enrollStudent(newStudent, getStudents);

//Harry Promise

// Promise
// resolve
// reject
// pending
// EXAMPLE

// function func1() {
//   // i have returned a Promise which may be resolved or rejected.
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const error = true;
//       if (!error) {
//         console.log("Promise Resolved");
//         resolve();
//       } else {
//         console.log("Promise Not Resolved");
//         reject("sorry not fullfilled");
//       }
//     }, 2000);
//   });
// }

// func1()
//   .then(function () {
//     console.log("Promise Has Been Resolved");
//   })
//   .catch(function (error) {
//     console.log("Very Bad " + error);
//   });

// Here caller func1() == new Promise i.e returned value. returned from function func1.
// .then() ke andar jo function aayega o resolve() ki jagah run hoga. // i.e resolve = function () {
//     console.log("Promise Has Been Resolved");
//   }
// .catch() ke andar jo function aayega o reject() ki jagah run hoga. //  reject=  function (error) {
//     console.log("Very Bad " + error);
//   }

// Varache example with promise

// const students = [
//   // server's response jo hum XHR or fetch() through lete hai
//   {
//     name: "harry",
//     subject: "abc",
//   },
//   { name: "rohan", subject: "xyz" },
// ];

// function enrollStudent(student) {
//   // When i will call enrollStudent to o ek promise karega ki agar server/network se students ka access ho gaya to promise resolve ho gaya and i will run resolve(); lekin agar response nahi aya to thik hai reject(); run kar dena. AND Promise ka kya hota hai ye dekhaneke liye main 1 sec lunga so setTimeout function vaprlay
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       students.push(student);
//       console.log("Student Enrolled");
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 1000);
//   });
// }
// //getStudents() madhe mi ti updated list magtoy server kadun
// function getStudents() {
//   setTimeout(function () {
//     let str = " ";
//     students.forEach(function (element) {
//       str += `<li> ${element.subject} </li>`;
//     });
//     document.getElementById("students").innerHTML = str;
//     console.log("Student Fetched");
//   }, 5000);
// }

// let newStudent = { name: "sunny", subject: "pqr" };
// enrollStudent(newStudent)
//   .then(getStudents)
//   .catch(function () {
//     console.log("Error Occured");
//   });

//***// Ya addhi callbackHell folder vacha.

//**// Async Await - Technical Suneja
// Async
// The word “async” before a function means one simple thing: a function always returns a promise.
// await
// works only inside async functions
// The keyword await makes JavaScript wait until that promise settles and returns its result.
// await literally suspends the function execution until the promise settles, and then resumes it with the promise result.

//*// Error Handling in Async and Await
// Error can be rejected promises, or typing error or variable initializing/defining error.

//1. try{}catch(){} // async function chya aat madhala code try {} madhe lihun error catch karayachi.

//2. Async function chya aat await barobar function call karayach ahi tyala baher .then().catch() attach karayach or async function chya aat w/o await function call karayacha ani tyala tithech .then().catch() attach karayach.
// Ex async function (){
// const cheese = await getcheese();
// }
// getcheese().then().catch()
// OR
// async function (){
// const cheese = getcheese().then().catch();
// }

//3. .catch()
// EX const cheese = await getcheese().catch(()=>{})

// async function will always return a Promise us Promise ke resolve hone ka intzar karna padega and usaki value paane ke liye hume .then() karna padega,
// async function chya aat(after calling async function) jithe await disel tithan to parat function chya baher yeil to execute remaining JS code and after executing all code it will again go back to await.
// Aur await ke sath maine function ke under ek aur promise ka intezar kiya hai. await ka kam asynchronousely handle ho raha hai.
// When i will reach to return word inside async function it implies that returned promise by async function got resolved then it will go to the caller and execute .then()
// response.json() bhi ek promise return karata hai

// async function harry() {
//   console.log("Inside a function");
//   const response = await fetch("https://api.github.com/users");
//   console.log("Before Response");
//   const users = await response.json();
//   console.log("After Response");
// users madhe data aahe, jar aatunach mala tyala kuthe vaprayachay tar vapru shakato but return kelyamule to data promise mhanun return zalela aahe so realization sathi tyavar .then() vapral aahe.

//   return users;
// }
// console.log("Before calling a function");
// let a = harry();
// console.log("After calling a function");
// console.log(a);
// a.then((data) => console.log(data));
// console.log("Last Line of code");

// O/P
// Before calling a function
// Inside a function
// After calling a function
//  Promise {<pending>}
//  Last LIne of code
//  Before Response
//  After Response
//  (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// Varchya code madhe fetch() returns us a promise, response.json() also returns us a promise. But tya promises chya value realization sathi aapan .then() nahi vaparal tar await vaparal. So await ch kaam kay aahe tar till that promise settles, it stops the execution of code. Ani await mule we get complete resolved promise whose value can be realized/used directly. Async function also returns a promise and to realize the value we ATTACH .then() to it.

//TASK1 -  fetch ne promise return kel, te resolve zalyanantar tyatil data realize karnyasathi mi .then() function attach kel to that promise. (.then() madhe jo res ahe tyat mi to data ghetla). When i logged res i get to know ki it again returning a promise. Parat .then() pasun vachanyasathi we used await. Await fakt async madhech chalate mhanun async ghetalay. Await stops the execution till that promise settles. Await mule te promise(i.e tyatil data) realization yogya hot w/o .then.

//**// Jithe apan API call karun promise yaych and .then() vaprayacho to realize the data. Tithe aapan direct await barobar api call karto ani direct data realize karto karan promise settle zalel aahe. Just we need to wrap this await inside a async function.

// Ex

// Promise Chaining

// let array = [
//   {
//     name: "Ajay",
//     bday: 22,
//   },
//   {
//     name: "nikhil",
//     work: "binkami",
//   },
// ];

// Callback

// function getData(arr) {
//   let str = "";
//   setTimeout(() => {
//     arr.forEach((element) => {
//       str += `<li> ${element.name} </li>`;
//       document.getElementById("sata").innerHTML = str;
//     });
//   }, 2000);
// }
// getData(array);

// function add(object, getData) {
//   setTimeout(() => {
//     array[array.length] = object;
//     getData();
//   }, 1000);
// }
// add({ name: "suchit", bday: 21 }, getData);

// Promise

// function getData() {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve("Successfull");
//     } else {
//       reject("Failed");
//     }
//   });
// }

// getData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Aync Await

// async function sum() {
//   return (data = await getData());
// }
// sum().then((res) => {
//   console.log(res);
// });
