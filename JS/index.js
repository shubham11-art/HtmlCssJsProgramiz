// let year = 2020;

// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(` The ${year} is a Leap Year`);
//     } else {
//       console.log(` The ${year} is Not a Leap Year`);
//     }
//   } else {
//     console.log(` The ${year} is a Leap Year`);
//   }
// } else {
//   console.log(` The ${year} is Not a Leap Year`);
// }

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let arr = ["a", "d", "z", "f", "p"];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let element in arr) {
//   console.log(element);
// }
// for (let elements of arr) {
//   console.log(elements);
// }

// let index = arr.indexOf("z");
// arr.splice(index, 1);

// let arr = [1, 2, 3, 5, 8, 20];

// let variable = arr.toString();
// console.log(variable);

// console.log(arr.join("/"));
// console.log(typeof arr.join("/"));

// let index = arr.indexOf(5);
// let newArray = arr.slice(index);
// console.log(arr);
// console.log(newArray);

// const every = arr.every((value, index) => {
//   return value > 2;
// });

// console.log(every);

// let sum = [];
// let area;

// for (i = 0; i < arr.length; i++) {
//   area = arr[i] * 5;
//   sum.push(area);
// }

// let sum = arr.map((element, index, arr) => {
//   return element * 5;
// });
// console.log(sum);

// let arr = [1, 2, 3];
// arr[arr.length] = 5;
// console.log(arr);

// var a = 5;
// var b = 90;

// [a, b] = [b, a];

// console.log(a);

// var a = 110;
// var b = 120;
// var c = 30;

// if (a > 0) {
//   console.log("Positive");
// } else if (a < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// if (a >= 0) {
//   if ((a == 0)) {
//     console.log("zero");
//   } else {
//     console.log("positive");
//   }
// } else {
//   console.log("negative");
// }

// let largest;
// if (a > b && a > c) {
//   largest = "a";
// } else if (b > a && b > c) {
//   largest = "b";
// } else {
//   largest = "c";
// }

// console.log(largest);

// let result1 = a % 10;
// let result2 = b % 10;
// let result3 = c % 10;

// if (result1 == result2 && result1 == result3) {
//   console.log("same last digit");
// } else {
//   console.log("no");
// }

// for (i = 1; i <= 20; i++) {
//   let tableOf = 7;
//   let result = tableOf * i;
//   console.log(`${tableOf} * ${i} = ${result}`);
// }

// var d = 4;
// let isPrime = true;

// if (d === 1) {
//   console.log("no");
// } else if (d > 1) {
//   for (i = 2; i < d; i++) {
//     if (d % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log("prime");
// } else {
//   console.log("no");
// }

// var e = 5;
// let factor = 1;
// if (true) {
//   for (i = 1; i <= e; i++) {
//     factor *= i;
//   }
//   console.log(factor);
// }

// function sum(x = 2, y = 3) {
//   return (total = x + y);
// }

// console.log(sum(5));

// setTimeout(
//   (x, y) => {
//     console.log(x + y);
//   },
//   2000,
//   1,
//   2
// );

// setTimeout(
//   (greet = () => {
//     console.log("Hello");
//   }),
//   1000
// );

// setTimeout(
//   function (x, y) {
//     console.log(x * y);
//   },
//   3000,
//   20,
//   15
// );

// let arr = [1, 2, 3];
// // let neweArr = [];

// function sum(arr) {
//   let index = arr.indexOf(3);
//   if (index != -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }

// console.log(sum(arr));

// const hasValue = arr.includes(5);

// if (hasValue) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// arr = [...arr, object];

// arr.splice(index, 0, object)

// let arr = [1, 1, 20, 3];
// function sum(arr) {
//   arr[arr.length] = 5;
//   return arr[2];
// }
// console.log(sum(arr));

// function sum(arr) {
//   let newArry = [];

//   for (let element of arr) {
//     if (newArry.indexOf(element) === -1) {
//       newArry.push(element);
//     }
//   }
//   return newArry;
// }
// sum(arr);
// console.log(sum(arr));

// let newArry = [...new Set(arr)];
// console.log(newArry);

// let array = ["h", "o", "m"];
// let isPalindrome = true;

// for (i = 0; i < array.length; i++) {
//   if (array[i] != array[array.length - i - 1]) {
//     isPalindrome = false;
//   }
// }
// if (isPalindrome) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// let myName = "i Am a hardworking GUY";

// console.log(myName.indexOf("r"));
// console.log(myName.lastIndexOf("i"));
// console.log(myName.search("a"));

// console.log(myName.slice(2, 8));
// console.log(myName.substring(2, 8));
// console.log(myName.substr(2, 8));

// console.log(myName.replace(/A/gi, "F"));

// console.log(myName.search("a"));
// console.log(myName.match("a"));

// console.log(myName.charAt(5));
// console.log(myName[5]);

// console.log(myName.charAt(10).toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.split(" "));

// let array = [5, 8, 15];

// let newArray = array
//   .map((element) => {
//     return element * 4;
//   })
//   .filter((element) => {
//     return element > 20;
//   })
//   .reduce((accu, value) => {
//     return (accu -= value);
//   });
// console.log(newArray);

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

// let num = 6;

// let fact = 1;
// if (num === 0) {
//   console.log(`factorial is 1`);
// } else if (num > 0) {
//   for (i = 1; i <= num; i++) {
//     fact *= i;
//   }
// }
// console.log(fact);

// let arr = [5, 10, 10, 15, 15, 17, 20];
// let object = { name: "no", work: "yes" };
// let newArr = [];

// function removeItem(ganesh, x) {
//   //   for (i = 0; i < ganesh.length; i++) {
//   //     if (ganesh[i] != x) {
//   //       newArr.push(ganesh[i]);
//   //     }
//   //   }
//   //   return newArr;

//   for (let i of ganesh) {
//     if (i != x) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }
// let remove = removeItem(arr, 17);
// console.log(remove);
// let num = 17;
// function containsElement(array, sum) {
//   if (array.indexOf(sum) != -1) {
//     console.log(`includes ${sum}`);
//   }

//   return array;
// }
// const contains = containsElement(arr, num);
// console.log(contains);

// let newArr = [object, ...arr];
// console.log(newArr);

// arr.length = 0;
// console.log(arr);

// let arr = [5, 10, 10, 15, 15, 17, 20];
// let newArr = [...new Set(arr)];
// console.log(newArr);

// function sum(arr) {
//   let array = [];
//   //   for (i = 0; i < arr.length; i++) {
//   //     if (array.indexOf(arr[i]) === -1) {
//   //       array.push(arr[i]);
//   //     }
//   //   }

// //   for (let i of arr) {
// //     if (array.indexOf(i) == -1) {
// //       array.push(i);
// //     }
// //   }

//   return array;
// }

// console.log(sum(arr));

// let arr1 = [1, 2, 5, 6, 8];
// let arr2 = [1, 5, 9, 7, 6];

// function sum(arr1, arr2) {
//   let common = [];
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);

