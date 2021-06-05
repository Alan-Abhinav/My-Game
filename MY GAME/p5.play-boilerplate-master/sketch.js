var car,theifcar
var Cop
var Beachroad,cityroad,hillentre,hill,intunnel,roadselectionhill,roadselection1,roadselecttunnelout,roadselecttunnelin
var roadselectstuntpark,hillroad
var button
function preload() {
car = loadImage("Images/Car.png");
theifcar = loadImage("Images/Theif Car.png")
Cop = loadImage("Images/Police Officer.png")
Beachroad = loadImage("Images/Beach Road.png")
cityroad = loadImage("Images/City Road.png")
hillentre = loadImage("Images/Hill Entre.png")
hill = loadImage("Images/Hill.png")
intunnel = loadImage("Images/intunnel.png")
roadselectionhill = loadImage("Images/Select Road Hill.png")  
roadselection1 = loadImage("Images/select road other1.png")
roadselecttunnelout = loadImage("Images/Select road outtunnel.png")
roadselectstuntpark  = loadImage("Images/select road stunt park.png")
hillroad = loadImage("Images/to hill road.png")
buttonImage = loadImage("Images/Play.png")

}
function setup() {
  createCanvas(900,500);
  police=createSprite (120, 500, 50, 50);
  police.addImage(Cop)
  button=createSprite(454,320);
  button.addImage(buttonImage)
  button.scale=0.3
}

function draw() {
  background(cityroad); 
  fill(0) 
  text(mouseX+' '+mouseY,200,150)
  textSize(30)
  text("A Theif Is Escaping We Need To Catch Him!",100,219)
  drawSprites();
  
}