/**
 * Created with W5 Project.
 * User: NickSangg
 * Date: 2015-03-09
 * Time: 08:25 PM
 * To change this template use Tools | Templates.
 */
 
//Global variables
var haloMusic = document.getElementById("haloMusic");
var waitTime = 3 * 60;
var zombie1Wait = waitTime;
var zombie2Wait = waitTime;
var zombie3Wait = waitTime;
var zombie4Wait = waitTime
var points = 0;


//Contains all the bullets
var bullets = [];
//Player Div
var player = document.getElementById('player');
var zombies = [];
var house = document.getElementById('house');
var user = alert("To protect your family, you will need to endure a barrage of zombies sent out by the zombie king! Though be it theese zombies appear unintimidating, if just one dances it's way past you and towards your house, the zombie king wins!");

function gothicBtn() {
	gothicMusic.play();
	haloMusic.pause();
	fjordsMusic.pause();
	gta4Music.pause
}

function haloBtn() {
	haloMusic.play();
	gothicMusic.pause();
	fjordsMusic.pause();
	gta4Music.pause
}

function fjordsBtn() {
	fjordsMusic.play();
	gothicMusic.pause();
	haloMusic.pause();
	gta4Music.pause
}

function gta4Btn() {
	gta4Music.play();
	fjordsMusic.pause();
	gothicMusic.pause();
	haloMusic.pause();
}
// function finalFantasyBtn() {
// 	finalFantasyMusic.play();
// 	gta4Music.pause();
// 	fjordsMusic.pause();
// 	gothicMusic.pause();
// 	haloMusic.pause();
// }

function stopMusic() {
	gta4Music.pause();
	fjordsMusic.pause();
	gothicMusic.pause();
	haloMusic.pause();
	finalFantasyMusic.pause();
}



var playerMoveLeft = false
var playerMoveRight = false

document.onkeydown = function(e) {
	e = e || window.event;
	switch (e.keyCode) {
		//left right movement
		case 39:
			playerMoveRight = true
			break;

		case 37:
			playerMoveLeft = true
			break;
			// Bullet movement
		case 32:
			var newBlt = new Bullet(player.style.left, player.style.top);
			newBlt.init();
			bullets.push(newBlt);
			gunShot.play();
			break;
			// Zombie placement
		case 83:
			if (zombie1Wait > 0) {
				break;
			}
			var newzmb = new Zombie();
			newzmb.init();
			zombie1Wait = waitTime
			zombies.push(newzmb);
			console.log("new zombie1")
            zombieSpawn1.play();
			break;

		case 68:
			if (zombie2Wait > 0) {
				break;
			}
			var newzmb = new Zombie2();
			newzmb.init();
			zombie2Wait = waitTime
			zombies.push(newzmb);
			console.log("new zombie2")
			break;

		case 70:
			if (zombie3Wait > 0) {
				break;
			}
			var newzmb = new Zombie3();
			newzmb.init();
			zombie3Wait = waitTime
			zombies.push(newzmb);
			console.log("new zombie3")
            zombieSpawn2.play();
			break;

		case 65:
			if (zombie4Wait > 0) {
				break;
			}
			var newzmb = new Zombie4();
			zombie4Wait = waitTime
			newzmb.init();
			zombies.push(newzmb);
			console.log("new zombie4")
			break;

	}
};

document.onkeyup = function(e) {
	e = e || window.event;
	switch (e.keyCode) {
		//left right movement
		case 39:
			playerMoveRight = false
			break;

		case 37:
			playerMoveLeft = false
			break;
	}
};

function move() {
	if (playerMoveRight) {
		player.style.left = parseInt(player.style.left) + 10 + "px";
	}
	if (playerMoveLeft) {
		player.style.left = parseInt(player.style.left) - 10 + "px";
	}
}


// This makes bullets when they are shot!
function Bullet(xpos, ypos) {
	this.xpos = xpos;
	this.ypos = 240 + "px";

	//creates the bullet element and puts it on the DOM
	this.init = function() {
		this.elem = document.createElement("div");
		this.elem.style.position = "absolute";
		this.elem.style.border = "solid silver";
		this.elem.style.height = "5px";
		this.elem.style.width = "1px";
		this.elem.style.borderRadius = "100px";
		this.elem.style.backgroundColor = "grey"
		this.elem.style.left = this.xpos;
		this.elem.style.top = this.ypos;
		document.body.appendChild(this.elem);
		//this.elm.style.left = this.xpos
		//this.elm.style.left = this.ypos

	};

	//Responsible for bullet motion downward
	this.move = function() {
		this.elem.style.top = parseInt(this.elem.style.top) + 50 + "px";
	};
}

