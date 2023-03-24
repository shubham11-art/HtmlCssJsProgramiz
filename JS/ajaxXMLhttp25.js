//13:27:00
//Ajax Xml based project banvalay

//The XMLHttpRequest(also called xhr ) Object
//All modern browsers support the XMLHttpRequest object.
//The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page. Despite its name,XMLHttpRequest can be used to retrieve any type of data, not just XML
//Modern websites use JSON instead of XML to transfer data

//Syntax for creating an XMLHttpRequest:          variable = new XMLHttpRequest();

//API ka fayada kya hai ki, Ek link banake usape hum data store karke rakhenge fir duniya main koi bhi usako access kar sakata hai

//MY WORDS: XMLHttpRequest- By using this i can retrive a data from URL request without having to do a full page refresh. This means that it is possible to update parts of a web page, without reloading the whole page. i.e Asynchronous operataions aapan perform karu shakato.
//
//What is AJAX?
//AJAX = Asynchronous JavaScript And XML.
//AJAX is not a programming language.
//AJAX just uses a combination of:
//A browser built-in XMLHttpRequest object (to request data from a web server)
//JavaScript and HTML DOM (to display or use the data)
//AJAX allows web pages to be updated Asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

//How Ajax Works Screenshot73

//The keystone of AJAX is the XMLHttpRequest object.

//1.Create an XMLHttpRequest object
//2.Define a callback function
//3.Open the XMLHttpRequest object
//4.Send a Request to a server

//Ajax madhe  XMLHttpRequest object. chya madatine mi API la URL request(call) karun tya API cha  access gheto. API madhun aalela data JSON form madhe asto tyala object format madhe convert karav lagat(JSON.parse() karun convert karto aapan). Ani mg with the help of JavaScript and HTML DOM we diplay it one the screen/web page.

//EX 13:35:00
//Example madhil sagala data aapan API varun access kela ahe.

// Harry
// Modern websites use JSON instead of XML for Data Transfer
// Data can be transferred in any formate(JSON, XML, .txt, .html etc) and in any protocol(http, https etc)
// AJAX uses xhr object to achieve that.
// Vanilla JS means core/pure JS without using any imported library/framework.

// khalchya code chi HTML FILE
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <title>AJAX in one Video</title>
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
//       crossorigin="anonymous"
//     />
//   </head>
//   <body>
//     <h1>Hello, world!</h1>

//     <button type="button" class="btn btn-success" id="fetchBtn">
//       FetchButton
//     </button>
//     <button type="button" class="btn btn-warning" id="populatebtn">
//       Populate
//     </button>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
//       crossorigin="anonymous"
//     ></script>
//     <script src="/index.js"></script>
//   </body>
// </html>

// JS FILE
// console.log("Ajax Tutorial");

// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler() {
//   console.log("You clicked fetchBtn");

//   // Instantiate an xhr object i.e xhr object banana hi banana hai usake baad usako open karna
//   const xhr = new XMLHttpRequest(); // i created xhr object

//   // aur fir is object ko instantiate karna padata hai by opening the object(i.e by open method)
//   // xhr.open("GET", "harry.txt", true);

//   //xhr.open("GET", "https://dummyjson.com/products/1", true); // fake JSON file from google

//   // Use this for post request
//   // post request ke saath kitna bhi bada data send kar sakate hai. Security ke hisab se achha hai. Data hum .xhr.send() ke through bhejate hai
//   // xhr.open("GET", "http://localhost:3000/users.", true);
//   // xhr.getResponseHeader('content-type', 'application/json') // to send data with post request

//   // syntax bagha .open mhanje opening a request,
//   // Arguments
//   // 1]Type of request-i) get- only fetch a data(through url) ii) post- request barobar kahi data pan pathavnar
//   // 2]  Kuthun data ghenar file madhun (.txt), network kadun(url) etc
//   // 3]boolean value how to get data(true => async., false=>sync.)

//   //What to do on progress (i.e jab request chal/progress ho rahi hai) (optional ahe we use it in Loader and Spinners)
//   //i.e jab tak request .onload nahi hoti tab tak hum .onprogress se spinner dikha sakate hai
//   xhr.onprogress = function () {
//     console.log("On Progress");
//   };

