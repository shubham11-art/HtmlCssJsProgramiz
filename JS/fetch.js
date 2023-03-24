// HTML after starting CSS and JS template
{
  /* <h1>Hello, world!</h1>

    <button type="button" class="btn btn-success" id="fetchBtn">
      FetchButton
    </button>

    <!-- <button type="button" class="btn btn-warning" id="populatebtn">
      Populate
    </button> -->
    <div id="container"></div> */
}

// Button with id fetchBtn
//let fetchBtn = document.getElementById("fetchBtn");

// div with id container
//let container = document.getElementById("container");

// fetch() madhe 2 vela .then() vaparlay karan 2 vela promise return hotay. Me fetch() vaparatoy mhanje to itself promise return karto tyatil resolve() run honyasathi .then() detoy ani yatun ji return value janar ahe ti ek promise return karati ahe so tyatil resolve() run honyasathi aankhi ek .then() lagtoy.
// fetch(url)
//   .then(function () {})
//   .then(function () {}); // fetch shabd ek promise return krto tyatil resolve() function run honyasathi pahila .then() ani he fetch &.then() returns another promise through there operation tyatil resolve() run karnrasathi dusara .then()

// function getData() {
//   console.log("Inside Function getData");
//   url = "harry.txt";
//   // fetch runs asynchronously so jenvha control ethe yeil it will register a callback and ask control to go and execute the other js code
//   fetch(url)
//     .then((response) => {
//       console.log("Inside First then");
//       return response.text();
//       // .text() means response jo alay(harry.txt kadun) will be shown in a text form
//     })
//     .then((data) => {
//       console.log("Inside Second then");
//       console.log(data);
//     });
// }
// console.log("Before running getData");
// getData();
// console.log("After running getData");
// ethe fetch chi url pahilya .then(response) la dili ani response cha access .then(data) la dila ahe.

//O/P
// Before running getData
//  Inside Function getData
//  After running getData
//  Inside First then
//  Inside Second then
//  harry is best guy.

//   const response =  fetch("https://api.github.com/users"); as async madhe je lihayacho tech fetch madhe url as an argument .then(madhil response) la dila ahe
// fetch using json file

// function getData() {
//   console.log("Inside Function getData");
//   url = "https://api.github.com/users";
//   // fetch runs asynchronously so jenvha control ethe yeil it will register a callback and ask control to go and execute the other js code
//   fetch(url)
//     .then((response) => {
//       console.log("Inside First then");
//       return response.json();
//       // .json() means response jo alay ti json file ahe ani tyala show karayach ahe. .json use kela tar it will parse() the data which has come through url and then O data js object ke rup me jayega.
//       // returned promise json ahe ani jar aapan response.text() lihil tar o/p madhe plain text file dakhavel
//     })
//     .then((data) => {
//       console.log("Inside Second then");
//       console.log(data);
//     });
// }

// post request

// function postData() {
//   console.log("Inside Function getData");
//   url = "https://api.github.com/users";
//   // post madhe url barobar aankhi ek paeameter aapan deto(here params) to aaplyala jo data pathvayacha ahe post request barobar to asto.
//   data = '{"name" : "harry", "salary" : "123"}'; // data to be send
//   params = {
//     method: "post",
//     headers: {
//       "content-type": "aplication/json", //kis form main data aane wala hai
//     },
//     body: data, // body should be in string
//     // data ha string madhe ahe so direct data lihil
//     // jar to other form madhe asta tar json.stringify(objectName == data) ne string madhe convert karun pathavava lagala asata.
//   };
//   fetch(url, params)
//     .then(
//       (response) => response.json()
//       // .json() means response jo alay ti json file ahe ani tyala show karayach ahe. .json use kela tar it will parse() the data which has come through url and then O data js object ke rup me jayega.
//       // returned promise json ahe ani jar aapan response.text() lihil tar o/p madhe plane text file dakhavel
//     )
//     .then((data) => {
//       console.log(data);
//       // in Fat Arrow Function
//       // .then(data => console.log("Inside Second then");
//       //   console.log(data);
//     });
// }
// console.log("Before running getData");
// postData();
// console.log("After running getData");
