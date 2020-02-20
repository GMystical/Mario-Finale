
//Main Menu

let MainMenu = true;
let Credits = false;
let ChoosePlayers = false;
let PlayerSelect = false;
let Level1 = false;
var skyImage;
var groundImage;
var cloudImage;
var ground;
var cloud = [];
var bigcloudbackImage;
var backcloud = [];

var mushroomImage;
var mushrooms;

var cloudmImage;
var cloudbackm = [];
var cloudm;

var boundariescloud = [];
var cloudBoundariesImage;
var bcloud;

var starttheme;

var playb;
var playbutton;

var titlescreen;
var credits;

var choosescreen;
var playerone;
var playertwo;
var back;
var creditsNI;
var creditsN;

var Select;

var comingsoonb;
var MarioSelect;
var LuigiSelect;
var SonicSelect;
var ShadowSelect;
var CharacterSelectN;

var ComingSoonL;


var Mariogif_loadMmg;

let Mario = false;

var MouseX;
var MouseY;
var playX = 240;
var playY = 290;
var playW = 100;
var playH = 40;

function preload(){
  
  skyImage = loadImage("assets/Mario Finale - lvl background.png");
  cloudBoundariesImage = loadImage("assets/Mario Finale - clouds.png");
  groundImage = loadImage("assets/Mario Finale - lvl 1 ground.png");
  smallcloudImage = loadImage("assets/background clouds small.png");
  bigcloudImage = loadImage("assets/clouds big(background).png");
  bigcloudfrontImage = loadImage("assets/big cloud front(ground).png");
  bigcloudbackImage = loadImage("assets/biggest cloud(ground).png");
  mushroomImage = loadImage("assets/msuhroom hills.png");
  cloudmImage = loadImage("assets/background clouds small-1.png");
  starttheme = loadSound("music/Mario Main Theme Rock Arrange by Saitama Saishu Heiki.mp3");
  playbutton = loadImage("assets/playbutton.png");
  titlescreen = loadImage("assets/Titlegame.png");
  credits = loadImage("assets/credits.png");
  playerone = loadImage("assets/Player 1.png");
  playertwo = loadImage("assets/2 Players.png");
  back = loadImage("assets/Back.png");
  creditsNI = loadImage("assets/The credits.png");
  comingsoonb = loadImage("assets/Coming Soon! with brackets.png");
  Marioselect = loadImage("assets/Mario.png");
  LuigiSelect = loadImage("assets/Luigi.png");
  SonicSelect = loadImage("assets/Sonic4game.png");
  ShadowSelect = loadImage("assets/Shadow.png");
  CharacterSelectN = loadImage("assets/Character Select.png");
  Mariogif_loadImg = loadImage("assets/Mariosanimation.gif");
  ComingSoon = loadImage("assets/Coming Soon!.png");
  
}

function setup() {
  createCanvas(600, 500);
  bcloud = new boundariesCloud();
  cloudm = new backCloudmushroom();
  mushrooms = new Mushrooms();
  backcloud = new BackClouds();
  ground = new Ground();
  cloud = new Clouds();
  starttheme.setVolume(0.1);
  starttheme.play();
  starttheme.loop();
 
  playb = new Titlescreen();

  choosescreen = new Choosescreen();
  
  creditsN = new Creditscreen();
  
  Select = new CharacterSelect();
  
  ComingSoonL = new LevelOne();
}
function draw() {
  background(220);
  image(skyImage, 0, 0, width, height);
  
  bcloud.display();
  bcloud.move();
  
  cloudm.display();
  cloudm.move();
  mushrooms.display();

  backcloud.display();
  backcloud.move();
  
  ground.display();
  
  cloud.display();
  cloud.move();
  
  

  if(MainMenu == true && Credits == false && ChoosePlayers == false && PlayerSelect == false && Level1 == false){
  playb.display();
  playb.mouseClicked();
  }else if(MainMenu == false && Credits == false && ChoosePlayers == true && PlayerSelect == false && Level1 == false){
  choosescreen.display();
  choosescreen.mouseClicked();
  }else if(MainMenu == false && Credits == false && ChoosePlayers == false && PlayerSelect == true && Level1 == false){
  Select.display();
  Select.mouseClicked();
  }else if(MainMenu == false && Credits == false && ChoosePlayers == false && PlayerSelect == false && Level1 == true){
  ComingSoonL.display();
  ComingSoonL.mouseClicked();
  }else if(MainMenu == false && Credits == true && ChoosePlayers == false && PlayerSelect == false && Level1 == false){
  creditsN.display();
  creditsN.mouseClicked();
  }
  
  

  
  
  //drawLines();
}


class boundariesCloud{

