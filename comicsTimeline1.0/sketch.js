///defining and instantiating global variables

var fontBig, fontSmall;
var comicsData; ///this is where I load the API
var i;
var instruction;
var url;
var results = []; /// this is where I load the API arrays
var info = [];  ///this is where I load arrays within the API arrays
var howManyArcs = 5;
var era1 = 'GOLDEN AGE'; ///different eras of omics
var era2 = 'SILVER AGE';
var era3 = 'BRONZE AGE';
var era4 = 'MODERN AGE';

function preload() { //preloading fonts and comics data. not a lot of data so its okay to load it here
  fontBig = loadFont("data/BEBAS___.TTF");
  fontSmall = loadFont("data/Solomon - thin.ttf")
    ///console.log('got fonts');
  var url = 'https://gateway.marvel.com/v1/public/characters/1009368/series?ts=1481680881&titleStartsWith=Iron%20Man&contains=comic&orderBy=startYear&limit=100&apikey=4f804381e438abd7d337fe90bec41e4a&hash=3e0407f3ac78d02589a8274dc7d50977';

  comicsData = loadJSON(url);
}

function setup() { ///setting up the canvas
  createCanvas(800, 500);
  background(50); 
}

function draw() { //basic draws
  instruction = 'Move and click your mouse to explore Iron Man comics over the years.'; //instructions for user
  background(50);
  textFont(fontSmall, 14);
  push();  ////push and pop so that this text has unique properties
  stroke(250);
  strokeWeight(0);
  fill(250);
  text(instruction, 30, 30, 200, 50);
  pop();
  mouseLoc();  ///function mouseLoc is called
  drawArcs();  ///function drawArcs is called

}

function mouseLoc() { ///this function reads the location of user's cursor
  fill(255);
  stroke(255);
  var x1 = 0;
  var y1 = height;
  var x2 = mouseX;
  var y2 = mouseY;
  ///this code is referenced from p5.org/references
  // d is the length of the line
  // the distance from point 1 to point 2.
  var d = int(dist(x1, y1, x2, y2));
  // Let's write d along the line we are drawing!
  push();
  fill(255);
  stroke(255);
  ///text(d, mouseX, mouseY); ///used this to visually check the distance
  ///line(x1, y1, x2, y2);
  //console.log('reading loc');

  if (d > 0 && d < 10) { /////ok this part i hate but I had to hard code it
                          /////didn't know how to loop increments of 10 depending on distance
    ///console.log('close to edge'); ///checking for reaction
    howManyArcs = 1;
  } else if (d > 10 && d < 20) {
    ///console.log('im here');
    howManyArcs = 2;
  } else if (d > 20 && d < 30) {
    ///console.log('im there'); checking reaction
    howManyArcs = 3;
  } else if (d > 30 && d < 40) {
    howManyArcs = 4;
  } else if (d > 40 && d < 50) {
    howManyArcs = 5;
  } else if (d > 50 && d < 60) {
    howManyArcs = 6;
  } else if (d > 60 && d < 70) {
    howManyArcs = 7;
  } else if (d > 70 && d < 80) {
    howManyArcs = 8;
  } else if (d > 80 && d < 90) {
    howManyArcs = 9;
  } else if (d > 90 && d < 100) {
    howManyArcs = 10;
  } else if (d > 100 && d < 105) {
    howManyArcs = 11;
  } else if (d > 105 && d < 110) {
    howManyArcs = 12;
  } else if (d > 110 && d < 115) {
    howManyArcs = 13;
  } else if (d > 115 && d < 120) {
    howManyArcs = 14;
  } else if (d > 120 && d < 125) {
    howManyArcs = 15;
  } else if (d > 125 && d < 130) {
    howManyArcs = 16;
  } else if (d > 130 && d < 135) {
    howManyArcs = 17;
  } else if (d > 135 && d < 140) {
    howManyArcs = 18;
  } else if (d > 140 && d < 145) {
    howManyArcs = 19;
  } else if (d > 145 && d < 150) {
    howManyArcs = 20;
  } else if (d > 150 && d < 155) {
    howManyArcs = 21;
  } else if (d > 155 && d < 160) {
    howManyArcs = 22;
  } else if (d > 160 && d < 165) {
    howManyArcs = 23;
  } else if (d > 165 && d < 170) {
    howManyArcs = 24;
  } else if (d > 170 && d < 175) {
    howManyArcs = 25;
  } else if (d > 175 && d < 180) {
    howManyArcs = 26;
  } else if (d > 185 && d < 190) {
    howManyArcs = 27;
  } else if (d > 195 && d < 200) {
    howManyArcs = 28;
  } else if (d > 200 && d < 205) {
    howManyArcs = 29;
    console.log('reading this');
  } else if (d > 205 && d < 210) {
    howManyArcs = 30;
  } else if (d > 210 && d < 215) {
    howManyArcs = 31;
  } else if (d > 215 && d < 220) {
    howManyArcs = 32;
  } else if (d > 220 && d < 225) {
    howManyArcs = 33;
  } else if (d > 225 && d < 230) {
    howManyArcs = 34;
  } else if (d > 230 && d < 235) {
    howManyArcs = 35;
  } else if (d > 235 && d < 240) {
    howManyArcs = 36;
  } else if (d > 240 && d < 245) {
    howManyArcs = 37;
  } else if (d > 245 && d < 250) {
    howManyArcs = 38;
  } else if (d > 250 && d < 255) {
    howManyArcs = 39;
  } else if (d > 255 && d < 260) {
    howManyArcs = 40;
  } else if (d > 260 && d < width) {
    howManyArcs = 41;  ///as many arcs as there are results in the API
  }
}


