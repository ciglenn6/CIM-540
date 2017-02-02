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
    background(255,0,0);
    
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
//  console.log(num);
//console.log(message2);
//    var message3 ="this only works in the draw";

    //x, y, width, height
    
    ellipse(70,70,100,100);
    
    ellipse(width/2, height /2,50,50);
    
    rect(mouthX, mouthy, mouthW, mouthH);
    line(mouthX, mouthY + mouthH/2, mouthx + mouthW, mouthY + mouthH/2);
    
    
    
    
    
}