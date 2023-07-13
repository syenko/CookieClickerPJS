function setup() {
  createCanvas(600, 600);
}

let cookies = 0;
let cpc = 1;
let x = 300;
let y = 300;
let sz = 1;

function cookie(x, y, sz) {
  noStroke();

  // shadow
  fill(168, 106, 5);
  ellipse(x - 5 * sz, y + 5 * sz, 200 * sz, 200 * sz);

  // body
  fill(214, 161, 70);
  ellipse(x, y, 200 * sz, 200 * sz);

  // chocolate chips
  fill(71, 45, 0);
  ellipse(x + 24 * sz, y + 11 * sz, 30 * sz, 30 * sz);
  ellipse(x - 51 * sz, y + 52 * sz, 20 * sz, 20 * sz);
  ellipse(x + 51 * sz, y + 55 * sz, 25 * sz, 25 * sz);
  ellipse(x + 28 * sz, y - 63 * sz, 22 * sz, 22 * sz);
  ellipse(x - 38 * sz, y - 26 * sz, 35 * sz, 35 * sz);
}

function draw() {
  background(255, 255, 255);

  // d1 opt - size thing
  if (
    (mouseIsPressed || (keyIsPressed && key === " ")) &&
    dist(x, y, mouseX, mouseY) < 100 * sz
  ) {
    sz = 0.95;
  } else {
    sz = 1;
  }

  fill(0, 0, 0);
  text("Cookies: " + cookies, 20, 30);

  cookie(x, y, sz);
}

function mouseClicked() {
  if (dist(x, y, mouseX, mouseY) < 100 * sz) {
    cookies += cpc;
  }
}

function keyPressed() {
  if (key === " " && dist(x, y, mouseX, mouseY) < 100 * sz) {
    cookies += cpc;
  }
}
