class HiddenText extends Text {
  constructor(txt, x, y, pos, children) {
    super(txt, x, y, pos, children);
  }
  setup() {
    super.setup();
    this.displayNone();
  }
}