//   // sadhya aapli request kontya state madhe ahe he dakhavnyasathi ek method ahe (values from 0 to 4.)
//   // xhr.onreadystatechange = function () {
//   //   console.log("ready state change is ", xhr.readyState);
//   // };

//   // What to do do after data tayar ho jaye i.e request completed. readyState 4 == .onload
//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log(this.responseText);
//     } else {
//       console.log("Some Error Occured");
//     }
//   }; // mala screen var kahi update dyaychi asel tar if madhe DOM cha access gheun through innerHTML mi ti update denar

//   // To send the request // yamule to print hoil
//   // let param = data to be send through post request
//   xhr.send(param);
// }

// Populate Button sathi extra DOM

{
  /* <button type="button" class="btn btn-warning" id="populatebtn">
      Populate
    </button>
    <div class="container">
      <h1>Employe List</h1>
      <ul id="list"></ul>
    </div> */
}

//Populate Button sathi coding
// console.log("Ajax Tutorial");

// letfetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler() {
//   console.log("You clicked fetchBtn");

//   // Instantiate an xhr object i.e xhe object banana hi banana hai usake baad usako open karna
//   const xhr = new XMLHttpRequest(); // i created xhr object

//   // aur fir is object ko instantiate karna padata hai by opening the object(i.e by open method)
//   // xhr.open("GET", "harry.txt", true);

//   //xhr.open("GET", "https://dummyjson.com/products/1", true); // fake JSON file from google

//   // Use this for post request
//   // post request ke saath kitna bhi bada data send kar sakate hai. Security ke hisab se achha hai. Data hum .xhr.send() ke through bhejate hai
//   // xhr.open("GET", "http://localhost:3000/users.", true);
//   // xhr.getResponseHeader('content-type', 'application/json') // to send data with post request

//   // syntax bagha .open mhanje opening a request,
//   // Arguments
//   // 1]Type of request-i) get- only fetch a data(through url) ii) post- request barobar kahi data pan pathavnar
//   // 2]  Kuthun data ghenar file madhun (.txt), network kadun(url) etc
//   // 3]boolean value how to get data(true => async., false=>sync.)

//   //What to do on progress (i.e jab request chal/progress ho rahi hai) (optional ahe we use it in Loader and Spinners)
//   //i.e jab tak request .onload nahi hoti tab tak hum .onprogress se spinner dikha sakate hai
//   xhr.onprogress = function () {
//     console.log("On Progress");
//   };

//   // sadhya aapli request kontya state madhe ahe he dakhavnyasathi ek method ahe (values from 0 to 4.)
//   // xhr.onreadystatechange = function () {
//   //   console.log("ready state change is ", xhr.readyState);
//   // };

//   // What to do do after data tayar ho jaye i.e request completed. readyState 4 == .onload
//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log(this.responseText);
//     } else {
//       console.log("Some Error Occured");
//     }
//   };

//   // To send the request // yamule to print hoil
//   // let param = data to be send through post request
//   xhr.send(param);
// }
// // http://dummy.restapiexample.com/api/v1/employee

// let populatebtn = document.getElementById("populatebtn");
// populatebtn.addEventListener("click", popHandler);

// function popHandler() {
//   console.log("You clicked PopHandler");

//   // Instantiate an xhr object i.e xhe object banana hi banana hai usake baad usako open karna
//   const xhr = new XMLHttpRequest(); // i created xhr object

//   // aur fir is object ko instantiate karna padata hai by opening the object(i.e by open method)
//   //xhr.open("GET", "harry.txt", true);

//   xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employee", true); // fake JSON file from google

//   // What do do when progressing
//   xhr.onprogress = function () {
//     console.log("On Progress");
//   };

//   // What to do do after data tayar ho jaye i.e request completed. readyState 4 == .onload
//   xhr.onload = function () {
//     if (this.status === 200) {
//       let obj = JSON.parse(this.responseText);
//       console.log(obj);
//       let list = document.getElementById("list");
//       for (key in obj) {
//         str += `<li> ${obj[key].employee_name} </li>`;
//request through ji file ali hoti tyat employee_age/salary etc data hota jyatil aapan fakt employee_name access kela.
//       }
//       list.innerHTML = str;
//     } else {
//       console.log("Some Error Occured");
//     }
//   };

//   // To send the request // yamule to print hoil
//   // let param = data to be send through post request
//   xhr.send();
// }
