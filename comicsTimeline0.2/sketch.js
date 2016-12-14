var fontBig, fontSmall;
var comicsData;
var i;
var info = [];
var results = [];
var instruction;

var HOW_MANY_ARCS_ARE_WE_SHOWING = 0;


function preload() {
  fontBig = loadFont("data/BEBAS___.TTF");
  fontSmall = loadFont("data/Solomon - thin.ttf")

  console.log('got fonts');

}

function setup() {
  createCanvas(800, 500);
  background(50);
}

function draw() {
  background(50);
  instruction = 'Move and click your mouse to explore Iron Man comics over the years.';
  textFont(fontSmall, 14);
  text(instruction, 30, 30, 200, 50);

  mouseLoc();
}

function mouseLoc() { ///this function reads the location of user's cursor

  fill(255);
  stroke(255);
  var x1 = 0;
  var y1 = height;
  var x2 = mouseX;
  var y2 = mouseY;

  // d is the length of the line
  // the distance from point 1 to point 2.
  var d = int(dist(x1, y1, x2, y2));
  // Let's write d along the line we are drawing!
  push();
  fill(255);
  stroke(255);
  text(d, mouseX, mouseY);
  pop();
  // Fancy!

  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);
  //console.log('reading loc');

  switch (d) {
    case (d > 100 && d < 150):
      console.log('im here');
      break;
    case (d > 150 && d < 300):
      console.log('im there');
      break;
  }


}