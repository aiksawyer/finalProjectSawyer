///fonts
var eraName;
var p;

function preload() {
  eraName = loadFont('data/BEBAS___.TTF');
  console.log("loaded");
}


function setup() {
  createCanvas(1000, 600);
  background(255);
  p = new Particle(300,300);
  
}

function draw() {
  background(255);
  era();
  title();
  line(0, 100, 200, 100);
  line(200, 0, 200, height);
  p.display();
  console.log('did this');
}

function era() {
  fill(0);
  textFont(eraName, 77);
  text("Golden  Age", 500, 150);
}


function title() {
  fill(0);
  textFont(eraName, 45);
  text("MARVEL", 25, 60);
  textFont(eraName, 16);
  text("interactive timeline", 25, 70, 150, 70);
}