//   for (let i of set1) {
//     if (set2.has(i)) {
//       common.push(i);
//     }
//   }
//   return common;
// }
// let common = sum(arr1, arr2);
// console.log(common);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sum(arr, chunk) {
//   let newArr;
//   for (i = 0; i < arr.length; i += chunk) {
//     newArr = arr.slice(i, i + chunk);
//     console.log(newArr);
//   }
// }
// sum(arr, 2);

// let string = "madam";

// function checkPalindrom(string) {
//   let len = string.length;

//   for (i = 0; i < len / 2; i++) {
//     if (string[i] == string[string.length - 1 - i]) {
//       return "It is a palindrome";
//     }
//   }
//   return "Not";
// }
// let value = checkPalindrom(string);
// console.log(value);

// function reverse(string) {
//   let palindrome = string.split("").reverse().join("");

//   if (string == palindrome) {
//     console.log("Pali");
//   } else {
//     console.log("Not");
//   }
// }
// let value = reverse(string);

// function sum() {}
// let value = sum();

// let string = "madam";

// function sum(string) {
//   let sort = string.split("");
//   let words = sort.sort();
//   console.log(words);
//   let hug = words.join("");
//   console.log(hug);
// }
// let value = sum(string);

// let string = "i am a king";
// function sum(str) {
//   // let newStr = " ";

