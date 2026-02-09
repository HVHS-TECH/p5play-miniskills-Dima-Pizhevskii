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

	rect2 = new Sprite(900, 600, 100, 's');
	rect2.color = '#e05c34'
	rect2.rotationSpeed = 2 ;
	rect2.vel.x = -10;
	rect2.vel.y = 4;


}
setup()
//
	
/*******************************************************/

/*******************************************************/
function draw() {
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/	