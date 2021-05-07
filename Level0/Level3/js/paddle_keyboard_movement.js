//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var bounce = 0;
var gravity = 1;
var frictionY = 0.67;
var frictionX = 0.95;



	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();

	player.width = 25
	player.height = 125
	player.color = "cyan"
	player.x = player.width/2
	//Paddle
	player2 = new GameObject();

	player2.width = 250
	player2.height = 40
	player2.color = "cyan"
	player2.x = canvas.width/2;
	player2.y = 550


	ball = new GameObject();
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
	

	//ball.vx *= frictionX;
	//ball.vy *= frictionY;
	ball.vx = 0;
	ball.vy = 0;
	//ball.vy = gravity;
	
	
	

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	
			
	context.font = '16px Arial';
	context.color = 'dark gray';
	context.fillText('Score: ' + bounce, 80, 25,);
	

		
	//Move the Player up and down
	
	
	if(d)
	{
		console.log("Moving Right");
		if(player2.x < canvas.width - player2.width/2)
		player2.x += 3;
		if(player2.x <  player2.width/2){
			player2.x = +1;
		}
	
	}
	if(a)
	{
		console.log("Moving Left");
		if(player2.x >  player2.width/2)
		player2.x += -3;
		if(player2.x < -player2.width -55){
			player2.x = +1;
		}
		
	}
	if(canvas.width <= 0)
	{
		player2.x += 0;
	}
	if(canvas.width <= 250)
	{
		player2.vx * frictionX;
	}
	if(canvas.width >= 750)
	{
		player2.vx +1;
	}

	

	//--------------Bounce of ball----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		//right side of canvas
		ball.vx = -ball.vx;	
		
		
	}

	else if(ball.x < ball.width/2)
	{
		//left side of canvas
		ball.vx = -ball.vx;	
		
		
	}

	if(ball.y > canvas.height - ball.width/2)
	{
		console.log("Game Over");	
		//bottom of canvas
		ball.y  = canvas.height - ball.width/2
		ball.vy = -ball.vy * frictionY;
		
	
		bounce = 0;
		//system("PAUSE");	
	}

	else if(ball.y < 0 + ball.height/2)
	{
		//top of canvas
		ball.vy = -ball.vy;	
	}

	
	
	if(player2.hitTestObject(ball)){
		ball.y = player2.y - player2.height - ball.width/2
		ball.vy = -30
		bounce++;

		if(ball.x > player2.x + player2.width/3){
			ball.vx = 20
		}
		else if(ball.x < player2.x - player2.width/3){
			ball.vx = -20
		}
		else{
			ball.vx = 0
		}

		if(ball.x > player2.x + player2.width/6){
			ball.vx = 25
		}
		else if(ball.x < player2.x - player2.width/6){
			ball.vx = -25
		}
		else{
			ball.vx = 0
		}

		
	}
	//moves ball
	ball.vy += gravity;
 	ball.move();
	

	//Update the Screen
	
	player2.drawRect();
	ball.drawCircle();

//line from paddle to board
	context.save();
		context.strokeStyle = 'black';
		context.beginPath();
		context.moveTo(player2.x, player2.y);
		context.lineTo(ball.x, ball.y);
		context.closePath();
		context.lineWidth = 1; 
		context.stroke();
		context.restore();
	
		
}