//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var seconds = 60;
var time = seconds / ticks;
var ticks = 1000/60;
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
	let timeLeft = 10;
	interval = 1000/60;
	timer = setInterval(animate, interval);
//----Begin 
document.addEventListener('DOMContentLoaded', () => {
	const timeLeftDisplay = document.querySelector('#time-left')
	const startBtn = document.querySelector('#start-button')
	

	function countDown(){
		setInterval(function()
		{
			
			


			timeLeftDisplay.innerHTML = timeLeft
			timeLeft -=1
		}, 1000) 	
	}
	startBtn.addEventListener('click', countDown)
}
)
//----End
	

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

		//context.font = '50px Impact';
		//context.fillText('Timer', 310, 60, );
	
		//context.font = '30px Impact';
		//context.fillText, 470, 100, );
		
		
		
	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
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
	
	if(timeLeft <= 0 )
			{
				context.font = '50px Impact';
				context.fillText('GAME OVER', 310, 60, );
				clearInterval(timeLeft = 0)
				fX = 0;
				gravity = 100;
			}
		
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