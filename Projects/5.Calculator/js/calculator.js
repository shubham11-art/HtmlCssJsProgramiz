(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");

  buttons.forEach(function (element) {
    element.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value); // new Function to evaluate
      screen.value = answer;
    }
  });
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();

// NOTEs
// bharpur buttons hote so pratyek button cha access ghenyasathi forEach() vaprlay.
// button will be clicked i.e if any event happens so function(e) vaprlay i.e function will run only if any event happens
//e.target.daset.num mhanje event object madhun jo target ahe tyatil dataset madhil num access kara
//input madhe edit honyasathi aapan .innerHTML sarkh .value vaprto
// button click kelyavar screen empty vhyayala pahije so scree.value = " "; dili ahe
// screen var kay ahe tar screen.value
// screen var kay dakhvayachay tar screen.value

// LOGIC BUILDING
// e.target.dataset.num means targeted button cha data access kara. += means accumalate
// equal button la 2 conditions ahet kay tar screen empty astana ani screen var kahitar data astana. Mhanun if...else vapral ahe. if(empty) tar show empty ani jar data asel tar else{eval()} and show it on screen.
// Tas clear la ekach function ahe which is on press screen should be empty so screen.value = " ";

// Harrys code
// ScreenShot76
// saranni screen cha seperate access ghetlela nahi document.querySelector(".screen").value direct ha code madhe use kela ahe.
// scree.value = document.querySelector(".screen").value
