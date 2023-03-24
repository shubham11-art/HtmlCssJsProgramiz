// REVISION
// String characters can be accessed as str[i] or str.charAt(i).

//1// Check Whether a String is Palindrome or Not

//Two WAys
//  Using for Loop
//  Using built-in Functions

//1. Check Palindrome Using for Loop

// function checkPalindrome(string) {
//   // find the length of a string
//   const len = string.length;

//   // loop through half of the string
//   for (let i = 0; i < len / 2; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// // take input
// const string = prompt("Enter a string: ");

// // call the function
// const value = checkPalindrome(string);

// console.log(value);

// Output
// Enter a string: madam
// It is a palindrome

//2.  Using built-in Functions

// function checkPalindrome(string) {
//   // convert string to an array
//   const arrayValues = string.split("");

//   // reverse the array values
//   const reverseArrayValues = arrayValues.reverse();

//   // convert array to string
//   const reverseString = reverseArrayValues.join("");

//   if (string == reverseString) {
//     console.log("It is a palindrome");
//   } else {
//     console.log("It is not a palindrome");
//   }
// }

// //take input
// const string = prompt("Enter a string: ");

// checkPalindrome(string);

// Output
// Enter a string: hello
// It is not a palindrome

// Working
// The split('') method converts the string into individual array characters.
// O/P  ["h", "e", "l", "l", "o"]
// The reverse() method reverses the position in an array.
// O/P  ["o", "l", "l", "e", "h"]
// The join('') method joins all the elements of an array into a string.
// O/P  "olleh"

//***// Note:
// The multiple lines of code can be reduced and written in one line:
// const reverseString = string.split('').reverse().join('');

//2// Sort Words in Alphabetical Order

// const string = prompt("Enter a sentence: ");

// // converting to an array
// const words = string.split(" ");

// // sort the array elements
// words.sort();

// // display the sorted words
// console.log("The sorted words are:");

// for (const element of words) {
//   console.log(element);
// }

// Output
// Enter a sentence: I am learning JavaScript
// The sorted words are:
// I
// JavaScript
// am
// learning

// Why I and JavaScript are printed before am?

//**// This is because I and J of JavaScript are in uppercase. And, when we use the sort() method, uppercase letters are placed before lowercase.
// We can verify this by providing only lowercase input.

// Output
// Enter a sentence: i am learning javascript
// The sorted words are:
// am
// i
// javascript
// learning

// Note
//  Instead of displaying from the array values(bu using for..of loop), you can also convert the array elements back to the string and display the values as a string using join() method.

// words.join(' '); // I JavaScript am learning
// i.e words.sort() kelyanantar parat words.join(' ') karun pan output gheu shakato.

//3// Replace Characters of a String
// string.relpace();
// .replace() does 1st case-sensitive match
// RegEx
// /value/g // All case-sensitive values
// /value/i //  First case-insensitive match
// /value/gi //  All matches

//1. Replace First Occurrence of a Character in a String

// const string = "Mr Red has a red house and a red car";

// // replace the characters
// const newText = string.replace("red", "blue");

// // display the result
// console.log(newText);

// Output
// Mr Red has a blue house and a red car

//2. Replace Character of a String Using RegEx

// const string = 'Mr Red has a red house and a red car';

// // regex expression
// const regex = /red/g;

// // replace the characters
// const newText = string.replace(regex, 'blue');

// // display the result
// console.log(newText);

// Output
// Mr Red has a blue house and a blue car

//4// Reverse a Strings

// Two Ways
//  Using for Loop(Works for both words and sentences)
//  Using built-in Methods((Works for both words and sentences but basis of split and join must be same)

//1.Using for Loop

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);

// Output
// Enter a string: hello world
// dlrow olleh

// Output
// Enter a string: hello
//  olleh

//2. Using built-in Methods

// function reverseString(str) {
//   // return a new array of strings
//   const arrayStrings = str.split("");

//   // reverse the new created array elements
//   const reverseArray = arrayStrings.reverse();

//   // join all elements of the array into a string
//   const joinArray = reverseArray.join("");

//   // return the reversed string
//   return joinArray;
// }

// // take input from the user
// const string = prompt("Enter a string: ");

// const result = reverseString(string);
// console.log(result);

// Output
// Enter a string: hello
// olleh

// Output
// Enter a string: i am boss split and join cha basis should be (" ") space.
// ssob ma i

