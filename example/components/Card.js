class Card extends Obj {
  constructor(txt, coords, x, y, pos, children) {
    super(pos, children);
    this.addProperty("txt", txt);
    this.addProperty("coords", coords);
    this.addProperty("x", x);
    this.addProperty("y", y);
  }

  setChildren() {
    return [
      new PointerText(
        this.pointer("txt"),
        this.pointer("x"),
        this.pointer("y")
      ),
      new Polygon(this.get("coords"), { x: 0.1, y: 0.1, w: 0.7, h: 0.5 }),
    ];
  }

  setup() {
    this.freeze();
    this.debug();
    this.setId("#infocard");
  }

  build(img) {
    img.background(255, 100, 100);
  }
}
