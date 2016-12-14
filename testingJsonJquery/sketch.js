var url; 
var comicsData;
var results = [];


function preload(){
  var url = 'https://gateway.marvel.com/v1/public/characters/1009368/series?ts=1481680881&titleStartsWith=Iron%20Man&contains=comic&orderBy=startYear&limit=5&apikey=4f804381e438abd7d337fe90bec41e4a&hash=3e0407f3ac78d02589a8274dc7d50977';
  comicsData = loadJSON(url);
}

function setup() {
  results = comicsData.data.results;
  console.log(results.length);
  
}

function draw() {
  
}