//****// HTML

// 1.What are sementic tags
// Clearing there meaning from tagName itself to the browser and Developer clearly.

// 2. <!DOCTYPE html>
// !DOCTYPE stands for Document Type Declaration i.e Doctype Defination. It is not case sensitive.
// USE - 1)It is an instruction to the browser and other developers about the version of the HTML. HTML5 uses <!DOCTYPE html> but in HTML4 declaration is more complicated as there was refernece to the DTD(Document Type Defination). 2) It is not a HTML Tag but an information to the browser about what document type to expect.

//3. Meta Tags.
// Means data about the data i.e information about the information. i.e web page vishayi mahiti denyasathi ya tags aapan vaprato.
// They dont have closing tags as they carry information within its attributes.
// It does not impact the physical appearance of the outcome of web page.
// It uses name and content attributes
// Ex
// keywords for Search Engine Optimization
// description for Web page Information
// author for authors information
// revised for when did this web page last revise by the author
// refresh for auto-refresh and auto- directed.

// Simply Leran

// Developed by Bernsly
//1. What is HTML
// HyperText: HyperText refers to the “text wrapped within a text.” It is very similar to hyperlink and contains an underlying text that, when clicked, redirects to a new webpage.
// Markup Language: A markup language is not necessarily a programming language. Instead, it is used to apply formatting and layout to a simple text document. This leads to more interactive and dynamic text content.
// Web Page: A web page is a document that is commonly coded in HTML and rendered by a web browser. Every web page is identified by a URL and can be static or dynamic according to the requirements. If we are only using HTML for development, we can create static web pages.

//2. Tags are used to palce the content on the web Page as per the need.
//3. Attributes are the properties that can be added to the HTML tags, to change the tags behaviour.
//4. <marquee> tag For scrolling the text on webpage.
//5. 3 types of lists - Ordered (display elements in number format), Unordered(in bullet/symbol format), Defination(<dl>, <dt>, <dd> display in defination form like in dictionary)
//6. &copy;
//7. How do you add JS to HTML webpage
// Like CSS, there are three main ways
// Inline - Directly adding to an HTML element whenever event occurs
// Script Block/Tag - Defining tag on HTML code at the end as it gets executed whenever browser reaches there.
// External File - Importing the file in head Tag.

// HTML 4 and HTML 5 Difference - HTML5 - 2014
// Simple Doctype declaration and more Features like new structural elements like header, aside, article, footer etc
// Better in Error handling
// New tags like <canvas>(To draw graphics), video, audio.
// Multimedia support is there

//*// HTML Preprocessor
//  It is a program that helps the developer to generate the HTML syntax from the syntax of the preprocessor.
// It will add some unique features which do not present in the pure HTML syntax.

//****// CSS

// CSS 3 New features- 2016 introduced
// CSS3 is backward-compatible with former CSS versions
// Animation and Transition property
// calc function to calcute values
// Shadows like - Text, Box, Images etc
// Multiple Layouts - Flexbox, Grid
// Advanced Selectors like Attribute selector.
// Opacity
// Rounder Corners
// New Colors
// Box- sizing

//*// The CSS translate property, as explained on this webpage, is arguably a simpler and more direct way to translate an element.
// The translate CSS property allows you to transfer an element from one place to another along the X (horizontal) axis, the Y (vertical) axis, and the Z (depth) axes
// transform : translateX(), translateY(), translateZ(); or translate(X, Y, Z); Z => depth. Tar to box tya axis var tya depth sathi movement denar.

// 2.Position relative and postion absolute
// position: relative places an element relative to its current position(positioned relative to ITSELF.) without changing the layout around it, whereas position: absolute places an element relative to IT'S CLOSEST POSITIONED PARENT or relative to the window/browser/viewport size and changing the layout around it.

// 3.What is Flexbox
// Important Features:
//1. One-dimensional layout model: Flex is a one-dimensional layout model as it can only deal with items either horizontally as rows or vertically as columns. On the contrary, the CSS Grid layout can handle rows and columns together.
//2. Creates flexible and responsive layouts: Flexbox gives flex container the ability to customize the items within it.
//3. Super easy to use: It is easy to align items in Flexbox, unlike using float and positioning.

// 4.What is boxModel
// Every element in an HTML document is rendered as a rectangular box by the browser. The width, height, padding, border and margin determine the space allocated in an around the element.

// 5. Pseudo classes (:)
// We work on the various states of an element.
// Ex :hover, :visited, :checked, :active, :focus, :first-child, :last-child, :nth-child(n), :nth-child(odd), :nth-child(even),
// Ex p i:first-child { color: blue; } // saglya p tag madhil pahila i
// Ex p:first-child i { color: blue; } // pahilya p tag madhil sagale i
// Ethe purn element aapan target kartoy

//6. Pseudo Elements (::)
// Elements ke part ko target karate hai.
// ::fisrt-letter, ::fisrt-line, ::before, ::after
// Pseudo elements chya madatine aapan css through html madhe elements add karu shakato.
// before and after chya aat madhe aapn content add karu shakato.
// Ex p::before{content:" "}, p::before{content:" "}
// Ethe perticular element madhil kahitari target kartoy.

// Code
// /* :root {
//   --height: 200px;
//   --width: 200px;
// }

