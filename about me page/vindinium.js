var Bot = require('bot');
var PF = require('pathfinding');
var bot = new Bot('zsd81zfj', 'training', 'http://vindinium.org'); //Put your bot's code here and change training to Arena when you want to fight others.
//var bot = new Bot('lxx02d09', 'arena', 'http://52.8.116.125:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function(){
    return new Promise(function(resolve, reject){
        _this = bot;
        //////* Write your bot below Here *//////
        //////* Set `myDir` in the direction you want to go and then bot.goDir is set to myDir at the bottom *////////
         
        /*                                      * 
         * This Code is global data!            *
         *                                      */
        
        // Set myDir to what you want and it will set bot.goDir to that direction at the end.  Unless it is "none"
        var myDir;
        // this is the code for the position of my bot 
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];

        // this var is for recognition of enemy bots in the game.
        var enemyBots = [];
        if(bot.yourBot.id != 1) enemyBots.push(bot.bot1);
        if(bot.yourBot.id != 2) enemyBots.push(bot.bot2);
        if(bot.yourBot.id != 3) enemyBots.push(bot.bot3);
        if(bot.yourBot.id != 4) enemyBots.push(bot.bot4);
       // for mines that are owned by enemies 
        var ownedmines = [];
        ownedmines = ownedmines.concat(bot.freeMines);
        if(bot.yourBot.id != 1) ownedmines = ownedmines.concat(bot.bot1mines);
        if(bot.yourBot.id != 2) ownedmines = ownedmines.concat(bot.bot2mines);
        if(bot.yourBot.id != 3) ownedmines = ownedmines.concat(bot.bot3mines);
        if(bot.yourBot.id != 4) ownedmines = ownedmines.concat(bot.bot4mines);
        
        
        /*                                      * 
         * This Code Decides WHAT to do         *
         *                                      */
       
        // makes bot go to the nearest tavern when health is ar 35 or owned mine 
        var target;
        var task;
        if(bot.yourBot.life < 61){
            task = "nearest tavern";
        }
        // this tells my bot to steal bot1's mines when they have a minimum of 0 mines
        else if(bot.bot1mines.length > 0){
            task = "ownedmines";
        }
        // this tells my bot to steal bot2's mines when they have a minimum of 0 mines
        else if(bot.bot2mines.length > 0){
            task = "ownedmines";
        }
        // this tells my bot to steal bot3's mines when they have a minimum of 0 mines
        else if(bot.bot3mines.length > 0){
            task = "ownedmines";
        }
        // this tells my bot to steal bot4's mines when they have a minimum of 0 mines
        else if(bot.bot4mines.length > 0){
            task = "ownedmines";
        }
        // this tells my bot that when it has at least 80 health it will attack other players using this task
        else if (bot.yourBot.life > 80) {
            task = "Kill da bad guyz";
        }
        // this tells my bot to take freemines 
        else {
            task = "freemines";
        }
      
    
        /*                                      * 
         * This Code Determines HOW to do it    *
         *                                      */
        
        // This Code find the nearest freemine and sets myDir toward that direction // 
        if(task === "freemines") {
            var closestMine = bot.freeMines[0];
            for(i = 0; i < bot.freeMines.length; i++) {
                if(bot.findDistance (myPos, closestMine) > bot.findDistance(myPos, bot.freeMines[i])) {
                    closestMine = bot.freeMines[i];
                }
            }
            console.log("Claiming a Free Mine!");
            myDir = bot.findPath (myPos, closestMine);
        }
       //finds the nearest tavern 
         if(task === "nearest tavern") {
            var closestTavern = bot.taverns[0];
            for(i = 0; i < bot.taverns.length; i++) {
                if(bot.findDistance (myPos, closestTavern) > bot.findDistance(myPos, bot.taverns[i])) {
                    closestTavern = bot.taverns[i];
                }
            }
            console.log("Running for my life!");
            myDir = bot.findPath (myPos, closestTavern);
        }
        // this is the task that allows my to steal other players mines 
          if(task === "ownedmines") {
            var enemyMine = ownedmines[0];
            for(i = 0; i < ownedmines.length; i++) {
                if(bot.findDistance (myPos, enemyMine) > bot.findDistance (myPos, ownedmines[i])) {
                    enemyMine = ownedmines[i];
                }
            }
            console.log("Stealing a Mine!");
            myDir = bot.findPath (myPos, enemyMine);
        }
        // this is the task that allows my bot to kille the other bots 
        if (task === "Kill da bad guyz"){
		          var closeEnemyIndex = 0;
        for (i = 0; i < enemyBots.length; i++) {
				if (bot.findDistance(myPos, [enemyBots[closeEnemyIndex].pos.x, enemyBots[closeEnemyIndex].pos.y]) > bot.findDistance(myPos, [enemyBots[i].pos.x, enemyBots[i].pos.y ])) {
					closeEnemyIndex = i;
                }
        }
		            console.log("Killing!");
		            myDir = bot.findPath(myPos, [enemyBots[closeEnemyIndex].pos.x, enemyBots[closeEnemyIndex].pos.y] );
		        }
      
        
        /*                                                                                                                              * 
         * This Code Sets your direction based on myDir.  If you are trying to go to a place that you can't reach, you move randomly.   *
         * Otherwise you move in the direction set by your code.  Feel free to change this code if you want.                            */
        
                       if(myDir === "none") {
            console.log("Going Random!");
            var rand = Math.floor(Math.random() * 4);
            var dirs = ["north", "south", "east", "west"];
            bot.goDir = dirs[rand];
        } else {
            bot.goDir = myDir;
        }
        ///////////* DON'T REMOVE ANTYTHING BELOW THIS LINE *//////////////
        resolve();
    });
};
bot.runGame();