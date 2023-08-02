/**

    Cookie Clicker - Lesson 1

**/

// ----------- Variables ------------
var cookies = 0;
var cpc = 1; // cookies per click
var x = 300;
var y = 300;
var sz = 1;

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

    fill(0, 0, 0);
    text("Cookies: " + cookies, 20, 30);

    // Day 1 - draw the cookie
    drawCookie(x, y, sz);
};

// Day 1: When you click the cookie, increment a variable
var mouseClicked = function () {
    cookies += cpc;
};

// Day 1: When you press the spacebar and the mouse is over the cookies -> count as a click
var keyPressed = function () {
    cookies += cpc;
};