//   // for (i = str.length - 1; i >= 0; i--) {
//   //   newStr += str[i];
//   // }
//   // return newStr;

//   let newStr = str.split("").reverse().join("");
//   return newStr;
// }
// let value = sum(string);
// console.log(value);

// let str = "i am an eternal optimist";
// let occurance = "t";

// function sum(str, x) {
//   let count = 0;

//   for (i = 0; i < str.length; i++) {
//     if (str[i] === x) {
//       count++;
//     }
//   }
//   return count;
// }

// let value = sum(str, occurance);
// console.log(value);

// let regex = /l/gi;

// let occurance = str.match(regex).length;
// console.log(occurance);

// let array = [5, 15, 88, 11, 202, 3];
// let newarray = array[0];
// function maximum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > newarray) {
//       newarray = arr[i];
//     }
//   }
// }
// maximum(array);
// console.log(newarray);

// let highest = -Infinity;
// let secondHighest = -Infinity;

// function sum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     highest = Math.max(highest, arr[i]);
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < highest) secondHighest = Math.max(secondHighest, arr[i]);
//   }
// }
// sum(array);
// console.log(highest, secondHighest);

// let str = "javascript";

// let capitalize = str[0].toUpperCase() + str.slice(1);
// console.log(capitalize);

// let array = ["a", "e", "i", "o", "u"];

// function sum(array, str) {
//   let count = 0;
//   for (let letters of str.toLowerCase()) {
//     if (array.includes(letters)) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// sum(array, str);

// let re = /[aeiou]/g;

// let variable = str.toLowerCase().match(re).length;
// console.log(variable);

// let str = "i am a boy";
// let check = "am";

// function sum(str, check) {
//   for (let letters of check) {
//     for (i = 0; i < str.length; i++) {
//       if (str[i] === letters) {
//         console.log("present aahe");
//         break;
//       }
//     }
//   }
// }
// sum(str, check);

// let myName = "shubham";
// let object = {
//   myName: "how are you",
//   getData() {
//     console.log("hiii");
//   },
// };
// console.log(object.myName);
// object.getData();

// let object = {
//   my: "hwllo",
//   date: 22,
//   suraj: {
//     name: "key",
//     age: 24,
//   },
// };

// delete object.my;
// delete object.suraj["age"];
// console.log(object);

// let yes = "my" in object;
// let no = object.suraj.hasOwnProperty("age");
// console.log(yes);
// console.log(no);

// let person = { ...object };
// console.log(person);

// let newv = Object.assign({}, object);
// console.log(newv);

// let person = {
//   my: "hwllo",
//   date: 22,
//   suraj: {
//     name: "suchit",
//     age: 24,
//   },
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// for (let key of Object.values(person)) {
//   console.log(key);
// }

// for (let keys of Object.entries(person)) {
//   console.log(keys);
// }

// let game = { gender: "male" };

// person.__proto__ = game;
// for (let key in person) {
//   if (person[key]) {
//     console.log(key);
//   }
// }

// person.__proto__ = game;
// console.log(person);

// for (let key in person) {
//   console.log(key);
// }

// let person = {
//   my: "hwllo",
//   date: 22,
//   suraj: {
//     name: "suchit",
//     age: 24,
//   },
// };

// let count = 0;
// for (let key in person) {
//   if (key) {
//     count++;
//   }
// }
// console.log(count);

// let count = Object.keys(person);
// console.log(count.length);

// person.height = 5.7;
// person["weight"] = 72;
// console.log(person);

