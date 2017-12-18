var vh, vw;
var img;
var prev, next;

function preload(){
  img = loadImage("https://halsoo.github.io/Moon/image/09_01_01_END.png");
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


}
