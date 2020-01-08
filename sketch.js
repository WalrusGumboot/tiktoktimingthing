class Click {
  constructor(interval, offset, x, y, w, r, g, b) {
    this.interval = interval;
    this.offset = offset;
    this.s = {
      x: x,
      y: y,
      w: w
    }
    this.c = {
      r: r,
      g: g,
      b: b
    }
    this.blinking = false;
  }

  update(frame) {
    if ((frame + this.offset) % this.interval <= 3) {
      this.blinking = true;
    } else {
      this.blinking = false;
    }
  }

  show() {
    stroke(this.c.r, this.c.g, this.c.b);
    strokeWeight(2);
    this.blinking ? fill(this.c.r, this.c.g, this.c.b) : noFill();
    ellipse(this.s.x, this.s.y, this.s.w, this.s.w);
  }
}

let driehoek = [];
let lijn = [];
let vijfhoek = [];

function setup() {
  createCanvas(900, 600);

  driehoek.push(new Click(120, 0, 200, 300, 20, 200, 100, 0))
  driehoek.push(new Click(120, 40, 200, 240, 20, 200, 100, 0))
  driehoek.push(new Click(120, 80, 260, 300, 20, 200, 100, 0))

  lijn.push(new Click(80, 0, 360, 300, 20, 100, 200, 0))
  lijn.push(new Click(80, 40, 360, 240, 20, 100, 200, 0))

  vijfhoek.push(new Click(200, 0, 500, 300, 20, 0, 100, 200))
  vijfhoek.push(new Click(200, 40, 470, 240, 20, 0, 100, 200))
  vijfhoek.push(new Click(200, 80, 530, 190, 20, 0, 100, 200))
  vijfhoek.push(new Click(200, 120, 590, 240, 20, 0, 100, 200))
  vijfhoek.push(new Click(200, 160, 560, 300, 20, 0, 100, 200))
}

function draw() {
  background(200);

  for (let i = 0; i < driehoek.length; i++) {
    const element = driehoek[i];
    element.show()
    element.update(frameCount)
  }

  for (let i = 0; i < lijn.length; i++) {
    const element = lijn[i];
    element.update(frameCount);
    element.show();
  }

  for (let i = 0; i < vijfhoek.length; i++) {
    const element = vijfhoek[i];
    element.update(frameCount);
    element.show();
  }
}

function makeClicks(interval, offset, startX, startY, r, g, b) {
  let arr = [];
  for (let i = 0; i < interval; i += offset) {
    let cl = new Click(interval, i, startX + 6*i, startY, 16, r, g, b);
    arr.unshift(cl);
  }
  return arr;
}

function regularPolygonCoords(startX, startY, sides, sideLength) {
  let startPosVector = createVector(startX, startY);
  let sideVector = createVector(0, sideLength)
  let angle = radians(360 / sides);

  let coordsArr = [{x: startPosVector.x, y: startPosVector.y}];

  for (let i = 0; i < sides; i++) {
    let newVector = createVector(coordsArr[i].x, coordsArr[i].y);
  }
}