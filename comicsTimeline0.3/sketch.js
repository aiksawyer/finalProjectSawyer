var fontBig, fontSmall;
var comicsData;
var i;
var instruction;
var url;
var results = [];
var info = [];
var howManyArcs = 5;

function preload() {
  fontBig = loadFont("data/BEBAS___.TTF");
  fontSmall = loadFont("data/Solomon - thin.ttf")
  console.log('got fonts');
  var url = 'https://gateway.marvel.com/v1/public/characters/1009368/series?ts=1481680881&titleStartsWith=Iron%20Man&contains=comic&orderBy=startYear&limit=5&apikey=4f804381e438abd7d337fe90bec41e4a&hash=3e0407f3ac78d02589a8274dc7d50977';
  comicsData = loadJSON(url);
}

function setup() {
  createCanvas(800, 500);
  background(50);
}

function draw() {
  background(50);
  instruction = 'Move and click your mouse to explore Iron Man comics over the years.';
  textFont(fontSmall, 14);
  push();
  stroke(250);
  fill(250);
  text(instruction, 30, 30, 200, 50);
  pop();
  mouseLoc();
  drawArcs();


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
  //console.log('reading loc');


  if (d > 0 && d < 30) {
    console.log('close to edge');
    howManyArcs = 1;
  } else if (d > 30 && d < 50) {
    console.log('im here');
    howManyArcs = 2;
  } else if (d > 50 && d < 70) {
    console.log('im there');
    howManyArcs = 3;
  } else if (d > 70 && d < 90) {
    howManyArcs = 4;
  } else if (d > 90 && d < 120) {
    howManyArcs = 5;
  }
}


function drawArcs() { ///too avoid slowing the process, start loading data right before drawing arcs
  results = comicsData.data.results;
  console.log(results.length);
  for (i = 0; i < howManyArcs; i++) { //drawing arcs according to api
    if (i % 2 == 0) { ////if i/2 equal zero, arc will be red
      for (z = 0; z < howManyArcs; z++) { //// little for loop to only load the info i need
        var info = results[z];
        var title = info.title;
      }
      ///console.log(info); ///trace back to check
      noFill();
      stroke(255, 0, 0);
      strokeWeight(2);
      arc(0, height, 50 + 30 * i, 50 + 30 * i, PI + HALF_PI, TWO_PI);
      push();
      textFont(fontSmall, 15);
      text(title, 50 + 30 * howManyArcs, 50 + 30 * howManyArcs, 100, 50);
      pop();

      if (mouseIsPressed) {
        /////text box with info
        var description = info.description;
        var startYear = info.startYear;
        var endYear = info.endYear;

        textFont(fontSmall, 15);
        text(title, 500, 170, 200, 200);
        push();
        fill(250);
        strokeWeight(0);
        textFont(fontSmall, 12);
        text(description, 500, 220, 200, 200);
        text(startYear + ' – ' + endYear, 500, 200, 200, 200);
        pop();
      }



    } else { ///if i/2 is not zero, arc will be gold
      for (z = 0; z < howManyArcs; z++) { ///little for loop to only load  the info i need
        var info = results[z];
        var title = info.title
      }
      noFill();
      stroke(255, 215, 0);
      strokeWeight(2);
      arc(0, height, 50 + 30 * i, 50 + 30 * i, PI + HALF_PI, TWO_PI);
      push();
      textFont(fontSmall, 15);
      text(title, 50 + 30 * howManyArcs, 50 + 30 * howManyArcs, 100, 50);
      pop();

      if (mouseIsPressed) {
        /////text box with info
        var description = info.description;
        var startYear = info.startYear;
        var endYear = info.endYear;
        textFont(fontSmall, 15);
        text(title, 500, 170, 200, 200);
        push();
        fill(250);
        strokeWeight(0);
        textFont(fontSmall, 12);
        text(description, 500, 220, 200, 200);
        text(startYear + ' – ' + endYear, 500, 200, 200, 200);
        text()
        pop();
      }
    }
  }
}