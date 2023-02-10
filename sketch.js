var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins;
var cars = [],life;
var fuelImage, powerCoinImage,obstacle1,obstacle1Image,obstacle2Img,obstacle2;
var blastImage;
//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
 
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  form1=new Form();
 
}

//BP
function draw() {
  background(backgroundImage);
  form1.display();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
