//11:57:00
//freeCodeCamp website

// ECMAScript 2020 / ES11

// 11:57:20
// BigInt Datatype
// console.log(Number.MAX_SAFE_INTEGER);
// or
// console.log(Math.pow(2,53 - 1));
// O/P 9007199254740991
// This is the last integer number which JS can handle. To perform the operations beyond this number without failure of system, without getting wrong answer "'WE HAVE TO USE 'BigInt'".

// in BigInt we use 'n' to perform operations.
// let oldNum = Number.MAX_SAFE_INTEGER;
// let newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeOf newNum);
// O/P 9007199254741003n
//     bigint

// const bigint = 12345678901896532147759012345678901234567890n;
// console.log(bigint);
// const sameBigint = BigInt("12345678901896532147759012345678901234567890");
// console.log(sameBigint);
// const bigintFromNumber = BigInt(20); // same as 20n
// console.log(bigintFromNumber);

// O/P > 12345678901896532147759012345678901234567890n
//     > 12345678901896532147759012345678901234567890n
//     > 20n

// console.log(1n + 3n); // 4n

//console.log(1n + 2); // Error: Cannot mix BigInt and other types

//12:04:00
// Nullish coalescing
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//***// i.e fakt null and undefined sathich righExpr will be the output.
// It only works for null/undefined and not for all falsy values.

// SYNTAX
// leftExpr ?? rightExpr
// Ex :
//1. const foo = null ?? 'default string';
// console.log(foo);
// output: "default string"

//2. const baz = 0 ?? 42;
// console.log(baz);
//  output: 0

//3. const nullValue = null;
//   const emptyText = ""; // falsy value
//   const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A" (output is right hand side operand )
// console.log(valB); //O/P  "" (as the empty string is not null or undefined)
// console.log(valC); //O/P 42