// "i \"am\" a boy"
// let person = {
//   age: 28,
//   greet1: function () {
//     console.log("Greet1", this.age);
//     console.log("Greet1", this);
//     function greet2() {
//       console.log("Greet2", this.age);
//       console.log("Greet2", this);
//     }.bind()
//     greet2();
//   },
// };
// person.greet1();

// for (num = 1; num <= 10; num++) {
//   let tableOf = 7;
//   let result = tableOf * num;
//   console.log(`${tableOf} * ${num} = ${result}`);
// }

// let arr = [1, 2, 3, 5, 10];

// let arra = arr.findIndex((element) => {
//   return element > 4;
// });
// console.log(arra);

// function apiCall(cart) {
//   const promise = new Promise((resolve, reject) => {
//     let orderId = cart;
//     if (orderId) {
//       resolve(orderId);
//     } else {F
//       reject("Error");
//     }
//   });
//   return promise;
// }

// // apiCall(123);

// let promise = apiCall("sjub");
// console.log(promise);
// promise
//   .then((res) => {
//    return  console.log(res);
//   }).then((res)=>{

//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let num = 2;
// let isPrime = true;

// if (num === 1) {
//   isPrime = false;
//   console.log("No");
// } else if (num > 2) {
//   for (j = 2; j < num; j++) {
//     if (num % j == 0) {
//       isPrime = false;
//     }
//   }
// } else {
//   isPrime = true;

// }

// if (isPrime) {
//   console.log("Yes");
// }

// let arr = [1, 2, 3, 5, 10];

// function sum(array, x) {
//   let index = array.indexOf(x);
//   let newArr = array.splice(index, 1);
//   console.log(newArr);
//   return array;
// }
// let ne = sum(arr, 5);
// console.log(ne);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let chunk = 2;

// while (arr.length > 0) {
//   let temArr;
//   temArr = arr.splice(0, chunk);
//   console.log(temArr);
// }

// function sum(arr, chunk) {
//   let newArr;

//   for (i = 0; i < arr.length; i += chunk) {
//     newArr = arr.slice(i, i + chunk);
//     console.log(newArr);
//   }
// }
// let ne = sum(arr, chunk);

// console.log(2 ** 4);
// console.log(Math.pow(2, 4));

// let { x, ...variable } = { x: 1, y: 2, z: 3, r: 4 };

// let assign = variable;
// console.log(assign);

// let arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let obj = { a: 1, b: 2 };
// let newOjec = JSON.stringify(obj);
// console.log(newOjec);

// createOrder(cart).then((res)=>{
//     return res;
// }).then((res)=>{
//     return res.get;
// }).thyen((orderId)=>{
// return sum(orderId)
// }).then

// let obj1 = {
//   name: "sh",
//   age: 27,
// };

// function getData(suchit) {
//   console.log(this.name);
// }

// let obj2 = {
//   name: "amba",
//   age: 27,
// };

// getData()?.call(obj1);
// getData.call(obj1);

// let clear = setTimeout(() => {
//   console.log("suchit");
// }, 1000);

// clearTimeout(clear);

// let stop = setInterval(() => {
//   console.log("set");
// }, 500);
// clearInterval(stop);

// function x() {
//   function y() {}
//   return y;
// }

// console.log(x());

// let arr = [2, 5, 8, 78, 55];

// let newNumber = Math.max(...arr);

// // function sum(arr) {
// //   for (i = 0; i < arr.length; i++) {
// //     if (arr[i] > newNumber) {
// //       newNumber = arr[i];
// //     }
// //   }
// console.log(newNumber);
// // }
// // sum(arr);

// let arr = [2, 5, 8, 78, 55, 95];
// let highest = -Infinity;
// let secondHighest = -Infinity;

// function sum(arr) {
//   for (i = 0; i < arr.length; i++) {
//     highest = Math.max(highest, arr[i]);
//   }
// }
// sum(arr);

// function sum1() {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < highest) {
//       secondHighest = Math.max(arr[i], secondHighest);
//     }
//   }
// }
// sum1(arr);

