/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

		cnv = new Canvas( windowWidth,  windowHeight);
	world.gravity.y = 10;

wall1  = new Sprite(500, height/2, 8, height, 'k');

wall2  = new Sprite(1400, height/2, 8, height, 'k')

wall3  = new Sprite(width/2, 800, width, 8, 'k')

wall4  = new Sprite(width/2, 200, width, 8, 'k')

wall5  = new Sprite(width/2, 950, width, 8, 'k')
wall5.rotation =20

wall6  = new Sprite(width/2, 950, width, 8, 'k')
wall6.rotation =-20


	ball_1 = new Sprite(width/2, height/2, 50, 'd');

for (i = 0; i < 100; i++) {

  alien = new Sprite(windowWidth/2, windowHeight/2, 10, 'd');

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = -1;

  alien.drag = -1;

  alien.friction = 0;

}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
		background('rgb(255, 255, 255)'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/