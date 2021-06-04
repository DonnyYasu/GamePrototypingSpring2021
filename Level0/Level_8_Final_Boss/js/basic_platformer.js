//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var pupform = false;
var jumpPoint = 0;
var jumpPoints = 0;
var gameOver = false;
var goal


	canvas = document.getElementById("canvas");
	//Added Mouse EventListener
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);
	context = canvas.getContext("2d");	
//Player
	player = new GameObject({x:100, y:canvas.height/2-100});

//Bottom Platform
	platform0 = new GameObject();
	platform0.width = 1000;
	platform0.x = platform0.width/2;
	platform0.y = canvas.height - platform0.height/2;
	platform0.color = "#66ff33";
//Platform2
	platform2 = new GameObject();
	platform2.width = 400;
	platform2.height = 50;
	platform2.x = 0;
	platform2.y = 550;
	platform2.color = "#4ca832";
//Platform3
	platform3 = new GameObject();
	platform3.width = 200;
	platform3.height = 50;
	platform3.x = 600;
	platform3.y = 450;
	platform3.color = "#4ca832";
//Platform4
	platform4 = new GameObject();
	platform4.width = 100;
	platform4.height = 50;
	platform4.x = 750;
	platform4.y = 250;
	platform4.color = "#4ca832";
//Ice Platform
	platform1 = new GameObject();
	platform1.width = 400;
	platform1.height = 50;
	platform1.x = 500;
	platform1.y = 100;
	platform1.color = "#81d8f0";
//PowerUps		
	powerup = new GameObject({width:24, height:50, x:canvas.width-50, y:650, color:"#00ffff"});
	powerup2 = new GameObject({width:24, height:50, x:canvas.width-150, y:250, color:"#00ffff"});
	powerup3 = new GameObject({width:24, height:50, x:canvas.width-950, y:150, color:"#00ffff"});
