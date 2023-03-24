// 6:41:00
// String Short Note
// Escape Character(BackSlash == \)
// String Length
// Finding a String(give index no.) in a String  // 1. // .indexOf() // 2.// lastIndexOf()  // 1. search()// same like .indexOf().
// Extracting String Parts // .slice(start,end) // .substring(start,end) // .substr(start,length) // start, end, length are the index numbers
// Replacing String Content()  *// .replace()  // string.replace(searchValue, newValue)  g, i, m
// string.match(searchValue) // hi value ahe ki nahi string nadhe
// Extracting String(give element) Characters() // .charAt(position) // .charCodeAt(position) // Property access []
// 1. .toUpperCase()  // 2. .toLowerCase()
// 4.  .trim()   // 5. trimStart()   // 6. .trimEnd()
// Converting A String to an Array  // done with .split()  (Basis=> comma, spaces, pipe, double quote without space )

// STRINGS

// JavaScript strings are for storing and manipulating text.
//**// A JavaScript string is zero or more characters written inside quotes.
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
//**// Double Quotes chya aat kitihi Single Quotes use karu shakato and vice a versa.
// Ex: let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';
// let answer2 = "He 'is' called 'Johnny'";
// let answer3 = 'He is "called" "Johnny"';
//  OR
//**// // Escape Character(BackSlash == \)
// For using quotes inside a string i.e Quoting same quotes inside a Quote.
// Ex : let answer2 = 'He \'is\' called \'Johnny\'';
// let answer3 = "He is \"called\" \"Johnny\"";
//***// i.e Backslash(\) should be used before a special character(i.e aatle quotes)

//*// Strings can be created as primitives, from string literals, as objects and from the String constructors().
// Ex: From String() constructor
// let name = new String ("Thapa Tech");
// O/P is an array
// [String: 'Thapa Tech']

//*// String Length

// let myName = 'bunty Gunjal';
// console.log(myName.length);
// O/P 12
// In length it counts spaces also. i.e index no get alloted to the spaces also

// 6:51:00

// Finding a String in a String

// 1. // .indexOf()

//**// The indexOf() method returns the position of the 'First Occurrence' of a value in a string. i.e suppose search kel 't' tar jya pan word cha pahila character 't' bhetel it will return that index number.
//**// index no. get alloted to spaces, each letter in a word and to the special characters (like comma, fullstop,spaces etc). AND index no. start from 0.
// The indexOf() method returns -1 if the value is not found.
//**// The indexOf() method is case sensitive.
// The indexOf() method dose 'Forward Search'.
// SYNTAX
// string.indexOf(searchvalue, [index no.]);
// Ex: let game = ('i am the boss');
// console.log(game.indexOf('am')); OR
// console.log(game.indexOf('am',[1]));
// O/P Donhinch 2
//   Lakshyat ghya
// console.log(game.indexOf('m'));
// O/P 3
// console.log(game.indexOf('a'));
//  O/P 2
// i.e 'Word' jar search kela trar tyachya 'pahilya letter' cha jo index asel to output yeto.

// 2.// lastIndexOf()

// The lastIndexOf() method returns the index (position) of the 'First Occurance in a Backword Direction'of a specified value in a string.
// The lastIndexOf() method searches the string from the end to the beginning i.e 'backward Search'.
// The lastIndexOf() method returns the 'index' from the beginning (position 0).
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() method is case sensitive.
// SYNTAX
// string.lastIndexOf(searchvalue, [index no.]);
// O/p realted gosti same .indexOf() sarkhya

// 6:56:10

// Searching a String in a String

// 1. search()
// same like .indexOf(). (i.e it will also return the index no) only 'difference' is it dose not take 2nd argument i.e 'start value'(index no.)

// 6:59:00

// Extracting String Parts
// 3 Methods
// .slice(start,end)
// .substring(start,end)
// .substr(start,length)
// start, end, length are the index numbers symbolise start printing from start value and print till end value.

// 1. slice()
// The slice() method RETURNS selected elements in an array, as a NEW ARRAY.
//**// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
// Return Value
// A new array containing the selected elements.
// SYNTAX
// array.slice(start, end)

