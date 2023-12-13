class Text extends Obj {
  constructor(txt,x,y,pos,children){
		super(pos,children);
		this.addProperty('txt', txt);
		this.addProperty('x', x);
		this.addProperty('y', y);
  }
  build(img){
		img.noStroke();
		img.fill(0,0,0);
		img.textFont('Inconsolata',20);
		img.text(this.get('txt'),this.get('x'),this.get('y'));
  }
}