//Goal	
	goal = new GameObject({width:60, height:60, x:canvas.width-995, y:30, color:"#fcf679"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	var mouse = {x:0,y:0};
	var particles=[];
//States
	var currentState ="loading";
	var states = [];

	interval = 1000/60;
	timer = setInterval(animate, interval);


//Start Game
	function startGame()
	{
		
		var dx = player.x - mouse.x;
		var dy = (player.y - player.width/2) - mouse.y;
		var dist = Math.sqrt(dx*dx + dy * dy);
		if(dist < player.width/2)
		{
			player.vx = 0
			player.vy = 0
			player.y = 600
			changeStates("play");
		}
	}
//Start Instructions... why no click?	
	function startInstructions()
	{
		
		var dx = powerup.x - mouse.x;
		var dy = (powerup.y - powerup.width/2) - mouse.y;
		var dist = Math.sqrt(dx*dx + dy * dy);
		if(dist < powerup.radius())
		{
			
			changeStates("instructions");
		}
	}
//Start Menu from instructions... why no click?
	function startMenu()
	{
		
		var dx = goal.x - mouse.x;
		var dy = (goal.y - goal.width/2) - mouse.y;
		var dist = Math.sqrt(dx*dx + dy * dy);
		if(dist < goal.radius())
		{
			//powerup.vx = 0
			//powerup.vy = 0
			//powerup.y = 600
			changeStates("start");
		}
	}
	
	function track(e)
	{
		var rect = canvas.getBoundingClientRect();
		mouse.x = e.clientX - rect.left;
		mouse.y = e.clientY - rect.top;
	}

//Change Game States		
	function changeStates(stateName)
	{
		currentState = stateName;
	}
	


	
//Loading State

	states["loading"] = function()
	{
		
		context.save();
			context.fillStyle = "black";
			context.font = "bold 78px Arial"
			context.textAlign = "center";
			context.fillRect(0, canvas.height/2-100,canvas.width, 200);
			context.fillStyle = "white";
			context.fillText("Loading", canvas.width/2, canvas.height/2+78/4)
		context.restore();
		

		setTimeout(changeStates, 2000, "start")
	}
//Instructions
	states["instructions"] = function()
	{
		
		context.save();
			context.fillStyle = "black";
			context.font = "bold 58px Impact"
			context.textAlign = "center";
			context.fillRect(0, canvas.height/2-300,canvas.width, 600);
			context.fillStyle = "white";
			context.fillText("HOW TO PLAY", canvas.width/2, canvas.height/4)
			context.font = "bold 30px Arial"
			context.fillText("- Use 'W' to jump. Use 'A' and 'D' to move. ", canvas.width/2, canvas.height/2-150)
			context.fillText("- As the player, your objective is to reach the yellow circle goal.", canvas.width/2, canvas.height/2-110)
			context.fillText("- If reach a blue circle Power-Up, you gain the ability to double jump", canvas.width/2, canvas.height/2-70)
			context.fillText("- If you reach a second Power-Up however, game over.", canvas.width/2, canvas.height/2-30)
			context.fillText("- If you jump ten times, game over.", canvas.width/2, canvas.height/2+10)
			context.fillText("- If the timer reaches 60 seconds, game over.", canvas.width/2, canvas.height/2+40)
			context.fillText("Return to the Main Menu by clicking the yellow Goal.", canvas.width/2, canvas.height/2+200)
		context.restore();
		
	
		goal.drawCircle();
		startMenu();


		
	}

//Start Menu State
	states["start"] = function()
	{
		
		context.save();
			context.fillStyle = "black";
			context.font = "bold 58px Arial"
			context.textAlign = "center";
			context.fillRect(0, canvas.height/2-100,canvas.width, 200);
			context.fillStyle = "white";
			context.fillText("JUMPER", canvas.width/2, canvas.height/2-78/4)
			context.fillText("Made by: Devin Belasco", canvas.width/2, canvas.height/2+(64))
		context.restore();
		
		player.x = 150
		player.y = 700
		player.drawRect();
		powerup.drawCircle();
		startInstructions();


		
	}

//Play State
	states["play"] = function()
{

	setTimeout(changeStates, 47500, "lose")

	context.font = '50px Impact';
	context.fillText('Timer', 70, 60, );

	context.font = '30px Impact';
	context.fillText(setTimeout(1), 70, 100, );

	context.font = '50px Impact';
	context.fillText('Jumps', 800, 60, );

	context.font = '30px Impact';
	context.fillText(jumpPoints, 855, 100, );
  
	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
		jumpPoints++
	}

	if (w && pupform && player.vy >= 0)
			{
				
				player.canJump = true;
				player.vy += player.jumpHeight;
				jumpPoint++
				
			}
	
			if (jumpPoint >=2 && pupform)
			{
				player.vy = gravity+5;
				jumpPoints++
			}
			if ( jumpPoints >= 10)
		{
		gameOver = true;
			gravity = 100;
			fX = 0;
		}
			
			

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	//Ice platform
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		jumpPoint = 0;
		player.vx *= fX+ 0.25;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//===========================================================================================
	console.log(player.x, player.y)
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		jumpPoint = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//===========================================================================================
	console.log(player.x, player.y)
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		jumpPoint = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//===========================================================================================
	console.log(player.x, player.y)
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		jumpPoint = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//===========================================================================================
	console.log(player.x, player.y)
	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		jumpPoint = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//===========================================================================================

		
	if(player.hitTestObject(powerup))
	{
		pupform = true;
		powerup.y = 10000;
		
	}
	if(player.hitTestObject(powerup), player.hitTestObject(powerup2))
	{
		gameOver = true;
		powerup2.y = 10000;
		
			
	}
	if(player.hitTestObject(powerup), player.hitTestObject(powerup3))
	{
		gameOver = true;
		powerup3.y = 10000;
		
			
	}

	if(gameOver)
	{
		context.font = '50px Impact';
		context.fillText('GAME OVER', 310, 60, );
		clearInterval()
		fX = 0;
		player.vy =-1;
		setTimeout(changeStates, 2000, "lose")
		
		
		
	}

	

	if(pupform)
		{
			player.color = "blue";
		}

//Goal
	if(player.hitTestObject(goal))
	{
		
		goal.y = 10000;
		player.vx = 0;
		player.vy = 0;
		gravity = 0;
		setTimeout(changeStates, 1000, "message")
		
	}
	

	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();

	//Show hit points
	player.drawRect();
	powerup.drawCircle();
	powerup2.drawCircle();
	powerup3.drawCircle();
	goal.drawCircle();
}

//Game Over Message
states["lose"] = function()
{

	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 58px Impact"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "red";
		context.fillText("You Lose.", canvas.width/2, canvas.height/2-78/4)
		context.fillText("Refresh to try again.", canvas.width/2, canvas.height/2+(64))
	context.restore();
	
	
}



//Victory Message State
states["message"] = function()
{
	
	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 78px Impact"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "blue";
		context.fillText("Congratulations!!!", canvas.width/2, canvas.height/2+(78/4))
	context.restore();
	
	
}


	

//Animate Function
function animate()
{


	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//States
	states[currentState]();

	


}

