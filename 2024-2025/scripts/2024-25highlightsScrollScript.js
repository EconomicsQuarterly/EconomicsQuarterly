const scroller = scrollama();
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
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
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
    case 8:
    case 9:
    case 11:
      document.body.style["color"] = "var(--black)";
      document.body.style["background-color"] = "var(--white)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--black");
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      document.body.style["color"] = "var(--4-primary)";
      document.body.style["background-color"] = "var(--4-secondary)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--4-primary");
      response.element.style["font-weight"] = "1000";
      break;
    case 10:
      document.body.style["color"] = "var(--5-primary)";
      document.body.style["background-color"] = "var(--5-secondary)";
      document.querySelectorAll(".replaceLogo")[0].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue("--5-primary");
      break;
  }
}