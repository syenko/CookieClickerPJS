/**

    Cookie Clicker

**/

// ----------- Variables ------------
var cookies = 0;

// ----------- Objects ----------
// Day 2: Define an object to represent a cookie
var cookie = {
    x: 200,
    y: 200,
    sz: 1,
    isTouching: function () {
        return dist(this.x, this.y, mouseX, mouseY) < 100 * this.sz;
    },
};

// ----------- Functions -------------
// Day 1: Make a function to draw a cookie
/**
 * The function should control the position and size of the cookie
 * What parameters should the function have?
 * How can we move the cookie based on the parameters
 */
var drawCookie = function (x, y, sz) {
    noStroke();

    // cookie shadow
    fill(168, 106, 5);
    ellipse(x - 5 * sz, y + 5 * sz, 200 * sz, 200 * sz);

    // cookie body
    fill(214, 161, 70);
    ellipse(x, y, 200 * sz, 200 * sz);

    // chocolate chips
    fill(71, 45, 0);
    ellipse(x + 24 * sz, y + 11 * sz, 30 * sz, 30 * sz);
    ellipse(x - 51 * sz, y + 52 * sz, 20 * sz, 20 * sz);
    ellipse(x + 51 * sz, y + 55 * sz, 25 * sz, 25 * sz);
    ellipse(x + 28 * sz, y - 63 * sz, 22 * sz, 22 * sz);
    ellipse(x - 38 * sz, y - 26 * sz, 35 * sz, 35 * sz);
};

// ----------- Built Ins --------------
var draw = function () {
    background(255, 255, 255);

    // Day 1 optional - increase size of cookie when hovered
    if (cookie.isTouching()) {
        cookie.sz = 1.05;
    } else {
        cookie.sz = 1;
    }

    fill(0, 0, 0);
    text("Cookies: " + cookies, 20, 30);

    // Day 1 - draw the cookie
    drawCookie(cookie.x, cookie.y, cookie.sz);
};

// Day 1: When you click the cookie, increment a variable
var mouseClicked = function () {
    // Use dist function to check if the cookie was clicked
    if (cookie.isTouching()) {
        cookies += 1;
    }
};

// Day 1: When you press the spacebar and the mouse is over the cookies -> count as a click
var keyPressed = function () {
    if (str(key) === " " && cookie.isTouching()) {
        cookies += 1;
    }
};