function gameLoop() {

	move()





	zombie1Wait--;
	zombie2Wait--;
	zombie3Wait--;
	zombie4Wait--;
	
    for (var zombie of zombies) {
		zombie.move();
        
            console.log(parseInt(zombie.elem.style.top))       

                if (parseInt(zombie.elem.style.top) < 50) {
				gameLoop=false;
                Bullet = false;
                var gamOver=document.getElementById("gameOver");
                    gameOver.style.visibility = "visible";
                    zombie.elem.parentNode.removeChild(zombie.elem);
					zombies.splice(zombies.indexOf(zombie), 1);
    
		        }


	}
	for (var bullet of bullets) {
		bullet.move();
		//Dom saver
		if (parseInt(bullet.elem.style.top) > 650) {
			bullet.elem.parentNode.removeChild(bullet.elem);
			bullets.splice(bullets.indexOf(bullet), 1);
         


		} else {
			for (var zombie of zombies) {

				//console.log(isColliding(zombie.elem, bullet.elem))
				if (isColliding(zombie.elem, bullet.elem)) {
					bullet.elem.parentNode.removeChild(bullet.elem);
					bullets.splice(bullets.indexOf(bullet), 1);
					zombie.elem.parentNode.removeChild(zombie.elem);
					zombies.splice(zombies.indexOf(zombie), 1);
                    points ++;
		document.getElementById('points').innerHTML = points;

				}
			}
		}
	}

	window.requestAnimationFrame(gameLoop);
}
gameLoop();

// Collision functions
function isColliding(Zombie, Bullet) {
	var above = parseInt(Bullet.style.top) + parseInt(Bullet.style.height) < parseInt(Zombie.style.top);
	var below = parseInt(Zombie.style.height) + parseInt(Zombie.style.top) < parseInt(Bullet.style.top);
	var left = parseInt(Bullet.style.left) + parseInt(Bullet.style.width) < parseInt(Zombie.style.left);
	console.log(parseInt(Bullet.style.left), parseInt(Bullet.style.width), parseInt(Zombie.style.left), "")
	var right = parseInt(Zombie.style.left) + parseInt(Zombie.style.width) < parseInt(Bullet.style.left);

	//console.log("a: " + above, "b: " + below, "L: " + left, "R: " + right, "")
	if (above || below || left || right) return false;
	else return true;
	//     return false;


}





//This makes zombie 1 to fire at! 
function Zombie(xpos, ypos) {
	this.xpos = 300 + "px";
	this.ypos = 670 + "px";

	//creates the zombie  elements! 
	this.init = function() {
		this.elem = document.createElement("img");
		this.elem.style.position = "absolute";
		this.elem.style.height = "150px";
		this.elem.style.width = "150px";
		this.elem.src = "http://upload.wikimedia.org/wikipedia/commons/f/f5/Dancing_Zombie.gif"
		this.elem.style.left = this.xpos;
		this.elem.style.top = this.ypos;
		document.body.appendChild(this.elem);

	};
	this.move = function() {
		this.elem.style.top = parseInt(this.elem.style.top) - 4 + "px";
	}
}



//This makes zombie 2 to fire at! 
function Zombie2(xpos, ypos) {
	this.xpos = 600 + "px";
	this.ypos = 670 + "px";

	//creates the zombie  elements! 
	this.init = function() {
		this.elem = document.createElement("img");
		this.elem.style.position = "absolute";
		this.elem.style.height = "150px";
		this.elem.style.width = "150px";
		this.elem.src = "http://upload.wikimedia.org/wikipedia/commons/6/6c/Mojo_the_zombie.gif"
		this.elem.style.left = this.xpos;
		this.elem.style.top = this.ypos;
		document.body.appendChild(this.elem);


	};
	this.move = function() {
		this.elem.style.top = parseInt(this.elem.style.top) - 4 + "px";



	}
}

//This makes zombie 3 to fire at! 
function Zombie3(xpos, ypos) {
	this.xpos = 900 + "px";
	this.ypos = 670 + "px";

	//creates the zombie  elements! 
	this.init = function() {
		this.elem = document.createElement("img");
		this.elem.style.position = "absolute";
		this.elem.style.height = "150px";
		this.elem.style.width = "150px";
		this.elem.src = "http://upload.wikimedia.org/wikipedia/commons/6/6c/Mojo_the_zombie.gif"
		this.elem.style.left = this.xpos;
		this.elem.style.top = this.ypos;
		document.body.appendChild(this.elem);


	};
	this.move = function() {
		this.elem.style.top = parseInt(this.elem.style.top) - 2 + "px";
	}
}

//This makes zombie 4 to fire at! 
function Zombie4(xpos, ypos) {
	this.xpos = 50 + "px";
	this.ypos = 670 + "px";

	//creates the zombie  elements! 
	this.init = function() {
		this.elem = document.createElement("img");
		this.elem.style.position = "absolute";
		this.elem.style.height = "150px";
		this.elem.style.width = "150px";
		this.elem.src = "http://upload.wikimedia.org/wikipedia/commons/f/f5/Dancing_Zombie.gif"
		this.elem.style.left = this.xpos;
		this.elem.style.top = this.ypos;
		document.body.appendChild(this.elem);


	};
	this.move = function() {
		this.elem.style.top = parseInt(this.elem.style.top) - 2 + "px";
	}
    
//     function (xpos, ypos) {
// 	this.xpos = 50 + "px";
// 	this.ypos = 670 + "px";

    
    

    
    // }

   
			

//         if (points = 5 ) {
//  				alert ("good job");
    
    
}




// var firstZombie = new Zombie;
// 			firstZombie.init();