//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var gameOver = false;
var objOne = new Array();
var objTwo = new Array();
var score = 0;



canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


for (var i = 0; i < 5; i++) {
	objOne[i] = new GameObject({ width: 25, height: 25, x: randomX(), y: randomY(), color: "#ff00ff" })
}

for (var i = 0; i < 5; i++) {
	objTwo[i] = new GameObject({ width: 25, height: 25, x: randomX(), y: randomY(), color: "red" })

}


player = new GameObject();
player.height = 50;
player.width = 50;
player.x = canvas.width / 2;
player.y = 725;
player.color = "black";


var fX = .85;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);

function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	context.font = '30px Arial';
	context.color = 'dark gray';
	context.fillText("Score: " + score, 80, 50,);



	if (a) {
		player.vx += -player.ax * player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;


	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	// draws circle
	for (var j = 0; j < objTwo.length; j++) {
		if (objTwo[j].y > canvas.height - objTwo[j].height / 2) {
			objTwo[j].y = randomY();
			objTwo[j].x = randomX();
			objTwo[j].vy = randomVY();
		}
	

		


		//seperates touching objects
		if (objTwo[j].hitTestObject(objOne[j])) {
			objTwo[j].x--;
		}

		if (player.hitTestObject(objTwo[j])) {
			//death
			score = 0;
			player.color = "red";
			setTimeout(location.reload(),500);
		}
		objTwo[j].vy += gravity * 3;
		objTwo[j].vy *= 0.25;
		objTwo[j].y += objTwo[j].vy;
		objTwo[j].drawCircle();
	}

	for (var i = 0; i < objOne.length; i++) {
		if (objOne[i].y > canvas.height - objOne[i].height / 2) 
		{
			objOne[i].y = randomY();
			objOne[i].x = randomX();
			objOne[i].vy = randomVY();
		}

		if (objOne[i].hitTestObject(objTwo[i])) 
		{
			objOne[i].x--;
		}

		if (player.hitTestObject(objOne[i])) 
		{
			score++;
			objOne[i].y = -901;
			player.color = "green";
			
			
			console.log("log");
			setTimeout(changeColorBack,500);
    		// console.log("I am the third log after 800 millisecs");
			// },800);
			// console.log("second log");
			
			
			// 	player.color = "black";
		   
			
			
			
		
		}
		objOne[i].vy += gravity * 3;
		objOne[i].vy *= 0.25;
		objOne[i].y += objOne[i].vy;
		objOne[i].drawRect();
	}

	

	objTwo.vy += gravity * 5;
	objTwo.y = objTwo.vy;
	//objOne.vy += gravity *5;
	//objOne.y = objTwo.vy;
	//Show hit points
	player.drawRect();

}

//functions====================================

function randomY() {
	return Math.floor(Math.random() * -601);
}


function randomX() {
	return Math.floor(Math.random() * 801);
}

function randomVY() {
	return Math.floor((Math.random() * 15) + 1);
}

function changeColorBack(){
	player.color = "black"
}




