var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	dogImg = loadImage("Dog.png");
  happyDogImg = loadImage("happydog.png");
  milkBottle = loadImage("Milk.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite();

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw(){  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();

  textSize(5);
  fill("red");
  stroke(4);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}