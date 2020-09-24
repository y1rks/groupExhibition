const sketch4 = function (p) {
    p.setup = function () {
      p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
      p.background(255, 255, 0);
    };
  
    p.draw = function () {
      p.fill(0);
      p.stroke(0);
      p.ellipse(50, 50, 50, 50);
    };
  };
  
  new p5(sketch4, "container4");
  