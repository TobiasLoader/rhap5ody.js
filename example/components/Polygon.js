class Polygon extends Obj {
  constructor(coords, pos, children) {
    super(pos, children);
    this.addProperty("coords", coords);
  }

  setChildren() {
    let c = [];
    for (var i = 0; i < this.get("coords").length; i += 1)
      c.push(new PolygonVertex(i));
    return c;
  }

  setup() {
    this.freeze();
    // this.debug();
  }

  build(img) {
    img.background(255, 255, 255);
    img.stroke(0, 0, 0);
    img.strokeWeight(1);
    img.fill(83, 130, 201);
    img.beginShape();
    for (let coord of this.get("coords")) {
      img.vertex(coord.x, coord.y);
    }
    img.endShape(CLOSE);
  }

  mouseClicked() {
    this.set("coords", (coords) => coords.map((c) => ({ x: c.y, y: c.x })));
  }
}
