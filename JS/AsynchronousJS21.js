//12:32:00

// Hoisting
// It is a mechanism where variables and function declarations are moved to the top of their scope before code gets executed.

// Ex
//  console.log(myNmae);
//  var myname;
//  myName = 'abc';

// Output during Memory Creation phase
//  1. var myname; // ani no value tenvha undefined assign hote ethe.
//  2. console.log(myNmae);
//  3. myName = 'abc';

// This solved by ES6, i.e hoisting is avoided by using let keyword instead of var. i.e hoisting ka tayntay fish ho gaya after ES6.

//12:38:10
// Scope chain and Lexical Scoping
// Lecical scoping means, inner function can get access to their parent function's variables but the vice-versa is not true.

// NOTE: Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

//12:44:40
// Closuers
// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure gives you access to an outer function's scope from an inner function(i.e lexical scoping).
// Closure are created every time a function is created, at function creation time.

// const fun = (a) => {
//     let b = 10;

//     const inFun = ()=> {
//      sum = a+b;
//      console.log(sum);
//     }
//     inFun();
// }
// fun(3);
// Behind the scence Working
// Callstack Var 3 stacks ==> 1.anynoemous 2. fun 3. inFun
// Scope Var Script scope var fun la, local scope var a, b, infun la. Note that Fat arrow function la Golbal scope var memory allote hot nahi.

//Note: console.dir(); == .dir tells in detail about the input. Additional information milvanyasathi vapratat.

//12:58:00
// Synchronous vs Asynchronous JS

// Synchronous JS
// ONly after executing the first task it will go to the next and then to the next and so on.
// after ajax this got solved.

//Asynchronous JS
// saare kaam one by one chalate rahyenge. That is ab rukana nahi padega. Pahele chal rahe hai to chal ne do jo baki chote mothe kamm hai o pure ho chanyenge. Ex video baghata baghata mi comment pn kartoy, like krtoy, libraru madhe save kartoy, search kartoy
