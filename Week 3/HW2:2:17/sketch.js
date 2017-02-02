function setup() {
createCanvas(500,500);

}

function draw() {
    background(204);
    //pacman
    fill(255, 204, 0);
    arc(100,250,75,70,390,250);
    
    //yellow dots
    ellipse(150,250,10,10);
    ellipse(200,250,10,10);
    ellipse(400,250,10,10);
    ellipse(450,250,10,10);
    ellipse(300,250,10,10);
    ellipse(400,310,10,10);
    ellipse(150,310,10,10);
    ellipse(200,310,10,10);
    ellipse(400,310,10,10);
    ellipse(450,310,10,10);
    ellipse(300,310,10,10);
    ellipse(200,310,10,10);
    ellipse(100,310,10,10);
    ellipse(350,310,10,10);
    ellipse(250,310,10,10);
    ellipse(150,310,10,10);
    ellipse(400,370,10,10);
    ellipse(450,370,10,10);
    ellipse(300,370,10,10);
    ellipse(200,370,10,10);
    ellipse(100,370,10,10);
    ellipse(350,370,10,10);
    ellipse(250,370,10,10);
    ellipse(150,370,10,10);
   
   
    //first ghost
    fill(175, 100, 220);
    ellipse(250,250,58,70)
    triangle(250,280,260,280,255,297);
    triangle(240,280,250,280,245,297);
    triangle(230,280,240,280,235,297);
    triangle(260,280,270,280,265,297);
    
    fill(255, 170, 238);
    ellipse(240,250,10,10);
    ellipse(260,250,10,10);
    
    fill(175, 100, 220);
    ellipse(240,250,2,2);
    ellipse(260,250,2,2);
    
    fill(255, 170, 238);
    line(240,260,260,260);
    
    //second ghost
    fill(245, 14, 120);
    ellipse(350,250,58,70)
    triangle(350,280,340,280,345,297);
    triangle(340,280,330,280,335,297);
    triangle(360,280,370,280,365,297);
    triangle(350,280,360,280,355,297);
    
    fill(250, 171, 241);
    ellipse(340,250,10,10);
    ellipse(360,250,10,10);
    
    fill(245, 14, 120);
    ellipse(340,250,2,2);
    ellipse(360,250,2,2);
    
    fill(255, 170, 238);
    line(340,260,360,260);
    

    
    
    
         
    
    

}