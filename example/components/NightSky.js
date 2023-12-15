class NightSky extends Obj {
  constructor(pos, children) {
    super(pos, children);
  }
  setChildren() {
    return [new Earth()];
  }
  build(img) {
    let visiblestarsize = 7500;
    img.background(0, 0, 0);
    img.noFill();
    for (var s = 0; s < visiblestarsize; s += 1) {
      let brightness = pow(random(0, 1), 2) * random(0, 1);
      if (brightness < 0.2) brightness = 0.2;
      img.stroke(255, 255, 255, 255 * brightness);
      img.strokeWeight(2 * brightness);
      img.point(random(0, 1), random(0, 1));
    }
    let milkywaysize = 3000;
    for (var s = 0; s < milkywaysize; s += 1) {
      let brightness = pow(random(0, 1), 3) * random(0, 1);
      if (brightness < 0.2) brightness = brightness * 2;
      img.stroke(255, 255, 255, 200 * brightness + 55);
      img.strokeWeight(1 * brightness);
      let x = s / milkywaysize + random(-0.1, 0.1);
      img.point(
        x,
        0.8 -
          1.6 * x * (1 - s / (milkywaysize * 2)) +
          0.5 * (pow(2, -pow(random(-1, 1), 2)) - 0.5)
      );
    }
    img.strokeWeight(20);
    for (var i = 0; i < 100; i += 1) {
      img.stroke(6, 31, 40, 70 * (i / 100));
      img.ellipse(0.5, 0.5, 0.4 + i / 100, 0.4 + i / 100);
    }
  }
}
