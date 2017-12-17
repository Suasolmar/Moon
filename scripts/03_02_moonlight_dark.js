var vh, vw;
var img;
var prev, next;

function preload(){
  img = loadImage("../image/03_02_moonlight_dark.png");
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
  image(img, vw/2, vh/2, vw/2, vh);


}
