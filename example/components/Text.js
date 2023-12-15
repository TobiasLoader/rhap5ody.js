class Text extends Obj {
  constructor(txt, x, y, pos, children) {
    super(pos, children);
    this.addProperty("txt", txt);
    this.addProperty("x", x);
    this.addProperty("y", y);
  }
  build(img) {
    img.noStroke();
    img.fill(255, 255, 255);
    img.textFont("Inconsolata", 20);
    img.text(this.get("txt"), this.get("x"), this.get("y"));
  }
  setup() {
    this.setId(this.get("txt").replace(/[^a-zA-Z0-9-_]/g, "") + "-text");
  }
}
