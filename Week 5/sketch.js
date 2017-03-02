var ellipseY = [0, 15, 30];
var ellipseX = [1,16,31]
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background("violet");
  noStroke();
  ellipseMode(CENTER);
  fill("pink");
  for (var i = 0; i < ellipseY.length; i++) {
   ellipse((i+1)*100, ellipseY[i], 75, 75);
    ellipseY[i] += 1;
  }

    for (var i = 0; i < ellipseX.length; i++) {
   ellipse((i+1)*100, ellipseX[i], 20, 20);
    ellipseX[i] += 1;
}