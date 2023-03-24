//13:49:30

// Jokes project requiers APIs,Promises, Async- Await, Error Handling

// id = "joke", class = "joke"; ==> i.e i cant use "joke" as a Id again but same "joke"(Id name) can be used as a class .

// fetch() used to make URL request(call) to the server (as we do in xmlhttp). It returns a promise.
// i.e Either promise resolved(Requested data returned) or promise Rejected(Requested data not returned) or promise is Onging/Pending.

// In 90% cases promises are Consumed other wise(10%) they are Created. Consumed means fetch() request(promise) is resolved, Rejected or Ongoing.

// CallBaCK Hell se bachane ke liye we use promises. Promises se badhakar bhi Async Await hai.

//13:56:42 project
// 1stly done with Promises ==> Promises madhe aapan API cha access through fetch() ne gheto (jyat .then(get the response) and .catch(error) vaprto). Then conversion into Json if required(res.json() and use of Functions for perticular access(data.accept) in the returned Data by URL.

// 14:08:40 Bhari Ghetlay
// same project with Async Await
//  Async Await also returns Promises but it handles promises differenlty than fetch(). It is used to simplyfy the complexcity occured due to fetch() and returned promises.
// What we Done? fetch() ne access ghetala ani mile paryant await and tyacha reference dila res la. res cha data la json madhe convert kel by res.json() ne mile paryant await. Bhetlelya data madhun perticular access sathi(data.joke) and assigned to display tag by .innerHTML. Ani error ali at any stage tar ti display hoil.

// USE of async
// async function (){} OR const res = async ()=>{}
