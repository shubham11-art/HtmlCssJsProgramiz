//***// CallbackHell and Async await he Folder eka nantar ek vacha.

// callBack Hell, Promises, Async await - Voice message(telegram) - 5/1/2023

//13:24:10
// Akshay Saini's Video

// callBck hell pasun vachnyasathi we use promises.

// We take a piece of code, wrap it inside a function and pass it as a callBack(function) to another function to be executed later. (This is Asynchronous operation)

// Screenshot 72
// CallBack Hell mhanje function(callBack) inside a function(callBack) (i.e nested functions) and so on OR dependency of an APIs on one another. This makes code grow horizonttaly rather than vertically. this strucutre is known as 'pyramid of doom'.
//  createOrder(cart, function (orderID){
//     proceedToPayment(orderId)
//  })
// Here responsibility of proceedToPayment is given to craeteOrder function.and it is out of our control now.

// Inversion of Control
// Loose the control over code while using callBack functions. Because we gave control of our code(through callBack function) to other function and trust it that it will execute(call) it whenever required. so this invert of control is an issue. We give control of our program to some other part of our code.

// Both issues are solved by Promises.

// Saini Promise- (Video - 1)
// Promises are used to handle async operation in JS. Promises chya aadhi callbacks hote to handle async operation.

// Whenever we are returned a promise, and code keeps executing, it is nothing but a empty object initially till it get filled by the data after resolving a promise.
// Now we wiil ATTACH our callback function to this promise object. // Earlier we use to PASS now we are attaching.
// Jenvha tya promise madhe data fill hoto, tya nantar te callback function automatically call kel jaat.

//**// Whenever we return a promise form a function or API, it means we get promise to the caller of that function or API. Mag tya aalelya promise barobar kay karayach he aapan .then() madhil code ne tharavato.

// const cart = ["shoes", "kurta", "pants"]

// Ex const promise = createOrder(cart); // This will return us a initially empty then filled object.
// Promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });  // This callbacks get executed once data ia obtained from erlier promise.

//**// callBack hell madhe function may be called once, twice or never but in promise 100% call hoto ani callback ekdach call hoto(Resolved or Rejected).
// Promise cha data immutable asto i.e We can use it but cant mutate(change/edit) it.
// Callback hell is solved by promise chaining. Promise chaining kartana to get data passed smoothly, there is need to return the promise from a promise to not to loose data in passing.

// Promise - Defination
// It is an object which represents eventual completion or failure of an async. operation.

// What is promise object.
// 2 properties
//1. PromiseState - Tells the state of promise. Initially pending, once we got the data it is fullfilled. And rejected state.
//2. PromiseResult - Stores data returned by the api call.

// Advantages
// Control
// Immutable if it resolved.
// Can pass it where it is required
// Callback can be called only once.

// Callback Code
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummery(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

// Promise Chaining - Traditioanal
// createOrder(cart).then(function (orderId){
//     return proceedToPayment(orderId);
// }).then(function(paymentInfo){
//     return showOrderSummery(paymentInfo);
// }).then(function(){
//     return updateWalletBalance()
// })

// Promise Chaining - Fat Arrow
// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummery(paymentInfo))
//   .then(() => updateWalletBalance());

// Here we consumed the promise. i.e fetch API ne return kelel promise, i.e return kelela data aapan consume karto aahot.

//**// Creating Promise and Handling Error.(Video 2)

// Aapan jar function chya aat kahi consume kartoy, tar first of all te function la as a parameter mhanun pass zalel pahije.

//**// Api call returns the promise karan we have created the promise. Promise may be resolved or rejected karan, kay zalyanantar resolve karayach ani kay zalyanantar reject karayach ha code promise lihitana dilela aahe. Resolve ani Reject zalyanantar kay karayache yache callbacks .then() ani .catch() through respectively promise object la attach kele aahet. Resolve zal mhanje, .then() run honar ani resolve through aalela data aapan .then() madhe consume karnar. .then() chya function parameter madhe je ghetoy ani je code madhe consume kartoy te mi adhi resolve() through pathavato aahe. Ex - proceedToPayment chya resolve ne je pathavalay te paymentInfo ya parameter ne consume kelay.

// Create
// We create promise using new keyword and Promise() constructor. This constructor takes callBack function which has two parameters- resolve and reject. These resolve and reject are function which are provided by JS Engine. We cant call the resolve() twice this is the gaurranty i.e promise cant be called/resolved twice. We can only either resolve() or reject() inside the promise, no other state.
//  const pr = new Promise (function (resolve, reject){}); return pr;
// API call nantar jo data/promise return hoto, te return honyasathi jo code/je calls astat to tya api call chya aatmadhe promise karun dilela asto.

// Error Handling
// We ATTACH failure callback function to the promise object to handle the error and show the error.
// Console var red error bhetane mhanaje we are not handelling the error gracefully. To do that we have catch() function where we log our error or show popup/alert of an error.
// Ex
// Promise.then(function (orderId) {
//   proceedToPayment(orderId);
// }).catch(function (error) {
//   console.log(error.message);
// });

// Promise Chaining

//**// To avoid the Promise Hell, we return the promise and handle it in the next level of chain.  i.e from aadhicha .then() we can return the promise or any other data to next .then().
// Single .catch() will handle any error which there in the chain.
// .catch() chya nantar jar ekhadi .then() asel tar, it will be called no matter what. Because .catch() only look for the error which are at the top of it and it executes all the .then() after it.

// Ex
// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function () {
//     console.log("No matter what, I will definitely be called");
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     const orderId = 123;
//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(orderId){
//     return new Promise(function(resolve, reject){
//         resolve("payment Successfull")
//     })
// }

///***// NOTE //***///  Working of JavaScript.
// Jar mazyakade array/object aahe tar to destructur kasa kelay or component aahe, function aahe tar tyatun return kay kelay. Function aahe tar tyala, argument kon pass kartay,parameter konta dilay to parameter code madhe consume kelay ki nahi, ani code ch output kay aahe i.e return or console or anything else ashi hi chaining aahe.

//**// Practice

// Callback Code
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummery(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

//

// Promise Chaining
// createOrder(cart)
// .then(function (orderId){
//    return proceedTo(orderId);
// }).then(function (payment){
// return orderSummary(payment);
// }).then(function (balnace){
//     updateWallet(balnace);
// })

//*// .then is a function jyachy aaat madhun aapan function call kartoy ani tyacha result return kartoy. Result jar romise asel tar tyachya resolve sathi/data realization sathi punha .then vaprto aapan.
// Aadhicha API call je return karnar, te .then function la yenar ani mag aapan .then chya function chya aat te consume karnar.
