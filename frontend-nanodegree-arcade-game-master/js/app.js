'use strict';
// Enemies our player must avoid
var Enemy = function(y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //start at left and have random speeds
    this.x=-200;
    this.y=y;
    this.speed=Math.random()*20+3;
    this.sprite = 'images/enemy-bug.png';
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {     // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //Moves the enemy according to its random speed
    this.x+=this.speed;
    //Reset after enemy moves greater thaan 500px
    if(this.x>500)
    {
        this.reset();
    }
};
//Reset the enemy to the left of the screen
Enemy.prototype.reset=function(){
    //resets to its initial position
    this.x=-200;
    //runs at random speed
    this.speed=Math.random()*10+4;
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player=function(x,y){
    //create x and y variables for player class for movement,control and collision
    this.x=x;
    this.y=y;
};

function pointsCounter(score){
    //get the element by "points" id
    var pointContainer=document.getElementById("points");
    //set it equal to the score variable
    pointContainer.innerHTML=score;
}

//score starts at 0
var score=0;

function heartDisplay(){
    //get the element by "heartContainer" id
    var heartContainer=document.getElementById("heartContainer");
    //create an object containing the heart image
    var heart = "<img src='images/Heart.png'>";
    //create an empty array to hold the hearts
    var heartArray=[];
    //use the loop for showing hearts as same as the number of lives remaining
    var i;
    for(i=0;i<lives;i++)
        {
            heartArray.push(heart);
        }
        //display the array of hearts
        heartContainer.innerHTML=heartArray;
}

//lives counter

function livesCounter(life){
//if enemy hits the player one life lose occures
//if all the lives lost, there will be an alert for game over and shows the total score
if(lives===0){
    alert("Game Over! Your score is "+score+" points");
    //resets the score equal to zero
    score=0;
    //resets the lives equal to three
    lives=3;
    }
heartDisplay();
}
//three lives
var lives=3;

//updating the player
Player.prototype.update=function(dt){
    //if player cross the region
    if(this.y<50)
    {
        //player moves to its initial position
        this.reset();
        //and scores 100 points
        score+=100;
        pointsCounter(score);
    }
    //run collisioin function
    this.collision();
    heartDisplay();
};

//the player drawing on screen
Player.prototype.render=function(){
    var img=new Image();
    img.src='images/char-boy.png';
    ctx.drawImage(img,this.x,this.y);
};
//input keys to move player left,right,up and down
Player.prototype.handleInput=function(allowedKeys){
    if(allowedKeys==='left' && this.x>0)
    {
        //moves 101px left
        this.x-=101;
    } else if(allowedKeys==='right' && this.x<400)
    {
        //moves 101px right
        this.x+=101;
    } else if(allowedKeys==='up' && this.y>0)
    {
        //moves 83px up
        this.y-=83;
    } else if(allowedKeys==='down' && this.y<400)
    {
        //moves 83px down
        this.y+=83;
    }
};
//collision detection between player and enemies in the allEnemies array
Player.prototype.collision=function(){
    var i;
    for(i=0;i<allEnemies.length;i++)
    {

        if (this.x < allEnemies[i].x + 50 && this.x + 50 > allEnemies[i].x && this.y < allEnemies[i].y + 30 && this.y + 30 > allEnemies[i].y)
        {
            //resets the player to initial position
            this.reset();
            //updates the score
            pointsCounter(score);
            //one life of the player reduces
            lives--;
            //updates the lives 
            livesCounter(lives);
        }
    }
};

//reseting of the player to the initial location(which means the bottom middle)
Player.prototype.reset=function(){
    this.x=202;
    this.y=402;
};





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//creating several new Enemy objects
var bug1=new Enemy(145);
var bug2=new Enemy(225);
var bug3=new Enemy(60);

//creating allEnemies array
var allEnemies=[bug1,bug2,bug3];

// Place the player object in a variable called player
var player=new Player(202,402);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
