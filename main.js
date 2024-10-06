const drop = document.querySelector(".drop");
const show = document.querySelector("b");
const men = document.querySelector(".inf");
const info = document.querySelector(".info");
const scroll = document.querySelector(".scroll");
const xmark = document.querySelector(".info i");
const nav = document.querySelector("nav");
const social = document.querySelector(".menu .a2");
const soc = document.querySelector(".social");

///////////////////////////////////////////////////////////////////////////////////////////////////////////
show.addEventListener("click", () => {
  z();
});

function z() {
  show.classList.toggle("be1");
  drop.classList.toggle("be");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onscroll = function () {
  const val = scrollY;
  if (val >= 480) {
    scroll.style.bottom = "30px";
  } else {
    scroll.style.bottom = "-100%";
  }

  if (val >= 93.5999984741211) {
    nav.classList.add("when");
  } else {
    nav.classList.remove("when");
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

let darkmode = localStorage.getItem("dark_mode");
const themeSwitch = document.querySelector(".no");

const enable = () => {
  document.body.classList.add("dark_mode");
  localStorage.setItem("dark_mode", "active");
};

const disable = () => {
  document.body.classList.remove("dark_mode");
  localStorage.setItem("dark_mode", null);
};

if (darkmode === "active") enable();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("dark_mode");
  darkmode !== "active" ? enable() : disable();
});

///////////////////////////////////////////////////////////////////////////////

social.addEventListener("click", () => {
  soc.classList.toggle("shows");
});
