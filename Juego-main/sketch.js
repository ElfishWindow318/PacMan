var player;
var ghost, ghosts;
var wall1, wall2, wall3, wall4, wall5, wall6, walls;
var gameState = 1;

function preload(){

}

function setup(){
    createCanvas(1000,600);
    player = createSprite(100,100,20,20);
    player.shapeColor = "Yellow";
    ghost = createSprite(500,300,20,20);
    ghost.shapeColor = "Blue";
    stageWalls();
    walls = createGroup();
    walls.add(wall1);
    walls.add(wall2);
    walls.add(wall3);
    walls.add(wall4);
    walls.add(wall5);
    walls.add(wall6);
    walls.setColorEach("Red");
}

function draw(){
    background("Black");

    if(keyDown("Space")){
        gameState = 2;
    }

    drawSprites();

    if(gameState == 2){
        if(keyDown(DOWN_ARROW)){
            player.y += 10;
        }
        if(keyDown(UP_ARROW)){
            player.y -= 10;
        }
        if(keyDown(RIGHT_ARROW)){
            player.x += 10;
        }
        if(keyDown(LEFT_ARROW)){
            player.x -= 10;
        }
    }
}

function stageWalls(){
    wall1 = createSprite(500,0,1000,5);
    wall2 = createSprite(0,120,5,290);
    wall3 = createSprite(1000,120,5,290);
    wall4 = createSprite(500,600,1000,5);
    wall5 = createSprite(0,480,5,290);
    wall6 = createSprite(1000,480,5,290);

}