var num = 100;
var num2 = 50;
var trex = 1000;
var message = "hello";
var anothermessage = "goodbye";
var booleanVar = true;
var booleanVar2 = false;
var mouthX= 50;
var mouthy= 300;
var mouthW = 400;
var mouthH = 60;
var eye1X = 70;
var eye1Y = 70;

var eye2offset = 300;
var pupilOffset = 20;


function setup() {
console.log(num);
console.log(num + num2);
console.log(num * num2);
console.log(num/num2);
    
console.log(message + trex);

//this is not going to work
console.log(message * trex);
//this will also not work
//console.log(message/trek)
    
    createCanvas (500,500);
    background(0,0,0);
    
console.log(width + "" + height);

    
    
/* 
if you want to write more stuff,
use a multi-line
comment
*/
    
    
var message2 = "this only works in the setup";
console.log(message2);

}

function draw() {
    fill(255);
//  console.log(num);
//console.log(message2);
//    var message3 ="this only works in the draw";

    //x, y, width, height
    
    //eye1
    ellipse(70,70,100,100);
    fill(0,0,255);
    ellipse(eye1X, eye1Y + pupilOffset, 50,50);
    
    //nose
    triangle(width/2, height/2,(width/2)+20,(height/2)+20,(width/2)-20,(height/2)+20);
    
    //eye2
    fill(255);
    ellipse(eye1X + eye2offset, eye1Y, 100,100);
    fill(0,0,255);
    ellipse(eye1X + eye2offset, eye1Y + pupilOffset, 50,50);
    
    //mouth
    rect(mouthX, mouthy, mouthW, mouthH);
    stroke(125);
    strokeWeight(10);
    line(mouthX, mouthy + mouthH/2, mouthX + mouthW, mouthy + mouthH/2);
    noStroke();
    
    fill('red');
    arc(width/2 +100 ,330,100,100,0, PI);
    
    
    

    
}

function mousePressed(){
    background('navy');
    
}