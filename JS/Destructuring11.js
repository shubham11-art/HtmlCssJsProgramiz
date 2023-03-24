//11:17:26

// Destructuring in ES6
// To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.
//*// Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.
// Destructuring makes it easy to extract only what is needed.

// Array Destructuring
// Ex:
// const vehicles = ['mustang', 'f-150', 'expedition'];

// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];
// i.e Index wise value assign hotat
//            OR
// const [car, truck, suv] = vehicles;
// here car='mustang', truck='f-150', suv='expedition'.
// const [car, , suv] = vehicles;
// here car='mustang', , suv='expedition'

//***// Array of variables banvato ani aadhicha array tyala assign karto. So tya aadhichya aaray chya values navin variables la assign hotat.
// USE
// arrayName[i] ne value assign karnyapekshya mi Navin je variables ahet tya navane value assign karu shakato.

// i.e In array destructuring we assign a variable(vehicles) to array of variables, where assigned variable(vehicles) contains array of values. And these values get assigned to the variables of an array 'in the order'.

//*// Note: When destructuring arrays, the order that variables are declared is important. Because variables have been assigned the values of that array in the order. So order of variables = order of values.

// We can add values to variables inside destructured array.
// const [car, truck, suv, sedan='maruti', jeep='thar'] = vehicles;

// Destructuring comes in handy when a function returns an array:
// Ex: function calculate(a, b) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;
//   return [add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate(4, 7);
// We have returned an array of variables and assigned it a callback function.

//11:23:20
// Object Destructuring
// Ex :
//const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021,
//     color: 'red'
//   }

// let brand = vehicleOne.brand;
// let model = vehicleOne.model;
// console.log(brand/model/etc);
//                OR
// let{brand, model, type, year, color} = vehicleOne; or let{type, year, color,brand, model} = vehicleOne; or
// let{brand, year, model, color,type} = vehicleOne;
// console.log(brand/model/etc);
// output will be same for any order as order does not matter in object destructuring.

// Note: Notice that the object properties do not have to be declared in a specific order. WHY/ Because Object madhe key:value pair aslymule values hya vaiables la already assign astat and NOT like array where values have been stated independently.
//*// Note: difference between Object and Array destructuring is 1) {} and [] respectively 2) order doesnt matter and order matters respectively
