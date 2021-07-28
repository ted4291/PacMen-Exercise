var pos = 0;
const pacArray = [
  ["./images/pacman1.png", "./images/pacman2.png"],
  ["./images/pacman3.png", "./images/pacman4.png"],
];
var direction = 0;
const pacMen = [];

// Factory to make a PacMan
function makePac() {
  // returns an object with values scaled {x: 33, y: 21}
  // Add image to div id = game
  game.appendChild(newimg);
  // new style of creating an object
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {

}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
