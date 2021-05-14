//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var jumps = 0;
var gameOver = false;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 1000;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

		context.font = '50px Impact';
		context.fillText('Jumps', 310, 60, );
	
		context.font = '30px Impact';
		context.fillText(jumps, 470, 100, );

	if(w && player.canJump && player.vy ==0 && !gameOver)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
		jumps++;
		if ( jumps >= 10)
		{
		gameOver = true;
			context.font = '50px Impact';
			
			gravity = 100;
			fX = 0;
		}
	}

	if(gameOver){
		context.fillText('Game Over', canvas.width/2, canvas.height/2);
			context.font = '30px Impact';
			context.fillText(jumps, 470, 100, );
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
	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	
		
	/*if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}*/
	
	
	platform0.drawRect();

	//Show hit points
	player.drawRect();
	//goal.drawCircle();
}