// console.log(highest);
// console.log(secondHighest);

// let arr = [2, 5, 8, 78, 55, 95];
// let lowest = Infinity;
// let secondLowest = Infinity;

// function add(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < lowest) {
//       lowest = arr[i];
//     }
//   }
// }
// add(arr);
// console.log(lowest);
// function add(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < lowest) {
//       lowest = Math.min(arr[i], lowest);
//     }
//   }
// }
// add(arr);

// function add1(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > lowest) {
//       secondLowest = Math.min(arr[i], secondLowest);
//     }
//   }
// }
// add1(arr);

// console.log(lowest);
// console.log(secondLowest);

// let arr = [1, 85, 45, 26, 34];

// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

// function x() {
//   let variable = "two";
//   function y() {
//     console.log(variable);
//   }
//   return y;
// }

// let vara = x();
// vara();

// function x() {
//   let two = 2;

//   function y() {
//     console.log(two);
//   }
//   return y;
// }

// let z = x();
// z();

// let string = "Shubham is a Goood guy";
// let newString = string.split(" ");
// let str = " ";

// for (let i of newString) {
//   str += i.charAt(0);
// }
// console.log(str);

// let object = {
//   name: "shubham",
//   age: 28,
// };

// for (let keys in object) {
// //   console.log(keys);
// //   console.log(object[keys]);

// }

// delete object.name;
// console.log(object);
// object.address = "nagar";
// console.log(object);

// let str = "i am a boss";

// let arr = str.split(" ");

// for (let i of arr) {
//   console.log(i);
// }

// let arr = [1, 2, 1, 5, 1, 2, 1, 8];

// let num = arr.length;

// while (num > 0) {
//   let temArr;
//   temArr = arr.slice(0, 2);
//   console.log(temArr);
//   num--
// }

// let arr = [1, 2, 1, 5, 1, 2, 1, 8];

// while (arr.length > 0) {
//   let temArr;
//   temArr = arr.splice(0, 2);
//   console.log(temArr);
// }

// Map, filter, reduce
// let arr = [1, 4, 9, 16, 81, 25, 100, 121, 256];

// let arrReturn = arr.map((element)=>{
// return Math.sqrt(element);
// });

// console.log(arrReturn);

// let arrReturn1 = arr.filter((element)=>{
// return element>25;
// });

// console.log(arrReturn1);

// let arrReturn2 = arr.reduce((acc, cuuValue)=>{

// let addition;
// return  addition = acc += cuuValue;
// });

// console.log(arrReturn2);

// let arrReturn3 = arr
//   .map((element) => {
//     return Math.sqrt(element);
//   })
//   .filter((element) => {
//     return element > 10;
//   })
//   .reduce((acc, cuVal) => {
//     let addition;
//     return (addition = acc *= cuVal);
//   });

// console.log(arrReturn3);

// let str = "shubhamgunjal";
// let newStr = "";

// function remove(str, chunk) {
//   for (i = 0; i < str.length; i += 3) {
//     newStr += str.substring(i, i + chunk);
//   }
// }

// remove(str, 2);
// console.log(newStr);

// let arr = [1, 2, 3, 4, 5, 8, 9];

// // console.log(arr[0]);

// for (let i of arr) {
//   console.log(i);
// }

// let arr1 = arr.find((element) => {
//   return element > 4;
// });
// let arr2 = arr.findIndex((element) => {
//   return element > 4;
// });
// let arr3 = arr.filter((element) => {
//   return element > 4;
// });

// console.log(arr3);

// let arr = ["a", "d", "z", "f", "p"];

// arr.sort();
// arr.reverse();
// console.log(arr);

// let object = {
//   name: "shubham",
//   age: 27,
// };

// function sum(x) {
//   console.log(this.name);
//   console.log(x);
// }

// let newOne = sum.bind(object, 8);
// newOne();

// let str = "i am a boss";

// let newStr = str.split();
// console.log(newStr);

// for (let element in newStr) {
//   console.log(newStr[element][0]);
// }
