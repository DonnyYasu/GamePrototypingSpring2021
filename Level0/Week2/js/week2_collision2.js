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
	

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.move();
	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		
		ball.vx = -ball.vx;	
		
	}

	else if(ball.x < -ball.width)
	{
		
	//	ball.vx = -ball.vx;	
		ball.x = canvas.width/2		
		ball.y = canvas.height/2		
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;		
	}

	else if(ball.y < 0 + ball.height/2)
	{
		ball.vy = -ball.vy;		
	}

	if(l)
	{
		console.log("Moving Down");
		if(player.y < canvas.height - player.height/2)
		player.y += 3;
	
	}
	if(o)
	{
		console.log("Moving Up");
		if(player.y >  player.height/2)
		player.y += -3;
	}
	if(canvas.height <= 0)
	{
		player.y += 0;
	}

	

	if(player.hitTestObject(ball)){
		ball.vx *= -1
	}


	
	//Update the Screen
	ball.drawCircle();
	player.drawRect();


}

