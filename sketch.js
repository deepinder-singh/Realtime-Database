var ball;
var database;
var position;

function setup() {
  createCanvas(400,400);

  database = firebase.database();

  ball = createSprite(200, 200, 10, 10);
  ball.shapeColor = "Red";

  var ballPosition = database.ref("ball/position");
  ballPosition.on("value",readPosition);
}

function draw() {
  background(0);  

  if(position!==undefined){
  //To move the ball
  if(keyDown("UP_ARROW")){
    writePosition(0,-2)
  }
  if(keyDown("DOWN_ARROW")){
    writePosition(0,2);
  }
  if(keyDown("LEFT_ARROW")){
    writePosition(-2,0);
  }
  if(keyDown("RIGHT_ARROW")){
    writePosition(2,0);
  }
}
  drawSprites();
}

function readPosition(data){

  position = data.val();

  ball.x = position.x;
  ball.y = position.y;
}

function writePosition(x,y){

database.ref("ball/position").set({

  "x":position.x+x,
  "y":position.y+y,
});
}