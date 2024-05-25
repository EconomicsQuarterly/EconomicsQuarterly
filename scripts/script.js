for (let i = 0; i < document.querySelectorAll(".link").length; i++) {
  document.querySelectorAll(".link")[i].addEventListener("mouseover", function () {
    colorIssue(`--${i + 1}-primary`, `--${i + 1}-secondary`)
  })
}

for (let i = 0; i < document.querySelectorAll("#colorTiles div").length; i++) {
  document.querySelectorAll("#colorTiles div")[i].addEventListener("mouseover", function () {
    colorIssue(`--${i + 1}-primary`, `--${i + 1}-secondary`)
  })
}

function colorIssue(primary, secondary) {
  document.body.style["background-color"] = `var(${secondary})`;
  document.body.style["color"] = `var(${primary})`;
  document.querySelector(".subscribe button").style["background-color"] = `var(${primary})`;
  document.querySelector(".subscribe button").style["color"] = `var(${secondary})`;
  for (let i = 0; i < document.querySelectorAll(".replaceLogo").length; i++) {
    document.querySelectorAll(".replaceLogo")[i].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue(primary);
  }
  document.querySelector("#footer").style["color"] = `var(${primary})`;
}