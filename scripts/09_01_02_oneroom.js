var vh, vw;
var img, img_ring;
var prev, next;

var tic = 0;
var sec = 60;


function preload(){
  img = loadImage("../image/09_01_02_oneroom.png");
  img_ring = loadImage("../image/09_01_02_oneroom_ring.png");
}

function setup() {
  vw = windowWidth * 0.7;
  vh = vw * (9/16);

  prev = select("#prev");
  next = select("#next");

  var canvas = createCanvas(vw, vh);
  canvas.parent("sketch");

}

function draw() {

  background(34,34,49);

  imageMode(CENTER);
  image(img, vw/2, vh/2, vw, vh);

  if(tic%(3*sec) > 80 || tic%(3*sec) <30 || (tic%(3*sec) >40 && tic%(3*sec)<70) ) image(img_ring, vw/2, vh/2, vw, vh);

  tic++;


}
