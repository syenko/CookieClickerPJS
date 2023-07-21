var timeSinceLastAutoUpdate;

let cookie = {
  x: 300,
  y: 300,
  sz: 1,
  isTouching: function () {
    return dist(this.x, this.y, mouseX, mouseY) < 100 * this.sz;
  },
  cookies: 0,
  cps: 0,
  cpc: 1,
};

function setup() {
  timeSinceLastAutoUpdate = millis();
  createCanvas(600, 600);
}

function drawCookie(x, y, sz) {
  noStroke();

  fill(168, 106, 5);
  ellipse(x - 5 * sz, y + 5 * sz, 200 * sz, 200 * sz);

  fill(214, 161, 70);
  ellipse(x, y, 200 * sz, 200 * sz);

  fill(71, 45, 0);
  ellipse(x + 24 * sz, y + 11 * sz, 30 * sz, 30 * sz);
  ellipse(x - 51 * sz, y + 52 * sz, 20 * sz, 20 * sz);
  ellipse(x + 51 * sz, y + 55 * sz, 25 * sz, 25 * sz);
  ellipse(x + 28 * sz, y - 63 * sz, 22 * sz, 22 * sz);
  ellipse(x - 38 * sz, y - 26 * sz, 35 * sz, 35 * sz);
}

function draw() {
  background(255, 255, 255);

  if (
    (mouseIsPressed || (keyIsPressed && str(key) === " ")) &&
    cookie.isTouching()
  ) {
    cookie.sz = 0.95;
  } else {
    cookie.sz = 1;
  }

  fill(0, 0, 0);
  text("Cookies: " + cookie.cookies, 20, 30);

  // Day 1 - draw the cookie
  drawCookie(cookie.x, cookie.y, cookie.sz);

  // Day 2 - Automatically add cookies per second
  if (millis() - timeSinceLastAutoUpdate > 1000) {
    cookie.cookies += cookie.cps;
    timeSinceLastAutoUpdate = millis();
  }
}

function mouseClicked() {
  if (cookie.isTouching()) {
    cookie.cookies += cookie.cpc;
  }
}

function keyPressed() {
  if (key === " " && cookie.isTouching()) {
    cookie.cookies += cookie.cpc;
  }
}
