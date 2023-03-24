//9:40:25

// Basic madhe event kashi add karayachi 4 hi paddhatinel, tyatil functiona madhil value kashi run karayachi/display karayachi etc as basic tar samjhlay ata if else, for loop etc kas add karayach he pahayala pahije ata.

// HTML events are "things" that happen to HTML elements.
//***//When JavaScript is used in HTML pages, JavaScript can "react" on these events by executing the code related to that event.

//HTML Events
//***//An HTML event can be something the browser does, or something a user does.

//Here are some examples of HTML events:

// An HTML web page has finished loading(browser ne keleli event ahe)
// An HTML input field was changed (user enters data)
// An HTML button was clicked
// Often, when events happen, you may want to do something/want to happan something.

// JavaScript lets you execute code when events are detected.
// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

//***//Summery: Event handler attrributes chya madatine aapan html elements na events add karto(ani javaScript mule tya events perform hotat) execute hoto. When that event happens code gets executed with the help of javaScript. Those events i.e Html events are either browser done or user done astat.

//event fired means event hua/happened/occured

// 4 ways of writing Events in JS
//1. Inline events alert(); (i.e Inline as an attribute)
//2. By Calling a Function(most common way of writing)
//3. Inline events (HTML onclick="" property and element.onclick)(i.e Inline as an attribute)
//4.using Event Listeners (addEventlisteners and IE's attachEvent)

//Explaining the ways
// screenshot 24 1st way  == 9:46:30(Inline mhanje inline css sarkh tya tab madhech event ani code add karayacha.)
//screenshot 25 2nd way == 9:47:40(By Calling a Function mhanje event mhanun function invoke karayach je somewhere else(JS madhe) define karayach.)
//screenshot 27/28 3rd way == 9:49:10(Element la Id/class asnar, tya Id/class cha Reference aapan variable la denar, ani mg tya variable la event ani fuction add karnar(i.e mi #id, .class, Tagname, name attribute through event add karu shakato to that perticular tag.)

//Note: pahilya 3 madhe aapan event la fire karat hoto 4 madhe aapan 1st we listen the event and then we add event to it

//screenshot 27/29 4th way == 9:51:50(Element la Id/class asnar, tya Id/class cha Reference aapan variable la denar, ani mg to variable .addEventListener through call karnar)
// SYNTAX
// .addEventListener(kaunsa event type fire karna hai, pass a Function,eventBubbling/eventCapturing)

// if i am using a function as an argument inside a method/property it's also known as callback function.

//onclick or click var Function invoke kel jatay i.e tya function madhe je define kel ahe te hotay.

//***//screenshot 30  9:57:00/ 10:27:10  4th way(.addEventListener) madhe mi same event 'Kitihi' vela fire karu shakato.i.e khalchi event varchyala override karat nahi. But 3rd way(Inline events i.e .onclick) madhe khalchi event varchyala Override karate (i.e same event aapan parat parat fire keli tar). i.e .addEventListener doesnt overrides but .onclick overrides.

//***// 1, 2, madhe aapan tag madhech function invoke karto je script madhe defined asat. But in 3rd and 4th way Id/Class cha reference gheto ani script madhe .onclick and .addEventL madhe respectively function deto.

//9:59:00
// screenshot 23
// What is Event Object.
//**// Event Object is the parent object of the event Objects(i.e sagale chote mothe event objects like MouseEvent, KeyboardEvent, focusEvent, inputEvevent etc)
//**// To get all/more the information about the fired event, we use the Event Object. i.e hum jo bhi event fire karate hai usake baap ke pass i.e Event Object ke pass us event ke related saari information rehati hai.
// console.log(event); ==> This is our event object which has all the data related to the fired events. Ani mag yaat event.(target/type etc) karun aapan hawa to data tya event related baghu shakto.

// From code with Harry 12:00 : MI jar ekhada Id vaprlay element madhe tar <script> madhe without defining the variable of that Id name(mhanje variable name and Id name same ahe) i can access that Id wala tag. Karan Id ekach asto tymule without defining suddha to tya Id la point karto.(i.e document. ne id access karun aapan variable la assign karto. But without assigning i.e without defining suddha aapan tya Id navane styling karu shakato).

//10:06:40
//scrrenahot  22
//MouseEvent in JS
// These are the events that occure when mouse interacts with the HTML document.
//mousedown, mouseup, mouseenter, mouseleave

//***//.innerHTML mhanje, script madhe jo data assign kelay it will replace the original data(content) of that perticular tag(in html code) with which .innerHTMl has used.
// jar text asel tar aapan .innerHTML lihito ani jar input Form asel tar aapan .value lihito to get the access.

//10:12:10
//screenshot  21
//KeyboardEvent Object in JS
//These are the events that occure when user presses 'any' key on keyboard.

//onkeypress, onkeydown, onkeyup (events on any key press).

//10:18:10
// InputEvents in JavaScript
// onchange(for inline)/change(.addEventListener) event occurs when the value of an element has been changed.
// for radiobuttons and checkboxes, the onchange/change event occurs when the checked(box filled/choice ticked) status has been marked.
//screenshot  31/32/33 inline
//screenahot  31/32(print on console)/33(print on screen)
//screenshot  34/35 addEventListener

//Note: .innerHTML mhanje, script madhe jo data assign kelay it will replace the original data of that perticular tag(in html code) with which .innerHTMl has used.
// jar text asel tar aapan .innerHTML lihito ani jar input Form asel tar aapan .value lihito to get the access.
// Note: console kela tar console var output disnar ani screen var output pahije asel tar aapan .innerHTML ne aanu shakato(by assiging .innerHTML to the Id/Class of that tag where we want to display.)
// Note: inline madhe aapan onclick/onchange lihito but in .addEventL.. madhe only 'core value' lihito i.e click/change.
