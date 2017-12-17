var vh, vw;
var img;
var prev, next;

var img;
var w_img = 1260;
var h_img = 709;

var img_me, img_d;
var i;
var src_me = ["../image/13_01_02_me_001.png", "../image/13_01_02_me_002.png", "../image/13_01_02_me_003.png"];
var w_me = [422, 261, 358];
var h_me = [398, 553, 570];
var me_w, me_h;
var me_x, me_y;

var src_d = ["../image/13_01_02_d_001.png", "../image/13_01_02_d_002.png", "../image/13_01_02_d_003.png"];
var w_d = [416, 201, 251];
var h_d = [378, 595, 426];
var d_w, d_h;
var d_x, d_y;


function preload(){
  img = loadImage("../image/13_01_02_bed.png");

  i = round (random(0,2));
  img_me = loadImage(src_me[i]);
  img_d = loadImage(src_d[i]);
}

function setup() {
  vw = windowWidth * 0.7;
  vh = vw * (9/16);

  prev = select("#prev");
  next = select("#next");

  next.style("display", "none");

  me_w = w_me[i]*vw/w_img;
  me_h = h_me[i]*vh/h_img;
  me_x = vw/4;
  me_y = vh/2;

  d_w = w_d[i]*vw/w_img;
  d_h = h_d[i]*vh/h_img;
  d_x = 3*vw/4;
  d_y = vh/2;


  var canvas = createCanvas(vw, vh);
  canvas.parent("sketch");

}

function draw() {

  background(34,34,49);

  imageMode(CENTER);
  image(img, vw/2, vh/2, vw, vh);

  image(img_me, me_x, me_y, me_w, me_h);
  image(img_d, d_x, d_y, d_w, d_h);


  if(mouseIsPressed) {
    if(mouseButton == LEFT && dist(me_x,me_y,mouseX,mouseY) < 100) {
      me_x = mouseX;
      me_y = mouseY;

    } else if (mouseButton == RIGHT && dist(d_x,d_y,mouseX,mouseY) < 100) {
      d_x = mouseX;
      d_y = mouseY;

    }
  }

  if(dist(me_x, me_y, vw/2, vh/2) < 100) {
    next.style("display", "block");

    if(dist(d_x, d_y, vw/2, vh/2) < 150) {
      next.attribute("href", "14_01_02_01_text.html");

    } else {
      next.attribute("href", "14_01_02_02_text.html");

    }
  } else {
    next.style("display", "none");
    next.attribute("href", "");
  }
}



document.addEventListener('contextmenu', event => event.preventDefault());
