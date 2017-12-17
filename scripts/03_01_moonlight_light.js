var vh, vw;
var img, img_ring;
var prev, next;
var tic = 0;
var sec = 60;

function preload(){
  img = loadImage("../image/03_01_moonlight_light.png");
  img_ring = loadImage("../image/03_01_moonlight_light_ring.png");
}

function setup() {
  frameRate(60);
  vw = windowWidth * 0.7;
  vh = vw * (9/16);

  prev = select("#prev");
  next = select("#next");

  var canvas = createCanvas(vw, vh);
  canvas.parent("sketch");

}

function draw() {

  background(71);

  imageMode(CENTER);
  image(img, vw/2, vh/2, vw/2, vh);

  if(tic%(3*sec) > 80 || tic%(3*sec) <30 || (tic%(3*sec) >40 && tic%(3*sec)<70) ) image(img_ring, vw/2, vh/2, vw/2, vh);

  tic++;
}
