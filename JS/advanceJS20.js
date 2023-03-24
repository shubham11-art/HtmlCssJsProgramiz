//12:08:00
// Advance JavaScript

//12:11:20
// Event Propogation
// Event Bubbling(Bottom to Top) == bubbling phase
// Event Capturing(Top to Bottom) == capturing phase
// Screenshot 41

// Samaja aaplyakde overlapping elements aahet i.e element inside another element i.e like lexical scope of elements and tya 'saglya elements' la 'event add' ahet. Tar Event Propogation decides the order ki kontya elements pasun kontya element paryant (i.e parent to last child OR last child to parent) event fire karayachi.
// So Event Bubbling(In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.) madhe Bottom to Top i.e last child to parent hya order/kramane events fire hotat i.e aatlya pasun baherchya paryant event execution hot.
// And Event Capturing(In event Capturing, the event is first captured and handled by the outerrmost element and then propagated to inner elements.)madhe Top to Bottom i.e parent to last child hya order/kramane events fire hotat i.e baherchya pasun aatlya paryant event execution hot.

// Screenshot 43
// Bubbling phase mhanje Bottom to top
// Capturing phase mhanje Top to Bottom
//***// Target Pahse mhanje (event.target) i.e konta element pahilyanda event fire kartoy mg tya nantyar jar Bubbling phase asel tar tithun tyachya parent paryant fire hoil. Ani jar Capturing phase asel tar tya element la jevhade pan paraent astil tyachya shevtchya parent pasun ty element paryant event fire hotil.

// Screenshot 44/45
// By Default it is Bubbling phase i.e capturing sathi mala mention karav lagat. How we mention it?
// .addEventlistener (event, function,3rd) madhe 3rd argument he Bubbling/capturing sathi asat. i.e true=>Capturing and false=>Bubbling(byDfault).
// So, if you want capturing phase put 3rd argument as true. Otherwise byDefault it is false i.e Bubbing Phase.
// (Jar Nested elements with added events ahe tar on 'click' propogation honarach ahe) so, If i want ki prticular element nantar propogation stop zal pahije tar we use event.StopPropogation() in that element.

//12:23:00
// Higher Order Function
// Callback Function

//***// aappan jenvha kontahi function banvato tenvha tyat je parameters astat(aapan kitihi parameters deu shakato) tyanna aapan as an argument mhanun values and functions pass karu shakato/karto. As kitihi parameters deu shakato so kitihi values and functions pass karu shakato. ('n' number of parameters implies 'n' number of values and function).
// Screenshot 46
// calculator is higher order and add, subs, mult are callback function.
// Fakt add karayach asat tar aapan add(a,b); as function call kel asat. And in calculator ji return value ahe it is operator(num1,num2);
// so add(a,b); === operator(num1,num2); i.e same operation aapan callback function kadun karun gheto ahe. Beauty to reduce down the code.
