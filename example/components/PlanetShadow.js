class PlanetShadow extends Obj {
  constructor(name, pos, children) {
    super(pos, children);
    this.addProperty("name", name);
    this.addProperty("shadow", 0);
  }
  setup() {
    this.setId("planet-" + this.get("name"));
  }
  build(img) {
    img.fill(0, 0, 0, 200);
    img.noStroke();
    let shadow = this.get("shadow");
    if (shadow == 1) {
      img.beginShape();

      img.vertex(0.5, 0);
      img.bezierVertex(1, 0, 1, 1, 0.5, 1);
      img.bezierVertex(1.5, 1, 1.5, 0, 0.5, 0);
      img.endShape();
    } else if (shadow == 2) {
      img.beginShape();
      img.vertex(0.5, 0);
      img.bezierVertex(1.5, 0, 1.5, 1, 0.5, 1);
      img.bezierVertex(0.5, 0.5, 0.5, 0.5, 0.5, 0);
      img.endShape();
    } else if (shadow == 3) {
      img.beginShape();
      img.vertex(0.5, 0);
      img.bezierVertex(0, 0, 0, 1, 0.5, 1);
      img.bezierVertex(1.5, 1, 1.5, 0, 0.5, 0);
      img.endShape();
    } else if (shadow == 4) {
      img.ellipse(0.5, 0.5, 1, 1);
    } else if (shadow == 5) {
      img.beginShape();
      img.vertex(0.5, 0);
      img.bezierVertex(1, 0, 1, 1, 0.5, 1);
      img.bezierVertex(-0.5, 1, -0.5, 0, 0.5, 0);
      img.endShape();
    } else if (shadow == 6) {
      img.beginShape();
      img.vertex(0.5, 0);
      img.bezierVertex(-0.5, 0, -0.5, 1, 0.5, 1);
      img.bezierVertex(0.5, 0.5, 0.5, 0.5, 0.5, 0);
      img.endShape();
    } else if (shadow == 7) {
      img.beginShape();
      img.vertex(0.5, 0);
      img.bezierVertex(0, 0, 0, 1, 0.5, 1);
      img.bezierVertex(-0.5, 1, -0.5, 0, 0.5, 0);
      img.endShape();
    }
  }
}
