let menuContract = false;
function menuChange() {
  if (menuContract) {
    menuContract = false;
    document.getElementById("navlinks").style.display = "initial";
    document.getElementById("brand").style.borderBottom = "1px grey solid";
  } else {
    menuContract = true;
    document.getElementById("navlinks").style.display = "none";
    document.getElementById("brand").style.borderBottom = "0px grey solid";
  }
}

let index = 0;

function UpdatePlus1() {
  if (index === diapos.length - 1) {
    index = 0;
  } else {
    index++;
  }
  setDiapo(index);
}

function UpdateLess1() {
  if (index === 0) {
    index = diapos.length - 1;
  } else {
    index--;
  }
  setDiapo(index);
}

function setDiapo(i) {
  document.getElementById("slideshow").style.backgroundImage =
    "url(" + diapos[i].image + ")";
  document.getElementById("slideTitle").innerHTML = diapos[i].title;
  document.getElementById("slideDesc").innerHTML = diapos[i].content;
}

let diapos = [
  {
    title: "Update 1.1",
    image: "/assets/images/background1.jpg",
    content: "Cette mise à jour apporte les trains autonomes"
  },
  {
    title: "Hotfix 1.03",
    image: "/assets/images/background2.jpg",
    content: "Bug concernant les hypertubes corrigé"
  }
];

//
// function Cookies() {
//   setTimeout(() => {
//     document.getElementById("cookies").style.display = "block";
//     document.getElementById("body").style.filter = "blur(10px)";
//   }, 3000);
// }

// function AcceptCookies() {
//   document.getElementById("body").style.filter = "blur(0px)";
//   document.getElementById("cookies").style.display = "none";
//}
//
var cooldown = true;

function uniCharCode(event) {
  var char = event.keyCode;
  console.log(char);
  if (char === 39 && cooldown === true) {
    console.log("+1");
    UpdatePlus1();
    cooldown = false;
    setTimeout(() => {
      cooldown = true;
    }, 200);
  }
  if (char === 37 && cooldown === true) {
    console.log("-1");
    UpdateLess1();
    cooldown = false;
    setTimeout(() => {
      cooldown = true;
    }, 200);
  }
}
