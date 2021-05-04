//Define Booleans for each key
var o = false;
var l = false;

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 111)
	{
		o = true;
	}
	if(e.keyCode == 108)
	{
		l = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 111)
	{
		o = false;
	}
	if(e.keyCode == 108)
	{
		l = false;
	}
}

