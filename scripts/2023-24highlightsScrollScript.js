const scroller = scrollama();
let enterFunctions = [[textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor], [textFocus, changeColor]];
let exitFunctions = [[textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus], [textUnfocus]];

window.onbeforeunload = () => window.scrollTo(0, 0);


scroller
  .setup({
    step: ".step",
  })
  .onStepEnter((response) => {
    if (enterFunctions[response.index] !== null) {
      for (let i = 0; i < enterFunctions[response.index].length; i++) {
        enterFunctions[response.index][i](response);
      }
    }
  })
  .onStepExit((response) => {
    if (exitFunctions[response.index] !== null) {
      for (let i = 0; i < exitFunctions[response.index].length; i++) {
        exitFunctions[response.index][i](response);
      }
    }
  });

function textFocus(response) {
  response.element.style["opacity"] = "0.95";
}

function textUnfocus(response) {
  response.element.style["opacity"] = "0.5";
}

function changeColor(response) {
  switch (response.index) {
    case 0:
    case 1:
    case 2:
    case 12:
    case 13:
      document.body.style["color"] = "var(--black)";
      document.body.style["background-color"] = "var(--white)";
      document.querySelectorAll(".replaceLogo")[0].src = "../assets/logo.svg";
      break;
    case 3:
      document.body.style["color"] = "var(--1-primary)";
      document.body.style["background-color"] = "var(--1-secondary)";
      document.querySelectorAll(".replaceLogo")[0].src = "../assets/logo-i1.svg";
      break;
    case 4:
      document.body.style["color"] = "var(--2-primary)";
      document.body.style["background-color"] = "var(--2-secondary)";
      document.querySelectorAll(".replaceLogo")[0].src = "../assets/logo-i2.svg";
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      document.body.style["color"] = "var(--3-primary)";
      document.body.style["background-color"] = "var(--3-secondary)";
      document.querySelectorAll(".replaceLogo")[0].src = "../assets/logo-i3.svg";
      break;
    case 11:
      document.body.style["color"] = "var(--4-primary)";
      document.body.style["background-color"] = "var(--4-secondary)";
      document.querySelectorAll(".replaceLogo")[0].src = "../assets/logo-i4.svg";
      break;

  }
}