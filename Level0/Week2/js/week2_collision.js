//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

//This is used to stop the player from moving through obstacles.
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 100;
	player.width = 25
	player.height = 125
	player.x = player.width/2

	ball = new GameObject();
	ball.x = canvas.width/2
	ball.y = canvas.height/2

	ball.vx = 3;
	ball.vy = 3;
	
	//lBlock1 = new GameObject(canvas.width - 750, canvas.height/2+75, 100, 100,"#00ff00");
	//lBlock2 = new GameObject(canvas.width - 550, canvas.height/2+75, 100, 100,"#00ff00");
	//rBlock1 = new GameObject((canvas.width-350), canvas.height/2, 100, 100, "orange");
	//rBlock2 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "blue");

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.move();
	
	
	//Move the Player to the right
	// if(d)
	// {
	// 	//console.log("Moving Right");
	// 	player.x += 2;
	// }
	
	// if(a)
	// {
	// 	//console.log("Moving Right");
	// 	player.x += -2;
	// }
	
	
	//Check Collisions
	
	//Demonstrates Accuracy of Bounding Box Collision
	// if(lBlock1.hitTestObject(player))
	// {
	// 	//change color
	// 	lBlock1.color = "yellow";
	// }
	// else
	// {
	// 	lBlock1.color = "#00ff00";
	// }
	
	// //Shows Bounding Boxes
	// if(lBlock2.hitTestObject(player))
	// {
	// 	//draw bounding boxes
	// 	context.strokeRect(lBlock2.x- lBlock2.width/2, lBlock2.y - lBlock2.height/2, lBlock2.width, lBlock2.height)
	// 	context.strokeRect(player.x- player.width/2, player.y - player.height/2, player.width, player.height)
	// }
	
	// //Demonstrates how often collisions take place
	// if(rBlock1.hitTestObject(player))
	// {
	// 	console.log("colliding");
	// }
	
	// //Impede movement
	// if(rBlock2.hitTestObject(player))
	// {
	// 	player.x = prevX;
	// 	console.log("colliding");
	// }
	// else
	// {
	// 	prevX = player.x;
	// }	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;		
	}

	else if(ball.x < 0 + ball.width/2)
	{
		ball.vx = -ball.vx;
				
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;		
	}

	else if(ball.y < 0 + ball.height/2)
	{
		ball.vy = -ball.vy;		
	}

	if(s)
	{
		console.log("Moving Down");
		if(player.y < canvas.height - player.height/2)
		player.y += 3;
	
	}
	if(w)
	{
		console.log("Moving Up");
		if(player.y >  player.height/2)
		player.y += -3;
	}
	if(canvas.height <= 0)
	{
		player.y += 0;
	}
	

	

	
	//Update the Screen
	ball.drawCircle();
	player.drawRect();
	//lBlock1.drawCircle();
	//lBlock2.drawCircle();
	//rBlock1.drawRect();
	//rBlock2.drawRect();

}

