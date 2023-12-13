class Div extends Obj {
  constructor(pos, children) {
    super(pos, children);
  }
  setup() {
    // this.freeze();
    this.debug();
  }
  build(img) {
    img.background(100, 200, 100);
  }
}
