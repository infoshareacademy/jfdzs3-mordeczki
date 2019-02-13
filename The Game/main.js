let previousDirection = "Right";
let isLeftDirection = false;

class GameEngine {
    constructor() { 
        this.enemies = [];
        this.bullets = [];
        this.bulletsEnemies = [];
        this.player = new Player();

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
    createEnemies(quantity) { // funckaj strzełkowa
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
        for (var i = 0; i < this.bulletsEnemies.length; i++){
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
    listenForKeysPressed(gameObject) {
        
        document.onkeydown = function (evt) {
            if (evt.key == 'ArrowRight' || evt.key == 'ArrowLeft') {
                console.log(evt)
                gameObject.player.move(evt.key);
            }
            if (evt.key == ' ') {
                gameObject.player.shoot(gameObject);
            }
            if (evt.key == 'f') {
                gameObject.createEnemies(20);
            }
            if (evt.key == 'g') {

            }
        }
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
    shoot(){
        let enemyBullet = document.createElement("div");
        enemyBullet.style.top = this.positionX + "px";
        enemyBullet.left = this.positionY + "px"; 
        let enemyBulletImg = createElement("img");
        enemyBulletImg.id = "image"
        enemyBulletImg.src = "img/water_drop.jpg"
        enemyBulletImg.style.width = "5px";
        enemyBulletImg.style.height = "5px";
        enemyBullet.appendChild(enemyBulletImg);
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
    game1.listenForKeysPressed(game1);
    if (game1.enemies.length > 0) {
        game1.moveEnemies();
    }
    if (game1.bullets.length > 0) {
        game1.moveBullets();
        game1.checkBulletLifeTime();
    }
}

setInterval(loop, 40);