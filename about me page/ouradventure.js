var imgArray= new Array('http://sensibleandsensitive.files.wordpress.com/2011/08/ioronefbbj884vtuaffa6e73o1_5001.jpg',//forked path 0
'http://static.giantbomb.com/uploads/scale_small/1/13636/503802-dungeon.jpg',//dungeon 1
'http://miriadna.com/desctopwalls/images/max/In-the-forest.jpg',//forest 2
'http://sensibleandsensitive.files.wordpress.com/2011/08/ioronefbbj884vtuaffa6e73o1_5001.jpg',//forked path with two choices 3
'http://media.indiedb.com/images/games/1/18/17722/dungeon_escape_02.jpg',//stone dungeon 4
'http://ayay.co.uk/backgrounds/fantasy/dragons/dragon-cave.jpg',//dragon 5
'http://www.gulawweekly.org/storage/post-images/angry%20cat.gif?__SQUARESPACE_CACHEVERSION=1302123585277',//angry cat with AK-47 6
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAKiZL4hkEidhf2smgNX17uAYWKSjRArkhgL_HotompMFVSYc3Fw',//troll 7
'http://static.planetminecraft.com/files/resource_media/screenshot/1114/20110408_164407_21854_screenshot.jpg',//minecraft fire pit 8
'http://1.bp.blogspot.com/-ByJYWzBBGNQ/T3jwygVo0jI/AAAAAAAAAbo/npfASNl8rVo/s1600/raiders-snakes.png',//snake pit with Indiana Jones 9
'http://2.bp.blogspot.com/--iZYQ2KZPZc/T3K1k7aiWyI/AAAAAAAAACs/hywzLjGqnGo/s1600/7.jpgQ',//grassy plains 10
'http://swatkats.info/darkkat/cms/data/upimages/spikepit.jpg',//pit of spikes 11
'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ6LUbyKIwDnIdd4ZyIOivQS_WLM1LZEZukaVnq6Fnf97VYdq-',//single boat on the ocean in the sunset 12
'http://i.dailymail.co.uk/i/pix/2011/10/11/article-0-0E524F3900000578-133_634x309.jpg',//boat being attacked/destroyed by a giant squid 13
'http://cdn.whatanart.com/wp-content/uploads/2013/03/landscape-painting-2-500x243.jpg',//mountain range 14
           'http://www.rhynonetworks.com/wp-content/uploads/2014/06/game_over.jpg', //Game Over 15
                        'http://www.tropicalparadise.net/images/dest/solomon-islands4.jpg', // Win Island 16
'http://img3.wikia.nocookie.net/__cb20110123190815/potcoplayers/images/3/36/Reflecting_cavern_lake.jpg',//large cavern/cave 17
'http://1.bp.blogspot.com/-NtujovO0CjQ/UfXwL0lbSsI/AAAAAAAABd0/nLHIgJm2894/s1600/Warg_Riders_Jackdaw.jpg',//pack of wolf mounted goblins  18
'http://www.aceshowbiz.com/images/still/wrathofthetitans-pic03.jpg',//cyclops!!! 19
'http://www.webdesign.org/img_articles/18445/portal.jpg'//two portals 20
                       );


var i=0;



document.getElementById("myBtn1").addEventListener("click", function1);
document.getElementById("myBtn2").addEventListener("click", function1);
var textPrint = document.getElementById('console').innerHTML;
// Sets starting image board
var imgSpot = 0;
console.log(imgSpot);
var display = document.getElementById("myImg");
display.src = imgArray[imgSpot];
textPrint = "Choose a Path!";

var Button1 = document.getElementById("myBtn1");
var Button2 = document.getElementById("myBtn2");

