let previousDirection = "Right";
let isLeftDirection = false;

class GameEngine { // tworzę szablon do wykorzystywania
    constructor() { // szablon na konstruktora , który 
        this.enemies = [];
        this.bullets = [];
        this.bulletsEnemies = [];
        this.player = new Player();
        this.score = 0;
        this.level = 1;
        this.playerLive = 3;
        this.boardScore = (() => {
            const scoreInput = document.createElement('div'); // tworzenie div w js 
            scoreInput.id = "score";
            scoreInput.style.position = "absolute";
            scoreInput.style.left = "10px"; 
            //scoreInput.style.width = "100px";
            scoreInput.style.height = "20px";
            scoreInput.innerHTML = "score: " + this.score; 
            document.getElementById('GameBoard').appendChild(scoreInput); // wklejenie do html
            return scoreInput; //  
        })()
        this.boardLevel = (() => {
            const levelInput = document.createElement('div'); // tworzenie div w js 
            levelInput.id = "level"; 
            levelInput.style.position = "absolute";
            levelInput.style.left = "220px"; 
            //scoreInput.style.width = "100px";
            levelInput.style.height = "20px";
            levelInput.innerHTML = "level: " + this.level; 
            document.getElementById('GameBoard').appendChild(levelInput); // wklejenie do html
            return levelInput; //  
        })()
        this.boardPlayerLive = (() => {
            const playerLiveInput = document.createElement('div'); // tworzenie div w js 
            playerLiveInput.id = "level"; 
            playerLiveInput.style.position = "absolute";
            playerLiveInput.style.left = "450px"; 
            //scoreInput.style.width = "100px";
            playerLiveInput.style.height = "20px";
            playerLiveInput.innerHTML = "live: " + this.playerLive; 
            document.getElementById('GameBoard').appendChild(playerLiveInput); // wklejenie do html
            return playerLiveInput; //  
        })()
        // this.score1 = (() => {
        //     for ( var i = 0; i < this.enemies.length; i++){
        //         if( this.enemies[i] == null ) {
        //           this.score + 10; 
        //         }
        //     } 
        //     console.log(this.enemies[i]);
        // })()
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
        if (!isCreated) {
            this.bullets.push(bullet);
        }
    }



    createEnemies(quantity) { // funckcja strzałkowa
        let arrayColumnPosition = 0;
        let arrayRowPosition = 10;
        for (let i = 0; i < quantity; i++) {
            if ((i !== 0) && (i % 5 == 0)) {
                arrayRowPosition += 50;
                arrayColumnPosition = 0;
            }
            let enemy = new Enemy(arrayColumnPosition * 50, arrayRowPosition);
            arrayColumnPosition++;
            this.enemies.push(enemy);
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
                        this.score += 100;
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
    constructor(positionX, positionY) {
        this.speed = 5;
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

var game1 = new GameEngine();
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
    document.onkeydown = function (evt) {
        if (evt.key == 'ArrowRight' || evt.key == 'ArrowLeft') {
            console.log(evt)
            game1.player.move(evt.key);
        }
        if (evt.key == ' ') {
            game1.player.shoot(game1);
        }
        if (evt.key == 'f') {
            game1.createEnemies(20);
        }
        if (evt.key == 'g') {
            
        }
    }
}


setInterval(loop, 40);