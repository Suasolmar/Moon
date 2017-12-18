var vh, vw;
var img_on, img_off;
var swith;
var soundplay;
var prev, next;

function preload(){
  img_on = loadImage("https://halsoo.github.io/Moon/image/02_switch_on.png");
  img_off = loadImage("https://halsoo.github.io/Moon/image/02_switch_off.png");

  soundFormats("mp3");
  sound_on = loadSound("https://halsoo.github.io/Moon/sound/02_switch_on.mp3");
  sound_off = loadSound("https://halsoo.github.io/Moon/sound/02_switch_off.mp3");
}

function setup() {
  vw = windowWidth * 0.7;
  vh = vw * (9/16);

  swith = false;
  soundplay = false;

  prev = select("#prev");
  next = select("#next");

  var canvas = createCanvas(vw, vh);
  canvas.parent("sketch");

}

function draw() {

  if(swith) {
    imageMode(CENTER);
    image(img_on, vw/2, vh/2, vw, vh);
    if(soundplay) {
      sound_on.play();
      soundplay = !soundplay
    }
    next.attribute("href", "03_01_moonlight_light.html")

  } else {
    imageMode(CENTER);
    image(img_off, vw/2, vh/2, vw, vh);
    if(soundplay) {
      sound_off.play();
      soundplay = !soundplay
    }
    next.attribute("href", "03_02_moonlight_dark.html")
  }

}

function mouseClicked() {

  if(mouseX> vw/3 && mouseX < 2*vw/3 && mouseY > vh/3 && mouseY < 2*vh/3 ) {
    swith = !swith;
    soundplay = true;
  }
}
