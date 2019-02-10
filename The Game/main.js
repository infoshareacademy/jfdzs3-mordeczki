// zrobic prototyp playera
// posprzatac!!!!!!!
//let player = new Player(cos(?))
// querySelector nowsze niż getElementById - spradź!!

let player = {
    sprite : document.getElementById('hero'),
    speed : 10,
    health : 3,
    positionX : 240,
    positionY : 480,

    move : function(key){
        if( key == 'ArrowLeft' ){
            this.positionX -= this.speed;
            this.sprite.style.left = this.positionX + 'px';
            console.log(this.sprite.style.left)
        }
        else{
            this.positionX += this.speed;
            this.sprite.style.left = this.positionX + 'px';
        }
    },
    shoot : function(){
        let bullet = new Bullet(this.positionX, this.positionY);
        bullet.createSprite();
        addBulletToArray(bullet);
           
        
     }
}  
function addBulletToArray(bullet)
{
    let isCreated = false;
    for(let i=0; i < bullets.length; i++){
        if(!bullets[i])
        {
            bullets[i] = bullet;
            isCreated = true;
            break;
        }
    
    }
    if(!isCreated)
    {
        bullets.push(bullet);
    }
}

let enemies = [];
let bullets = [];
let previousDirection = "Right";
let isLeftDirection = false;

function moveEnemies(){
    let dir = previousDirection;
    if( enemies[enemies.length-1]  && previousDirection == "Right" && enemies[enemies.length-1].positionX == 450){
        dir = "Down";
        isLeftDirection = false;
    }
    else if(previousDirection == "Down" ){
        dir = "Left";
        if (isLeftDirection == false){
            dir = "Left";
        }
        else dir = "Right";
    }
    else if(enemies[0] && previousDirection == "Left" && enemies[0].positionX == 20)
    {
        dir = 'Down';
        isLeftDirection = true;
    }

    for(var i = 0;i < enemies.length;i++)
    {
        if(enemies[i])
        {
            enemies[i].move(dir);
        }
        
    }
    previousDirection = dir
}

// konstruktor prototypu funkji
function Bullet(positionX, positionY){
    this.power = 1;
    this.speed = 5;
    this.positionX = positionX;
    this.positionY = positionY;
    this.DOMElement;
}
        function moveBullets(){
            for(var i = 0; i < bullets.length; i++){
                if( bullets[i]){
                bullets[i].move();
                }
            }
        }

Bullet.prototype.move = function(){
    this.positionY -= 10;
    this.DOMElement.style.top = this.positionY + 'px';
}

Bullet.prototype.createSprite = function(){

    let bullet = document.createElement('div');
    bullet.id = 'laser';
    bullet.style.top = this.positionY + 'px';
    bullet.style.left = this.positionX + 'px';
    this.DOMElement = bullet;
    document.getElementById("GameBoard").appendChild(bullet);
}
Bullet.prototype.delete = function(){
    this.DOMElement.remove();
}

Enemy.prototype.delete = function(){
    this.DOMElement.remove();
}

function checkBulletLifeTime(){
    for(let i = 0; i < bullets.length; i++){
        if( bullets[i] && bullets[i].positionY == 0 ){
            bullets[i].delete();
            delete bullets[i];
        }
        for( let j = 0; j < enemies.length; j++){
            if(enemies[j] && bullets[i] && ((enemies[j].positionY + 35) >= bullets[i].positionY) && ((enemies[j].positionX + 35) >= bullets[i].positionX && enemies[j].positionX <= bullets[i].positionX) ){
                enemies[j].delete();
                bullets[i].delete();
                delete bullets[i];
                delete enemies[j];
                break;
            }
        
        }
    }
}


function Enemy(positionX, positionY){
    this.speed = 5;
    this.health = 2;
    this.positionX = positionX;
    this.positionY = positionY;
    this.DOMElement;
}

Enemy.prototype.createSprite = function(){

    let enemy = document.createElement("div");
    enemy.id = "enemy";
    enemy.style.top = this.positionY + 'px';
    enemy.style.left = this.positionX + 'px';
    this.DOMElement = enemy;
    document.getElementById("GameBoard").appendChild(enemy);
}
Enemy.prototype.move = function(direction){
    if( direction == 'Right'){
        this.positionX += 1;
        this.DOMElement.style.left = this.positionX + 'px';
    }
    if( direction == 'Down'){
        this.positionY += 5;
        this.DOMElement.style.top = this.positionY + 'px';
    }
    if (direction =='Left'){
        this.positionX -= 1;
        this.DOMElement.style.left = this.positionX + 'px';
    }

}

function createEnemies(quantity){
    for( i = 0; i< quantity; i++){
       let enemy = new Enemy(i * 50, 10);
       enemy.createSprite();
       enemies.push(enemy);
    }
}

function listenForKeysPressed(){
    document.onkeydown = function(evt){
        if( evt.key == 'ArrowRight' || evt.key == 'ArrowLeft' )
        {
            console.log(evt)
            player.move(evt.key);
        } 
        if (evt.key == ' '){
            player.shoot();
        }
        if (evt.key == 'f'){
            createEnemies(5);
        }
        if(evt.key =='g'){
            
        }

    }
}

function loop(){
    listenForKeysPressed();
    if(enemies.length > 0){ 
        moveEnemies();
    }
    if(bullets.length > 0){
    moveBullets();
    checkBulletLifeTime();
    console.log(bullets.length);
    }
}
   
player.sprite.style.left = 240 + 'px';
setInterval(loop, 40);