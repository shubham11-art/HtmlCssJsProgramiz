//11:26:10

//1. Dynamic Properties

// let myName = 'shubham';
// const bio = {
//     myName : 'how are you',
//     26 : 'my age'
// }

// console.log(bio);
//O/P { '26': 'my age', myName: 'how are you' }

//     For  Dynamic data we use "Square Brackets[]"

// let myName = 'shubham';
// const bio = {
//     [myName] : 'how are you',
//     [20+6] : 'my age'
// }

// console.log(bio);
//O/P { '26': 'my age', shubham: 'how are you' }

//***// Due to dynamic data(i.e Square Brackets[]) variables can get earlier assigned value and also we can perform mathematical operations.

//11:29:35
//2. If both key(i.e name of key) and value(i.e value aapan baherun access kartoy) are same then no need to write double-double. IN single mention only it figutre out the key and value. (Yaat aapan value baherchya variable kadun access karto ahe which has same name as key).

//Ex:
// let myName = 'shubham';
// let myAge = 26;
// const bio = {
//     myName : myName,
//     myAge : myAge
// }

// console.log(bio);
//O/P { myName: 'shubham', myAge: 26 }

//           OR

// let myName = 'shubham';
// let myAge = 26;
// const bio = {myName, myAge}
// console.log(bio);
//O/P { myName: 'shubham', myAge: 26 }

// Ji value ahe tine baherchya variable cha access ghetala. dynamic sarkh jar key la [] takale tar key will access from outside.
