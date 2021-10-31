var canvas;

var rx = [];
var ry = [];
var rc = [];

function setup() 
{
    canvas = createCanvas(displayWidth, displayHeight + (document.body.offsetHeight - document.body.clientHeight));
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

var findPoint = function(x1, y1, x2, y2, x)
{
  var ret;

  var m = (y1 - y2) / (x1 - x2);


  ret = m*(x - x2) + y2;

  if(x2 < 0)
  ret = -ret;

  return ret;
}

var cloud = function(x, y, w, h, s)
{
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.s = s;
}


cloud.prototype.draw = function()
{
  
  switch(this.s)
  {
    case 1:
      noStroke();
      fill(240,240,240);
      ellipse(this.x - this.w /20.0, this.y - this.h /5.3, this.w / 1.7, this.h/2.1); 
      ellipse(this.x - this.w /4.9, this.y + this.h /4.2, this.w / 1.7, this.h/2.3); 
      ellipse(this.x - this.w /7.4, this.y - this.h /3.7, this.w / 2.9, this.h/2.1); 

      ellipse(this.x - this.w /7.0, this.y - this.h /18.9, this.w / 1.9, this.h/2.1); 
      ellipse(this.x + this.w /17.2, this.y + this.h /5.3, this.w / 2.0, this.h/2.1); 
      ellipse(this.x + this.w /3.3, this.y - this.h /9.3, this.w / 2.4, this.h/1.6);
      
      
      stroke(0,0,0, 200);
      noFill();
      strokeWeight(1);
      arc(this.x + this.w /17.2, this.y + this.h /5.3, this.w / 2.0, this.h/2.1, 0.02, 2.3);
      arc(this.x + this.w /3.3, this.y - this.h /9.3, this.w / 2.4, this.h/1.6, -0.3, 1.5);
      arc(this.x - this.w /4.9, this.y + this.h /4.2, this.w / 1.7, this.h/2.3, 0.5, 3.1);
      break;

    case 2:
      noStroke();
      fill(240,240,240);
      ellipse(this.x - this.w /7.7, this.y + this.h /4.6, this.w / 2.5, this.h/2.0); 
      ellipse(this.x - this.w /3.2, this.y + this.h /3.6, this.w / 3.7, this.h/2.1); 
      ellipse(this.x + this.w /13.5, this.y + this.h /9.4, this.w / 3.7, this.h/2.1);
      ellipse(this.x + this.w /4.8, this.y + this.h /4.4, this.w / 3.7, this.h/2.1); 
      ellipse(this.x - this.w /10.6, this.y - this.h /61.7, this.w / 1.7, this.h/1.7);
      ellipse(this.x + this.w /4.9, this.y - this.h /6.3, this.w / 1.7, this.h/1.7); 
      ellipse(this.x + this.w /2.8, this.y + this.h /8.9, this.w / 3.1, this.h/1.6); 

      stroke(0,0,0, 200);
      noFill();
      strokeWeight(1);
      arc(this.x - this.w /3.2, this.y + this.h /3.6, this.w / 3.7, this.h/2.1, 0.8, 3.1);
      arc(this.x - this.w /7.7, this.y + this.h /4.6, this.w / 2.5, this.h/2.0, 0.4, 3.1);
      arc(this.x + this.w /13.5, this.y + this.h /9.4, this.w / 3.8, this.h/2.1, 0.4, 2);
      arc(this.x + this.w /4.8, this.y + this.h /4.4, this.w / 3.7, this.h/2.1, 0.8, 2.6);
      arc(this.x + this.w /2.8, this.y + this.h /8.9, this.w / 3.1, this.h/1.6, -1, 1.9);  
      break;

    case 3:
        
      noStroke();
      fill(240,240,240);
      ellipse(this.x - this.w /3.0, this.y + this.h /4.6, this.w / 3.5, this.h/2.2);
      ellipse(this.x - this.w /3.3, this.y - this.h /13.6, this.w / 4.3, this.h/2.0);
      ellipse(this.x - this.w /5.4, this.y + this.h /11.7, this.w / 3.5, this.h/1.5);
      ellipse(this.x + this.w /36.1, this.y + this.h /9.8, this.w / 2.2, this.h/1.3);
      ellipse(this.x + this.w /4.7, this.y - this.h /9.8, this.w / 1.7, this.h/1.3);
      ellipse(this.x + this.w /4.0, this.y + this.h /9.0, this.w / 4.1, this.h/1.3);

      stroke(0,0,0, 200);
      noFill();
      strokeWeight(1);
      arc(this.x - this.w /3.0, this.y + this.h /4.6, this.w / 3.5, this.h/2.2, 0.8, 3);
      arc(this.x - this.w /5.4, this.y + this.h /11.7, this.w / 3.5, this.h/1.5,1, 1.9);
      arc(this.x + this.w /36.1, this.y + this.h /9.8, this.w / 2.2, this.h/1.3, 0.8, 2.4);
      arc(this.x + this.w /4.0, this.y + this.h /9.0, this.w / 4.1, this.h/1.3, 0, 2.2);
      arc(this.x + this.w /4.7, this.y - this.h /9.8, this.w / 1.7, this.h/1.3, 0, 0.8);
      break; 

    case 4:
      noStroke();
      fill(240,240,240);
      ellipse(this.x - this.w /4.9, this.y - this.h /12.5, this.w / 1.8, this.h/1.6);
      ellipse(this.x - this.w /11.9, this.y + this.h /5.0, this.w / 2.4, this.h/1.6);
      ellipse(this.x + this.w /11.9, this.y + this.h /13.6, this.w / 2.4, this.h/1.6);
      ellipse(this.x + this.w /3.6, this.y - this.h /7.3, this.w / 3.7, this.h/2.5);
      ellipse(this.x + this.w /3.6, this.y + this.h /7.3, this.w / 2.4, this.h/1.6);

      stroke(0,0,0, 200);
      noFill();
      strokeWeight(1);
      arc(this.x - this.w /4.9, this.y - this.h /12.5, this.w / 1.8, this.h/1.6, 2.1, 3.2);
      arc(this.x - this.w /11.9, this.y + this.h /5.0, this.w / 2.4, this.h/1.6, 0.5, 3.2);
      arc(this.x + this.w /11.9, this.y + this.h /13.6, this.w / 2.4, this.h/1.6, 0, 1.5);
      arc(this.x + this.w /3.6, this.y + this.h /7.3, this.w / 2.4, this.h/1.6, -1, 2.4);

      break;
  }
}

cloud.prototype.ray = function()
{
  noStroke();
  fill(0,0,0,20);

  switch(this.s)
  {
    case 1:
      beginShape();
      vertex(this.x - this.w / 1.99,this.y + this.h / 3.9);
      vertex(this.x + this.w / 1.94, this.y - this.h / 5);
      vertex(2000, findPoint(0,0,this.x + this.w / 1.94, this.y - this.h / 5, 2000));
      if(this.x - this.w / 1.99 >= 0)
        vertex(2000, findPoint(0,0,this.x - this.w / 1.99,this.y + this.h / 3.9, 2000));
      else
        vertex(-200,2000);
      endShape();
      break;
    case 2:
      beginShape();
      vertex(this.x - this.w / 2.2,this.y + this.h / 3.9);
      vertex(this.x + this.w / 2.01, this.y - this.h / 5);
      vertex(2000, findPoint(0,0,this.x + this.w / 2.01, this.y - this.h / 5, 2000));
      if(this.x - this.w / 2.2 >= 0)
        vertex(2000, findPoint(0,0,this.x - this.w / 2.2,this.y + this.h / 3.9, 2000));
      else
        vertex(-200,2000);
      endShape();
      break;

    case 3:
      beginShape();
      vertex(this.x - this.w / 2.1,this.y + this.h / 3.9);
      vertex(this.x + this.w / 1.99, this.y - this.h / 5);
      vertex(2000, findPoint(0,0,this.x + this.w / 1.99, this.y - this.h / 5, 2000));
      if(this.x - this.w / 2.1 >= 0)
        vertex(2000, findPoint(0,0,this.x - this.w / 2.1,this.y + this.h / 3.9, 2000));
      else
        vertex(-200,2000);
      endShape();
    break;

    case 4:
      beginShape();
      vertex(this.x - this.w / 2.06, this.y - this.h / 12);
      vertex(this.x - this.w / 4, this.y + this.h / 3);
      vertex(this.x + this.w / 2.51, this.y - this.h / 4);
      vertex(2000, findPoint(0,0,this.x + this.w / 2.51, this.y - this.h / 4, 2000));
      if(this.x - this.w / 2.06 >= 0)
        vertex(2000, findPoint(0,0,this.x - this.w / 2.06,this.y - this.h / 7, 2000));
      else
        vertex(-200,2000);
      endShape();
      break;
      
  }
}

var sun = function(x, y, w, h)
{
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}
sun.prototype.draw = function()
{
  noStroke();
  fill(253, 255, 120);
  ellipse(this.x, this.y, this.w, this.h); 
  fill(253, 255, 100);
  ellipse(this.x, this.y, this.w / 1.1, this.h / 1.1); 
  fill(253, 255, 75);
  ellipse(this.x, this.y, this.w / 1.2, this.h / 1.2); 
  fill(253, 255, 50);
  ellipse(this.x, this.y, this.w / 1.4, this.h / 1.4); 
  fill(253, 255, 25);
  ellipse(this.x, this.y, this.w / 1.7, this.h / 1.7); 
  fill(253, 255, 15);
  ellipse(this.x, this.y, this.w / 2, this.h / 2); 
}
sun.prototype.ray = function()
{
  this.move = 0.06*sin( 0.007 * frameCount);


  while(rx.length < 200)
  {
    rx.push(random(10, 30));
    ry.push(random(10, 30));
    rc.push(random(5, 10));

  }

  for(var i = 0; i < 200; i++)
  {
    fill(253, 255, 250, 15 - rc[i]);
    arc(this.x, this.y, this.w * 100,  this.h * 100, .32 + this.move + i / 5, .35 +  this.move + i / 5);
  }
  
}

var Sun = new sun(0, 0, 200, 200);

var clouds = [];
var w = [];
var start = [];

var timer = 0;

function draw()
{
  setup();
  noStroke();
  background(48, 127, 229);

  Sun.draw();
  Sun.ray();

  for(var i in clouds)
  {
    clouds[i].ray();
    clouds[i].draw();
    clouds[i].x+= clouds[i].w/ 80;

    if(start[i] === 0 && clouds[i].w < w[i])
    {
      clouds[i].w+=3;
      clouds[i].h = clouds[i].w / 2;
    }

    if(clouds[i].w >= w[i])
      start[i] = 1;


    if(clouds[i].x > displayWidth + 100)
    {
      clouds[i].x = random(-150, -100);
      clouds[i].y = random(300, 800);
      clouds[i].w = random(70, 150);
      clouds[i].h = clouds[i].w/2;
      clouds[i].s = round(random(1,4));
    }
  }

  if(clouds.length < 15)
  {
    w.push(random(70, 150));
    start.push(0);
    clouds.push(new cloud(random(0, displayWidth), random(300, 800), 0, 0, round(random(1,4))));
    
    
  }
  
}


// window.onresize = function() {
//   canvas.size(displayWidth, displayHeight);
// };