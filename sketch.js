var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = null;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "start";
var line;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  fill("yellow");
  line = rect(400, 400, 1000, 10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");
  textSize(20)
  //text("Score : "+score,20,30);
  Engine.update(engine);
 
   rectMode(CENTER);
   rect(400, 480, 1000, 10);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }*/
 
  /*for (var j = 0; j < particle.length; j++) {
   
     particle[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  if(particle !== null) {
  particle.display();
  if(particle.body.position.y >= 550) {
    
  if(particle.body.position.x <= 0 ) {
    score = score+0;
    particle = null;
  if(count >= 5) gameState = "end";
  }
 
}
}

if(particle !== null) {
  particle.display();
  if(particle.body.position.y >= 550) {
    
  if(particle.body.position.x >= 800 ) {
    score = score+0;
    particle = null;
  if(count >= 5) gameState = "end";
  }
 
}
}

if(particle !== null) {
   particle.display();
   if(particle.body.position.y >= 550) {
   
  if(particle.body.position.x <= 260 ) {
     score = score+500;
     particle = null;
  if(count >= 5) gameState = "end";
  }

 }
}

if(particle !== null) {
  particle.display();
  if(particle.body.position.y >= 550) {

 if(particle.body.position.x <= 505 ) {
   score = score+100;
   particle = null;
 if(count >= 5) gameState = "end";
  }

 }
}


if(particle !== null) {
  particle.display();
  if(particle.body.position.y >= 550) {
  
 if(particle.body.position.x <= 745 ) {
 score = score+200;
 particle = null;
 if(count >= 5) gameState = "end";
  }

 }
}

   textSize(30)
   fill("white")
   text("Score : " + score, width-200, 25);

   textSize(20);
   text("200", 745, 550);
   text("200", 665, 550);
   text("200", 585, 550);
   text("100", 505, 550);
   text("100", 420, 550);
   text("100", 340, 550);
   text("500", 260, 550);
   text("500", 180, 550);
   text("500", 100, 550);
   text("500", 25, 550);
   
  }

  function mouseReleased() {
//console.log("error");
   if(gameState !== "end") {
      count++;
      //score = score + 100;
      particle = new Particle(mouseX, 10,10);
      //console.log(particle);
      /*if(particle.body.position.x <= 260 && particle.body.position.y >= 550 ) {
          score = score+500;
      }
      if(particle.body.position.x <= 505 && particle.body.position.y >= 550 ) {
        score = score+100;
    }
    if(particle.body.position.x <= 745 && particle.body.position.y >= 550 ) {
      score = score+200;
  }*/
   }
  
  }