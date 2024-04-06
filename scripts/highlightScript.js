let canvas = document.querySelector("#visualization");
let height = canvas.offsetHeight, width = canvas.offsetWidth;
const context = canvas.getContext("2d");
const colors = ["#255957","#274472", "#722410", "#b66a0e"];
let data = setup();
const color = (value) => colors[value];
window.onresize = () => data = setup();

function setup() {
  height = canvas.offsetHeight;
  width = canvas.offsetWidth;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  context.scale(devicePixelRatio, devicePixelRatio)

  let result = [];
  let k = width / 200;
  for (let i = 0; i < 100; i++) {
    result.push({r: k, group: Math.floor(Math.random() * 4)});
  }
  return result;
}

const nodes = data.map(Object.create);

const simulation = d3.forceSimulation(nodes)
  .alphaTarget(0.3)
  .velocityDecay(0.1)
  .force("x", d3.forceX(0).strength(0.01))
  .force("y", d3.forceY(0).strength(0.01))
  .force("collide", d3.forceCollide().radius(d => d.r + 8).iterations(3))
  .force("charge", d3.forceManyBody().strength((d, i) => i ? 0 : -width * 2 / 7))
  .on("tick", ticked);

d3.select(context.canvas)
  .on("touchmove", event => event.preventDefault())
  .on("pointermove", mouseMove);

function mouseMove(event) {
  const [x, y] = d3.pointer(event);
  nodes[0].fx = x - width / 2;
  nodes[0].fy = y - height / 2;
}

function ticked() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  for (let i = 1; i < nodes.length; ++i) {
    const d = nodes[i];
    context.beginPath();
    context.moveTo(d.x + d.r, d.y);
    context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
    context.fillStyle = color(d.group);
    context.fill();
  }
  context.restore();
}