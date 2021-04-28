//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();

	player.width = 25
	player.height = 125
	player.x = player.width/2


	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player up and down
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
	player.drawRect();
}