//5// Check the Number of Occurrences of a Character in the String

// Two Ways
// Using for Loop
// Using a Regex

//1. Using for Loop

// function countString(str, letter) {
//     let count = 0;

//     // looping through the items
//     for (let i = 0; i < str.length; i++) {

//         // check if the character is at that position
//         if (str.charAt(i) == letter) {
//             count += 1; // ++count  //count++
//         }
//     }
//     return count;
// }

// // take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// //passing parameters and calling the function
// const result = countString(string, letterToCheck);

// // displaying the result
// console.log(result);

// Output
// Enter a string: school
// Enter a  letter to check: o
// 2

// NOTE
// The charAt() method returns a character at a specified index.
// During each iteration, if the character at that index matches the required character to match, then the count variable is increased by 1.

//2. Using a Regex

// function countString(str, letter) {

//     // creating regex
//     const re = new RegExp(letter, 'g');  //  re =  /letter/g

//     // matching the pattern
//     const count = str.match(re).length;

//     return count;
// }

// // take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// //passing parameters and calling the function
// const result = countString(string, letterToCheck);

// // displaying the result
// console.log(result);

// Output
// Enter a string: school
// Enter a  letter to check: o
// 2

// Woking
// const re = new RegExp(letter, 'g'); creates a regular expression. == /letter/g i.e global search for that letter
// The match() method returns an array containing all the matches. Here, str.match(re);gives ["o", "o"].
// The length property gives the length of an array element.

//6// Convert the First Letter of a String into UpperCase

// Two ways
// Convert First letter to UpperCase
// Convert First letter to UpperCase using Regex

//1. Convert First letter to UpperCase

// function capitalizeFirstLetter(str) {

//     // converting first letter to uppercase
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalized;
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = capitalizeFirstLetter(string);

// console.log(result);

// Output
// Enter a string: javaScript
// JavaScript

// NOTE
// Here, str.charAt(0); gives j.
// The slice() method returns the rest of the string.Here, str.slice(1); gives avaScript.
// These two values are concatenated using the + operator.

// You can also extract the first character of a string using an array accessing property: str[0].
//str.str[0]; // j

//2. Convert First letter to UpperCase using Regex

// function capitalizeFirstLetter(str) {

//     // converting first letter to uppercase
//     const capitalized = str.replace(/^./, str[0].toUpperCase());

//     return capitalized;
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = capitalizeFirstLetter(string);

// console.log(result);

// Output
// Enter a string: javaScript
// JavaScript

// In the above program, the regular expression (regex) is used to convert the first letter of a string to uppercase.
// The regex pattern is /^./ matches the first character of a string.
// i.e /^./ == j here.
// /^./ ya chya aaiwaji str[0] pan vapru shakto.

//7// Count the Number of Vowels in a String

// Two Ways
// Using Regex
// Using for Loop

//1. Using Regex

// function countVowel(str) {

//     // find the count of vowels
//     const count = str.match(/[aeiou]/gi).length;

//     // return number of vowels
//     return count;
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);

// Output
// Enter a string: JavaScript program
// 5

// Working
// The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string. Here,
// str.match(/[aeiou]/gi); gives ["a", "a", "i", "o", "a"]

//2. Using for Loop

// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {
//     // initialize count
//     let count = 0;

//     // loop through string to test if each character is a vowel
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }

//     // return number of vowels
//     return count
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);

// Output
// Enter a string: JavaScript program
// 5

// Working
// The for...of loop is used to iterate over all the characters of the string.

//8// Check Whether a String Starts and Ends With Certain Characters

// TWo Ways
// Using Built-in Methods( startsWith(), endsWith())
// Using Regex

//1. Using Built-in Methods( startsWith(), endsWith())

// function checkString(str) {
//   // check if the string starts with S and ends with G
//   if (str.startsWith("S") && str.endsWith("G")) {
//     console.log("The string starts with S and ends with G");
//   } else if (str.startsWith("S")) {
//     console.log("The string starts with S but does not end with G");
//   } else if (str.endsWith("G")) {
//     console.log("The string starts does not with S but end with G");
//   } else {
//     console.log("The string does not start with S and does not end with G");
//   }
// }

// // take input
// let string = prompt("Enter a string: ");
// checkString(string);

// Output
// Enter a string: String
// The string starts with S but does not end with G

// NOTE
// The startsWith() method checks if the string starts with the particular string.
//The endsWith() method checks if the string ends with the particular string.

