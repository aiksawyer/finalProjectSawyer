var url;
var query;
var font, font2;
var comicsData;
var issue;
var select = false;
var i;
var info = [];

var HOW_MANY_ARCS_ARE_WE_SHOWING = 0;

var whichArc;
/*
  if you look, "results" is an array, 
  thus our variable should be an array
  and it should be global at this point
  since getting the exact same value back 
  in a loop doesn't make sense at this point
  
  */
var results = [];

function preload() {
  font = loadFont("data/BEBAS___.TTF");
  font2 = loadFont
  var url = 'https://gateway.marvel.com/v1/public/characters/1009368/series?ts=1480980033&startYear=2009&orderBy=startYear&limit=100&apikey=4f804381e438abd7d337fe90bec41e4a&hash=cb22bb8e083ced8a01958588add95180';
  comicsData = loadJSON(url);
  console.log("done");
}

function setup() {
  createCanvas(800, 500);
  background(50);
  // only need the info once, at this point
  results = comicsData.data.results;
  frameRate(1);
}

function draw() {
  textFont(font, 12);
  //var results = comicsData.data.results;

  console.log(results.length);
  // title, is in the first indice of that array

  whereAmI();


  // see where the mouse is
  // in relation to your arcs  <---  maybe just try effecting the fill color first
  // then *just* draw those arcs  // then you can figure out which to show
  // check a function below

  for (i = 0; i < HOW_MANY_ARCS_ARE_WE_SHOWING + 1; i++) { //results.length; i++) {  // based on where the mouse is ONLY the ones you need
    var info = results[i];
    //console.log(info); // getting out all of the info of that first indice
    ///console.log(info.title); // trace our path so that we can understand it
    ///var title = info.title; // get out the value by the key name
    //console.log(results);

    ///console.log(info); // getting out all of the info of that first indice
    ///console.log(info.title); // trace our path so that we can understand it
    var title = info.title; // get out the value by the key name
    console.log(results);
    fill(255);
    stroke(1);
    text(title, 5 + 10 * i, height - 30 * i, 40, 40);

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
  whereAmI();


  //mouseWheel(event);
}

function whereAmI(mouseX, mouseY) {
  // redraw background here
  var x1 = 10;
  var y1 = 90;
  var x2 = mouseX;
  var y2 = mouseY;
  stroke(255);
  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);

  // d is the length of the line
  // the distance from point 1 to point 2.
  var d = int(dist(x1, y1, x2, y2));

  // Let's write d along the line we are drawing!
  push();
  translate((x1 + x2) / 2, (y1 + y2) / 2);
  rotate(atan2(y2 - y1, x2 - x1));
  text(nfc(d, 1, 1), 0, -5);
  pop();
  // Fancy!


  switch (d){
    case (d > 10 && d < 50):
      //show arc 1
      // control value
     HOW_MANY_ARCS_ARE_WE_SHOWING = 1;
     //load the data to prep for possible click
     info = results[HOW_MANY_ARCS_ARE_WE_SHOWING];
      break;
    case (.....);
    break;
    
  }




}

/*
function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  event.delta = -results.length;
  //uncomment to block page scrolling
  //return false;
}
*/