// Create any global variables here





function setup() {
  createCanvas(600, 600);
  background(200);

	
}


function draw() {
  // Code your loops below this line
	// WARM UP
	for(var y = 0; y < height; y+= 50){
		fill("red")
		ellipse(width/2, y, 50, 50)
		fill(0,255,0)
		ellipse(width/2, y, 40, 40)
		fill("blue")
		ellipse(width/2, y, 30, 30)
		fill(255,0,255)
		ellipse(width/2, y, 15, 15)
	}

	// Question 1:
	for(var y = 0; y < height; y+= 50){
		fill("red")
		ellipse(y, y, 50, 50)
		fill(0,255,0)
		ellipse(y, y, 40, 40)
		fill("blue")
		ellipse(y, y, 30, 30)
		fill(255,0,255)
		ellipse(y, y, 15, 15)
	}

	// Question 2
	for(var y = 0; y < height; y+= 10){
		fill("white")
		ellipse(y * 5, y, 40, 40)
	}

	// Question 3
	for(var x = 0; x <= width; x += 50){
		ellipse(x, height/2, 40, 40)
	}
	for(var y = 0; y <= height; y += 50){
		ellipse(width/2, y, 40, 40)
	}

	// Question 4
	for(var y = 0; y <= height; y += 50){
		ellipse(width/2, y, 40, 40)
	}
	for(var y = 0; y <= height; y += 50){
		ellipse(y, y, 40, 40)
	}

	// Quesiton 5
	for(var y = 0; y <= height; y += 50){
		ellipse(y, y, 40, 40)
	}
	// Start at the far edge and decrement x until it reaches 0.
	var x = width
	for(var y = 0; y <= height; y += 50){
		ellipse(x, y, 40, 40)
		x = x - 50
	}

	// Question 6/7/8
	var marker = "black"
	for(var x = 0; x < width; x+= 50)
	{
		fill(marker)
		for(var y = 0; y < height; y += 50)
		{
			ellipse(x, y, 50, 50)
		}
		if(marker == "black"){
			marker = "white"
		}
		else {
			marker = "black"
		}
	}
	

	// Question 9
	for(var x = 0; x < width; x+= 50)
	{
		for(var y = 0; y < height; y += 50)
		{
			if(mouseX > 100){
				fill("yellow")
			}
			else {
				fill("white")
			}
			ellipse(x, y, 50, 50)
		}
	}







}