document.querySelectorAll(".link")[0].addEventListener("mouseover", () => {
  document.body.style["background-color"] = "var(--1-secondary)";
  document.body.style["color"] = "var(--1-primary)";
  document.querySelector(".subscribe button").style["background-color"] = "var(--1-primary)";
  document.querySelector(".subscribe button").style["color"] = "var(--1-secondary)";
  document.querySelectorAll(".replaceLogo")[0].src = "assets/logo-i1.svg";
  document.querySelectorAll(".replaceLogo")[1].src = "assets/logo-i1.svg";
  document.querySelector("#footer").style["color"] = "var(--1-primary)";
})

document.querySelectorAll(".link")[1].addEventListener("mouseover", () => {
  document.body.style["background-color"] = "var(--2-secondary)";
  document.body.style["color"] = "var(--2-primary)";
  document.querySelector(".subscribe button").style["background-color"] = "var(--2-primary)";
  document.querySelector(".subscribe button").style["color"] = "var(--2-secondary)";
  document.querySelectorAll(".replaceLogo")[0].src = "assets/logo-i2.svg";
  document.querySelectorAll(".replaceLogo")[1].src = "assets/logo-i2.svg";
  document.querySelector("#footer").style["color"] = "var(--2-primary)";
})

document.querySelectorAll("#colorTiles div")[0].addEventListener("mouseover", () => {
  document.body.style["background-color"] = "var(--1-secondary)";
  document.body.style["color"] = "var(--1-primary)";
  document.querySelector(".subscribe button").style["background-color"] = "var(--1-primary)";
  document.querySelector(".subscribe button").style["color"] = "var(--1-secondary)";
  document.querySelectorAll(".replaceLogo")[0].src = "assets/logo-i1.svg";
  document.querySelectorAll(".replaceLogo")[1].src = "assets/logo-i1.svg";
  document.querySelector("#footer").style["color"] = "var(--1-primary)";
})

document.querySelectorAll("#colorTiles div")[1].addEventListener("mouseover", () => {
  document.body.style["background-color"] = "var(--2-secondary)";
  document.body.style["color"] = "var(--2-primary)";
  document.querySelector(".subscribe button").style["background-color"] = "var(--2-primary)";
  document.querySelector(".subscribe button").style["color"] = "var(--2-secondary)";
  document.querySelectorAll(".replaceLogo")[0].src = "assets/logo-i2.svg";
  document.querySelectorAll(".replaceLogo")[1].src = "assets/logo-i2.svg";
  document.querySelector("#footer").style["color"] = "var(--2-primary)";
})

document.querySelectorAll("#colorTiles div")[2].addEventListener("mouseover", () => {
  document.body.style["background-color"] = "var(--3-secondary)";
  document.body.style["color"] = "var(--3-primary)";
  document.querySelector(".subscribe button").style["background-color"] = "var(--3-primary)";
  document.querySelector(".subscribe button").style["color"] = "var(--3-secondary)";
  document.querySelectorAll(".replaceLogo")[0].src = "assets/logo-i3.svg";
  document.querySelectorAll(".replaceLogo")[1].src = "assets/logo-i3.svg";
  document.querySelector("#footer").style["color"] = "var(--3-primary)";
})