  constructor(){
  this.x = width - width;
  this.y = height - height; 
  this.w =  width; 
  this.h = width/10;
  this.dx = 1;
    
  this.x2 = -600;
  this.y2 = height - height; 
  this.w2 =  width; 
  this.h2 = width/10;
  this.dx2 = 1;
    
  }
  
  display(){
  image(cloudBoundariesImage, this.x, this.y, this.w, this.h); 
  image(cloudBoundariesImage, this.x2, this.y2, this.w2, this.h2); 
  }
  
  move(){
  this.x += this.dx;
  if(this.x == 600){
  this.x = -600;
  }
  
  this.x2 += this.dx2;
  if(this.x2 == 600){
  this.x2 = -600;
  }
    
  }
}






class Ground{

  constructor(){
  this.x = 0;
  this.y = 350;
  this.w = width;
  this.h = 150; 
  }
  
  display(){
    image(groundImage, this.x, this.y, this.w, this.h);
  }
}

class Clouds{

  constructor(){
  //small cloud background
  this.x = 200;
  this.y = 125;
  this.w = width/3;
  this.h = height/17; 
  this.dx = 1;
  //big cloud background
  this.x2 = 0;
  this.y2 = 75;
  this.w2 = width/2.5;
  this.h2 = height/12; 
  this.dx2 = 0.75;
  //small cloud background bottom    
  this.x3 = 100;
  this.y3 = 175;
  this.w3 = width/3;
  this.h3 = height/20; 
  this.dx3 = 1.2;
  //big cloud ground  
  this.x4 = 0;
  this.y4 = 300;
  this.w4 = width;
  this.h4 = height/2; 
  this.dx4 = 2;
    
  this.x5 = -400;
  this.y5 = 350;
  this.w5 = width;
  this.h5 = height/2; 
  this.dx5 = 2;
    
  this.x6 = -800;
  this.y6 = 300;
  this.w6 = width;
  this.h6 = height/2; 
  this.dx6 = 2;
  
    
  }
  
  display(){
    //background
    image(smallcloudImage, this.x, this.y, this.w, this.h); 
    image(bigcloudImage, this.x2, this.y2, this.w2, this.h2);  
    image(smallcloudImage, this.x3, this.y3, this.w3, this.h3);
    
    //ground front  
    image(bigcloudfrontImage, this.x4, this.y4, this.w4, this.h4);  
    image(bigcloudfrontImage, this.x5, this.y5, this.w5, this.h5);
    image(bigcloudfrontImage, this.x6, this.y6, this.w6, this.h6);
    
  }
  
  move(){
  this.x += this.dx;
    if(this.x > 800){
      this.x = -400;
    }
    
    this.x2 += this.dx2;
    if(this.x2 > 800){
      this.x2 = -400;
    }
    
    this.x3 += this.dx3;
    if(this.x3 > 800){
      this.x3 = -400;
    }
    
    this.x4 += this.dx4;
    if(this.x4 > 800){
      this.x4 = -800;
    }
    
    this.x5 += this.dx5;
    if(this.x5 > 800){
      this.x5 = -800;
    }
    
    this.x6 += this.dx6;
    if(this.x6 > 800){
      this.x6 = -800;
    }
  }
}

class BackClouds{

  constructor(){
  this.x = 0;
  this.y = 250;
  this.w = width;
  this.h = height/2; 
  this.dx = 1;
    
  this.x2 = -600;
  this.y2 = 250;
  this.w2 = width;
  this.h2 = height/2; 
  this.dx2 = 1;
  }
  
  display(){
  image(bigcloudbackImage, this.x, this.y, this.w, this.h);
  image(bigcloudbackImage, this.x2, this.y2, this.w2, this.h2);
  }
  
  move(){
    
    this.x += this.dx;
    
    this.x += this.dx;
    if(this.x > 800){
      this.x = -600;
    }
    
    this.x2 += this.dx2;
    this.x2 += this.dx2;
    if(this.x2 > 800){
      this.x2 = -600;
    }
  }

}

class Mushrooms{

constructor(){

  this.x = 125;
  this.y = 150;
  this.w = width/1.5;
  this.h = height/1.75;
}
  
  display(){
  image(mushroomImage, this.x, this.y, this.w, this.h);
  }
}

class backCloudmushroom{

  constructor(){
  this.x = -100; 
  this.y = 200;
  this.w = width/2.75;
  this.h = height/19; 
  this.dx = 1;
    
  this.x2 = 50; 
  this.y2 = 235;
  this.w2 = width/2.75;
  this.h2 = height/20; 
  this.dx2 = 0.75;
  }
  
  display(){
    image(cloudmImage, this.x, this.y, this.w, this.h);
    image(cloudmImage, this.x2, this.y2, this.w2, this.h2);
  }
  
