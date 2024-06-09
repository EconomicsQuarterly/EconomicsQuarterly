for (let i = 0; i < document.querySelectorAll(".link").length; i++) {
  document.querySelectorAll(".link")[i].addEventListener("mouseover", function () {
    colorIssue(i + 1);
  })
}

for (let i = 0; i < document.querySelectorAll("#colorTiles div").length; i++) {
  document.querySelectorAll("#colorTiles div")[i].addEventListener("mouseover", function () {
    colorIssue(i + 1);
  })
}

function colorIssue(t) {
  document.body.style["background-color"] = `var(--${t}-secondary)`;
  document.body.style["color"] = `var(--${t}-primary)`;

  for (let i = 0; i < document.querySelectorAll(".replaceLogo").length; i++) {
    document.querySelectorAll(".replaceLogo")[i].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue(`--${t}-primary`);
  }

  for (let i = 0; i < document.querySelectorAll(".banner").length; i++) {
    if (i % 2 === 0) {
      document.querySelectorAll(".banner")[i].style["background-color"] = `var(--${t}-complement)`;
      document.querySelectorAll(".banner")[i].style["color"] = `var(--${t}-primary)`;
    } else {
      document.querySelectorAll(".banner")[i].style["background-color"] = `var(--${t}-primary)`;
      document.querySelectorAll(".banner")[i].style["color"] = `var(--${t}-complement)`;
    }
  }

  document.querySelector("#nav").style["background-color"] = `var(--${t}-primary)`;
  document.querySelector("#nav").style["color"] = `var(--${t}-secondary)`;
  document.querySelector("#nav .replaceLogo").contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue(`--${t}-secondary`);

  document.querySelector(".subscribe button").style["background-color"] = `var(--${t}-primary)`;
  document.querySelector(".subscribe button").style["color"] = `var(--${t}-secondary)`;

  document.querySelector("#footer").style["color"] = `var(--${t}-primary)`;
}

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = `-${document.getElementById("nav").clientHeight}px`;
  }
  prevScrollpos = currentScrollPos;
}