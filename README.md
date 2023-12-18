![rhap5ody logo](imgs/rhapsody-blue-long.png)

## Reactive `p5.js` library

`rhap5ody.js` extends `p5.js` to support conditional re-rendering – taking inspiration from `react.js`. All objects on the canvas are ordered in a structured tree layout, thus allowing for property inheritance and a standard interface for interaction. Objects also support the `freeze` method which collapses their subtree into a single bitmap image, allowing for efficient re-rendering without the need to rebuild the whole subtree. The tree inheritance structure additionally allows for relative positioning (relative to the element's parent) which id similar to `position: relative;` in css. With standard `p5.js` there is no inherent structure to the elements drawn to the canvas and so they behave similarly to `absolute` or `fixed` css positioning, where explicit x, y, width and height pixel values are supplied.

## Example Demo

View a demo project using `rhap5ody.js` [here](https://tobiasloader.github.io/rhap5ody.js/example/).

![space scene demo](imgs/earth-demo-scene.png)

### `Obj` class

Every renderable element in `rhap5ody.js` inherits from the `Obj` class - including the `Canvas` object itself. The `Obj` class definition can be found in the `core.js` file. Every `Obj` instance has exactly the following attributes.

| `Obj` Attribute  | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `this.parent`    | Pointer to the **parent `Obj`** in the object tree                      |
| `this.children`  | Array of pointers to the **children `Obj`** in the object tree          |
| `this.ident`     | Instance of the **`Ident`** class – `id`, `classes` etc...              |
| `this.env`       | Instance of the **`Env`** class – `properties`, `listeners` etc...      |
| `this.freezer`   | Instance of the **`Freezer`** class – `frozen`, `frozenTo` etc...       |
| `this.img`       | Instance of the **`GraphicsImg`** class – `p5.js` drawing functionality |
| `this._internal` | Private object of internal properties                                   |

The `Obj` class also has a number of public methods – some of which are briefly listed below.

| `Obj` Method (public)   | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `this.setChildren()`    | Programmatically set `children` for the object             |
| `this.addClass(name)`   | Adds class `name` to `Ident` instance                      |
| `this.search(query)`    | Searches for an `Obj` in subtree by `query`                |
| `this.set(name,update)` | Updates the property `name` in `Env` & triggers listener   |
| `this.get(name)`        | Returns the property `name` from `Env`                     |
| `this.freeze()`         | Freezes the subtree with this `Obj` as head                |
| `this.setup()`          | Setup of object – eg: `setId`, `addClass`, `freeze` etc... |
| `this.build(img)`       | Build the `Obj` class and produce bitmap image             |
| `this.effects()`        | Run effects method at every timestep                       |
| `this.draw(ctx)`        | Draw element to context `ctx` – only if redraw required    |
| `this.mouseClicked()`   | Event listener for mouse click on object                   |

---

A developer can create custom elements that extend the `Obj` class (or extend other elements) and place them in the `/components` folder of their `rhap5ody.js` project – similar to react `.jsx` components. They should define the `Canvas` class (extending the `Base` class) in `sketch.js`. `Canvas` is the head of the object tree where the children are set by returning an array of elements from `/components` in the `setChildren()` method. NB: all components must be imported in order within the `index.html` file (eg: in the example given `Text.js` must be placed above `BackgroundText.js` since `BackgroundText` extends `Text`).

To better understand how the object tree is structured, I recommend cloning the repo and launching `index.html` in a browser, opening inspector tools and switching to the console tab. You can then click on the Canvas dropdown and explore the whole tree (including each element's identity, environment, freezer and graphics classes).

---

_Note: `rhap5ody.js` was primarily developed in the `TobiasLoader/P5-Canvas-Tree` repository._
