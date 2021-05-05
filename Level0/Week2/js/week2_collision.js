//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var p1Wins = 0;
var p2Wins = 0;
var img=document.getElementById("ric");

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
	
	player2 = new GameObject2();
	player2.x = 100;
	player2.width = 25
	player2.height = 125
	player2.x = player2.width/2+999;

	
	

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
	player2.move();
	//---------------------------------------------------
	//Net
	context.save();
	context.strokeStyle = 'green';
	context.beginPath();
	context.moveTo(512, 0);
	context.lineTo(512, 800);
	context.closePath();
	context.lineWidth = 15; 
	context.stroke();
	context.restore();

	context.font = '50px Impact';
	context.fillText('Player 1  /  Player2', 310, 60, );

	context.font = '30px Impact';
	context.fillText(p1Wins + '-'+ p2Wins, 470, 100, );


	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		console.log("Player 1 Scores");	
		p1Wins++;
		//	ball.vx = -ball.vx;	
		ball.x = canvas.width/2	
		ball.y = canvas.height/2
		
	}

	else if(ball.x < -ball.width)
	{
		console.log("Player 2 Scores");	
		p2Wins++;
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


	if(s)
	{
		console.log("Moving Down");
		if(player2.y < canvas.height - player2.height/2)
		player2.y += 3;
	
	}
	if(w)
	{
		console.log("Moving Up");
		if(player2.y >  player2.height/2)
		player2.y += -3;
	}
	if(canvas.height <= 0)
	{
		player2.y += 0;
	}

	

	if(player.hitTestObject(ball)){
		ball.vx *= -1
	}
	
	if(player2.hitTestObject(ball)){
		ball.vx *= -1
	}


	
	//Update the Screen
	ball.drawCircle();
	player.drawRect();
	player2.drawRect();
	


}

