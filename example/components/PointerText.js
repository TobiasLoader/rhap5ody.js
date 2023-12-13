class PointerText extends Obj {
	constructor(txtPoint,xPoint,yPoint,pos,children){
		super(pos,children);
		this.addPointer('mytxt',txtPoint);
		this.addPointer('xtxt',xPoint);
		this.addPointer('ytxt',yPoint);
	}
	build(img){
		img.noStroke();
		img.fill(0,0,0);
		// img.textAlign(CENTER);
		img.textFont('Inconsolata',20);
		img.text(this.getPointer('mytxt'),this.getPointer('xtxt'),this.getPointer('ytxt'));
	}
}