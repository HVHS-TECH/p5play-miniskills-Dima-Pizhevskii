/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");

  cnv = new Canvas(windowWidth, windowHeight);
  world.gravity.y = 10;
  var score = 0
  wall1 = new Sprite(500, height / 2, 8, height, 'k');

  wall2 = new Sprite(1400, height / 2, 8, height, 'k')

  wall3 = new Sprite(width / 2, 800, width, 8, 'k')

  wall4 = new Sprite(width / 2, 200, width, 8, 'k')

  wall5 = new Sprite(width / 2, 950, width, 8, 'k')
  wall5.rotation = 20

  wall6 = new Sprite(width / 2, 950, width, 8, 'k')
  wall6.rotation = -20


  ball_1 = new Sprite(width / 2, height / 2 + 50, 50, 'k');

  ball_1.friction = 10000;

  ball_1.drag = 10000;



  alienGroup = new Group();

  for (i = 0; i < 100; i++) {

    alien = new Sprite(windowWidth / 2 + random(-10, 10) - 4, windowHeight / 2 + random(-10, 10) + 20, 10, 'd');


    alien.vel.y = 20;

    alien.bounciness = -1;

    alien.drag = -1;

    alien.friction = 0;

    alienGroup.add(alien);


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