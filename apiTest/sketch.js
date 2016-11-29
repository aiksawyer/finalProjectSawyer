
var json;
var apiKey;
var url;
var query;
var font;

function preload(){
  font = loadFont("data/BEBAS___.TTF");
}

function setup() {
  createCanvas(500,500);
  background(255);
  
}

function draw() {
  textFont(font, 25);
  text("Data provided by Marvel.  2014 Marvel", 50, 50);
  
}