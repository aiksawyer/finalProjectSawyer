var fontBig, fontSmall;
var comicsData;
var i;
var info = [];
var results = [];

var HOW_MANY_ARCS_ARE_WE_SHOWING = 0;


function preload() {
  fontBig = loadFont("data/BEBAS___.TTF");
  ///fontSmall = loadFont("data/Helvetica.dfont");
  console.log('got fonts');
  var url = 'https://gateway.marvel.com/v1/public/characters/1009368/series?ts=1480980033&startYear=2009&orderBy=startYear&limit=5&apikey=4f804381e438abd7d337fe90bec41e4a&hash=cb22bb8e083ced8a01958588add95180';
  comicsData = loadJSON(url);
  console.log("got api");


}

function setup() {
  createCanvas(800, 500);
  background(50);
  results = comicsData.data.results;
}

function draw() {
  background(50);
  console.log(results.length);
  var info = results[i];
  ///console.log(info.title);

  mouseLoc();
  for (i = 0; i < results.length; i++) { //results.length; i++) {  // based on where the mouse is ONLY the ones you need


    //console.log(info); // getting out all of the info of that first indice
    ///console.log(info.title); // trace our path so that we can understand it
    //console.log(results);
    // var title = info.title; // get out the value by the key name
    console.log(results);
    fill(255);
    stroke(1);
    ///text(title, 5 + 10 * i, height - 30 * i, 40, 40);

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
  text(nfc(d, 1, 1), mouseX, mouseY);
  pop();
  // Fancy!

  switch (d) {
    case (d > 10 && d < 50):
      //show arc 1
      // control value
      fill(250, 0);
      //load the data to prep for possible click
      ///info = results[HOW_MANY_ARCS_ARE_WE_SHOWING];
      break;
    case (d > 50 && d < 100):
      //show arc 1
      // control value
      fill(250, 250);
      //load the data to prep for possible click
      ///info = results[HOW_MANY_ARCS_ARE_WE_SHOWING];
      break;
    case (d > 100 && d < 150):
      //show arc 1
      // control value
       fill(0, 0);
      //load the data to prep for possible click
      ////info = results[HOW_MANY_ARCS_ARE_WE_SHOWING];
      break;
    case (d > 150 && d < 200):
      //show arc 1
      // control value
       fill(250, 250);
      //load the data to prep for possible click
      ///info = results[HOW_MANY_ARCS_ARE_WE_SHOWING];
      break;
    case (d > 200 && d < 250):
      //show arc 1
      // control value
       fill(250, 0);
      //load the data to prep for possible click
      ///info = results[HOW_MANY_ARCS_ARE_WE_SHOWING];
      break;

  }
  
  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);



}