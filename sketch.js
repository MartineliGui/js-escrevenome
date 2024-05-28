function setup() {
    createCanvas(500, 500, WEBGL);
  
    describe('A white square spins around on gray canvas.');
  }
  
  function draw() {
    background("black");
  fill ("white")
   stroke("red") 
    // Rotate around the y-axis.
    rotateY(frameCount * 0.01);
  
    // Draw the rectangle.
    rect(-50, -50, 115, 155)
  }