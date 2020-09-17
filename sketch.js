var sketch;

var fb, kikkun, aroma, eoheoh;
var isClicked = false;
var obakex = 0.0;
var obakey = 0.0;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.style('display', 'block');
  canvas.position(0,0);
  canvas.style('z-index', -1);
  frameRate(30);
  fb = new Obake(1);
  kikkun = new Obake(2);
  aroma = new Obake(3);
  eoheoh = new Obake(4);
}

function draw() {
  background(255);
  
  eoheoh.draw(obakex, obakey);
  kikkun.draw(obakex+120, obakey);
  fb.draw(obakex+240, obakey);
  aroma.draw(obakex+360, obakey);
  
  if(!isClicked){
    obakex = mouseX;
    obakey = mouseY;
  }
}

function mouseClicked(){
  if (mouseButton == LEFT) {
    isClicked = !isClicked;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

class Obake {
  constructor(t) {
    this.t = t;
  }

  draw(x, y) {
    strokeJoin(ROUND);
    strokeCap(ROUND);
    rectMode(CORNERS);
    push();
    translate(x, y);
    scale(0.2);
    if (this.t==2) drawPartsK1();
    strokeWeight(40);
    stroke(45);
    if (this.t==3) drawPartsA1();
    fill(255);
    rect(-130, 730, -40, 900, 50);
    rect(40, 900, 130, 730, 50);
    beginShape();
    vertex(0, 100);
    bezierVertex(-340, 100, -250, 550, -400, 760);
    bezierVertex(-300, 710, -300, 840, -200, 840);
    bezierVertex(-100, 840, -120, 760, 0, 760);
    bezierVertex(120, 760, 100, 840, 200, 840);
    bezierVertex(300, 840, 300, 710, 400, 760);
    bezierVertex(250, 550, 340, 100, 0, 100);
    endShape();
    if (this.t==1) drawPartsF();
    else if (this.t==2) drawPartsK2();
    else if (this.t==3) drawPartsA2();
    else if (this.t==4) drawPartsE();
    pop();
  }
}

function drawPartsE() {
  line(0, 100, 0, 760);
  noStroke();
  fill(69, 209, 74);
  circle(90, 390, 60);
  circle(-90, 390, 60);
}

function drawPartsK1() {
  strokeWeight(50);
  stroke(245, 242, 61);
  noFill();
  ellipse(0, 60, 400, 180);
}

function drawPartsK2() {
  noStroke();
  fill(245, 242, 61);
  beginShape();
  vertex(-270, 356);
  bezierVertex(-180, 360, -90, 230, -70, 120);
  bezierVertex(-30, 190, 80, 350, 270, 356);
  bezierVertex(240, 220, 180, 100, 0, 100);
  bezierVertex(-180, 100, -240, 220, -270, 356);
  endShape();

  stroke(45);
  noFill();
  beginShape();
  vertex(-155, 325);
  bezierVertex(-90, 340, -70, 370, -65, 412);
  bezierVertex(-90, 408, -115, 408, -140, 412);
  endShape();
  beginShape();
  vertex(155, 325);
  bezierVertex(90, 340, 70, 370, 65, 412);
  bezierVertex(90, 408, 115, 408, 140, 412);
  endShape();

  beginShape();
  vertex(0, 100);
  bezierVertex(-340, 100, -250, 550, -400, 760);
  bezierVertex(-300, 710, -300, 840, -200, 840);
  bezierVertex(-100, 840, -120, 760, 0, 760);
  bezierVertex(120, 760, 100, 840, 200, 840);
  bezierVertex(300, 840, 300, 710, 400, 760);
  bezierVertex(250, 550, 340, 100, 0, 100);
  endShape();
}

function drawPartsF() {
  strokeWeight(32);
  stroke(69, 133, 230);
  noFill();
  line(-210, 330, 210, 330);
  fill(69, 133, 230);
  beginShape();
  vertex(-200, 330);
  vertex(-180, 390);
  bezierVertex(-180, 405, -175, 415, -160, 415);
  vertex(-70, 415);
  bezierVertex(-55, 415, -45, 405, -45, 390);
  vertex(-30, 330);
  endShape(CLOSE);
  beginShape();
  vertex(200, 330);
  vertex(180, 390);
  bezierVertex(180, 405, 175, 415, 160, 415);
  vertex(70, 415);
  bezierVertex(55, 415, 45, 405, 45, 390);
  vertex(30, 330);
  endShape(CLOSE);
}

function drawPartsA1() {
  fill(245, 242, 61);
  beginShape();
  vertex(178, 162);
  bezierVertex(178, 162, 250, 110, 265, 75);
  bezierVertex(265, 75, 280, 180, 220, 220);
  endShape(CLOSE);
  beginShape();
  vertex(-178, 162);
  bezierVertex(-178, 162, -250, 110, -265, 75);
  bezierVertex(-265, 75, -280, 180, -220, 220);
  endShape(CLOSE);
}

function drawPartsA2() {
  noStroke();
  fill(45);
  beginShape();
  vertex(68, 108);
  bezierVertex(100, 200, 160, 270, 256, 300);
  bezierVertex(225, 205, 175, 130, 68, 108);
  endShape();
  beginShape();
  vertex(-68, 108);
  bezierVertex(-100, 200, -160, 270, -256, 300);
  bezierVertex(-225, 205, -175, 130, -68, 108);
  endShape();

  fill(237, 38, 39);
  beginShape();
  vertex(36, 350);
  bezierVertex(36, 460, 174, 460, 174, 350);
  endShape(CLOSE);
  beginShape();
  vertex(-36, 350);
  bezierVertex(-36, 460, -174, 460, -174, 350);
  endShape(CLOSE);
}