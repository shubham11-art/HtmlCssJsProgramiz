// 8:33:00

// He sagale Window Object chya under hote, simplyfy karnyasathi tyanna divide kel document, bom and javascript madhe.

// website waala jo screen hai o hai mera document and document andar hi hume sab data dikh raha hota hai i.e hamara html ,css render ho raha hota hai. Window is a complete Browser screen where we see tabs, url etc

//  Difference btw Window n Document
//*// Window is a global object and DOM(document) is a child of a Window.
//***// When JavaScript is executed inside the browser, the window object is the JavaScript Global object. The document is a property of the window object.
// The window object represents the browser window.
// The document object represents the HTML document loaded in that window object.
// The window object has many useful properties like the location object and the setTimeout function.
// Since the window object is the Global object, ergo, it is the end of all scope chains, you don’t have to explicitly specify it when accessing its properties…

//***// All the members like objects, methods or properties, if they are part of window object then we do not refer the window object. Where in the DOM we need to refer the document. if we want to use the document object, methods or properties.

// Difference cha SCREENSHOT 19

// The Window Object
// The window object is supported by all browsers. It represents the browser's window.
// All global JavaScript objects, functions, and variables automatically become members of the window object.
//*// Global variables are properties of the window object.
//*// Global functions are methods of the window object.
// Even the document object (of the HTML DOM) is a property of the window object:

// 8:43:00
// screenshot 20
//***// Html Element related all work done in document(DOM).
// 8:46:40 document.body.style.background ='red'

//***// BOM deals with browser componenets aside from the document like history, navigation, location and screen (as well as some others that vary from browser to browser). Functions alert/confirm/prompt are also a part of BOM.
// history (go back()) ex: 8:50:10 == By 'clicking'  'Go Back' we are redirected towords previous url due to  .history property of BOM.
// alert/confirm  Ex: 8:52:40 alert shows the current website i.e on which we are and confirm box ask us wethere you want to visit new website or not.

//**// JavaScript deals with object, array, function etc

// 8:48:00
// Properties of Window Object
// innerHeight and innerWidth of the screen

// 8:56:00
// DOM Navigation

// <html> is a root element of document. Under <html> we have <body> and <title>. Any operation related to <html>, <body>, <title> and there <child elements> are handled by DOM.
// <html> madhe je ahe te document chy under ahe so i can access the <html> code through document.(.)
//document
// returns the whole document

//document.documentElement
// returns the root element(<html>) of the document

//document.head
// returns the everything under the <head> tag

//document.body
// returns the everything under the <body> tag

//nodes are child elements

//document.body/head/html/etc.childNodes
// returns nodeList (along with childre elements it includes tab, enter, whitespaces, spaces etc)

//document.body/head/html/etc.hasChildNodes
// returns wether parent tag has chidlsNodes or not

//document.body/head/html/etc.children
// returns only child tags used

//document.body/head/html/etc.children.length
// returns length of children(child tags)

//document.body/head/html/etc.parentNode/parentElement.
// returns parent element

//document.body/head/html/etc.nextSibling/previousSibling
// returns siblins or null, if not any (along with siblings it includes tab, enter, whitespaces, spaces etc)

//document.body/head/html/etc.nextElementSibling/previousElementSibling
// returns siblins(excludes tab, enter, whitespaces, spaces etc) or null, if not any

//Note: Eka chya under dusara use kela tar dusara zala pahilyacha child/children, dusryachya under tisara use kela tar tisara zala dusryacha child/children ani pahilyacha grand-children and so on. So children mhanje direct khali, children chya khalcha nahi.

//***//Note: DOM is a 'Tree Structure' of whole <html> code including parents, their child and their child and so on.

//Note: document.1.2.3.4.....
// 1. to 4. is a journey inside <html> code from parent to required child element which we want to access. And because of this access we can make changes in <html> code with the help of document/DOM chya objects, properties, methods etc.

//***// .style ne we use DOM CSS
// .style aapan style karu shakato jya barobar pan aapan te vaparu. This is how we can use css with help of document without using clss/ id.

//9:19:00
// How to Search Element and References
// Ex:9:20:30  Ek button ahe ani Button var click kelyamule, i am invoking a function(i.e click la function assign kele ahe), je mi script madhe define kel ahe. Ani tya function madhe mi dilay ki click kelyamule kay zale pahije.
// Search Element madhe document. ne access karun tithech change assign karayacha.
// Reference madhe aapan document. ne access karun te variable la assign karayach ani nantar tya variable la change assign karayacha.
// .innerHtml through aapan access kelelya element chya content la change assign karu shakato.
// document. ne aapan html madhala code access karto tyala aapan either through Search or through Reference change assign karu shakato or console through console var print karu shakato.

//document.getElementById/TagName........
//document.getElementsByClassName/Name.......

//***//9:30:30
// Query selectors
// querySelector returns the first matching value and we can assign change to it . whereas
// querySelectorAll will return all elements i.e only returns number i.e total number of matches found, we cant assign change to it.
//SYNTAX
// document.querySelector/SelectorAll('.Class/#Id/Tag('p','a' etc))

//9:35:00
//***// Difference btw .getElementById('')/.getElementsByClassName('') AND  .querySelector('.Class/#Id/Tag')
//Id/ClassName here we get reference to the data inside that Id/ClassName and in querySelector('.Class/#Id/Tag') we get reference to the data inside that Id/ClassName/tag but to the first matching value only and BOTH returns null if no match found.

//9:36:20
// similarities btw .getElementById('')/.getElementsByClassName('')  AND  .querySelector('.Class/#Id/Tag'). Similarity as such kahi nahi pan syntax baryapaiki same ahe.
//Ex: 9:37:00 <ul>  <li class = "web"> </li>   </ul>
// document.querySelector('ul li.web');
// document.querySelector('li.web');
// document.querySelector('.web');
// We are accessing the same thing in 3 differenet ways.
