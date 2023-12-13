class BackgroundText extends Text {
	constructor(txt,x,y,pos,children){
		super(txt,x,y,pos,children);
	}
	build(img){
		img.background(255,255,255);
		super.build(img);
	}
}