let x1; // 開始点のx座標;
let y1; // 開始点のy座標;
let dx1; // 開始制御点のx座標;
let dy1; // 開始制御点のy座標;
let dx2; // 終了制御点のx座標;
let dy2; // 終了制御点のy座標;
let x2; // 終了点のx座標;
let y2; // 終了点のy座標;

let switcher; // 0: 固定、1: 左、2: 右
let loopCounter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = 20;
  y1 = 100;
  dx1 = 100;
  dy1 = 0;
  dx2 = 100;
  dy2 = 200;
  x2 = 180;
  y2 = 100;
  switcher = 0;
  loopCounter = 0;
}

function draw() {
  background(180);
  console.log(switcher);
  if (loopCounter <= 3) {
    loopCounter++;
  } else {
    loopCounter = 0;
  }

  if (mouseIsPressed && loopCounter === 0) {
    if (switcher === 0) {
      switcher = 1;
    } else if (switcher === 1) {
      switcher = 2;
    } else if (switcher === 2) {
      switcher = 0;
    }
  }

  if (switcher === 1) {
    dx1 = mouseX;
    dy1 = mouseY;
  } else if (switcher === 2) {
    dx2 = mouseX;
    dy2 = mouseY;
  }

  strokeWeight(10);

  noFill();
  ellipse(x1, y1, 5);
  ellipse(x2, y2, 5);
  bezier(x1, y1, dx1, dy1, dx2, dy2, x2, y2);
  line(x1, y1, dx1, dy1);
  line(dx2, dy2, x2, y2);
}
