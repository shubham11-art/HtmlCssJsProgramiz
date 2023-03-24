//1. if..else
//  if(condition){
//  console.log();
// }else{
//  console.log();
// }

// Single if else asel tar mi Ternary Operator pan use karu shakato
// (condition) ? "if" : "else"

// if(){

// }else if(){

// }else if(){

// }.
// .
// .
// }else{
// console.log(kahich true nahi zal tar he print honar)
// }

// if(){
//     if(){
//         if(){

//         }else{

//         }

//     }else{

//     }

// }else{

// }
// Notebook madhe konta if kontya else sathi he mention kel ahe.

//2. truthy and falsy values

//3. Switch Statement
// to avoid if....else if...else if...  we use switch statement

//***//jevhadya conditions astil tevhadya cases switch madhe yetil

// switch(){
//     case '':
//         console
//         break;
//         .
//         .
//         .
//         .
//         default:
//             console
// }

// All loops work like Initialization, Condition, Iteration/Operation except do...while(where Initialization, Iteration/Operation, Condition) if condition stands true loop executes code inside the loop till condition becomes false.

//3. while loop
// while (condition){
// console();
// operation;
// }
// // Ex var num = 0;
// while (num <= 10) {
//   num++;
//   console.log(num);
// }
//O/P
// 1;
// 2;
// 3;
// 4;
// 5;
// 6;
// 7;
// 8;
// 9;
// 10;
// 11;

// // Ex var num = 0;
// while (num <= 10 // condition) {
//   console.log(num);
//   num++; // operation // num = num + 1;
// }
//O/P
// 0;
// 2;
// 3;
// 4;
// 5;
// 6;
// 7;
// 8;
// 9;
// 10;

// while() condition madhil jo variable ahe it keeps changing due to operation/iteration inside the loop. This change keeps checking condition. When condition becomes false, loop ends.
// while() madhe variables must be initialized in advance before writing the loop.

//****//in while() and do..while(loop)  1) if we kept condition open then loop runs infinitely so 2) Our operation and condition should be in sink to break the loop when condition becomes false.

//4. do  while loop
// do{
//     console();
//     operation;
// } while(condition);

//5. for..of loop
//**// used to access the elements of an array.
// SYNTAX
// for(let elements of array){..} // gives elements
//**// for(let letter of string){..} // iterate over all characters of the string

//6. for...in loop
//**// used to access the index of an array. Through index we can access values => array[i];
// SYNTAX
// for(let elements in array){..}

//5. for loop
// for(initizlizer/variableDeclaration; Condition; iteration/operation){
//     console();
// }

// for(loop) ka vaprayacha tar 1) Range madhe value run karayachi ahe 2) Don values ahet jyanch operation mala karayachay.
// 1.looping from lowerNumber to higherNumber(Range)
// Range sathi Condition madhe(>= or <=) astech or aapan logical && or Logical || operators pan vapru shakato.
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

// 2.looping through 2 to user input number(Don Values)
// Don values sathi (=, >, <,==) asnar.
// for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//         flag = 1;
//         break;
//     }
// }

//***// for(loop) madhe aapan jo initializer vaparto (i, j, x etc) tyancha ani jar ekhada variable initiate/declare kela inside the loop tar tyacha jo scope ahe to 'Block Scope' asto so tya variables/initializers cha access tya loop/scope madhech i.e for(loop) madhech ghetala pahije. Global space var jar declare kela tar aat baher kuthehi access gheu shakato(karan lexical scoping).
//for while() and do....while() works the same way i.e jar aat variable declare kela tar tyacha aatach access gheu shakato.

// Ani jar variable global space var declare kela tar aat baher kuthehi access gheu shakato(karan lexical scoping).

// for(loop) madhe mi if() vapartoch ahe without else.

// Run from 1 to n
//  for(i= 1; i<= n; i++){
//  code
// }

// Run from n to 1
//  for(i= n; i>= 1; i--){
//  code
// }
