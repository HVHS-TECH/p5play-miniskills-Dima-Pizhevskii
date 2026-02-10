/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/


/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas( windowWidth,  windowHeight);
	world.gravity.y = 10;

	rect = new Sprite(0, 800, 100,100);
	rect.color = '#34e07c'
	rect.rotationSpeed = 2 ;
	rect.vel.x = 10;
	rect.vel.y = -10;

	rect3 = new Sprite(1800, 800, 200, 10,'s');
	rect3.color = '#ecd3cb'
	rect3.rotationSpeed = 2 ;
	rect3.vel.x = 10;
	rect3.vel.y = -10;
	rect3.bounciness = 0.6

	rect5 = new Sprite(1100, 700, 100, 's');
	rect5.color = '#e05c34'
	rect5.rotationSpeed = 2 ;
	rect5.vel.x = -10;
	rect5.vel.y = 4;
	rect5.bounciness = 4


	rect6 = new Sprite(270, 130, 200, 10,'s');
	rect6.color = '#e05c34'
	rect6.rotationSpeed = 2;
	rect6.vel.x = -10;
	rect6.vel.y = 4;
	rect6.friction = 1000000000000000
	rect6.drag = 1000000
	rect6.bounciness = 0

	rect2 = new Sprite(900, 600, 100, 's');
	rect2.color = '#cc6d50'
	rect2.rotationSpeed = 2 ;
	rect2.vel.x = -10;
	rect2.vel.y = 4;

	rect4 = new Sprite(700, 800, 100, 's');
	rect4.color = '#773e2d'
	rect4.rotationSpeed = 2 ;
	rect4.vel.x = -10;
	rect4.vel.y = 4;
	rect4.bounciness = 3


}
setup()
//
	
/*******************************************************/

/*******************************************************/
function draw() {
	background('rgb(255, 255, 255)'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/	