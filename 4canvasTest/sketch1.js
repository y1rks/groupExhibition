const sketch1 = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
    p.background(0);
  };

  p.draw = function () {
    p.fill(200);
    p.stroke(0);
    p.rect(20, 20, 20, 20);
  };
};

new p5(sketch1, "container1");