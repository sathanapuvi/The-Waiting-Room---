let bgImage;
let blackImage;
let triangleImage;

let timer = 0;
let increment = 1;

let circles = [];
let triangles = [];

let flickerChance = 0.05; 

function preload() {
  bgImage = loadImage('background.png');
  blackImage = loadImage('black.png');
  triangleImage = loadImage('triangle.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textX = width / 2; 
  textY = 30; 

  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      dx: random(-1, 1),
      dy: random(-1, 1),
      size: random(20, 60)
    });

    triangles.push({
      x: random(width),
      y: random(height),
      dx: random(-1, 1),
      dy: random(-1, 1),
      size: random(20, 60)
    });
  }
}

function draw() {
  image(bgImage, 0, 0, width, height);
  timer += increment;

  let textX = width - 50; 
  let textY = height - 30;

  let alphaValue = random() < flickerChance ? 0 : 255; 

  //"The Waiting Room" 
  fill(0, alphaValue);  
  textSize(60);
  textAlign(RIGHT, BOTTOM);
  text("The Waiting Room", textX, textY);
  
  noStroke();
  fill(0);
  for (let c of circles) {
    circle(c.x, c.y, c.size);
    c.x += c.dx;
    c.y += c.dy;

    if (c.x < 0 || c.x > width) c.dx *= -1;
    if (c.y < 0 || c.y > height) c.dy *= -1;
  }

  fill(0);
  for (let t of triangles) {
    triangle(
      t.x, t.y,
      t.x - t.size / 2, t.y + t.size,
      t.x + t.size / 2, t.y + t.size
    );
    t.x += t.dx;
    t.y += t.dy;

    if (t.x < 0 || t.x > width) t.dx *= -1;
    if (t.y < 0 || t.y > height) t.dy *= -1;
  }

  image(blackImage, 200, timer % height, 100, 100);
  image(triangleImage, 400, timer % height, 100, 100);

  let s = second();
  fill(0); 
  textSize(30);
  textAlign(LEFT, TOP);
  text(s, 100, 100);
}

function mousePressed() {
  circles.push({
    x: mouseX,
    y: mouseY,
    dx: random(-1, 1),
    dy: random(-1, 1),
    size: random(20, 60)
  });

  triangles.push({
    x: mouseX,
    y: mouseY,
    dx: random(-1, 1),
    dy: random(-1, 1),
    size: random(20, 60)
  });
}













//  triangle(100, 100, mouseX, mouseY, 400, 500)
   
   //rect(mouseX, mouseY, 200, 200)
   //circle(500, 200, 150)
   //line(windowWidth/2, 150, mouseX, mouseY)
   //triangle(100, 100, 800, 500, 400, 900)


  // let year = 2025
  // console. log(year)

  // year = year + 1;
  // console.log(year);


//   function draw() { 
//     background (132, 217, 217)
//     fill (255,0, 0, 10) 
//     stroke (255, 255, 0)
//     rect (300, 400, 200, 200)
 
//     fill (0, 0, 250)
//     stroke (255, 0, 255)
//     circle(500, 150, 150)
//    // line (windowWidth/2, windowHeight/2, mouseX, mouseY)
  
//     fill (277, 152, 211)
//     rectMode(CENTER)
//     square(windowWidth/2, windowHeight/2, 200)
//     rect(windowWidth/2, windowHeight/2 + 200, 400, 200)
//  //  triangle(100, 100, mouseX, mouseY, 400, 500)








// let shapeX = 100
//   let shapeY = 100
//   let shapeSize = 50
//   let blackImage
//   let traingleImage

//   let timer = 0 
//   let increment = 1 

//   function preload(){
//     blackImage = loadImage("black.png")
//     traingleImage = loadImage("traingle.png")
//   }

//   function setup() {
//     createCanvas (windowWidth, windowHeight)
//       background (0)
//   }
    
//   function draw() { 
//     timer = timer + increment 

//   background(119, 162, 230)
//   //  shapeX = shapeX + 1
//   //  circle(shapeX, shapeY, shapeSize)
// image(blackImage, 200, timer, 200, 200)
// image (traingleImage, 200, timer, 200, 200)
//   }

  
//   s = second()
//   textSize(50)
// text(s, 100, 100)