// body {
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .box1 {
//   position: relative;
//   background-color: red;
//   height: var(--height);
//   width: var(--width);
//   margin: 0 auto;
// }
// .box2 {
//   background-color: black;
//   height: calc(var(--height) - 50%);
//   width: calc(var(--width) - 50%);
//   position: absolute;
//   top: calc(var(--width) - 75%);
//   left: calc(var(--width) - 75%);
// } */

//****// JavaScript

// 5.What is Eventloop
// Run Time Machine of JS Engine, Which continousely keeps checking Call Stack and Callback Queue. Promises handled by the microtask Queue which has higher priority over callback queue.

// 6.What is DOM
// HTML is converted by browser into JS Object with the help of inbuilt function like parsers. This object known as DOM. Its structure like tree.

// 7.What is Hoisting

// 8.What is closure
// Inner function remebers where it was lexically presents even when parent is not there.

// 9.What is Callback Hell
// Numerous callbacks are nested below one another where every callback function takes an argument. Disadvantages - horizontal code, unreadeable and unmaintainable code. Solution - Promises.

// 10.How many parameters Promise have
// Two i.e Resolve and Reject

//*// Promises over Callbacks
// Easy handling of multiple asynchronous operations
// Better error handling

//*// Usecase of async await
// Easy handling of asynchronous code.
// Better handling of promises and avoids falling into promise hell/chaining
// Easier, consice, readable code.
// Enables the use of ordinary try / catch blocks around asynchronous code.

// 11.What is Map, Filter And Reduce
// Higher order Functions as it takes function as an argument
// Map - Iterates through every element of an array to do necessary operation on it. 3 conditions => Input and Output shold be an array. 3rd is Length of input and output array should be same.
// Filter - Filters the array based on condition Provided. Length of an output array is less or equal to input array.
// Reduce -  Iterates through every element of an array to do necessary operation on it and returns single value. It takes two arguments Accumulator and current value.

// 12.How many scopes are in Javascript
// 4 - Globle, Local/Functional, Block, Script

// 13.What is Call,Apply and Bind

//**// All these three functions call, apply and bind are prototype of Function. that means you can use these three functions on any new function you define.

// Helps us to do function borrowing i.e  Borrow a function from some object and use it with the data of some other object. i.e Object borrows the function to show its properties.
// Call method takes two arguments - 1st Referance where i want my this keyword to be pointing i.e to which object and 2nd is arguments to the function on which call method is used.
// Apply method - Same as call but second argument it takes is an array list to avoid individual passing of parameter.
// Bind method - Same as call, but it returns copy of the function which we can invoke later in the code.

// When to use call(), bind() and apply()???
// i.e We call/invoke the function with the help of these methods. Where call() and apply() directly calls/invokes the original function but bind() creates copy of the original function or function's result which we call/invokes whenever required.
// We change the context of this keyword with these 3 methods.
// We can access the object from a function call in any scope.

// call()
//1. object1.functionOfObject1.call(object2)
// Here, function of object1 will access properties of object2 thats why known as function borrowing.
//2. independent function aahe so, function.call(object) => that function can access properties of the object. i.e object ne te function borrow kel aahe.

// apply(object, [array of arguments])
// bind()
// Direct function call mat karo, aap usaki copy banao aur fir call karo.

// 14.What is This Keyword
// Scope of the function depends upon where function is defined. But in regular function the value of this is determined by how/whome a function is called and not where function is defined but in arrow function value of this depends upon where the arrow function is defined.(i.e for regular function this chi value hi, kon function call karto tyavar depend asate and not function kuthe defined aahe)

// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object. i.e self referencing. Nested object asel ani nested this asel tar, nested madhala this nested madhalya object lach point karto.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.

//**// NOTE
// this keyword by CodeWellTech

// let person = {
//   age: 28,
//   greet1: function () {
//     console.log("Greet1", this.age);
//     console.log("Greet1", this);     // person object
//     function greet2() {
//       console.log("Greet2", this.age);
//       console.log("Greet2", this);  // Global object
//     }
//     greet2();
//   },
// };
// person.greet1();
// Ex person.greet1() // this of function greet1 will refer to person object.
// this of greet2 will refer to the window object as it is called by a function.
// person.nestedPerson.function() // this of function will refer to nestedPerson object.

// 15.What is Diffrence b/w Normal/Regular function & Arrow Function
// Arrow function - We can omit the return statement and curly braces if function is a 1 liner.
// When there is only one arument, round braceket is optional.
// Helps to cut down the code. as syntactic form is there i.e short syntax.
// Arrow function automatically binds the parent's context to itself. This keyword is bound to the parent's context. So this helps to call parents context inside an inner function. Normal function la bind() method vaaprun aapan this keyword parent context kade point karu shakato. (ScreenShot 119)

// An arrow function does not have its own this . Arrow functions follow the NORMAL VARIABLE LOOKUP rules. In arrow function value of this keyword is based on where the arrow function is defined.
// Arrow function can not be used in methods and constructors.
// In arrow functions nothing is binded neither the argument nor the this.

// Difference
//1. Unlike regular functions, arrow functions do not have their own this.
//2. Arguments objects are not available in arrow functions, but are available in regular functions.
// let user = {   show(){ console.log(arguments);}}; user.show(1, 2, 3);
// O/P - Arguments
// 0:1
// 1:2
// 2:3
//3. Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow function using the new keyword.

// 16.What is Memoization
// Memoization is a programming technique(optimization technique) that we used to speed up functions and it can be used to storing the results of an expensive function ( takes a long time to execute) and returning the cached result when the same inputs occur again. It relies on the idea of cache {}. A cache is just a plain object. It reduces redundant function expression calls.
// For this reason, to compute operation in less time for large, we use memoization.

// There are two ways to do memoization:

// Function memoization
// Cache memoization
// Slow function which takes a large time to compute using cache memoization.

// 17.What is spread Operator and Rest Operator
// Both are represented by thre dots or three periods.

// Spread Operator
//  expands iterables/array elements into individual elements.
// UseCase of Spread Operator
// Copying an array or object
// To perform immutable Changes
// Concatinate two array or Objects

// Rest Operator
// Rather than expanding it will collect various elements and condense it into new array
// Uses
// To call a function with numerous arguments
// Array destructuring where multiple array elements can relate to a single variable.

// 18.O/p question (spread operator with object)
// let arr = [1,2,3] and let obj = {...arr}, log(obj)..... {'0':1, '1':2, '2':3}

// 19.O/p Question (Based on Promise)
// 20 .O/P Quesiton (Based on In and Of)

//*// Local Storage vs Session Storage vs Cookie Storage(4kb)

// cookie
// Cookie is created and stored on your devices' browser. It is done/used to identify user.
// What it stores that last visit, kab, kuthe, last search

// session
// Server side la bantao
// Jevjhade pan pages aahet(bworser var astana) te stateless aahet, to maintain a state(kahitari mala dakhvayachay tya pages varti) on those pages. we use session.

// Web Storage APIs - Local/Session Storage
// Introduced with HTML5
// Local Storage(upto 10 MB) - Explicitly delete hoi paryant delet nahi honar.
// Session Storage(upto 5MB) - Browse close data end.

// Uses
// Testing
// REST api chya data storage sathi pan vaprato aapan
// Redux store var temporary data storage sathi pan vaprato.
// Done to avoid frequent api calls to the server.

//*// Promise.all()
// It returns a promise that resolves once all passed-in promises have resolved.

// Syntax
// Promise.all([arrayOfPromises])

// How to use the Promise.all() function in JavaScript
// essentially, this function allows you to perform multiple asynchronous operations and then react only when all of them have resolved.

// Ex

// const fetchUsers = fetch();
// const fetchColors = fetch();
// Promise.all([fetchUsers, fetchColors]).then((values)=>{
//     return Promise.all(values);
// }).then((res)=>{

// }).catch((err)=>{})

// Values returning us two promises so tyanchya resolution sathi punha Promise.all vapral
// Ani donhi Promise.all(), chya data realization sathi don .then() vaprale aahet.

//*// ES5 Vs ES6
// Primitive dataTypes , new dataType "symbol" introduced.
// only var, let const
// Lower performance, higher
// function, Arrow functions
// cuommunity support less, large

// ES6 madhe - string/array methods, destructuring, default parapeters, rest/Spread, Promises, Template Strings.

//*// Function Currying
// In other words, when a function, instead of taking all arguments at one time, takes the first argument and return a new function that takes the second argument and returns a new function which takes the third argument, and so on, till all arguments have benn fulfilled.
// Currying is application of Closuers - Closures form hotat.
// With functional currying we transform a function of multiple arguments into several functions of single argumentin sequence.

// Ex

// function addition(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// let res = addition(4);
// console.log(res); // function (b) { return function (c) { return a + b + c; };};
// let data = res(5);
// console.log(data); // function (c) { return a + b + c; }
// let sum = data(6);
// console.log(sum); // 15

// let ans = addition(7)(8)(9); //24

// Use
// Currying is helpful when you have to frequently call a function with a fixed argument.
// Help code be more readable and concise.
// As it forms the clouser, we can call/invoke it on any scope.

// single argument to a single function.

//*// Troubleshooting
// Troubleshooting is a systematic approach to solving a problem.
// The goal of troubleshooting is to determine why something does not work as expected and explain how to resolve the problem.

//*// try..catch
// Error handling in JS

//*// Error ali tar code execution thambun jaat so to not to stop code execution after an error we use try...catch.

// Syntax
// try{}catch(err)=>{console.log(err)}
// i.e try the code but if error aa gayi to use console karana, code execution mat rokh dena.

// try..catch only works synchronously. If error occures in a scheduled code then it wont work. Karan before the scheduled function executes, js engine has left the try and catch.

// EX try{console.log(rahul)}catch(error){console.log(error)}

// Ex try{setTimeout(()=>{console.log(rahul)},500)}catch(error){console.log(err)}
// This error wont be handlled.

// Ex try{setTimeout(()=>{ try {console.log(rahul)}catch(err){console.log(err)}},500)}catch(error){console.log(err)}
// This error it will handle.

//*// Usecase of Loops

// While..loop - to repeat a specific block of code an unknown number of times, until a condition is met.

// for..loop -  when the number of iterations is known before entering the loop.

// Do..while - when you want to run the code block at least one time. Like validation sathi.

//*// Usecase of Default parameters
// Easier function calls, without error if no value or undefined is passed.
// we can give values to only those parameters to which we want to

//*// UI/UX Design
// User interface is basucallu users interaction with digital device.

// UI Design means creating look of the interface
// UI Design Principle - CRAP - Contrasts, Repetation, Alignment, Proximity.
//1. Simplicity - No unnecessary elements Ex Google Flights
//2. Know Your User -  Their interests, what do they like, what they want to achieve by using your UI, EX Jeff Bezos
//3. Efficient Design - Goals to be avhieved by the User should be of simple and effortless steps.
//4. Consistant - UI elements, lamguage, layout, color etc used should familiar or like universal as user becomes friendly by using them over and again.
//5. Visual Hierarchy - To encapture the attention i.e hierarchy of the elements and information we put on, should be understandable like colors, text size, more white space, highliting text/images.
//6. Communicative to user
//7. Feedback to the user after action is performed by the user. Ex Submit.

// UI Design Patterns
// It is a UI desigining, to solve the usability problems that users experience.
// Various Design Patterns
//1. Input and Output
// Easy to enter data, feedback mechanism we can use calenders, progression bars, notifications.
//2. Navigation - HomeLink, Pagination, Keeping the headbar entact.
// To easily nevigate all over the applicationl like infinite scroll(adds new content as users scrolls down)
//3. Content Structuring
//  Information architecure - dashboards, FAQ
//4. Social Sharing
// Wher euser can chat, share, invite

//*// Data structure
// It is a format for organizing, processing, retriving and storing the data.
// It makes it easy for the user to access and work with data in more appropriate and efficient way.
// Arranging the data so that it can be accessed and updated efficiently.

//*// Types of Data Structure

//1. Linear Data Structure - Elements are arraned in a sequence one after the other
// EX 1) Array Data Structure
// 2)Stack Data Structure - LIFO priciple - Last element stored will be Removed First.
// 3) Queue Data Structure - FIFO Priciple - First element stored will be removed first.
// 4) Linked data Structure - Data is connected through a series of nodes.

//2. Non-Linear Data Structure
// Elements are not in aany sequence but arranged in hierarchial manner.
// EX
//1. Graph Data Structure
//2. Tree Data Structure

// const arr2 = [44,5,1,-1,-2,0,-444];
// let newArr;

// function array(arr2){
// for(i=0; i<arr2.length;i++){
// for(let j=i;j<arr2.length;j++){
// if(arr2[i]>arr2[j]){
// newArr = arr2[i];
// arr2[i]=arr2[j];
// arr2[j]=newArr;

// }
// }

// }
// console.log(arr2);

// const arr = [1,1,2,1,4,5,6,7,3,4,7,5,7,3,4,9,8,4,1];

//*// React JS

//*// Note - KNOW IT?
// 1st time sagale components render honar.
// Though react rerenders only those components jyanchi state change hote aahe, but tya component madhe jar bulky code asel tar tya component madhil baki code/element harm/slow hotat. Tya bulky code la handle karnyasathi aapan useMemo, useCallback he hooks vaprto.
// function as a prop mhanun aapan pass karu shakato.
// Dependendencies matlab variables jo change ho rahe hai.

///***/// React

//*// Error Boundary in React JS

// Error Boundary can only be a class component.

// It is nothing but error Handling in React components.
// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
// You can apply them on synchronous operations. and on any component.
// its like a try...catch for DOM.

// 2 components are imp
// getDerivedState or componentDidCatch

// Error boundaries cant handle somethings like
//1. Event Handlers
//2. Asynchronous codes
//3. Server side renderings
//4. Errors thrown in the error boundary itself (rather than its children)

//*// State of application?
// It is a global data accessible in the application. When state changes the component using it, rerenders.

//*// Memoization in Javascript - Baar baar logic compute/calculate na ho, agar cache pe hai to o hi de. - Hum cache function me value dal rahe hai, ki o hi return ho if that function is called.

//*// Usecase of useMemo and useCallback
// UseCallback is used to optimize the rendering behavior of your React function components, while useMemo is used to memoize expensive functions to avoid having to call them on every render.

//*// useMemo() - memoization in react. cache wala kaam automatic hota hai.
// Uses
// to stop the unwanted functions calls/dependencies. i.e to stop unwanted rerendering.

//*// Syntax
// useMemo(()=>{},[])
// ya dependency sathich te chalnar, baki dusarya kontyahi element chya working var effect nahi yenar.

//*// Difference between useMemo and useCallbak
// Both are used for performance optimization by stopping unwanted rerendering.
// useMemo stores and returns the memoized result where as useCallback stores and returns the memoized function.
//*//Doghanchi useCase bagha
// Within a component elements la decouple karnyasathi we use useMemo ani don components(parent-child) na decouple karnyasathi we use useCallback.

//*// useCallback
// Hume chahiye tabhi call hoga, through dependencies.
// Problem Statement - Parent madhil changes mule parent chya rendering barobarch child pan call hotoy. To avoid this - child component export kartana memo madhun karayach and useCallback.
// Use
// To stop unwanted rerendering.

// Syntax
// useCallback(()=>{},[])

//*// Difference betWeen useMemo, useCallback and useEffect
// useMemo and useCallback ye behind the scene caching ch kaam kartat ani rendering pan manage kartat i.e state/dependency change zali tarach rendering karayachi.

//*// Context API
// One place where we hold our state and pass it to the application.
// React v16 madhe aale but works like Redux only. To data transfer over the component.
// Pure application ke upper wrapper bana deti hai i.e provider.
// createContext and useContext and wraps the application inside the provider
// Drawback
// Jya Components chya we dont change values te also rerenders, as wrapped inside the Provider. so redux

//*// Redux
//  Predictable state container,
// Provides consistance behaviour
// Easy to test.

//1. What is React
// JS Library, High Resuability of components, Helps in building complex UIs by simplefying the code writing amd maintainace and web applications.

// 2. Advantages of Using React
// As it works on VDOM so consumes less memory and faster updated, it increases the applications performance and efficiency..
// One way dataBinding is there.
// Help us in making Single Page Applications.
// Helpful in designing complex mobile user interfaces.
//  Writing UI test cases is easy
// Easy to integrate with other frameworks like Angular
// Because of JSx codes redability and writability increases and code is easy to understand.
// Can be used on client as well as server side.

//*// Features of React
// Single-directional data flow
// Allows you to control server side data processing and handling.
// Uses VDOM.

// 3. Limitations
// Just a library and not full blown framework hence calls for more dependencies.
// Very large with huge repository. And complexity that JSX brings. So not bigginer friendly.
// Faster updates(due to large open source community) make developers keep learning new ways time and again.
// Harder to maintain SEO practices with it.

// 4. Browser cant read JSX directly it need to be transformed in JS Object, which is done with the help of Babel transformer. Browsers can't read JSX because there is no inherent implementation for the browser engines to read and understand them

// 5. State
// Built in react object, used to contain data or informtion about component. And hence controls components behaviour.

//6. What are props.
// They are the arguments passed into the react component like HTML attributs. Used to pass data from one componet to other component.

// Difference between Props and State
//  Pros are read-only, State changes are async.
// P are immutable, S is mutable
// P can be accessed by child component, S cant.
// Stateless compoents can have P, cant have S. (Functional components are the stateless and class compoents are the Statefull)
// P makes components reusable, S cant

// 21.What is virtual DOM
// VDOM is a JS object. Like a node tree which consists of elements, there attributes etc.
//  It is a in Memory representation or virtual representation like light weight copy of a real DOM. Whenever 1st time our application is rendered then tree of HTML element is created and put into the memory which in sink with the Real Dom. Whenever any event or state change happens i.e any updation happens then 2nd copy of virtual dom is created then these two copies are compared with each other (with husristic body called difficult body thumb) and only the updated values are send to the virtual dom. Real dom and Virtul dom should be in sink with each other. This process of updation in the virtual dom after changes in the Real dom called as reconcilliation. It is used to increase the performance of our application.
//*// render function of React creates VDOM or this tree.
// Advantages of VDOM and Disadvantages og RDOM
// Easily updated, Minimal memory Wastage, Faster Updates, Cant update HTML directly(RDOM directly manupilates HTML), RDOM creates new dom if element updates.

//*// Data Binding?
// Communicating the data from Data Source to the View(display).

// 23.What is one-way DataBinding
// Data only flows from source to the control i.e display.
// Here, Data can only be displayed but cant be updated.
// Data is shared among various components with the help of contextapi, where data is stored globally or with the help of redux where data is stored centrally in a store.

// Advantages
// Debugging - developer knows where the data is coming from and where it is going
// Better Control and Less Error
// Efficiency

// 24.How Redux work
// Store - Where data is stored in a object form.
// Action - is a plain JS object
// Reducer - Two arguments, And reducer will returns us a new state.

// 25.What is Higher Order Component
// A higher-order component, in react, is a function which takes a component as an argument(adds functionality or data to it) and returns new component jisame humne functionality add kari hai..
//Syntax - Like normal arrow function. But we pass the prop with name hocName ="";
// TechnicalSuneja - Ajay component la subject(HOC) component madhe pass kel, ani tithun Ajay component madhe add ons kele. i.e as per defination Ajay navacha component ghetla ani subject navacha(class component) return kela. class component ka karan subject navacha HOC aadhich aahe tyatun aapan retrun kartoay mhanun.

// Or to HOCs is component inheritance.

// Uses
// To enhance the component with extra functionality.
// reusibility of code/components logic or functionality over the components.
// Manipulation of Props
// State manipulation

// Disadvantages
// Leads to prop collision
// Its a static composition.(Hard code)

//*// JSX
// Abbrevation for Javascript XML.
// HTML like elements and brings essense of javascript to react.
// Browser cant read jSx directly so, it must be transformed to JS Object with the help of Babel transformers.

//*// Angular Vs React
// Created Google/Facebook
// Render Support- Client/Server side
// DOM - RDOM/VDOM
// DataBinding - 2way/1way

//*// Differnece Between Flux and Redux
// Dispatcher - Has/No
// Data Binding - TwoWay/OneWay
// Store - Multiple/Single

//*// Components Based Architecure
// Web application is collection of various components, which are independent of each other and Compleletly reusable where we want. i.e we can make 10 components for 10 things.

//*// How rendering works?
// Every single component is rendered by using render function. render function madhun app render karato ani app madhun aapan sagale component return karto, hya components madhun jsx, css code return kelela asto.

//*// Arrow functions in React
// Useful in binding components together. Otherwise we have to use .bind() i.e manual binding karavi lagte.

//*// create-react-app
// for creation of react application without worring about independent dependencies.

//*// Advantages of using create-react-app
// SupportsvJSX, ES6 and flow statements.
// Live deployment servers help in debugging
// Already built auto-prefixed CSS.

//*// Redux
// Used to store the state of an application.

//*// 3 Phases of Component Life cycle
// Initial Rendering - Biggining of the component to the DOM
// Update - After it get added to the DOm, component can be updated and rendered again.
// Unmounting - Destruction and evenetual removal form the DOM.

//*// Events in React
// Whenever actions performed like onClick, Mousehover, keyPress etc these actions trigger the events.
// These events perform the activities.

//*// Synthetic Events
// Cross browser compatibility - React synthetic events work identically across browsers.
// ReactJS implements a synthetic events system because that brings consistency and high performance to React apps and application UI. It helps to achieve consistency by normalizing native events so that they have the same properties across different browsers and platforms.
// Ex - examples of the synthetic events are onClick(), onBlur() and onChange()

//*// Native events
// These are normal JS events. i.e things happen to HTML element.

//*// Can Ajax be used with React
// Yes, AJAX library like axios and jQuery can be used.

//*// Stateful components(class components)
// These are components that store the state and changes that happens to them and stores in the memory. yanchya vs stateless components(Functional Components).

//*// What are Refs
// Refs is references, usd to store refence to a single element or react component. These references are returned using render function.
// Uses
// Use it to access the DOM elements or React elements.
// ref ch kaam aapam useRef hook ne karto.
// animations, palyback sathi vaprato.

//*// Controlled Components
// components that have ability to maintain their state.
// Data is controlled by the parent component

//*// Router
// Use to manage multiple routes when user enters URL.

//*// Components of Redux
// Action, Reducer, Store, View - Displays data provided by the store.

//*// Advantages of Using Redux
// Organised code so easy to work with the code.
// Larger community,easy and efficient libraries.
// Testable code and easy to track actions.

//*// Pure Componets
// It renders the same output for the same state and props
// They do not rerender still their prop or state changes.
// Helpful to incrase performance of the application.
// React.pureComponent ko implement karana padata hai if you want to use pure components.

//*// React.StrictMode
// Wrapps our full application inside it. To highlight potential issues in a programm i.e debugging.
// Uses
// Help to write better react components with recommended practices.
// Identifying components with unsafe lifecycles.

//*// What to do if react is rendering slowly?
// It renders slowly because of number of rerender operation, This can be solved by
// React.memo to avoid all unnecessary operations
// pureComponents can be used.

//*// Hooks
// They are the functions in the functional components allows us to do the work which we were doing in class components with classes. like accessing the state.
// useState - to update the state and set initial state
// useEffect - to perform side effects i.e something shoud happen after some action
// useContext - to avoid prop drilling . Globally state maintained asate which can be accessed anywhere on the component.
// useRef - returns mutable object, used to access DOM. Use nahi kel.

// Rules of Hook
// Can only be called inside the function components
// Can only be called at the top level - i.e cant be called inside any loop or nested functions as they needed to be rendered after rendering of functional component.
// can not be conditional

//**// Middlewares
// Like redux saga, redux thunk
// Reducer only runs synchronous operations. So if action is async. then we catch that before it reaches the reducer.
// Without thunk, we can built our own middleware, we have applyMiddleware() function of redux to catch the action in the middle before it reaches to the reducer.

//**// Redux- Thunk
// It is primaraly used for, async operations.
// Thunk means rather than simply executing it, wrap it inside the function then execute it by calling that function.
// Here, we are dispatching the thunk function which has action wrapped inside it.
// Actions to be dispatched from thunk, they should be converted to the action creators.
// Thunk takes two arguments i.e getState and dispatch karan - dispatch is to dispatch the action which is caught in middle.

// Uses
// To delay the dispatch action i.e only dispatch the action if certain condition is met.
// Logging
// Error reporting
// Async requests.

//**// Debouncing and Throttling
// Achieved with the help of, setTimeout API.
// These are functions in React.
// Used to avoid unwanted function/api calls. Used mainly for search bars along with parallel operations like buttonClick, scroll, resize etc where we want to avoid unwanted api/function calls.
// Used for improving application performance

//*// Debouncing
// Performing the search(make API request) only after x milliseconds (or seconds) and not for every type after the user has stopped typing is called "debounce". Achieved with setTimeout web Api.

//*// Throttling
// Throttling is used to call a function after every millisecond or a particular interval of time. Debouncing madhe typing samplyavae call honar, here in throttling time fix aahe.

//*// Differenece Between two
// Debouncing a function means we wait a certain time, doing nothing, until we call the function.(i.e tumach kaam zalyavarzch function call hoil. Ex - type zalyanantar 500ms cha time aahe, i.e type samplyavar 500ms thabale gtarach function call hoil) Throttling a function means we wait a certain time, doing nothing, after we call the function.(Function call hot, ti request purn hoi paryant you cant do anything. Ex - Search bar var click kel ki response yei paryant you cant click serach bar again)

//*// Connect Method
// The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

//*// Class Component Syntax
// Takes prop and returns JSX(HTML). And it maintains the internal state which is private to that component.
// We create class, use component class of react, use render() method which returns null or JSX element, export that component.

// import React, {component} from "react";
// class welcome extends component{
//     render(){
//         return <h1>Class Component</h1>
//     }
// }

// export default welcome

//*// Data from Child to Parent
// Lifting State Up - State is not the components state but basic data.
// Parent and child component banvayache, parent madhe function banvayach je prop through child la pass karayach, child component madhun props.propertyName(dataToBeTransferred); ne pathavayach , jo parent madhlya function madhe access karayacha.

//*// Lazy Loading
// Lazy loading is a design pattern for optimizing web application.
// initialize objects that are critical to the user interface first and quietly render noncritical items later.
//  Lazy loading enables you to render elements on demand
// React has two features that make it very easy to apply code-splitting and lazy loading to React components: React.lazy() and React.Suspense.

//*// Code Splitting
// Code-splitting is the process of dividing a large bundle of code into multiple bundles that can be loaded dynamically. i.e dynamic import karun render karayacha.

//*// Keys in React JS
// Used to check and track the changes
// Used to check whether item has added or removed.

// Key should be uniqe i.e two child cant have same key on one page/component. It is a property of JSx element.
//  In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists.
// We create list of components with the help of Array. Tya list madhe duplicate elements nahi hone chahiye.
// .map() through mi list banavato, so jithe .map() asel tithe key pass karayachi.
// Key denyasathi we can have defined array of numbers.
// Key (i.e value of key) cant be accessed as a prop on other component. so, other/value attribute banvun tyala key = , pass karayacha ani other/value access karayachi=> key access zali.

//*// Core Types of React
// Types of react means types of components
// Functional, Class, Pure, HOCs,

//*// Is it possible to display props on a parent component
// OR
// How do you send props to parent component in React? I.e Data transfer from child to parent?

// To pass data from a child component to its parent, we can call a parent function from the child component with arguments.

//*// In react js why there is a need to capitalize on the components
// To instruct the react component about JSX tags/code, otherwise it will through an error.
// This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

//*// What is Diffing and reconciliation?
// Virtual DOM is synced with real DOM with ReactDOM library. This process is called Reconciliation.
// React compares the Virtual DOM and pre-updated Virtual DOM and only marks the sub-tree of components that are updated. This process is called diffing. The algorithm behind diffing is called Diffing algorithm.

//*// <Suspense> lets you display a fallback until its children have finished loading.

//*// As your app grows there is a risk of bugs and typeErrors. Normally we use JS extentions like Flow or Typescript to typecheck the Appilcation.
// For big applications we should validate the data that we getting through prop. This helps in debugging and also avoids the future bugs.

//*// defaultProps and propTypes
// install propTypes package

// Uses
// Validate the prop data.
// Avoid future error.
// Keep app more clean.

// propTypes
// To check typechecking on the props for a component, you can assign propTypes property.
// used to validate the values/data we are passing or receiving through props.

// Syntax
//*// Should be stated outside the functional Component before export.
// Component.propTypes = {
// prop : PropTypes.dataType(string, number, bool, symbol),
// propName : PropTypes.array,
// propName : PropTypes.object,
// propName : PropTypes.func,
// propName : PropTypes.element,
// propName : PropTypes.dataType,
// propName : PropTypes.dataType,
// }

// Ex
// Link.propTypes = {
// title : PropTypes.string,
// roll : PropTypes.number.isRequired,
// sub : PropTypes.array,
// }

// isRequired => ki hi property parent ne pass karayalach pahije, other wise error will be thrown.

//*// Validation mule Code break hot nahi i.e o/p disnarach. Jar aapan error handling lavli asel tar error yeil. Validation helps developers in better and bugless app building.

//*// Default Prop
// Suppose value is not passed by the parent component, then this default value of that pertucilar prop should be used.
// Kayam saglya values parent kadunach ghyayachya nastat, some values aapan defaultProps nech deto.

// Syntax
//*// Should be stated outside the functional Component before export.
// Component.defaultProps = {
// propName : value,
// propName : value,
// propName : value,
// }

// Ex
// Link.defaultProps = {
// title = "Gandhiji",
// roll = {12},
// sub : [Math, Law]
// }

//*// Validation rule for props will apply to defualtProps also. i.e defaultProps madhun yenarya values la suddha validation rule of propTypes applied asto.

//*// Redux-Thunk vs Redux-Saga

// Similarities
// Need npm install
// Used for calling API and dispatch the response to the reducer.
// Error Logging.

// Difference
// Setup - Easy/Hard - As Saga has generator functions, yeild keyword and built-in, effects like call, put, takeEvery, debaounce and throttle(to stop unwanted api calls) etc. Saga effects make it easy to achieve JS work which need to be hard coded with thunk.
// Organaisation - Problematic/Easy - Api calls and realizing data of promise and returning the data creates mess in Thunk. But saga with yeild which works like await make it easy to chain Api calls, and realize the data. Saga handles asynchronous data flow easily.
// Readeability - Problematic/Easy - Thunk may lead to promise chaining.
// Learning and New devloper - Yes/No
// Large Projects - No/Yes

//*// Functional component ke andar ham lifecycle methods and state use nahi kar sakate to o hum hooks ke help se karte hai.

//*// Custom Hooks - customHook is nothing but reusable function component starts with "use".

// Common functionality banani hoti hai based on hooks but bydefault o react provide nahi karata to hume custom hook banana padata hai.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

// Uses
// Reusability of components logic
// Neat and Cleaner code.
// Reduces time to write code.
// Improves performance of app as increases the rendering speed.

// Aapan custom hook banval ki, it holds the common logic and jithe aapan he hook import karnar tithun dynamic value as a prop pathavnar ji common logic madhe consume honar.

//*// customHook is like a normal function, import kelelya place varun aapan tyala call karto with an argument je aapan common logic chya thikani kontyahi navane use karu shakato. And customHook madhun je return karnar te caller la assign honar.

//*// Normal hooks che rules customHook la pan apply hotat.

// Ex W3School. useFetch(), hook banaval aahe. Explain - index.js varun useFetch() call kel with and URladdress, jo url navane customHook madhe consume kel. Ani tya customHook madhun data return kela so index.js var to consume kela after destructuring.

//*// Local storage
// Only stores data as an object in key:value pair, where key:value can only be a string.

// Advantages/Uses
// Instead of storing on server, unimportant data is dumped here in local storage. like User specific data.
// Optimizes the performance of the web app, as we can access the data easily rather than making the frequent server calls.

// Unlike cookie data, session storages' data dont used for an API call.

// storage varun data access karayacha asel tar, we make an API call like we do for server. For accessing the data we follw rule of Same Origin i.e Protocall, Host and Port must match the URL address to access either web store APi or from server.

// Working
// Local storage ha window object varach asto
// localStorage.setItem("key", "value") - to set data on the localStorage.
// localStorage.getItem("key") - return us the value for that key. i.e to access the data from local storage.
// key should be unique otherwise later will override the earlier one.

//*// Jest and API mocking/testing

// Working
// Write test function with it case.

// Movies.js
// class Movies {
//  api(){  // api will be a function now.
// return fetch(" ").then((res)=>{return response.json();})
//     }
// }

// test.js varti
// import Movies form "./Movies"
// Syntax

// it ("Api Testing", async function (){
//      const response = new Movies(); //This will create the object of movies
//   const data = await response.api();
// expect(data.movies[0].id).toEqual("1")
// })

// it ("description", async callback{ await result;
//test the result with expext()})
// async karan aaplyaa la promise return honar aahe, jar promise nasel(i.e axios call) tar async chi pan garaj nahi.

// Mhanje ek component banvun tyatun APi call karun response return karnar. Mag to response aapan test case madhe mala pahije tasa alay ka nahi he check karto.

//*// Axios Interceptors
// Axios interceptors are functions and a powerful tool for customizing the behavior of a HTTP call when making the call or just after receiving the response back.
// used to add headers(for authintication and validation by adding token id), modify requests, handle errors, transform the response.

// Global Interceptors
//*// Interceptors should be written on index.js file(root file). Component madhil kontihi request janyachya aadhi or response component la janyachya aadhi te interceptor madhun jatil.

// Syntax

// Request
// axios.interceptors.request.use((request)=>{request.headers.channelName = "Leela Web"
// return request})

// Response
// axios.interceptors.reponse.use((response)=>{ return response})

// Mutable Vs Immutable
// In JavaScript, objects and arrays are mutable by default, but primitive values are not — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned. n the case of immutable objects, whenever we change the state of the object, a new object will be created.
// In JS, only objects and arrays are mutable, not primitive values.

//*// Advantages of Immutability
// Error Handling and Debugging becomes easy.
// Improves readability anf efficiency.
// Improves safety as they cant be changed.
// Helps in cashing.

//*// How can we make object immutable?
// Don't provide "setter" methods — methods that modify fields or objects referred to by fields.
// Make all fields final and private .

// Class Components
// rcc - shortcut
// constructor method, page load hone se pehele i.e componentDidMount run honyachya aadhi he disnar display la.
// this.state ={"to maintain state"}
// this.state.key - to access the state.
// onClick={()=>{this.increment()}} la je function detoy, te varti lihinyasathi direct increment (){} (i.e no function word). this chya refencing sathi aadhi bind method hoti ata arrow functions vaparto.

//*// ONE GO
//***// JEST and React Testing Library
// JEST is a test runner.
//**// npm test

//**// React chya installation barobarach aaplyala testing library milate. So kontich dependency install karaychi garaj nahi.

// package.json ==> test  madhe --verbose add kelyavar we get description of test suite and all the tests inside that test suite.

//**// NOTE
//**// Mi render la konta component detoy, konti query vaprun tyala kay pass kartoy, ani expect madhe konti method vaprtoy yavar test result depend aahe.

//**// Syntax
// test("description about tes", ()=>{
//   render<Component - je check karayachay/>
// const variable = screen.getByText(/re/i)  // Query to access element from screen
// expect(variable).toBeInTheDocument()      // What to expect from the test
// });

//**// Problem
// We want to test all the renderings we are doing on browser. Sagale components aaplyala pahije tase render zalet ki nahi. Whether user is interacting with the webPage/UI as the way we want.

// Solution
// DOM testing Library. We have access to DOM and so we can test the component rendering on the browser.

//**// React Testing Library is not a test runner. JEST DOM is a test Runner. Runner test.js chya saglya file check karto ani report banvato ki kontya test pass or fail kelya.

// Avoid Following implementation details
// internal state of components
// internal methods of components
// Lifecycle methods of a component
// Child components

//**// Instead we are going to test for the DOM elements which are rendered on the screen.

// To test logic and states we should use Enzyme along with React Testing Library
// But to check Rendering of a component from users perspective we use JEST and React Testing Library.

//***// Lama Dev

// Fixing one component might affect the other one and so on. So in big projects it is hectic one.
// So testing saves time and increases productivity.

//**// Syntax
// Queries => to find elements on the page.
// selection from the screen is done with the help of queries.
// Ex getByRole() - Every Html element has default role. like list role - listitem
// Ex getByTestId() - We provide testId sttibute to the element
// Ex getByPlaceholder()
// Ex getAllBy..., will access all elements of that query.
// Ex getByTitle() // provide title attribute element
// Ex getByText()

// expect(variable). toBeInTheDocument()
// expect(variable.length).toBe(3)
// toBeEqual, toBeNull, toBeGreaterThan, toMatch, toHaveLength() etc.

// Extention Wallaby.js for handy testing
// Onscreen results, filter our tests etc.

// JEST Vs React Testing Library(RTL)
// No Comparision

//**// To check our component we have to reach our DOM elements which we done through RTL with queries.
//**// JEST is JavaScript testing library. We run our test through it and it takes our expectation to show the test results.

// Test-Driven Developement
// Testing the component/software first(Raw form banun test karayach) and then developing it rather than doing ulta.
// Here we think like a normal user first.
// Steps - Test without creating a component- Ssow the Failures - and then develope the Application.  // Ethe aapan kay kartoy tar component madhe kahich nasnar, ulat aaplyala je banvayachay tyachi test.js file banvayachi aani te test karayach => test fails => nantar mag te component banvayache.

// <input/> madhe value attribute kay aahe tar tyachi value aaplyala feild madhe disnar.

// Testing - Login Form

// Test for placeholder, Button
// Test for Empty Feild, Disabled ( = "true")button
// Test for Error Msg - visibility : error? "visible" : "hidden"

// Conditional rendering bagha kashi aahe, Jithe static text aahe, tithe mala aadhi ek ani nantar ek as dakhavayach aahe tar Conditional rendering through dakhavata yet.

//**// JQuery
// Write less, do more
// Its a JS library, which simplifies complicated JS programming

//*// Advantages
// HTML/DOM manipulation
// CSS manipulation
// HTML event methods
// Effects and Animation
// Fetch requests

//**// MySQL
// It is a database Management System.
// Data - Dinstinct pecies of information.
// Database - This large data is stored in a place called Database. Data in the database can be of any dataType and it can be modified, deleted and retrived.
// Most common DataBase Management System(DBMS) is Relation DBMS and in RDBMS most commonone is MySQL.
// MySQL - My Structured Query Language
// OpenSource software to store data and perform various action.

// SQL is a language, Every relational database(like oracal, MySQL, - forms data in row-column format ) intract with a language called SQL

//**// Creating a table in MySQL
// You can create multiple dataBases and multiple tables.
// Open MySQL command Palette
//1. create database nameOfDatabase - Enter - Query Ok, 1 row affected
//2. use nameOfDatabase - Using the database - Database changed
//3. create table nameOfTable(feild datatypeOfFeild(limit)) // create table students(rollNo int(3), name char(10), section char(2))
// feild - heading of feild
// datatype - tya feild madhe kontya dataType chi value janar like int(integer - numerical), char(string),
// limit - liti of dataType value.
// Table kasa disnar
// Feild  Type  Null Key  Default  Extra // Feild chya khali feild disnar and so on.
//4. desc nameOfTable; - Show the table of that name
//5. insert nameOfTable(101, "Amit", "A") - will insert the data in the table.
//6. select * from nameOfTable - show all rows and columns // Aapan jo data enter kelay to row wise enter honar.
//7. select rollNo from nameOfTable - only show the rollNo vala column
//7. select rollNo, name from nameOfTable - show the rollNo and name vala column.
//8. exit/quit - to come out of commond.

//**// POSTMAN

// Database se connect karne ke liye hum APIs banate hai. Aur API integrate karte samay agar error aa raha hai to use test katne ke liye hum postman ka use karte hai.
// APIs backend waale banvnar ani tyacha URl(i.e API Request)tech sangnar.

// What is Postman? - To test the APIS. i.e HTTP request ne jo API yenar to test karntyasathi.It sends requests from client to the server.
// Install? - Postman Chrome Extention for temprory purpose.

//**// API
// Application Programming Interface
// Its like a messenger which carries data from one place to other.
// APIs give final product to requester.
// API Key - Paid Key - Security(Karan direct system access nahiye) and Monitering(kiti vela access magitlay, illigale activites nahi kar sakate)
// System la jya data cha access dyaychay tyache API banvun thevlee astat. Ani te use karyala dilele astat.

//**// Awards
// Spot Award - New joinee, we were shifting form class component to functional component, did my bit though i was weak at using class componet. Within deadlind i completed it.

// Pat-on-Back Award - My consistancy, desciplin, teamwork. Adhering to the deadline. So it was a routine work with my dedication.

//**// Browser Developer Tool
// console, debugging, network madhe API requests, React deve. tool madhe components ans states. Redux developer tool. Styling with inspect code.

//**// REST Apis(RESTful API) - Represntational State Transfer
// RESTful means referred to web services that implement REST.
// On request we get state of an object and not the object so State Trnasfer.
// Use to build these HTTP services,  it retrives data through standard HTTP methods like, get,post,put,delete.
// https => to exchange data on secure channel
// Companies use word api in there address to expose there restful services.
// RESTful conventation where we expose our resources(from server) and supports various operation like CRUD(Create, Read, Update, Delete)

// Common API standard used for communication between applications is REST API.

// Other services like SOAP, web services.

// Api will connect you and that server.
// Data we get is either in XML(heirachy like tags) or in JSON(object) format.

// Advantages of using RESTAPI
// Flexible - can have multiple calls
// Adaptable - Adaptable to any modifications done in the database.
// Easy to use and understand.

//**// Basic AWS(Amazone web services)
// Cloud computing services
// Cloud Computing Services- Renting the computer services like databases, servers etc
// Services like - Hosting websites,
// Why fameous - 1st service, pay as you go(like public service - jenvhs use karata tenvhach pay karayach)

// How to Learn
// Setup and Account
// Learning about AWS management services
// learning about Cloud developement Kit
// And learn basic services like - 1)AWS EC2 - Ethe aapan basic services and applications ko run kar sakate hai. 2) AWS S3 - To store the data.

//**// Agile and JIRA (Final Practice/Company Working)

//**// SASS

//**// Extentaions - Live server, Pretier, Babel JS, code runner, Intellisense, Bracket Pair Color.

//**// Object Oriented Programming
// A computer programming model that organizes software design around data, or objects, rather than functions and logic
// Used for mobile applications, system simulation, databases
// Why?
// To make work simple
// Javascript madhe jast high level OOps nasate.
// To improve the quality and productivity of system analysis and design.
// Making it more usable.

//*// Object Oriented Programming - for DRY
// Object has two things - Properties/Features(Defining object) and actions performed by it or performed on it.
// Ex Human Features - height, weight, color, actions - move, walk, talk etc

// Implemented using class concept after ES6.

// Object - has properties/fetaures and actions
// Class (grouping of object)- To avoide repetation. We define the common/repetable things. Ex viswajit, elonMusk ek object hai jo Man class ka. i.e Ekhadya object cha class sangitla ki aapan tyache features and actions olkhu shakato.
// Inheritance
// Inheriting the properties and actions from some other class. Ex Software Engineer inherit man class

//*// Problem
// Ek object various casses cha asu shakto. Ex - Shubham is object of Software Engineer class and object of Man class. => After inheritance => Shubham is object of Sofetware Engineer class.

// Functional Programming - for DRY
// In JavaScript all functions are first class functions. That means they can be treated like any other variable. First class functions are functions that can be assigned as values to variables, returned from other functions, and passed as arguments to other functions.

// 4 Pillers of OOPs
// Abstraction - Hiding the details (Aam khao guthliya mat gino-- just reun the program)
// Encaptulation - Various gostinchi ek entity banvali like camera aahe, spekaer aahe, wifi aahe ani mobile banvala. i.e saglyanchi ek entity banvali.
// Inheritance - Earlier version or code cha use karun aapan navin version/code banu shakato. erlier entity madhe improve karun navin entity banvali.
// Polymorphism - Ek cheese alag alag forms like aaapka phone - camera, notemaking, music plauyer as sagal aahe.

// Object - Oriented approach means - Data we handle or state we manage in api calls, state maintaince , data transfer ha object form madhe hoto.

//**// Versions Used in Project

//1. Material UI - 5.8.10. V5 released in sept 2021 I am using it currently tya chya aadhi V4 hot. Rather than migration use both alongSide.
// makeStyles to styled Component
// some classes removed or renamed -
// Removed Props - like onCellBlur, onCellOut etc
// name change of selectors to gridRowIdSelector etc.

//2. Javascript
// ES5 in 2009, ES6 in 2015
// News about launching of 13th edition, 2022. but dont know.

//3. HTML5 and CSS3

//4. ReactJs
// v16 in 2017 - Improved error handling with error boundary. 16.8 - Added hooks.
// v17.0.1 in oct 2020 - no new features, just to upgrade react itself
// v18 in mar 2022 - Now i am using it. Not much changed.
// 18 is still in developing phase so it may cause problem, in updating, testing phase.

//5. VS Code
// August 2022 1.71.1
// Nove 2020   1.51.1

//6. Git
// 2.34.1
// 2.22.1

//#// Why do we need Node js
// Aaplyala npm pahije asat for package management ani npm needs Node js. Tasach node js he backend operations like Server balancing, API calls sathi pan pahije asat.

// github token
// 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

//*// usenavigation, useLocation hook
// useNavigate Hook
// For redirection and go back functionality

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// const goHome = ()=>{
// navigate("/path")  // Route cha path dyayacha.
// }
// <button onClick = {goHome}><button/>
// <button onClick = {()=>navigate(-1)}><button/>   // lead to the previous page

// pass the data with useNavigate hook
// navigate("/about", {state: {id:variableToBePasses}})
// To consume the data passed - we use useLocation hook
// On About Component
// const location = useLocation();
// location.state.id   // as id is the key jyala data pass kela aahe.

// useLocation hook  // used to access the pathname i.e current URL
// import { useLocation } from "react-router-dom";
// const location = useLocation();
// location is a object, to access pathname location.pathname
// location.pathname.replace("/", " "). // To access the URL name.

//useRef hook
// useRef hook returns us an object which has current has a key.
// It creats the a mutable variable which will not rerender the components.
// access the DOM directly.

// Stop rerendering
// useEffect through state denyapekshya aapan const count = useRef(); i.e count.current = count.current + 1; ne karnar.

// access the dom directly (useRef and ref attribute use karava lagto in sink)
// const inputElem = useRef();
// inputElem.current  // thus will return us DOM element, jya element madhe ref = {inputElem}, use kelela aahe.

//onFocus and onBlur
// <input ref = {inputElem} onFocus = {(e)=>{inputElem.current.style.outline = "#808080"}} onBlur= {(e)=>{inputElem.current.style.outline = "#fff"}}/>

// Shallow and Deep Copy
// Copy, Object.assign({}, object1), spread operator,
// JSON.parse(JSON.stringify(object1)) // lost the function and dataType.
// To solve we have lodash library // npm i lodash  // This require no use any of above method.
// const _ = require('lodash');
// let object2 = _.cloneDeep(object1);