//The above program does not check for lowercase letters. Hence, here G and g are different.
//You could also check if the above character starts with S or s and ends with G or g.
//str.startsWith('S') || str.startsWith('s') && str.endsWith('G') || str.endsWith('g');

//2. Using Regex

// function checkString(str) {

//     // check if the string starts with S and ends with G
//     if( /^S/i.test(str) && /G$/i.test(str)) {
//         console.log('The string starts with S and ends with G');
//     }
//     else if(/^S/i.test(str)) {
//         console.log('The string starts with S but does not ends with G');
//     }
//      else if(/G$/i.test(str)) {
//         console.log('The string starts does not with S but ends with G');
//     }
//     else {
//         console.log('The string does not start with S and does not end with G');
//     }
// }

// // for loop to show different scenario
// for (let i = 0; i < 3; i++) {

//     // take input
//     const string = prompt('Enter a string: ');

//     checkString(string);
// }

// Output
// Enter a string: String
// The string starts with S and ends with G
// Enter a string: string
// The string starts with S and ends with G
// Enter a string: JavaScript
// The string does not start with S and does not end with G

// Working
// The /^S/i pattern checks if the string is S or s. Here, i denotes that the string is case-insensitive. Hence, S and s are considered the same.
// The /G$/i patterns checks if the string is G or g.
// The for loop is used to take different inputs from the user to show different cases.

//9// Replace All Occurrences of a String

// TWo Ways
// Using RegEx
// Using built-in Method

//1. Using RegEx
// const string = 'Mr Red has a red house and a red car';

// // regex expression
// const regex = /red/gi;

// // replace the characters
// const newText = string.replace(regex, 'blue');

// // display the result
// console.log(newText);

// Output
// Mr blue has a blue house and a blue car

//2.  Using built-in Method

// const string = 'Mr red has a red house and a red car';

// const result = string.split('red').join('blue');

// console.log(result);
// Run Code
// Output

// Mr blue has a blue house and a blue car

// Working

// Here, string.split('red') gives ["Mr ", " has a ", " house and a ", " car"] by splitting the string.
// The array elements are joined into a single string using the join() method.

//10// Create Multiline Strings
// ' ' or " " madhe string mhanun mothi line nahi lihu shakat so ti lihinyasathi khalil methods vaprtat

// Three Ways
//  Using +
// Using \
// Using Template Literal

//1.  Using +

// const message = 'This is a long message\n' +
//     'that spans across multiple lines\n' +
//     'in the code.'

// console.log(message);

// Output
// This is a long message
// that spans across multiple lines
// in the code.

// Working
// In the above example, a multiline string is created using the + operator(concatination) and \n.
// The escape character \n is used to break the line.

//2. Using \

// const message = 'This is a long message\n \
// that spans across multiple lines\n \
// in the code.'

// console.log(message);
// Output
// This is a long message
// that spans across multiple lines
// in the code.

// In the above example, a multiline string is created using \. \n is used to break the line.

// Difference between + and \
// Use of Quotation

//3. Using Template Literal

// const message = `This is a long message
// that spans across multiple lines
// in the code.`

// console.log(message);

// Output
// This is a long message
// that spans across multiple lines
// in the code.

//     OR OR OR OR

// const message = `This is a long message that spans across multiple lines in the code.`

// console.log(message);

// Output
// This is a long message that spans across multiple lines in the code.

//***// NOTE
// Templatre literal madhe Break det lihil tar break madhe nahitar single line madhe pan yenar.

//11// Format Numbers as Currency Strings
// currency $ etc Currency use karnyachi vel yeil tenvha jaun bgha.

//12// Generate Random String

// Generate Random Strings
// Using Built-in Methods

//1.  Generate Random Strings

// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generateString(5));

// Output
// B5cgH

//2. Using Built-in Methods

// const result = Math.random().toString(36).substring(2,7);
// console.log(result);

// Output
// gyjvo

// Working
// In toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.
// The substring(2, 7) method returns five characters.
// substring( ) method use keli karan, Math.random().toString(36) this returns 0.chracteres so to cut 1st two elements.

//***// NOTE
// num.toString(36) == (26376373).toString(36)
// 36 = a to z + 0 to 9.
// This method generates output in the form of mixed letters and numbers from above combination.

//13// Check if a String Starts With Another String

// Three ways
// Using startsWith()
// Using lastIndexOf()
// Using RegEx

