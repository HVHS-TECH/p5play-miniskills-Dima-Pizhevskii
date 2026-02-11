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

	rect = new Sprite(400, 400, 100,100);
	rect.color = '#34e07c'
	rect.rotationSpeed = 2 ;
	rect.vel.x = 10;
	rect.vel.y = -10;
	rect.drag = 0.1


	rect5 = new Sprite(1200, 700, 100, 's');
	rect5.color = '#e05c34'
	rect5.rotationSpeed = 2 ;
	rect5.vel.x = -10;
	rect5.vel.y = 4;
	rect5.bounciness = 1


	rect6 = new Sprite(700, 500, 200, 10,'s');
	rect6.color = '#e05c34'
	rect6.rotationSpeed = 2;
	rect6.vel.x = -10;
	rect6.vel.y = 4;
	rect6.bounciness = 1
	rect6.rotation = 2

	rect2 = new Sprite(900, 500, 100, 's');
	rect2.color = '#cc6d50'
	rect2.rotationSpeed = 2 ;
	rect2.vel.x = -10;
	rect2.vel.y = 4;
	rect2.bounciness = 1

	rect4 = new Sprite(700, 800, 100, 's');
	rect4.color = '#773e2d'
	rect4.rotationSpeed = 2 ;
	rect4.vel.x = -10;
	rect4.vel.y = 4;
	rect4.bounciness = 100




	wallTop = new Sprite(800, 900, 1200, 10, 'k');

	wallTop = new Sprite(1400, 700, 10, 1200, 'k');


	ball_1 = new Sprite(400, 500, 50, 'd');

	ball_1.color = 'cyan';

	ball_1.bounciness = 1;

	ball_1.friction = 0;

	ball_1.drag = 0;


	ball_2 = new Sprite(500, 500, 50, 'd');

	ball_2.color = 'cyan';

	ball_2.bounciness = 1;

	ball_2.friction = 0;

	ball_2.drag = 0.1;



	ball_3 = new Sprite(600, 500, 50, 'd');

	ball_3.color = 'cyan';

	ball_3.bounciness = 1;

	ball_3.friction = 0;

	ball_3.drag = -0.1;
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