  move(){
  this.x += this.dx;
    if(this.x > 800){
      this.x = -400;
    }
    
   this.x2 += this.dx2;
    if(this.x2 > 800){
      this.x2 = -400;
    }
  }
}

class Titlescreen{

constructor(){
  this.x = playX;
  this.y = playY;
  this.w = playW;
  this.h = playH;
  
  this.x2 = 150;
  this.y2 = 75;
  this.w2 = 300;
  this.h2 = 150;
  
  this.x3 = 0;
  this.y3 = 450;
  this.w3 = 300;
  this.h3 = 50;
  
}
  
  display(){
  image(playbutton, this.x, this.y, this.w, this.h);
  image(titlescreen, this.x2, this.y2, this.w2, this.h2);
  image(credits, this.x3, this.y3, this.w3, this.h3);
  }
  
  mouseClicked(){
  MouseX = mouseX;
  MouseY = mouseY;
    if (MouseX > playX && MouseX < 350 && MouseY > playY && MouseY < 325) {
      this.w = playW +10;
      this.h = playH + 10;
      if(mouseIsPressed){
      MainMenu = false;
      Credits = false;
      ChoosePlayers = true;
      PlayerSelect = false;
      Level1 = false;
      }
    }else{
      this.w = playW 
      this.h = playH 
    }
    
    if (MouseX > this.x3 && MouseX < 125 && MouseY > this.y3 && MouseY < 500) {
      this.w3 = playW +10;
      this.h3 = playH + 10;
      if(mouseIsPressed){
      MainMenu = false;
      Credits = true;
      ChoosePlayers = false;
      PlayerSelect = false;
      Level1 = false;
      }
    }else{
      this.w3 = playW 
      this.h3 = playH 
    }
}

}

class Choosescreen{

  constructor(){
  this.x = 175;
  this.y = 175;
  this.w = 250;
  this.h = 50;
    
  this.x2 = 175;
  this.y2 = 325;
  this.w2 = 275;
  this.h2 = 50;
    
  this.x3 = 0;
  this.y3 = 0;
  this.w3 = 150;
  this.h3 = 50;
    
  this.x4 = this.x2 + 10;
  this.y4 = this.y2 - 50;
  this.w4 = 250;
  this.h4 = 50;
  
  }
  
  display(){
 
    image(playerone, this.x, this.y, this.w, this.h);
    image(playertwo, this.x2, this.y2, this.w2, this.h2);
    image(back, this.x3, this.y3, this.w3, this.h3);
    image(comingsoonb, this.x4, this.y4, this.w4, this.h4);
   
  }
  
  mouseClicked(){
  MouseX = mouseX;
  MouseY = mouseY;
    if (MouseX > this.x3 && MouseX < 125 && MouseY > this.y3 && MouseY < 75) {
      this.w3 = playW +10;
      this.h3 = playH + 10;
      if(mouseIsPressed){
      MainMenu = true;
      Credits = false;
      ChoosePlayers = false;
      PlayerSelect = false;
      Level1 = false;
      }
    }else{
      this.w3 = playW;
      this.h3 = playH;
    }
    
    if (MouseX > this.x && MouseX < 425 && MouseY > this.y && MouseY < 250) {
      this.w = 260;
      this.h = 60;
      if(mouseIsPressed){
      MainMenu = false;
      Credits = false;
      ChoosePlayers = false;
      PlayerSelect = true;
      Level1 = false;
      }
    }else{
      this.w = 250;
      this.h = 50;
    }
}
  
  
}

class Creditscreen{

constructor(){

  this.x = 0;
  this.y = 200;
  this.w = 600;
  this.h = 100;
  
  this.x2 = 0;
  this.y2 = 0;
  this.w2 = 150;
  this.h2 = 50;
}
  
  display(){
  image(creditsNI, this.x, this.y, this.w, this.h);
  image(back, this.x2, this.y2, this.w2, this.h2);
  }
  
  mouseClicked(){
  MouseX = mouseX;
  MouseY = mouseY;
    if (MouseX > this.x2 && MouseX < 125 && MouseY > this.y2 && MouseY < 75) {  
      this.w2 = playW + 10;
      this.h2 = playH + 10;
    
      if(mouseIsPressed){
      MainMenu = true;
      Credits = false;
      ChoosePlayers = false;
      PlayerSelect = false;
      Level1 = false;
      
      }
  }else{
      this.w2 = playW;
      this.h2 = playH;
    }
  
}



}