//1. Using startsWith()

// const string = 'hello world';

// const toCheckString = 'he';

// if(string.startsWith(toCheckString)) {
//     console.warn('The string starts with "he".');
// }
// else {
//     console.warn(`The string does not starts with "he".`);
// }

// Output
// The string starts with "he".

//2. Using lastIndexOf()  or // Using indexOf()

// const string = 'hello world';

// const toCheckString = 'he';

// let result = string.lastIndexOf(toCheckString, 0) === 0;
// if(result) {
//     console.warn('The string starts with "he".');
// }
// else {
//     console.warn(`The string does not starts with "he".`);
// }

// Output
// The string starts with "he".

// Working
// The lastIndexOf() method returns the index of the searched string (here searching from the first index).

//3. Using RegEx

// const string = 'hello world';

// const pattern = /^he/;

// let result = pattern.test(string);

// if(result) {
//     console.warn('The string starts with "he".');
// }
// else {
//     console.warn(`The string does not starts with "he".`);
// }

// Output
// The string starts with "he".

//Note:  /^ indicates the starting of the string.

//14// Trim a String

// Two Ways
// Using Trim
// Using RegEx

//1. Trim

// const string = '      Hello World       ';

// const result = string.trim();

// console.log(result);

// Output
// Hello World

//Note: The trim() method removes white space from both sides of the string.

//2. Using RegEx

// function trimString(x) {
//     let trimValue = x.replace(/^\s+|\s+$/g,'');
//     return trimValue;
// }

// const result = trimString('    Hello world    ');
// console.log(result);

// Output
// Hello World

// Working
// The RegEx is used with the replace() method to trim the string.
// replace value hi withoutSpace waale quotation ahet.
///^\s+|\s+$/g checks for whitespace at the beginning and end of the string.

//15// Check Whether a String Contains a Substring

// Two Ways
// with includes()
// with indexOf()

//1. with includes()

// const str = prompt('Enter a string:');
// const checkString = prompt('Enter a string that you want to check:');

// // check if string contains a substring
// if(str.includes(checkString)) {
//     console.log(`The string contains ${checkString}`);
// } else {
//     console.log(`The string does not contain ${checkString}`);
// }

// Output
// Enter a string: JavaScript is fun
// Enter a string that you want to check: fun
// The string contains fun

// NOTE
// The includes() method is case-sensitive. Hence, fun and Fun are different.
// To solve this we can use Logical OR operator
// declare a varibale => checkString1 = Fun
// if(str.includes(checkString) || str.includes(checkString1) )
// Uppercase/LowerCase sathi punha variable declare karun tyala Uppercase/LowerCase if() madhe pass karayach.

//2.  with indexOf()

// const str = prompt('Enter a string:');
// const checkString = prompt('Enter a string that you want to check:');

// // check if string contains a substring
// if(str.indexOf(checkString) !== -1) {
//     console.log(`The string contains ${checkString}`);
// } else {
//     console.log(`The string does not contain ${checkString}`);
// }

// Output
// Enter a string: JavaScript is fun
// Enter a string that you want to check: fun
// The string contains fun

// Note: The indexOf() method is case sensitive.

//16// Compare TWo Strings

// Three Ways
// Using toUpperCase() or toLowerCase()
// Using RegEx
// Using localeCompare()

//1. Using toUpperCase() or toLowerCase()

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';

// // compare both strings
// const result = string1.toUpperCase() === string2.toUpperCase();

// if(result) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }

// Output
// The strings are similar.

// Note:
//You can also use the toLowerCase() method to convert all the strings to lowercase and perform the comparison.

//2. Using RegEx

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';

// // create regex
// const pattern = new RegExp(string1, "gi");

// // compare the stings
// const result = pattern.test(string2)

// if(result) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }

// Output
// The strings are similar.

//3. Using localeCompare()

// program to perform case insensitive string comparison

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';

// const result = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

// if(result == 0) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }

// Output
// The strings are similar.

// Working
// The localeCompare() method returns a number that indicates whether a reference string comes before, or after, or is the same as the given string.
//Here, { sensitivity: 'base' } treats A and a as the same.

//17// Encode a String to Base64

// Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.

//1.  Encode a String to Base64 Using btoa()

// const str = "Learning JavaScript";

// // encoding the string
// const result = window.btoa(str);
// console.log(result);

// // decoding the string
// const result1 = window.atob(result);
// console.log(result1);