// Note :
// i. 'end position' jar minus asel tar it prints from start position and minuses given index no. from end position.
// ii. if only 'start position' dili asel tar it prints from start position till end (i.e start position to end paryant sagal).
// iii. Vegvegali index position for "[]" and "()"
// let game = ['i', 'am', 'the', 'boss'];
// index no     1    2      3      4
// let game = ['i am the boss'];
// index no    1  2   3   4.
//  yaa donhi madhe special charatcers count hot nahit
//  AND
// let game = ('i', 'am', 'the', 'boss');
// yaat special charatcer count hot nahit
// index no   13   12  1110  9   876    5   4321
// let game = ('i am the boss');
// index no     12345678910111213

//**// Challenge Time == Twitter
// .slice(0,280) == It will print 280 words i.e 0 to 279.

// 7:10:00
// 2. substring()
// same as .slice()
//*// only 'difference' is that substring() dont accept negative indexes.
// and if we give negative index so it counts characters from 0th position till given no.(last index excluded).
// SYNTAX
// array.substring(start, end)
// Ex :
// let game = ('i, am, the, boss');
//  const arr = game.substring(3,8);
// O/P am, t

// Ex let game = ('i, am, the, boss');
//  const arr = game.substring(4,-1);
// i.e it will print from 0 to 3 (i.e 4 claculate zale stating from 0 == 0 1 2 3)
// O/P i, a

// 3. substr()
// same as .slice()
//**// only 'difference' is that in .substr() '2nd parameter' specifies the 'length' of extracted part.
// 2nd parameter negative asel tar 'No O/P'. But only negative value (as a 1st parameter) deu shakato jo maghun count karun print karto.
// Ex let game = ('i am the boss');
//  const arr = game.substr(-7);
// O/P is he boss(magun counting started from -1)
// Ex let game = ('i am the boss');
//  const arr = game.substr(7);
// O/P is e boss (index no 7 pasun pudhache print zale)
// Ex let game = ('i am the boss');
//  const arr = game.substr(7, 3);
// O/P is e b (index no 7 pasun total 3 index print zale)

// 7:17:10
// Replacing String Content()
//*// .replace()
// SYNTAX
// string.replace(searchValue, newValue)

// The replace() method searches a string for a value or a regular expression.
//**// The replace() method returns a 'New String' with the value(s) replaced.
// The replace() method does not change the original string.
//**// The replace() method is 'case sensitive'.
//**// If you replace a value, only the 'First Instance' will be replaced. To replace all instances, use a 'Regular Expression' with the g modifier set.
// Ex : let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");
// O/P Visit W3Schools!

// A global replacement:

// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.
// Regular expressions are written without quotes.

//SYNTAX
//**// /pattern/modifiers;

// Modifiers
// Modifiers are used to perform case-insensitive and global searches:

// Modifier	Description
// g	Perform a global match (find all matches rather than stopping after the first match)
// i	Perform case-insensitive matching
// m	Perform multiline matching // every line madhe search kel jat.

//Ex  let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/g, "red"); // this is case sensitive
// O/P Mr Blue has a red house and a red car.

//Ex  let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/i, "red"); // this is case in-sensitive but matches only first occurence
// O/P Mr red has a blue house and a blue car

//*// .match()
//The match() method matches a string against a regular expression **
// The match() method returns an array with the matches.
// The match() method returns null if no match is found.
// SYNTAX
// string.match(searchValue) // hi value ahe ki nahi string nadhe

// Modifier	Description
// g	Perform a global match (find all matches rather than stopping after the first match)
// i	Perform case-insensitive matching
// m	Perform multiline matching // every line madhe search karnar

//Ex
// global search(g)
//  let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/g);
//O/P  ain,ain,ain // this is case sensitive

// case in-sensitive(i)
//  let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/i);
//O/P  ain // this is case in-sensitive but stops after first match
//Ex
// global, case-insensitive search(gi)
// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/gi);
// O/P ain,AIN,ain,ain

// Note : Jar syntax error or any other error zali tar 'Return Value' hi 'Original String' asate.

//**// The Difference Between String match() and String search(). The match() method returns an array of matches(i.e elements).The search() method returns the position(index no) of the first match.

// 7:24:00
// Extracting String Characters()
// 3 methods
// .charAt(position)
// .charCodeAt(position)
// Property access []

// 1. .charAt(position)
// The charAt() method returns the character/element at a specified index (position) in a string.
// This is like .match()
// SYNTAX
// string.charAt(index)
// Ex : let myName = ('i am the boss');
// console.log(myName.charAt(5));
// O/P t

