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
  noLoop();
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
    noFill();
    strokeWeight(1);
    arc(0, height, 20 + 20 * i, 20 + 20 * i, PI + HALF_PI, TWO_PI);

    ///console.log(info); // getting out all of the info of that first indice
    console.log(info.title); // trace our path so that we can understand it
    var title = info.title; // get out the value by the key name
    ///console.log(results);
    ///text(title, )

  }
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  results.length-= event.delta;
  //uncomment to block page scrolling
  //return false;
}