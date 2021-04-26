

// JavaScript Document
function Player()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 100;
	this.height = 100;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	//this.color = "#ff0000";
	
	//This draws the player to the screen
	this.draw = function()
	{
		/*context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();*/

		context.save();
		context.fillStyle = "red";
		context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();

		if(player.x > canvas.width - player.width/2)
	{
		context.save();
		context.fillStyle = "red";
		context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();
		
	}

	else if(player.x < 0 + player.width/2)
	{
		context.save();
		context.fillStyle = "blue";
		context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();	
	}

	if(player.y > canvas.height- player.height/2)
	{
		context.save();
		context.fillStyle = "green";
		context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();	
	}

	else if(player.y < 0 + player.height/2)
	{
		context.save();
		context.fillStyle = "purple";
		context.translate(this.x, this.y);
		context.beginPath();
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
		context.closePath();
		context.fill();
		context.restore();
	}
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}


function animate()
{
	//context.clearRect(0,0,canvas.width,canvas.height)
	ball.draw()
}