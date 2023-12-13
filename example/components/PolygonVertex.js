class PolygonVertex extends Obj {
  constructor(index, pos, children) {
    super(pos, children);
    this.addProperty("index", index);
  }
  build(img) {
    img.stroke(0, 0, 0);
    img.strokeWeight(10);
    const vertexcoords = this.get("coords")[this.get("index")];
    img.point(vertexcoords.x, vertexcoords.y);
  }
}
