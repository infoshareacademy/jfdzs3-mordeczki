

// let player = {
//     sprite : document.getElementById('hero'),
//     speed : 10,
//     health : 3,
//     positionX : 240,
//     positionY : 480,

//     move : function(key){
//         if( key == 'ArrowLeft' ){
//             this.positionX -= this.speed;
//             if ( this.positionX <= 0 ){
//                 this.positionX = 0;
//             }
//             this.sprite.style.left = this.positionX + 'px';
//             console.log(this.sprite.style.left)
//         }
//         else{
//             this.positionX += this.speed;
//             if ( this.positionX >= 450){
//                 this.positionX = 450;
//             }
//             this.sprite.style.left = this.positionX + 'px';
//         }
//     },
//     shoot : function(){
//         let bullet = new Bullet(this.positionX, this.positionY);
//         bullet.createSprite();
//         addBulletToArray(bullet);


//      }
// }  
// function addBulletToArray(bullet)
// {
//     let isCreated = false;
//     for(let i=0; i < bullets.length; i++){
//         if(!bullets[i])
//         {
//             bullets[i] = bullet;
//             isCreated = true;
//             break;
//         }

//     }
//     if(!isCreated)
//     {
//         bullets.push(bullet);
//     }
// }

// let enemies = [];
// let bullets = [];
// let previousDirection = "Right";
// let isLeftDirection = false;

// function findFirstEnemyOnLeft(){
//     let minimumPositionX = 450;
//     let enemyIndex = 0;
//     for ( let i = 0; i < enemies.length; i ++){
//         if( enemies[i]  && enemies[i].positionX < minimumPositionX ){
//             minimumPositionX = enemies[i].positionX;
//             enemyIndex = i;
//         }

//     }
//     return enemies[enemyIndex]; 
// }
// function findFirstEnemyOnRight(){
//     let maxPositionX = 0;
//     let enemyIndex = 0;
//     for ( let i = 0; i < enemies.length; i ++){
//         if( enemies[i] && enemies[i].positionX > maxPositionX ){
//             maxPositionX = enemies[i].positionX;
//             enemyIndex = i;
//         }

//     }
//     return enemies[enemyIndex]; 
// }

// function moveEnemies(){
//     let dir = previousDirection;
//     if( previousDirection == "Right" && findFirstEnemyOnRight().positionX == 450){
//         dir = "Down";
//         isLeftDirection = false;
//     }
//     else if(previousDirection == "Down" ){
//         if (isLeftDirection == false){
//             dir = "Left";
//         }
//         else dir = "Right";
//     }
//     else if(previousDirection == "Left" && findFirstEnemyOnLeft().positionX == 20)
//     {
//         dir = 'Down';
//         isLeftDirection = true;
//     }

//     for(var i = 0;i < enemies.length;i++)
//     {
//         if(enemies[i])
//         {
//             enemies[i].move(dir);
//         }

//     }
//     previousDirection = dir
// }


// function Bullet(positionX, positionY){
//     this.power = 1;
//     this.speed = 5;
//     this.positionX = positionX;
//     this.positionY = positionY;
//     this.DOMElement;
// }
//         function moveBullets(){
//             for(var i = 0; i < bullets.length; i++){
//                 if( bullets[i]){
//                 bullets[i].move();
//                 }
//             }
//         }

// Bullet.prototype.move = function(){
//     this.positionY -= 10;
//     this.DOMElement.style.top = this.positionY + 'px';
// }


// Bullet.prototype.createSprite = function(){

//     let bullet = document.createElement('div');
//     bullet.id = 'laser';
//     bullet.style.top = this.positionY + 'px';
//     bullet.style.left = this.positionX + 'px';
//     this.DOMElement = bullet;
//     document.getElementById("GameBoard").appendChild(bullet);
// }
// Bullet.prototype.delete = function(){
//     this.DOMElement.remove();
// }

// Enemy.prototype.delete = function(){
//     this.DOMElement.remove();
// }

// function checkBulletLifeTime(){
//     for(let i = 0; i < bullets.length; i++){
//         if( bullets[i] && bullets[i].positionY == 0 ){
//             bullets[i].delete();
//             delete bullets[i];
//         }
//         for( let j = 0; j < enemies.length; j++){
//             if(enemies[j] && bullets[i] && ((enemies[j].positionY + 35) >= bullets[i].positionY) && ((enemies[j].positionX + 35) >= bullets[i].positionX && enemies[j].positionX <= bullets[i].positionX) ){
//                 enemies[j].health -= 1;
//                 enemies[j].DOMElement.firstChild.src = "img/enemy_lips_red.png"
//                 if ( enemies[j].health == 0 ){
//                     enemies[j].delete();
//                     delete enemies[j];
//                 }
//                 bullets[i].delete();
//                 delete bullets[i];
//                 break;
//             }

