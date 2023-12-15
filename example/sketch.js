class Canvas extends Base {
  constructor(assets) {
    super([]);
    this.addProperty("assets", assets);
  }

  setChildren() {
    return [
      new NightSky(),
      new HiddenText("click", 0.35, 0.5),
      new HiddenText("earth", 0.6, 0.5),
    ];
  }

  build(img) {
    img.background(0, 0, 0);
  }

  effects() {
    if (millis() > 2000) {
      this.search("#click-text", (obj, id) => {
        obj.display();
      });
    }
  }

  mouseClicked() {
    this.search("#planet-earth", (obj, id) => {
      obj.set("shadow", (i) => (i + 1) % 8);
    });
    this.search("#click-text", (obj, id) => {
      obj.set("txt", (txt) => {
        if (txt == "click") return txt + "\nthe";
        else if (txt == "click\nthe") return txt + "\nplanet";
        else return txt;
      });
    });
  }
}

// p5 setup and draw below + instantiation of the Canvas class
let earth;

function preload() {
  earth = loadImage("assets/earth.png");
}

let canvas;
async function setup() {
  canvas = new Canvas({ earth: earth });
  await canvas.init(innerWidth, innerHeight);
  console.log(canvas);
  canvas.readLog();
}

function draw() {
  canvas.draw();
}

function mouseClicked() {
  canvas.mouseClickedPropagate();
}