class CharacterSelect{

constructor(){
  //Back
  this.x = 0;
  this.y = 0;
  this.w = 150;
  this.h = 50;
  //Mario
  this.x2 = 50;
  this.y2 = 100;
  this.w2 = 160;
  this.h2 = 50;
  //Luigi
  this.x3 = 375;
  this.y3 = 100;
  this.w3 = 160;
  this.h3 = 50;
  //Sonic
  this.x4 = 50;
  this.y4 = 250;
  this.w4 = 160;
  this.h4 = 50;
  //Shadow
  this.x5 = 375;
  this.y5 = 250;
  this.w5 = 160;
  this.h5 = 50;
  
  this.x6 = 175;
  this.y6 = 0;
  this.w6 = 250;
  this.h6 = 45;
  
  //Coming soon for 3 characters
  
  this.x7 = this.x3;
  this.y7 = this.y3 - 50;
  this.w7 = 160;
  this.h7 = 50;
  
  this.x8 = this.x4;
  this.y8 = this.y4 - 50;
  this.w8 = 160;
  this.h8 = 50;
  
  this.x9 = this.x5;
  this.y9 = this.y5 - 50;
  this.w9 = 160;
  this.h9 = 50;
  
  //for Mariogif
  this.x10 = 225;
  this.y10 = 265;
  this.w10 = 125; //100
  this.h10 = 125; //200
}
  
  display(){
  image(back, this.x, this.y, this.w, this.h);
  image(Marioselect, this.x2, this.y2, this.w2, this.h2);
  image(LuigiSelect, this.x3, this.y3, this.w3, this.h3);
  image(SonicSelect, this.x4, this.y4, this.w4, this.h4);
  image(ShadowSelect, this.x5, this.y5, this.w5, this.h5);
  image(CharacterSelectN, this.x6, this.y6, this.w6, this.h6);
  //ComingSoon
  image(comingsoonb, this.x7, this.y7, this.w7, this.h7);
  image(comingsoonb, this.x8, this.y8, this.w8, this.h8);
  image(comingsoonb, this.x9, this.y9, this.w9, this.h9);
  }
  
  mouseClicked(){
  
  MouseX = mouseX;
  MouseY = mouseY;
    if (MouseX > this.x && MouseX < 125 && MouseY > this.y && MouseY < 75) {  
      this.w = playW + 10;
      this.h = playH + 10;
    
    if(mouseIsPressed){
      MainMenu = true;
      Credits = false;
      ChoosePlayers = false;
      PlayerSelect = false;
      Level1 = false;
      }
  }else{
      this.w = playW;
      this.h = playH;
    }
    
    //for choosing Mario -------------------------------------------------------
    if (MouseX > this.x2 && MouseX < 200 && MouseY > this.y2 && MouseY < 150) {  
      this.w2 = 170;
      this.h2 = 60;
      image(Mariogif_loadImg, this.x10, this.y10, this.w10, this.h10);
    if(mouseIsPressed){
      MainMenu = false;
      Credits = false;
      ChoosePlayers = false;
      PlayerSelect = false;
      Level1 = true;
      //Mario = true;
      
      }
  }else{
      this.w2 = 160;
      this.h2 = 50;
    }
    
  }


}

class LevelOne {

constructor(){
  this.x = 0;
  this.y = 0;
  this.w = 150;
  this.h = 50;
  
  this.x2 = 25;
  this.y2 = 175;
  this.w2 = 550;
  this.h2 = 100;

  }
  
  display(){
  image(back, this.x, this.y, this.w, this.h);
  image(ComingSoon, this.x2, this.y2, this.w2, this.h2);
  }
  
  mouseClicked(){
  
  MouseX = mouseX;
  MouseY = mouseY;
    if (MouseX > this.x && MouseX < 125 && MouseY > this.y && MouseY < 75) {  
      this.w = playW + 10;
      this.h = playH + 10;
    
    if(mouseIsPressed){
      MainMenu = true;
      Credits = false;
      ChoosePlayers = false;
      PlayerSelect = false;
      Level1 = false;
      }
  }else{
      this.w = playW;
      this.h = playH;
    }
  }
}





















//The lines for the graph
function drawLines() {
  //draw gridLines
  for (var i = 0; i <= 16; i++) {
    for (var j = 0; j <= 16; j++) {
      if (i % 2 == 0) {
        strokeWeight(3);
      } else {
        strokeWeight(1);
      }
      line(i * 50, 0, i * 50, 800);
      if (j % 2 == 0) {
        strokeWeight(2);
      } else {
        strokeWeight(1);
      }
      line(0, j * 50, 1000, j * 50);
    }
  }
  //number x & y axis
  fill(0, 0, 255);
  textSize(26);
  textAlign(LEFT);
  for (var i = 0; i <= 8; i++) {
    text(i * 100, i * 100 - 25, 20);
    text(i * 100, 0, i * 100 + 2);
  }
  text("0", 2, 20);
  fill(0);
}