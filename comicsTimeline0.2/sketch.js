var fontBig, fontSmall;
var comicsData;
var i;
var instruction;

var howManyArcs = 5;


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
  //text(instruction, 30, 30, 200, 50);

  mouseLoc();


  for (i = 0; i < howManyArcs + 1; i++) {
    var url = 'https://gateway.marvel.com/v1/public/characters/1009368/series?ts=1480980033&startYear=2009&orderBy=startYear&limit=5&apikey=4f804381e438abd7d337fe90bec41e4a&hash=cb22bb8e083ced8a01958588add95180';
    comicsData = loadJSON(url);
    console.log("got api");
    var results = [];
    ///results = comicsData.data.results;
    console.log(results.length);
    ///var info = results[i];


    if (i % 2 == 0) { ////if i/2 equal zero, arc will be red
      noFill();
      stroke(255, 0, 0);
      strokeWeight(2);
      arc(0, height, 50 + 30 * i, 50 + 30 * i, PI + HALF_PI, TWO_PI);
    } else { ///if i/2 is not zero, arc will be gold
      noFill();
      stroke(255, 215, 0);
      strokeWeight(2);
      arc(0, height, 50 + 30 * i, 50 + 30 * i, PI + HALF_PI, TWO_PI);
    }

  }
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
  fill(250);
  stroke(250);
  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);
  //console.log('reading loc');

  if (d > 0 && d < 100) {
    console.log('close to edge');
    howManyArcs = 1;
  } else if (d > 100 && d < 150) {
    console.log('im here');
    howManyArcs = 2
  } else if (d > 150 && d < 300) {
    console.log('im there');
    howManyArcs = 3;
  }
}