var vh, vw;
var umbrella;
var rains = [];
var rot, offset;
var prev, next;
var cnt = 0;

function preload(){
  umbrella = loadImage("https://halsoo.github.io/Moon/image/06_02_umbrella.png");

  soundFormats("mp3");
  sound_rain = loadSound("https://halsoo.github.io/Moon/sound/06_02_rain.mp3");
}

function setup() {
  vw = windowWidth * 0.7;
  vh = vw * (9/16);

  rot = 0;
  offset = 0;

  prev = select("#prev");
  next = select("#next");

  var canvas = createCanvas(vw, vh);
  canvas.parent("sketch");

  for(var i = 0;i<190;i++){
    rains[i] = {
      x : random(width),
      y : random(-height*12,height),
      h : 10,

      display : function(){
        stroke(133, 163, 126);
        strokeWeight(2);
        line(this.x,this.y,this.x,this.y+36);
      },

      move : function(){
        this.y = this.y + 16;
        if(this.y > vh) this.y = 0;
      }
    }
  }

  sound_rain.loop();

}

function draw() {

  background(251, 224, 101);

  for(var i = 0; i<rains.length; i++){
    rains[i].display();
    rains[i].move();
  }

  push();
  translate(vw/2,vh/2);
  rotate(rot);
  imageMode(CENTER);
  image(umbrella, 0, 0, 709, 709);
  pop();

  rot += offset;
  if(offset>0) offset *= 0.98;

  if(cnt < 5) {
    next.attribute("href","07_01_01_text.html")
  } else {
    next.attribute("href", "07_01_02_text.html")
  }

}

function mouseClicked() {

  if(mouseX> vw/3 && mouseX < 2*vw/3 && mouseY > vh/3 && mouseY < 2*vh/3 ) {
    offset+=0.3;
    cnt++;
  }
}