// Output
// TGVhcm5pbmcgSmF2YVNjcmlwdA==
// Learning JavaScript

// In the above example, the btoa() method is used to convert the string to Base64.
// The atob() method is used to convert the Base64 to a string.

//2. encode() and decode() method
// See on Progamiz

//18// Replace All Line Breaks with <br>
//18// Replace All Line Breaks with ' '(basis is  Space)
// Multiple lines chi single line banvayachi.

// Two Ways

// Using RegEx
// Using Built-in Methods

//1. Using RegEx
// Here,  string = 3 lines and one.

// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;

// const result = string.replace(/(\r\n|\r|\n)/g, '<br>');

// console.log(result);

// Output
// I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.

//     OR  OR   OR   OR    OR

// const result = string.replace(/(\r\n|\r|\n)/g, '');

// console.log(result);

// Output
// I am Learning JavaScript.JavaScript is fun.JavaScript is easy.

// Working
// The RegEx is used with the replace() method to replace all the line breaks in string with <br>.
// The pattern /(\r\n|\r|\n)/ checks for line breaks(i.e full stops).
// The pattern /g checks across all the string occurrences.

//2. Using Built-in Methods

// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;

// const result = string.split('\n').join('<br>');

// console.log(result);

// Output
// I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.

//     OR  OR   OR   OR    OR

// const result = string.split('\n').join(' ');

// console.log(result);

// Output
// I am Learning JavaScript. JavaScript is fun. JavaScript is easy.

// Working

// The split('\n') splits the string into array elements by splitting on a line break.
// ["I am Learning JavaScript.", "JavaScript is fun.", "JavaScript is easy."]

// The join('<br>') method joins the array by adding <br> between array elements.
// I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.

// The join(' ') method joins the array by adding ' '(space) between array elements.
// I am Learning JavaScript. JavaScript is fun. JavaScript is easy.

// NOTE
// Donhi methods madhe mi kay kartoy tar jithe line break ahe tyanna connect kartoy ani tyacha basis '<br>' or ' ' ha detoy. Basis could be anything. Line break chya nantar 'basis' add honar

//19// Get File Extension

// Two ways
// Using split() and pop()
// Using substring() and lastIndexOf()

//1. Using split() and pop()

// function getFileExtension(filename){

//     // get file extension
//     const extension = filename.split('.').pop();
//     return extension;
// }

// // passing the filename
// const result1 = getFileExtension('module.js');
// console.log(result1);

// const result2 = getFileExtension('module.txt');
// console.log(result2);

// Output
// js
// txt

// Working
// Here, filename.split('.') gives ["module", "js"] by splitting the string.
// The last array element, which is the extension, is returned using the pop() method.

//2. Using substring() and lastIndexOf()

// function getFileExtension(filename){
//     // get file extension
//     const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
//     return extension;
// }

// const result1 = getFileExtension('module.js');
// console.log(result1);

// const result2 = getFileExtension('test.txt');
// console.log(result2);
// Run Code
// Output

// js
// txt

// Working

// filename.lastIndexOf('.') + 1 Why this karan
// filename.lastIndexOf('.') returns the position of . and + 1 karan we dont want that . in the answer
// lastIndexOf('.') or indexOf('.') can be used.

// The filename.length property returns the length of the string.
// substring(filename.lastIndexOf('.') + 1, filename.length) method returns characters between the given indexes(used to cut the string). For example, 'module.js'.substring(8, 10) returns js.
// The OR || operator is used to return the original string if there is no . in the filename.

//20// Generate a Range of Numbers and Characters
// Differenet type cha code ahe , if needs then kara.

//21// Remove All Whitespaces From a Text

// Two Ways
// Using split() and join()
// Using Regular Expression

//1. Using split() and join()

// const string = '      Hello World       ';

// const result = string.split(' ').join('');

// console.log(result);

// Output
// HelloWorld

// The split(' ') cha basis ahe space(' ')
// ["", "", "", "", "", "", "Hello", "World", "", "", "", "", "", "", ""]
// The join('') cha basis ahe noSpace('').

//2. Using Regular Expression

// function trimString(x) {

//     const result = x.replace(/\s/g,'');
//     return result

// }

// const result = trimString('    Hello World    ');
// console.log(result);

// Output
// HelloWorld

// .replace() method is used with RegEx
// /\s/g checks for whitespace in the string. They are replaced by ('') noSpace.
