const scroller = scrollama();
// let enterFunctions = [[textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter], [textFocus, enter]];
// let exitFunctions = [[exit], [exit], [exit], [exit], [exit], [exit], [exit], [exit], [exit], [exit], [exit], [exit], [exit], [exit]];

window.onbeforeunload = () => window.scrollTo(0, 0);


scroller
  .setup({
    step: ".step",
  })
  .onStepEnter((response) => {
    enter(response);
  })
  .onStepExit((response) => {
    exit(response);
  });

function exit(response) {
  response.element.style["opacity"] = "0.5";
  switch (response.index) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      response.element.style["font-weight"] = "200";
      break;
  }
}

function enter(response) {
  response.element.style["opacity"] = "0.95";
  switch (response.index) {
    case 0:
    case 1:
    case 2:
    case 14:
    case 15:
      document.body.style["color"] = "var(--black)";
      document.body.style["background-color"] = "var(--white)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--black");
      break;
    case 3:
      document.body.style["color"] = "var(--1-primary)";
      document.body.style["background-color"] = "var(--1-secondary)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--1-primary");
      break;
    case 4:
      document.body.style["color"] = "var(--2-primary)";
      document.body.style["background-color"] = "var(--2-secondary)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--2-primary");
      break;
    case 5:
      document.body.style["color"] = "var(--3-primary)";
      document.body.style["background-color"] = "var(--3-secondary)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--3-primary");
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      document.body.style["color"] = "var(--3-primary)";
      document.body.style["background-color"] = "var(--3-secondary)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--3-primary");
      response.element.style["font-weight"] = "1000";
      break;
    case 13:
      document.body.style["color"] = "var(--4-primary)";
      document.body.style["background-color"] = "var(--4-secondary)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--4-primary");
      break;

  }
}