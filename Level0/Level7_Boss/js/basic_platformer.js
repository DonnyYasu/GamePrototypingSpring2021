//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var pupform = false;
var jumpPoint = 0;
var gameOver = false;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 1000;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.width = 400;
		platform1.height = 100;
		platform1.x = 500;
		platform1.y = 500;
		platform1.color = "#81d8f0";
		
	powerup = new GameObject({width:24, height:50, x:canvas.width-50, y:650, color:"#00ffff"});
	powerup2 = new GameObject({width:24, height:50, x:canvas.width-150, y:250, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
		
	
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
	
	

		
	if(player.hitTestObject(powerup))
	{
		pupform = true;
		powerup.y = 10000;
		
	}
	if(player.hitTestObject(powerup2))
	{
		gameOver = true;
		powerup2.y = 10000;
		
			
	}

	if(gameOver)
	{
		context.font = '50px Impact';
		context.fillText('GAME OVER', 310, 60, );
		clearInterval()
		fX = 0;
		player.vy =-1;
		
	}

	

	if(pupform)
		{
			player.color = "blue";
		}
	
	
	platform0.drawRect();
	platform1.drawRect();
	player.drawRect();
	powerup.drawCircle();
	//powerup2.drawCircle();
}