//         }
//     }
// }


// function Enemy(positionX, positionY){
//     this.speed = 5;
//     this.health = 2;
//     this.positionX = positionX;
//     this.positionY = positionY;
//     this.DOMElement;
// }

// Enemy.prototype.createSprite = function(){
//     let enemyImg = document.createElement('img');
//     enemyImg.id = "image"
//     enemyImg.src = "img/enemy_lips_black.png";
//     enemyImg.style.width = '40px';
//     enemyImg.style.height = '25px';


//     let enemy = document.createElement("div");
//     enemy.id = "enemy";
//     enemy.style.top = this.positionY + 'px';
//     enemy.style.left = this.positionX + 'px';
//     enemy.appendChild(enemyImg);
//     this.DOMElement = enemy;
//     document.getElementById("GameBoard").appendChild(enemy);
// }
// Enemy.prototype.move = function(direction){
//     if( direction == 'Right'){
//         this.positionX += 1;
//         this.DOMElement.style.left = this.positionX + 'px';
//     }
//     if( direction == 'Down'){
//         this.positionY += 5;
//         this.DOMElement.style.top = this.positionY + 'px';
//     }
//     if (direction =='Left'){
//         this.positionX -= 1;
//         this.DOMElement.style.left = this.positionX + 'px';
//     }

// }

// function createEnemies(quantity){
//     let arrayRow = 0;
//     let arrayColumnPosition = 0;
//     let arrayRowPosition = 10;
//     for( i = 0; i< quantity; i++){
//         if((i !== 0) && (i % 5 == 0))
//         {
//             arrayRow +=1;
//             arrayRowPosition += 50;
//             arrayColumnPosition = 0; 
//         }
//         let enemy = new Enemy( arrayColumnPosition * 50, arrayRowPosition);
//         arrayColumnPosition ++;
//         enemy.createSprite();
//         enemies.push(enemy);

//     }

// }

// function listenForKeysPressed(){
//     document.onkeydown = function(evt){
//         if( evt.key == 'ArrowRight' || evt.key == 'ArrowLeft' )
//         {
//             console.log(evt)
//             player.move(evt.key);
//         } 
//         if (evt.key == ' '){
//             player.shoot();
//         }
//         if (evt.key == 'f'){
//             createEnemies(20);
//         }
//         if(evt.key =='g'){

//         }

//     }
// }

// function loop(){
//     listenForKeysPressed();
//     if(enemies.length > 0){ 
//         moveEnemies();
//     }
//     if(bullets.length > 0){
//     moveBullets();
//     checkBulletLifeTime();
//     console.log(bullets.length);
//     }
// }

// player.sprite.style.left = 240 + 'px';
// setInterval(loop, 40);

let enemies = [];
let bullets = [];
let previousDirection = "Right";
let isLeftDirection = false;

class GameEngine {
    constructor(bullet, quantity) { // parametry ??
        this.bullet = bullet;
        this.quantity = quantity; // ilość np. enemies
    }
    addBulletToArray(bullet) {
        let isCreated = false;
        for (let i = 0; i < bullets.length; i++) {
            if (!bullets[i]) {
                bullets[i] = bullet;
                isCreated = true;
                break;
            }

        }
        if (!isCreated) {
            bullets.push(bullet);
        }
    }
    createEnemies(quantity) {
        let arrayRow = 0;
        let arrayColumnPosition = 0;
        let arrayRowPosition = 10;
        for (i = 0; i < quantity; i++) {
            if ((i !== 0) && (i % 5 == 0)) {
                arrayRow += 1;
                arrayRowPosition += 50;
                arrayColumnPosition = 0;
            }
            let enemy = new Enemy(arrayColumnPosition * 50, arrayRowPosition);
            arrayColumnPosition++;
            enemy.createSprite();
            enemies.push(enemy);
        }

    }
    findFirstEnemyOnLeft() {
        let minimumPositionX = 450;
        let enemyIndex = 0;
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i] && enemies[i].positionX < minimumPositionX) {
                minimumPositionX = enemies[i].positionX;
                enemyIndex = i;
            }
    
        }
        return enemies[enemyIndex];
    }
    findFirstEnemyOnRight() {
        let maxPositionX = 0;
        let enemyIndex = 0;
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i] && enemies[i].positionX > maxPositionX) {
                maxPositionX = enemies[i].positionX;
                enemyIndex = i;
            }
    
        }
        return enemies[enemyIndex];
    }
}