function function1() {
  console.log(imgSpot);
    switch(imgSpot){
        case 0:
            if
       (this.id === "myBtn1"){
                imgSpot = 1;
                display.src = imgArray[imgSpot];
         document.getElementById('console').innerHTML = "Your decision led you straight into the camp of an orc colony! Outnumbered and out armed, you have no choice but to reside in an orc prison. What will you do? Option 1: Attack the orc guard when he makes his rounds OR Option 2: Tell the guard there was a misunderstanding.";
            }
            else{
                imgSpot = 2;
                display.src = imgArray[imgSpot];
                document.getElementById('console').innerHTML = "Good choice! You wandered into the Faron forest, the dim light glistens through the trees, there has to be some way out, do you choose to create a camp for tonight, or push forwards on your quest?";
                
            }
            break;
            
        case 1:
            if(this.id === "myBtn1"){
                    imgSpot = 7;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML = " You knock out the orc guard and take his keys, unfortunately the situation escalated quickly. Who knew Orcs where heavily armed? What will you do? Option 1: Flee OR Option 2: Fight.";
           }
                else{
                    imgSpot = 15;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "There is no mercy for intruders in orc colonies. Game Over.";
      }
                break;
                
         case 7:
            if(this.id === "myBtn2"){
                    imgSpot = 15;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML = " You could not endure the gunfire of the Orcs. Game Over.";
            }
        
         else{
                    imgSpot = 12;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "Good choice, armed orcs are no laughing matter. You have somehow fled successfully and stolen an orc sailboat. The ocean is your oyster! Wich way will you travel? Option 1: East OR Option 2: West." ;
         }
        
         break;
                
         case 12:
            if(this.id === "myBtn2"){
                    imgSpot = 13;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML = " Your ship was attacked and destroyed by Tenteculous, the anciant sea beast. Game Over.]";
            }
        
         else{
                    imgSpot = 16;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = " You have found saftey and solitude on an island. You live happily ever after. You won!" ;
         }
        
        
        break;
                
         case 2:
            if(this.id === "myBtn2"){
                    imgSpot = 4;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML = "You somehow wander into a tunnel!You hear a faint roaring noise near. Option 1: Continue or Option 2: Go back?";
            }
        
         else{
                    imgSpot =18;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "You decide to camp for the night in the forest...You are attacked by a horde of goblins mounted on wolves at night!!! What will you do? Option 1: Fight? or Option 2: Run" ;
         }
        
        
        break;
                
         case 4:
            if(this.id === "myBtn2"){
                    imgSpot = 19;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML = "You choose to go back, but an angry cyclops gets in your way! Option1: Fight or Option 2: Run?";
            }
        
         else{
                    imgSpot =5;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "You continue through the tunnel and discover a dragon in your way! You pull out your sword and shield. Option 1: Fight or Option 2: RUN 4 YOUR LIFE! " ;
         }
        
        
          break;
                
         case 19:
            if(this.id === "myBtn2"){
                    imgSpot = 15;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML ="Cyclops's are dumb but they are smart enough to chase after their food! The cyclops easily catches up to you with a few strides and kills you.";
            }
        
         else{
                    imgSpot =15;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "Cyclops's are dumb but they sure are good at fighting, he quickly overwhelms you and cooks you for dinner. " ;
         }
        break;
                
         case 5:
            if(this.id === "myBtn2"){
                    imgSpot = 9;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML ="Smart choice! You run back the way you came, the dragon paid no attention to you as you were no threat to him. On your way back though, you accidentally triggered a trap that sent you into a pit of snakes! You lay there waiting for a bite from one of the snakes, then you realize they were just harmless corn snakes. You get up but then you realize that Indiana Jones is there! Option 1: Kill Indy or Option 2: Ask him to join you.";
            }
        
         else{
                    imgSpot =15;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "What were you thinking?!! The dragon, sensing a threat, easily burned through your shield with one breathe. You were fried alive! Game Over." ;
         }
        break;
                
         case 18:
            if(this.id === "myBtn2"){
                    imgSpot = 15;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML ="You choose the smart choice to run, but think logically! The speed of your legs compared to the speed of wolves? The enemy catches you easily. Game Over.";
            }
        
         else{
                    imgSpot =15;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "You know that your outnumbered yet you still fight. You lose the battle." ;
         }
        break;
                
         case 9:
            if(this.id === "myBtn2"){
                    imgSpot = 6;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML ="Indy joins you on your quest. You both somehow escape the pit since there was a random rope hanging down from above, but you two should have never came out of the pit. The moment you surface, a crazy cat with a gun appears and starts shooting randomly and causing explosions. You both are gunned down. Game Over.";
            }
        
         else{
                    imgSpot =20;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "You quickly kill Indy, taking no chances he cannot be trusted. You suddenly realize a rope is hanging down from above the pit. You climb back up to find that two portals have appeared in mid air in front of you. Option 1 :take the orange portal or Option 2: take the blue portal." ;
         }
              break;
                
         case 20:
            if(this.id === "myBtn2"){
                    imgSpot = 8;
                    display.src =imgArray[imgSpot];
              document.getElementById('console').innerHTML ="Dang..such a tortuos way to die...you chose the blue portal and suddenly you find yourself above a fiery lava pit falling and falling to your death...Game Over.";
            }
        
         else{
                    imgSpot = 10;
                    display.src = imgArray[imgSpot];
                   document.getElementById('console').innerHTML = "You were lucky! You are suddenly transported onto a grassy fertile field where you will spend the rest of your days living! You Win!" ;
         }
              
                }
        
    }


var Reset = document.getElementById("reset");

document.getElementById("reset").addEventListener("click", function2);


 function function2() {
 if(this.id === "reset"){
                    imgSpot = 0;
                    display.src =imgArray[imgSpot];
   document.getElementById('console').innerHTML = " Lets try this again, you are confronted with two roads, do you... Option one: take left or option two: go right.";
              
      }
 }

    
    
    
    
    
  //  textPrint.innerHTML = "Good choice! Your in forest now!";
    

    /* display.src = imgArray[imgSpot];
     document.getElementById('console').innerHTML = "*BOSS BATTLE* A Dragon Appears! What will you do?";
    
    
switch(imgSpot){
   case 2:
   if(imgSpot===2) {document.getElementById("myButton").addEventListener("click", function3);
}
}



/*
function function3() {
        {
   imgSpot = 9;
   }

    display.src = imgArray[imgSpot];
     document.getElementById('console').innerHTML = "*BOSS BATTLE* A Dragon Appears! What will you do?";
}
}
 
 */
   
//  switch(imgSpot){
//  case 0: if (click = "myButton"){
//     run; function1}
// }
    


//*function myButton()
/*{
     i++;
    document.getElementById("myImg").src=img_array[i];
    if(i==img_array.length+1) {
   i= +1;

    }
      document.getElementById('console').innerHTML = "Good choice! Your in forest now, your gonna die!";
   
   
   
   
}



function myButton2()
{
     i+6;
    document.getElementById("myImg").src=img_array[i];
    if(i==img_array.length+6) {
   i= +6;

    }

}

i++;
document.getElementById("myImg").src=img_array[i];
    if(click = "myButton") {
   imageSpot= +1;
*/








//{if (imgSpot) = 2}; {document.getElementById("myButton").addEventListener("click", function3);}
 

/*function function3() {
        {
   imgSpot = 3;
   }

    display.src = imgArray[imgSpot];
     document.getElementById('console').innerHTML = "*BOSS BATTLE* A Dragon Appears! What will you do?";
    }
    */