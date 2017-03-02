var colorful;
var galaxy;
var somany;
var stacked;

var donutArray = [];

var donutIndex = 0;

function setup() {
    createCanvas(640,480);

    
    donutArray.push(loadImage("images/colorful.jpg"));
    donutArray.push(loadImage("images/galaxy.jpg"));
    donutArray.push(loadImage("images/so many.jpg"));
    donutArray.push(loadImage("images/stacked.jpg"));


}

function draw() {
    
    image(donutArray[donutIndex], 0, 0);
    

}

function mousePressed() {
    donutIndex = donutChooser();
}

function donutChooser(){
    
    var randomNum = int(random(0,3));
    
    return randomNum;
}
