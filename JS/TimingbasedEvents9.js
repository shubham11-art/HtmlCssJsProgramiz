//10:31:00
// The Window Object allows execution of code at specified time intervals.
// these time intervals are called as timing events.
// normal events aapan timimg deun specific time nantar execute karto so called as timing events.

// 2 Methods
//1. setTimeout(function, milliseconds)
// Executes a function (onle once) after waiting for specified time.

//2. setInterval(function, milliseconds)
// Same as setTimeout, but it repeats the execution of the function(of the same thing) continuously. Use in like countdown.

//10:34:00
// setTimeout()
// Screenshot 36
// Simply mi je setTimeout() function use karnar ahe te script madhil callback function la assign karayache.

//10:39:40
// clearTimeout
// Screenshot 37
//*// Used to stop the already fired event.
// Already fired event ji ahe ti setTimeout function ne fire karun setTimeout la dilele milliseconds sampnyachya process madhe aste. Ani hyach setTimeout function cha reference clearTimeout la delila asto. So setTimeout che milliseconds sampnyachya aat jar clearTimeout fire kela tar setTimeout function i.e adhichi event run hot nahi.

//10:41:50
// setInterval()
// Screenshot 38
// syntax and working same as setTimeout()(i.e setTimeout() run honyach thambato but setInterval keep running), fakt setInterval madhe te function run hot rahat and we cant stop it. To stop we use clearInterval.
// so where there is setinterval there should be clearInterval i guess.

//10:45:00
// clearInterval
// syntax and working same as clearTimeout only. i.e after firing clearInterval, setInterval stop working.
//Screenshot 39/40

//Note: With setInterval() and  clearInterval, i can keep playing start(by clicking button of setInterval())/stop(by clicking button of clearInterval) respectively.

//**// Note:  clearTimeout aso or clearInterval, we pass the reference of setTimeout/setInterval function respectively to the clearTimeout/clearInterval.

//***// i.e When we fire clearTimeout/clearInterval it means we are stopping working of setTimeout/setInterval function respectively.
