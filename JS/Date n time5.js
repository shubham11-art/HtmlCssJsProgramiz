// 7:41:00
// new Date(); mule aaplyala Date and Time bhetnar.
// There are 4 ways to create a new date object:
// Date Methods // const curDate = new Date(); // console.log(curDate.toLocaleString()); // console.log(curDate.getFullYear()); // console.log(curDate.getMonth()); 0-11 == jan-dec etc
// Displaying Dates // 1. toString() method. // 2. toUTCString() // 3. toDateString()
// Time Methods  //2. console.log(curTime.getHours()); //3. console.log(curTime.getMinutes()); //4. console.log(curTime.getSeconds()); //5. console.log(curTime.getMilliseconds());
// new date.toLocaleTimeString();Only Time 7:47:41 pm // new date.toLocaleDateString();Only Date 31/8/2022 // new date.toLocaleString();  Time n Date 31/8/2022, 7:47:29 pm

// Creating Date Objects

// Date and Time called together because one object 'new Date()' gives both.

// Date objects are created with the new Date() constructor. (new means we are creating a 'new instance/object' of that class(Date()).)

// There are 4 ways to create a new date object:
// Ya 4 ways na pass kelelya values aaplyala Date and Time chya form madhe return hotat
// Date objects are static. The computer time is ticking, but date objects are not.

//1. new Date()
// new Date() creates a new date object with the current date and time:
//2. new Date(year, month 0-11, day 1-31, hours 0-23, minutes 0-59, seconds 0-59, milliseconds 0-999)
//3. new Date(milliseconds)
// We cant avoid month section
//4. new Date(date string)

// 1. // new Date() gives standard time set by the program but to get the Local time we use
// new Date.toString()  // Tue Oct 04 2022 13:20:25 GMT+0530 (India Standard Time)  OR
// new Date().toLocaleString() // 4/10/2022, 1:20:25 pm

// Date.now()
// Returns numeric value of milliseconds elapsed since january 1, 1970.

// 2.// new Date(year, month, ...) creates a new date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// Note: JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.
//Note: Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
// Ex: const d = new Date(2010, 17, 10, 20, 30, 10);
// console.log(d.toLocaleString());
// O/P  10/6/2011, 8:30:00 pm
// const d = new Date(2011, 6, 10, 20, 30, 10);
//Note: Specifying a day higher than max, will not result in an error but add the overflow to the next month:
// Ex: const d = new Date(2018, 5, 35, 10, 33, 30);
// Is the same as:
// const d = new Date(2018, 6, 5, 10, 33, 30);

// Note: Specifying parameters less than 7 means we are 'cutting'(cutting from right) them from milliseconds to year.
// Note: You cannot omit month. If you supply only one parameter it will be treated as milliseconds

// Note: Previous Century
// One and two digit years will be interpreted as 19xx:
// Example
// const d = new Date(99, 11, 24);
// O/P Fri Dec 24 1999 00:00:00 GMT+0530 (India Standard Time)
// const d = new Date(9, 11, 24);
// O/P Fri Dec 24 1909 00:00:00 GMT+0530 (India Standard Time)

// 3. // new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:
// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
//***// Zero time is January 01, 1970 00:00:00 UTC. 'Minus Value' will take us past 1/1/1970 AND 'Plus Value' will take us post 1/1/1970
// One day (24 hours) is 86 400 000 milliseconds.
// Ex: const d = new Date(846000000);
// console.log(d.toLocaleString());
// O/P 11/1/1970, 12:30:00 am

// 4. new Date(Date string)
//  It creats a new Date object 'from a string'
// Ex: const d = new Date("October 13, 2014 11:13:00");
// console.log(d.toLocaleString());
// O/P 13/10/2014, 11:13:00 am

// 7:59:10
// Date Methods

// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); 0-11 == jan-dec
// console.log(curDate.getDate()); 1-31
// console.log(curDate.getDay()); 0-6 == sun-sat
// O/P
//  31/8/2022, 6:14:39 pm
// 2022
// 7
// 31
// 3

// Displaying Dates
// 1. toString() method.
// When you display a date object in HTML, it is automatically 'converted to a string', with the toString() method.
// Example
// const d = new Date();
// console.log(d.toString());
// O/P Wed Aug 31 2022 18:27:33 GMT+0530 (India Standard Time)

// 2. toUTCString()
// The toUTCString() method converts a date to a UTC string (a date display standard).
// Example
// const d = new Date();
// console.log(d.toUTCString());
// O/P Wed, 31 Aug 2022 12:58:43 GMT

// 3. toDateString()
// The toDateString() method converts a date to a more readable format:
// Example
// const d = new Date();
// console,log(d.toDateString());
// O/P Wed Aug 31 2022

// JavaScript Set Date Methods
// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

// Set Date Methods
// Set Date methods are used for setting a part of a date:

// Method	          Description
// .setDate()	      Set the day as a number (1-31)
// .setFullYear()	  Set the year (optionally month and.
// .setHours()	      Set the hour (0-23)
// .setMonth()	      Set the month (0-11)
// .setMinutes()	     Set the minutes (0-59)
// .setSeconds()	    Set the seconds (0-59)
//.setMilliseconds()	Set the milliseconds (0-999)
// .setTime()	      Set the time (milliseconds since January 1, 1970)

/// yaanche saglyanche uttar milliseconds madhe yetayet. After using it in html with DOM structure we can set date.

// 8:02:00
// Time Methods
// Get time

// const curTime = new Date();
//1. console.log(curTime.getTime());
// The getTime() method returns the number of milliseconds since January 1, 1970 (like Date.now())
//2. console.log(curTime.getHours());
// Returns the hours of a date as a number(0-23)
//3. console.log(curTime.getMinutes());
// Returns the hours of a date as a number(0-59)
//4. console.log(curTime.getSeconds());
// Returns the hours of a date as a number(0-59)
//5. console.log(curTime.getMilliseconds());
// Returns the hours of a date as a number(0-999)
// O/P
// 1661951831470
// 18
// 47
// 11
// 470

// 8:05:00
// Set Time

// Definition and Usage
// The setTime() method sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
// Syntax
// Date.setTime(millisec)
// Parameter Values
// Parameter	Description
// millisec	Required. The number of milliseconds to be added to, or subtracted from, midnight January 1, 1970

// const curTime = new Date();
//1. console.log(curTime.setTime());
//2. console.log(curTime.setHours());
//3. console.log(curTime.setMinutes());
//4. console.log(curTime.setSeconds());
//5. console.log(curTime.setMilliseconds());

// yaanche saglyanche uttar milliseconds madhe yetayet. After using it in html with DOM structure we can set time.

// 8:13:00
// Challenge Time
// const date = new Date();
// new date.toLocaleTimeString();Only Time 7:47:41 pm
// new date.toLocaleDateString();Only Date 31/8/2022
// new date.toLocaleString();  Time n Date 31/8/2022, 7:47:29 pm
