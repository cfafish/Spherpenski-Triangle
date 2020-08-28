const w = 2736 * 2;
const h = 1824 * 2;
var rad = 750 * 2;
var center;
const back = 50;
var circles = [];
var vertCircles = [];
var cnt = 1;
var n;
var nReset;
var centerReset;
var radiiReset;

function recursive(start, radii, count){
	this.count = count;
	this.count ++;
	this.radii = radii;
	this.start = start;

	this.show = function(){
		//console.log(".show() function is running with this radii\t" + this.radii + "\n" + this.start);
		//fill(50);
		strokeWeight(.5);
		stroke(255);
		noFill();
		//fill(80, 5);
		ellipse(this.start.x, this.start.y, this.radii, this.radii);
	}

	if(this.count < 11){

		//Right
		//console.log("Right Render");
		var startTempRight = createVector(this.start.x + this.radii/2, this.start.y);
		var tempRight = new recursive(startTempRight, this.radii/2, this.count);
		tempRight.show();

		//Left
		//console.log("Left Render");
		var startTempLeft = createVector(this.start.x - this.radii/2, this.start.y);
		var tempLeft = new recursive(startTempLeft, this.radii/2, this.count);
		tempLeft.show();

		//Down
		//console.log("Down Render");
		var startTempDown = createVector(this.start.x, this.start.y + this.radii/2);
		var tempDown = new recursive(startTempDown, this.radii/2, this.count);
		tempDown.show();
		
	}
	else{
		console.log("Should be done\t"+ this.count);
		//break;
		//this.count;
	}
	strokeWeight(.5);
	stroke(255);
	noFill();
	//fill(80, 5);
	ellipse(this.start.x, this.start.y, this.radii, this.radii);


}	

function setup() {
  
  	createCanvas(w, h);
  	frameRate(.5);
   	center = createVector(w/2, rad/2 + 10);
   	centerReset = center;
   	n = 0;
   	nReset = n;
   	radiiReset = rad;
   	//framerate()
}

function draw() {

	background(0);
	//fill(200);
	//stroke(255);
	//noFill();
	//ellipse(center.x, center.y, rad, rad);
	//console.log("new Draw Loop " + center.x + " " + center.y + " " + rad);

	recursive (center, rad, cnt);
	//temp2.show();
}