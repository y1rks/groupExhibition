let canvasWidth;
let canvasHeight;

const mouth = {
  // x1, // 開始点のx座標;
  // y1, // 開始点のy座標;
  // dx1, // 開始制御点のx座標;
  // dy1, // 開始制御点のy座標;
  // dx2, // 終了制御点のx座標;
  // dy2, // 終了制御点のy座標;
  // x2, // 終了点のx座標;
  // y2, // 終了点のy座標;
  // state, // 現在の状態
  // sum, // どのくらい動いたか
};

const leftEye = {
  // x1, // 開始点のx座標;
  // y1, // 開始点のy座標;
  // dx1, // 開始制御点のx座標;
  // dy1, // 開始制御点のy座標;
  // dx2, // 終了制御点のx座標;
  // dy2, // 終了制御点のy座標;
  // x2, // 終了点のx座標;
  // y2, // 終了点のy座標;
  // state, // 現在の状態
  // sum, // どのくらい動いたか
};

const rightEye = {
  // x1, // 開始点のx座標;
  // y1, // 開始点のy座標;
  // dx1, // 開始制御点のx座標;
  // dy1, // 開始制御点のy座標;
  // dx2, // 終了制御点のx座標;
  // dy2, // 終了制御点のy座標;
  // x2, // 終了点のx座標;
  // y2, // 終了点のy座標;
  // state, // 現在の状態
  // sum, // どのくらい動いたか
};

function setup() {
  frameRate(30);
  canvasWidth = windowWidth / 2;
  canvasHeight = windowHeight / 2;
  createCanvas(canvasWidth, canvasHeight);

  // 口の初期化
  mouth.x1 = canvasWidth / 3;
  mouth.y1 = (canvasHeight / 4) * 3;
  mouth.dx1 = canvasWidth / 3;
  mouth.dy1 = (canvasHeight / 4) * 3;
  mouth.dx2 = (canvasWidth / 3) * 2;
  mouth.dy2 = (canvasHeight / 4) * 3;
  mouth.x2 = (canvasWidth / 3) * 2;
  mouth.y2 = (canvasHeight / 4) * 3;
  mouth.sum = 0;
  mouth.state = 1;

  // 左目の初期化
  leftEye.x1 = (canvasWidth / 16) * 4;
  leftEye.y1 = canvasHeight / 4;
  leftEye.dx1 = leftEye.x1;
  leftEye.dy1 = leftEye.y1;
  leftEye.x2 = (canvasWidth / 16) * 7;
  leftEye.y2 = leftEye.y1;
  leftEye.dx2 = leftEye.x2;
  leftEye.dy2 = leftEye.y1;
  leftEye.sum = 0;
  leftEye.state = 1;

  // 右目の初期化
  rightEye.x2 = (canvasWidth / 16) * 12;

  rightEye.dx2 = rightEye.x2;

  rightEye.x1 = (canvasWidth / 16) * 9;
  rightEye.y1 = canvasHeight / 4;
  rightEye.y2 = rightEye.y1;
  rightEye.dy1 = rightEye.y1;
  rightEye.dy2 = rightEye.y1;
  rightEye.dx1 = rightEye.x1;
  rightEye.sum = 0;
  rightEye.state = 1;
}

function draw() {
  const colorSet = {
    red: "#eb1000",
    black: "#0a0904",
    gray: "#c5c0c0",
    blue: "#1a2fcf",
    yellow: "#feee02",
  };

  background(colorSet.yellow);

  strokeWeight(20);
  noFill();

  // 口
  updatePoints(mouth, canvasHeight * 0.4);

  bezier(
    mouth.x1,
    mouth.y1,
    mouth.dx1,
    mouth.dy1,
    mouth.dx2,
    mouth.dy2,
    mouth.x2,
    mouth.y2
  );

  // 左目

  updatePoints(leftEye, canvasHeight * 0.3);

  bezier(
    leftEye.x1,
    leftEye.y1,
    leftEye.dx1,
    leftEye.dy1,
    leftEye.dx2,
    leftEye.dy2,
    leftEye.x2,
    leftEye.y2
  );

  // 右目
  updatePoints(rightEye, canvasHeight * 0.3);

  bezier(
    rightEye.x1,
    rightEye.y1,
    rightEye.dx1,
    rightEye.dy1,
    rightEye.dx2,
    rightEye.dy2,
    rightEye.x2,
    rightEye.y2
  );

  strokeWeight(40);
  ellipse((canvasWidth / 16) * 5.5, leftEye.y1, 1);
  ellipse((canvasWidth / 16) * 10.5, rightEye.y1, 1);
}

function updatePoints(obj, threshold) {
  if (obj.state === 1) {
    obj.sum += 1;
    if (obj.sum <= threshold / 2) {
      obj.dy1 += 1;
      obj.dx1 += 0.5;
      obj.dy2 += 1;
      obj.dx2 -= 0.5;
    } else if (obj.sum >= threshold * 2) {
      obj.state = 2;
      obj.sum = 0;
    }
  } else if (obj.state === 2) {
    obj.sum += 1;
    if (obj.sum <= threshold / 2) {
      obj.dy1 -= 1;
      obj.dx1 -= 0.5;
      obj.dy2 -= 1;
      obj.dx2 += 0.5;
    } else if (obj.sum >= threshold * 2) {
      obj.state = 3;
      obj.sum = 0;
    }
  } else if (obj.state === 3) {
    obj.sum += 1;
    if (obj.sum <= threshold / 2) {
      obj.dy1 -= 1;
      obj.dx1 += 0.5;
      obj.dy2 -= 1;
      obj.dx2 -= 0.5;
    } else if (obj.sum >= threshold * 2) {
      obj.state = 4;
      obj.sum = 0;
    }
  } else if (obj.state === 4) {
    obj.sum += 1;
    if (obj.sum <= threshold / 2) {
      obj.dy1 += 1;
      obj.dx1 -= 0.5;
      obj.dy2 += 1;
      obj.dx2 += 0.5;
    } else if (obj.sum >= threshold * 2) {
      obj.state = 1;
      obj.sum = 0;
    }
  }
}