class Player {
    constructor() {
        this.sprite = document.getElementById('hero');
        this.speed = 10;
        this.health = 3;
        this.positionX = 240;
        this.positionY = 480;
        this.key = key; // czy dobrze ?
    }
    move(key) {  // key ??? parametr - gdzie co i jak 
        if (key == 'ArrowLeft') {
            this.positionX -= this.speed;
            if (this.positionX <= 0) {
                this.positionX = 0;
            }
            this.sprite.style.left = this.positionX + 'px';
            console.log(this.sprite.style.left)
        }
        else {
            this.positionX += this.speed;
            if (this.positionX >= 450) {
                this.positionX = 450;
            }
            this.sprite.style.left = this.positionX + 'px';
        }
    }
    shoot() {
        let bullet = new Bullet(this.positionX, this.positionY);
        bullet.createSprite();
        addBulletToArray(bullet);
    }
}
class Enemy {
    constructor(positionX, positionY) {
        this.speed = 5;
        this.health = 2;
        this.positionX = positionX;
        this.positionY = positionY;
        this.DOMElement;
    }
    createSprite() {
        let enemyImg = document.createElement('img');
        enemyImg.id = "image"
        enemyImg.src = "img/enemy_lips_black.png";
        enemyImg.style.width = '40px';
        enemyImg.style.height = '25px';


        let enemy = document.createElement("div");
        enemy.id = "enemy";
        enemy.style.top = this.positionY + 'px';
        enemy.style.left = this.positionX + 'px';
        enemy.appendChild(enemyImg);
        this.DOMElement = enemy;
        document.getElementById("GameBoard").appendChild(enemy);
    }
    move(direction) {
        if (direction == 'Right') {
            this.positionX += 1;
            this.DOMElement.style.left = this.positionX + 'px';
        }
        if (direction == 'Down') {
            this.positionY += 5;
            this.DOMElement.style.top = this.positionY + 'px';
        }
        if (direction == 'Left') {
            this.positionX -= 1;
            this.DOMElement.style.left = this.positionX + 'px';
        }

    }
    moveEnemies() {
        let dir = previousDirection;
        if (previousDirection == "Right" && findFirstEnemyOnRight().positionX == 450) {
            dir = "Down";
            isLeftDirection = false;
        }
        else if (previousDirection == "Down") {
            if (isLeftDirection == false) {
                dir = "Left";
            }
            else dir = "Right";
        }
        else if (previousDirection == "Left" && findFirstEnemyOnLeft().positionX == 20) {
            dir = 'Down';
            isLeftDirection = true;
        }
    
        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i]) {
                enemies[i].move(dir);
            }
    
        }
        previousDirection = dir
    }
    delete() {
        this.DOMElement.remove();
    }
}

class Bullet {
    constructor(positionX, positionY) {
        this.power = 1;
        this.speed = 5;
        this.positionX = positionX;
        this.positionY = positionY;
        this.DOMElement;
    }
    createSprite() {
        let bullet = document.createElement('div');
        bullet.id = 'laser';
        bullet.style.top = this.positionY + 'px';
        bullet.style.left = this.positionX + 'px';
        this.DOMElement = bullet;
        document.getElementById("GameBoard").appendChild(bullet);
    }
    move() {
        this.positionY -= 10;
        this.DOMElement.style.top = this.positionY + 'px';
    }
    moveBullets() {
        for (var i = 0; i < bullets.length; i++) {
            if (bullets[i]) {
                bullets[i].move();
            }
        }
    }
    delete() {
        this.DOMElement.remove();
    }
}


function checkBulletLifeTime() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i] && bullets[i].positionY == 0) {
            bullets[i].delete();
            delete bullets[i];
        }
        for (let j = 0; j < enemies.length; j++) {
            if (enemies[j] && bullets[i] && ((enemies[j].positionY + 35) >= bullets[i].positionY) && ((enemies[j].positionX + 35) >= bullets[i].positionX && enemies[j].positionX <= bullets[i].positionX)) {
                enemies[j].health -= 1;
                enemies[j].DOMElement.firstChild.src = "img/enemy_lips_red.png"
                if (enemies[j].health == 0) {
                    enemies[j].delete();
                    delete enemies[j];
                }
                bullets[i].delete();
                delete bullets[i];
                break;
            }

        }
    }
}

function listenForKeysPressed() {
    document.onkeydown = function (evt) {
        if (evt.key == 'ArrowRight' || evt.key == 'ArrowLeft') {
            console.log(evt)
            player.move(evt.key);
        }
        if (evt.key == ' ') {
            player.shoot();
        }
        if (evt.key == 'f') {
            createEnemies(20);
        }
        if (evt.key == 'g') {

        }
    }
}

function loop() {
    listenForKeysPressed();
    if (enemies.length > 0) {
        moveEnemies();
    }
    if (bullets.length > 0) {
        moveBullets();
        checkBulletLifeTime();
        console.log(bullets.length);
    }
}

let player = new Player();
player.sprite.style.left = 240 + 'px';
player.move(key);

let bullet = new Bullet();
let game = new GameEngine();
game.addBulletToArra(bullet); // parametr bullet?

setInterval(loop, 40);