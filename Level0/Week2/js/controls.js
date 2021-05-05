var p1Wins = 0;
var p2Wins = 0;
//Define Booleans for each key
var w = false;
var s = false;
var i = false;
var k = false;
var img=document.getElementById("ric");
//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 105)
	{
		i = true;
	}
	if(e.keyCode == 107)
	{
		k = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 105)
	{
		i = false;
	}
	if(e.keyCode == 107)
	{
		sk = false;
	}
}