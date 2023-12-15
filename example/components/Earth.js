function inellipse(mx, my, pos) {
  return (
    (4 / pow(pos.w, 2)) * pow(mx - pos.x - pos.w / 2, 2) +
      (4 / pow(pos.h, 2)) * pow(my - pos.y - pos.h / 2, 2) <
    1
  );
}

class Earth extends PlanetShadow {
  constructor() {
    super(
      "earth",
      { x: 0.425, y: 0.425, w: 0.15, h: 0.15, ratio: "fixed" },
      []
    );
  }
  build(img) {
    let assets = this.get("assets");
    if ("earth" in assets) img.image(assets["earth"], 0, 0, 1, 1);
    super.build(img);
  }
  hover() {
    const hovering = this.img.withinImg(mouseX, mouseY);
    if (inellipse(mouseX, mouseY, this.img.pos)) cursor("pointer");
    else cursor("default");
    return hovering;
  }
  effects() {
    this.hover();
  }
  mouseClicked() {
    let earthnames = [
      "earth",
      "blue marble",
      "world",
      "terra",
      "globe",
      "Gaia",
      "sphere",
      "ball",
      "rock",
    ];
    this.search("#earth-text", (obj, id) => {
      obj.display();
      obj.set("txt", () => earthnames[Math.floor(random(0, 9))]);
    });
  }
}
