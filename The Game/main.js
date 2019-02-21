let previousDirection = "Right";
let isLeftDirection = false;

class GameEngine { 
    constructor(numberOfEnemies) { 
        this.numberOfEnemies = numberOfEnemies;
        this.enemies = (() => {
            let enemiesArr = [];
            let arrayColumnPosition = 0; 
            let arrayRowPosition = 10;
            for (let i = 0; i < this.numberOfEnemies; i++) {
                if ((i !== 0) && (i % 5 == 0)) {
                    arrayRowPosition += 50;
                    arrayColumnPosition = 0;
                }
                let enemy = new Enemy(arrayColumnPosition * 50, arrayRowPosition);
                arrayColumnPosition++;
                enemiesArr.push(enemy);
            }
            return enemiesArr;
        })()
        this.bullets = [];
        this.bulletsEnemies = [];
        this.player = new Player();
        this.score = 0;
        this.level = 1;
        this.boardScore = (() => { 
            const scoreInput = document.createElement('div'); 
            scoreInput.id = "score";
            scoreInput.style.position = "absolute";
            scoreInput.style.left = "10px";
            scoreInput.style.height = "20px";
            scoreInput.innerHTML = "score: " + this.score;
            document.getElementById('GameBoard').appendChild(scoreInput); 
            return scoreInput; 
        })()
        this.boardLevel = (() => {
            const levelInput = document.createElement('div'); 
            levelInput.id = "level"; 
            levelInput.style.position = "absolute";
            levelInput.style.left = "220px";
            levelInput.style.height = "20px";
            levelInput.innerHTML = "level: " + this.level; 
            document.getElementById('GameBoard').appendChild(levelInput);
            return levelInput;
        })()
    }
    addBulletToArray(bullet) {
        let isCreated = false; 
        for (let i = 0; i < this.bullets.length; i++) { 
            if (!this.bullets[i]) {
                this.bullets[i] = bullet;
                isCreated = true;
                break;
            }
        }
        //this.createEnemies(bullet)
        if (!isCreated) { 
            this.bullets.push(bullet);
        }
    }
    checkNextLevel(){
        let isNextLevelNeeded = true;                     
        for( let i = 0; i < this.enemies.length; i++){
            if(this.enemies[i]){
                isNextLevelNeeded = false;
                break;
            }
        }
        return isNextLevelNeeded;
    }   
    nextLevel(speed){
        this.level += 1;                  
        this.boardLevel.innerHTML = "level: " + this.level;
        previousDirection = "Right"
        this.createNewEnemies(30);
        this.enemies.speed =+ 50; // speed
    
    }
    createNewEnemies(quantity){
        let arrayColumnPosition = 0; 
        let arrayRowPosition = 10;
        for(let i = 0; i < quantity; i++){
            if ((i !== 0) && (i % 5 == 0)) { //  bez początkowego co piaty element
                arrayRowPosition += 50;
                arrayColumnPosition = 0;
            }
            let enemy = new Enemy(arrayColumnPosition * 50, arrayRowPosition);
            arrayColumnPosition++;
            if( i < this.enemies.length && !this.enemies[i]){
                this.enemies[i] = enemy;
            }
            else{
                this.enemies.push(enemy);
            }
        }
    }
    endGameBoard() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (!this.enemies[i]) {
                document.querySelector("container__game_rules").style.display = action;
            }
        }
    }
    findFirstEnemyOnLeft() { 
        let minimumPositionX = 450; 
        let enemyIndex = 0;
        for (let i = 0; i < this.enemies.length; i++) { 
            if (this.enemies[i] && this.enemies[i].positionX < minimumPositionX) {
                minimumPositionX = this.enemies[i].positionX;
                enemyIndex = i;
            }
        }
        return this.enemies[enemyIndex];
    }
    findFirstEnemyOnRight() {
        let maxPositionX = 0;
        let enemyIndex = 0;
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i] && this.enemies[i].positionX > maxPositionX) {
                maxPositionX = this.enemies[i].positionX;
                enemyIndex = i;
            }
        }
        return this.enemies[enemyIndex];
    }
    moveBullets() {
        for (var i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i]) {
                this.bullets[i].move();
            }
        }
        for (var i = 0; i < this.bulletsEnemies.length; i++) {
            if (this.bulletsEnemies[j]) {
                this.bulletsEnemies[j].move();
            }
        }
    }
    moveEnemies() {
        let dir = previousDirection;
        if (previousDirection == "Right" && this.findFirstEnemyOnRight().positionX == 450) {
            dir = "Down";
            isLeftDirection = false;
        }
        else if (previousDirection == "Down") {
            if (isLeftDirection == false) {
                dir = "Left";
            }
            else dir = "Right";
        }
        else if (previousDirection == "Left" && this.findFirstEnemyOnLeft().positionX == 20) {
            dir = 'Down';
            isLeftDirection = true;
        }

        for (var i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i]) {
                this.enemies[i].move(dir);
            }
        }
        previousDirection = dir
    }

    checkBulletLifeTime() {
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i] && this.bullets[i].positionY == 0) {
                this.bullets[i].delete();
                delete this.bullets[i];
            }
            for (let j = 0; j < this.enemies.length; j++) {
                if (this.enemies[j] && this.bullets[i] && ((this.enemies[j].positionY + 35) >= this.bullets[i].positionY) && ((this.enemies[j].positionX + 35) >= this.bullets[i].positionX && this.enemies[j].positionX <= this.bullets[i].positionX)) {
                    this.enemies[j].health -= 1;
                    this.enemies[j].DOMElement.firstChild.src = "img/enemy_lips_red.png"
                    if (this.enemies[j].health == 0) {
                        this.enemies[j].delete();
                        delete this.enemies[j];
                        this.score += 10;
                        // game1.boardScore.text = game1.score;
                        this.boardScore.innerHTML = "score: " + this.score;
                        console.log(game1.score)
                    }
                    this.bullets[i].delete();
                    delete this.bullets[i];
                    break;
                }
            }
        }
    }
}
class Player {
    constructor() {
        this.sprite = document.getElementById('hero');
        this.speed = 10;
        this.health = 3;
        this.positionX = 240;
        this.positionY = 480;
        this.sprite.style.left = this.positionX + 'px';
        this.boardPlayerLive = (() => {
            const playerLiveInput = document.createElement('div'); 
            playerLiveInput.id = "level"; 
            playerLiveInput.style.position = "absolute";
            playerLiveInput.style.left = "450px"; 
            playerLiveInput.style.height = "20px";
            playerLiveInput.innerHTML = "live: " + this.health; 
            document.getElementById('GameBoard').appendChild(playerLiveInput);
            return playerLiveInput;  
        })()

    }
    move(key) {
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
    shoot(gameObject) {
        let bullet = new Bullet(this.positionX, this.positionY);
        bullet.createSprite();
        gameObject.addBulletToArray(bullet);
    }
}
class Enemy {
    constructor(positionX, positionY, speed) { // param - speed
        this.speed = speed ; // speed;
        this.health = 2;
        this.positionX = positionX;
        this.positionY = positionY;
        this.DOMElement = (() => {
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
            return enemy;
        })()
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
    shoot(gameObject) {
        let enemyBullet = document.createElement("div");
        enemyBullet.style.top = this.positionX + "px";
        enemyBullet.style.left = this.positionY + "px";
        let enemyBulletImg = document.createElement("img");
        enemyBulletImg.id = "image";
        enemyBulletImg.src = "img/water_drop.jpg";
        enemyBulletImg.style.width = "5px";
        enemyBulletImg.style.height = "5px";
        enemyBullet.appendChild(enemyBulletImg);
        document.getElementById('GameBoard').appendChild(enemyBullet);
        gameObject.bulletsEnemies.push(enemies);
    }
    delete() {
        this.DOMElement.remove();
    }
}

class Bullet {
    constructor(positionX, positionY, image) {
        this.power = 1;
        this.speed = 5;
        this.positionX = positionX;
        this.positionY = positionY;
        this.DOMElement;
    }
    createSprite() {
        // funckja strzałkowa ;img
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

    delete() {
        this.DOMElement.remove();
    }
}


let isFirstCyclic = true;

var game1 = new GameEngine(20);
function loop() {

    if (isFirstCyclic == true) {
        isFirstCyclic = false;
    }
    if (game1.enemies.length > 0) {
        game1.moveEnemies();
        game1.addBulletToArray();
    }
    if (game1.bullets.length > 0) {
        game1.moveBullets();
        game1.checkBulletLifeTime();
    }
    if ( game1.checkNextLevel()){
        game1.nextLevel();

    }
    document.onkeydown = function (evt) {
        if (evt.key == 'ArrowRight' || evt.key == 'ArrowLeft') {
            console.log(evt)
            game1.player.move(evt.key);
        }
        if (evt.key == ' ') {
            game1.player.shoot(game1);
        }
        if (evt.key == 'g') {
            
        }
    }
}


setInterval(loop, 40);
