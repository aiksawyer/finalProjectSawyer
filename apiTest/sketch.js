var url;
var query;
var font;
var comicsData;
var issue;

function preload() {
  font = loadFont("data/BEBAS___.TTF");
  var url = 'https://gateway.marvel.com/v1/public/characters/1009368/series?ts=1480980033&startYear=2009&orderBy=startYear&limit=100&apikey=4f804381e438abd7d337fe90bec41e4a&hash=cb22bb8e083ced8a01958588add95180';
  comicsData = loadJSON(url);
  console.log("done");
}

function setup() {
  createCanvas(500, 500);
  noLoop();

}

function draw() {
  textFont(font, 12);
  var summary = comicsData.data.results.title;
  text(summary, 50, 50);

}