function drawArcs() { ///too avoid slowing the process, start loading data right before drawing arcs
  results = comicsData.data.results;
  console.log(results.length);//checking for length
  for (i = 0; i < howManyArcs; i++) { //drawing arcs according to api
    if (howManyArcs <= 10 && howManyArcs > 0) { ///these ifs write the according era
      push(); //push and pop for unique text
      textFont(fontBig, 70);
      strokeWeight(1);
      fill(255, 215, 0);
      stroke(255, 215, 0);
      text(era1, 300, 50, 500, 500);
      ///console.log('reading era'); //checking
      pop();

    }
    if (howManyArcs > 10 && howManyArcs <=20) {
      push();//push and pop for unique text
      textFont(fontBig, 70);
      strokeWeight(1);
      fill(192,192,192);
      stroke(192,192,192);
      text(era2, 300, 50, 500, 500);
      ///console.log('reading era');///checking
      pop();
    }
    if (howManyArcs > 20 && howManyArcs <= 30) {
      push();//push and pop for unique text
      textFont(fontBig, 70);
      strokeWeight(1);
      fill(205, 127, 50);
      stroke(205, 127, 50);
      text(era3, 300, 50, 500, 500);
      ///console.log('reading era'); checking
      pop();

    } if (howManyArcs > 30 && howManyArcs < 42) {
      push();//push and pop for unique text
      textFont(fontBig, 70);
      strokeWeight(1);
      fill(255, 248, 220);
      stroke(255, 248, 220);
      text(era4, 300, 50, 500, 500);
      ////console.log('reading era'); checking
      pop();
    }


    if (i % 2 == 0) { ////if i/2 equal zero, arc will be red
      for (z = 0; z < howManyArcs; z++) { //// little for loop to only load the info i need
        var info = results[z];
        var title = info.title;
      }
      ///console.log(info); ///trace back to check
      noFill();
      stroke(255, 0, 0);
      strokeWeight(2);
      arc(0, height, 50 + 13 * i, 50 + 13 * i, PI + HALF_PI, TWO_PI); ///the arcs
      push();
      textFont(fontSmall, 15);
      text(title, mouseX + z, mouseY - z, 100, 50);
      pop();




      if (mouseIsPressed) { ///this mousePressed is calling a text box with info about a comics
        /////text box with info
        var description = info.description;
        var startYear = info.startYear; ///these are pulled from API
        var endYear = info.endYear;
        var nullDescription = 'A billionaire industrialist and genius inventor, Tony Stark, is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.';
        textFont(fontSmall, 15);
        text(title, 400, 170, 300, 200); ///title of a comic
        push(); ///unique text again
        fill(250);
        strokeWeight(0);
        textFont(fontSmall, 14);
        if (description === null) { ///when description in API is null, I put in custom description
          text(nullDescription, 400, 220, 300, 200);
        } else {
          text(description, 400, 220, 300, 200);
        }
        text(startYear + ' - ' + endYear, 400, 200, 200, 200);
        ///text(description, 500, 220, 200, 200);
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
      arc(0, height, 50 + 13 * i, 50 + 13 * i, PI + HALF_PI, TWO_PI);
      push();
      textFont(fontSmall, 15);
      text(title, mouseX + z, mouseY - z, 100, 50);
      pop();
    }
  }
}