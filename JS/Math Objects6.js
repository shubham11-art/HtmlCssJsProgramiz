// 8:16:20

// Math Objects
// To perform mathematical operations

// 1. Math.PI
// console.log(Math.PI);

// 2. Math.round()
// const num = 10.489
// console.log(Math.round(num));

// 3. Math.pow()
// Math.pow(x,y) returns x to the power y
// console.log(Math.pow(6,3)); === 216

// 4. Math.sqrt()
// Math.sqrt(x) returns sq.root of x
// console.log(Math.sqrt(10)); === 3.16227

// 5. Math.abs()
// Math.abs(x) returns absolute (positive) value of x
// console.log(Math.abs(-10)); === 10
// console.log(Math.abs(-10.34)); === 10.34
// console.log(Math.abs(3-8)); === 5

// 6. Math.ceil()
// Math.ceil(x) returns the value of x rounded 'up' to its nearest integer. ceil means pudhachi(greater) value deto.
// console.log(Math.ceil(4.01)); == 5
// console.log(Math.ceil(4.99)); == 5

// 7. Math.floor()
// Math.floor(x) returns the value of x rounded 'down' to its nearest integer. floor means magachi(lesser) value deto.
// console.log(Math.ceil(4.01)); == 4
// console.log(Math.ceil(4.99)); == 4

// 8. Math.min()
//  Math.min(x,y,z,..) returns minimum value from the list
// console.log(Math.min(4,5,6)); == 4

//9. Math.max()
//  Math.max(x,y,z,..) returns maximum value from the list
// console.log(Math.min(4,5,6)); == 6

// 10. Math.random()
// Math.random() returns a random number between 0(inclusive) and 1(exclusive).
// console.log(Math.random()); == 0.49489025760453664
//  console.log(Math.random()*10); == 4.95183594817
//  console.log(Math.floor(Math.random()*10)); == 4
// console.log(Math.ceil(Math.random()*10)); == 5

//11. Math.trunc()
// Returns a integer part of a number. i.e Decimal chya adhi jo pan number ahe to return honar. Output will not be in DECIMAL.
// console.log(Math.trunc(4.99)); == 4
//console.log(Math.trunc(-99.99)); == -99

// 8:31:00
// Practise Time

// If argument is a positive number, Math.trunc() is equivalent to output of Math.floor() and If argument is a negative number, Math.trunc() is equivalent to output of Math.ceil()
// Ex : console.log(Math.trunc(4.99)); == 4 (4<4.99)
// Ex : console.log(Math.trunc(-4.99));= -4(-4>-4.99)