// 2. .charCodeAt(position)
// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
// charCodeAt() is UTF-8, codePointAt() is Unicode.
// charCodeAt() returns a number/integer between 0 and 65535.
// SYNTAX
// string.charCodeAt(index)
// let myName = ('i am the boss');
// console.log(myName.charCodeAt(5));
// O/P  116

// 3. Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings:
// like .charAt(position)

// SYNTAX
// string[]

// Ex : let text = "HELLO WORLD";
// let char = text[0];
// O/P H

// 7:33:20

// Other Useful Methods

// 1. .toUpperCase()
// 2. .toLowerCase()

// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

// Ex : let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// O/P HELLOW WORLD!

// Ex : let text1 = "Hello World!";
// let text2 = text1.toLowerCase();
// O/P hellow world!

// 3.   .concat()
// yala use karayache 4 types aahet

// let fName = 'bunty';
// let lName = 'gunjal';

// console.log(fName +lName )
//**// console.log(`${fName} ${lName}`); === best
// // console.log(fName.concat(lName));
// console.log(fName.concat(' ' ,lName));

// 4.  .trim()
// The trim() method removes whitespace from both sides of a string:
// let text1 = "      Hello World    !      ";
// let text2 = text1.trim();
// O/P Hellow World!
// let text1 = "      Hello World    !      n";
// let text2 = text1.trim();
// O/P Hello World    !      n
// i.e removes space from pahilya index chya adhi ani shevtachya indexchya nantar

// 5. trimStart()
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// O/P Hellow World!....
// i.e removes space from pahilya index chya adhi

// 6. .trimEnd()
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
// // let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// O/P         Hellow World!
// i.e removes space from shevtachya indexchya nantar

// 7:38:00
// Converting A String to an Array
// done with .split()
// The split() method splits a string into an array of substrings.
//**// The split() method returns the new array.
//**// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

// Syntax
// string.split(separator, limit)

// Parameters
// Parameter	Description
// 1. separator	  Optional.
// A string or regular expression to use for splitting.
// If omitted, an array with the original string is returned.
// 2. limit	   Optional.
// An integer that limits the number of splits.
// Items after the limit are excluded.

// Ex : let text = ('a, b, c, d');
// console.log(text.split(","));  (Basis - comma)
// O/P [ 'a', ' b', ' c', ' d' ]
// i.e comma chya adhi ek string ani comma chya nantar ek string.

// Ex : let text = ('a  b c  d');
// console.log(text.split(" "));  (Basis - spaces)
// O/P [ 'a', '', 'b', 'c', '', 'd' ]
// i.e pratek element ani space chi string tayar zali.

// Ex : let text = ('a|b|c|d');
// console.log(text.split("|");  (Basis - pipe)
// O/P [ 'a', 'b', 'c', 'd' ]
// i.e pipe chya adhi ek string ani pipe chya nantar ek string.

// Note : extra/binkami (comma, spaces, pipes) (extra ,mhanje aapan normally 1 vaprto seperate karnyasathi, typekshya jast ) directly proportional to the that extra substrings in that perticular array.

//**// Note : Jar seperator ("") ha vaprala tar partek letter, pratek special character la substring madhe convert kel jaat ahe.
// Ex :let text = ('a |b  |c |d');
// console.log(text.split("")); (Basis - double quote without space)
// O/P ['a', ' ', '|', 'b',
//   ' ', ' ', '|', 'c',
//   ' ', '|', 'd'
// ]

// Progamiz
//***// NOTE
//**// .split(), .sort() returns an array and .join() returns a string.
//***// NOTE
// Basis of Split

// let string = "i am learning";
// split("")
// O/P [
//   'i', ' ', 'a', 'm',
//   ' ', 'L', 'e', 'a',
//   'r', 'n', 'i', 'n',
//   'g'
// ]
// split(" ")
// O/P [ 'i', 'am', 'Learning' ]

// let string = "learning";
// split("")
//  O/P [
//   'L', 'e', 'a',
//   'r', 'n', 'i',
// ]
// split(" ")
//  O/P [ 'Learning' ]

//***// Conclusion
// Basis jar Space ahe tar, String madhe space jya adhi ani nantar je word/letter/specialCharacter will become an element.
// Basis jar NoSpace ahe tar, each word/each specialCharacter  will become an element.

//**// i.e .split(basis) jo basis ahe tyachya aadhi ani tyachya nantar ashi string banali jaate.