// circle (300, 300, s =10)
  

//    function mousePressed(){
//     shapeSize = shapeSize + 10
//    }








// let blackImage;
// let triangleImage;
// let chairImage;


// let shapes = []; // array to hold both image shapes

// function preload() {
//   blackImage = loadImage("black.png");
//   triangleImage = loadImage("triangle.png");
//     chairImage = loadImage("chair.png"); // Make sure this path is correct
//   }


// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // Create a few black and triangle image shapes
//   for (let i = 0; i < 5; i++) {
//     shapes.push({
//       img: blackImage,
//       x: random(width),
//       y: random(height),
//       dx: random(-1, 1),
//       dy: random(-1, 1),
//       size: 100
//     });

//     shapes.push({
//       img: triangleImage,
//       x: random(width),
//       y: random(height),
//       dx: random(-1, 1),
//       dy: random(-1, 1),
//       size: 100
//     });
//   }
// }


// function draw() {
//   // Show loading screen until images are ready
//   if (!blackImage || !triangleImage) {
//     background(0);
//     fill(255);
//     textSize(32);
//     text("Loading...", width / 2 - 80, height / 2);
//     return;
    
//   }

//   background(235, 227, 178);

//   // Move and display all image shapes
//   for (let shape of shapes) {
//     image(shape.img, shape.x, shape.y, shape.size, shape.size);

//     shape.x += shape.dx;
//     shape.y += shape.dy;

//     // Bounce off edges
//     if (shape.x < 0 || shape.x + shape.size > width) shape.dx *= -1;
//     if (shape.y < 0 || shape.y + shape.size > height) shape.dy *= -1;
//   }

//   // Show current seconds
//   let s = second();
//   fill(0);
//   textSize(50);
//   text(s, 100, 100);
// }

// stroke(0); // Black line
//   strokeWeight(2);
//   line(100, 100, 300, 300); // from (100,100) to (300,300)

//   image(chairImage, width / 2, height / 2); // Draw image in the center
  
  






// let blackImage;
// let triangleImage;
// let chairImage;

// let shapes = []; // array to hold both image shapes

// let imagesLoaded = false; // flag to check if images are loaded

// function preload() {
//   // Preload all images
//   blackImage = loadImage("black.png", () => { checkImagesLoaded(); });
//   triangleImage = loadImage("triangle.png", () => { checkImagesLoaded(); });
//   chairImage = loadImage("chair.png", () => { checkImagesLoaded(); });
// }

// function checkImagesLoaded() {
//   // Check if all images are loaded
//   if (blackImage && triangleImage && chairImage) {
//     imagesLoaded = true;
//   }
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // Create a few black and triangle image shapes
//   for (let i = 0; i < 5; i++) {
//     shapes.push({
//       img: blackImage,
//       x: random(width),
//       y: random(height),
//       dx: random(-1, 1),
//       dy: random(-1, 1),
//       size: 100
//     });

//     shapes.push({
//       img: triangleImage,
//       x: random(width),
//       y: random(height),
//       dx: random(-1, 1),
//       dy: random(-1, 1),
//       size: 100
//     });
//   }
// }

// function draw() {
//   // If images are not loaded yet, show loading screen
//   if (!imagesLoaded) {
//     background(0);
//     fill(255);
//     textSize(32);
//     text("Loading...", width / 2 - 80, height / 2);
//     return;
//   }

//   background(235, 227, 178); // Set the background color

//   // Draw the chair in the background, centered
//   imageMode(CENTER);
//   image(chairImage, width / 2, height / 2);

//   // Move and display all image shapes
//   for (let shape of shapes) {
//     image(shape.img, shape.x, shape.y, shape.size, shape.size);

//     shape.x += shape.dx;
//     shape.y += shape.dy;

//     // Bounce off edges
//     if (shape.x < 0 || shape.x + shape.size > width) shape.dx *= -1;
//     if (shape.y < 0 || shape.y + shape.size > height) shape.dy *= -1;
//   }

//   // Show current seconds
//   let s = second();
//   fill(0);
//   textSize(50);
//   text(s, 100, 100);

//   // Draw the line with a black stroke
//   stroke(0); // Black line
//   strokeWeight(2);
//   line(100, 100, 300, 300); // from (100, 100) to (300, 300)
// }

