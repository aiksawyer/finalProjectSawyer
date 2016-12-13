var url;
var query;
var font;
var comicsData;
var issue;
var select = false;
var i;
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

  for (i = 0; i < results.length; i++) {
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
    text(title, 5+10*i, height-30*i, 40, 40);
    
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
  mouseWheel(event);
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  event.delta = -results.length;
  //uncomment to block page scrolling
  //return false;
}