// 5 : 58: 00
// .map() ===> TRANSFORM an array i.e each and every element transform zala pahije(Jar operation transform karnar nasel tar it returns boolean value)
// in NUTSHELL .map() ==> RETURN VALUE is a NEW ARRAY Containg the results of calling a function on 'every element in the array'. it’s CHAINABLE.
//**// Transforms, Returns newArray, chainable.

// Syntax

// let newArray = arr.map (callback(currentValue, index, array){
//     return element for newArray, after execution of commond given
// })(this argument);

// yachi ji RETURN VALUE ahe its a NEW ARRAY, Containg the results of calling a function on 'every element in the array' without touching/mutation of the original aaray(i.e baki madhe original array madhe changes vhayache)
// i.e it transforms the original array to NEW one

//***// .map() and .forEach() same to same hai with halkasa diff

//***// The main difference between map and forEach is that the map method RETURNS A NEW ARRAY by applying the callback function on each element of an array, while the forEach method returns 'undefined' i.e DOESNT RETURN ANYTHING.

//**// On the other hand, the map method is used for creating a new array, and thus, it’s Chainable. You can call a number of map operations like .reduce(), .sort(), .filter() etc one after the other.
// The forEach method doesn’t return anything, so you can’t chain it with any other methods—it’s not chainable.

// const array1 = [1, 4, 5, 8, 9,];

// let newArr = array1.map((element, index, array)=>{
//     return element>9;

// })

// console.log(newArr);
// yaach je expected output ahe te mi .filter() ne pan gheu shakato. .map() cha use kay ahe tar original array transform karayacha i.e original array var kahitari operation perform karayach.(ethe original array var aapan kahich perform karat nahiye so may be te output dakhaval asav)

// output
// [ false, false, false, false, false ]
// this output because it shows the result of each element and new array. To avoid this kind of working we use Chaininh Method.
//  Also Shows the Loop working i,e traversal of an array

// Challenge time 6:10:30

// 1. Sqraue Root

// let array2 = [25, 36, 49, 64];

// let newArray = array2.map((element) => {
//     return Math.sqrt(element);
// })

// console.log(newArray);
// ethe aapan original array transform karaun output magaval so output dakhaval. Not like earlier one [false... true.... etc]

//  OR

// let newArray = array2.map((element) => Math.sqrt(element);)

// console.log(newArray);

// 2. Multyply by 2 and Return element >10.
// here we use CHAIN METHOD
// 6 : 14: 00

// let array2 = [2, 3, 4, 6, 8];

// let newArray = array2.map((element)=>{
//      return element*2;
// }) .filter((element)=>{
//     return element > 10;
// })

// console.log(newArray);

//          OR

// let newArray = array2.map((element)=> element*2)
// .filter((element)=>element > 10);

// console.log(newArray);

//             OR

// let newArray = array2.map((element)=> element*2)
// .filter((element)=>element > 10).reduce((accumulator, curValue)=>accumulator += curValue);

// i.e map(), filter(), reduce() he sagale chain madhe vaparale with arrow function with shortest form
