
// var lastLoopRun = 0;

// var controller = new Object();
// var enemies = new Array();

// // sprite - zbiór pikseli, które tworzą jakąś postać, obiekt w grach 2D.
// // funkcja, która tworzy nowy obiekt i go zwraca
// function createSprite(element, x, y, w, h) {
    //     var result = new Object();
    //     result.element = element;
    //     result.x = x;
    //     result.y = y;
    //     result.w = w;
    //     result.h = h;
    //     return result; // zwraca nowy obiekt
    // }
    
    // function toggleKey(keyCode, isPressed){ 
        //     if (keyCode == LEFT_KEY) {
            //         controller.left = isPressed;
            //     }
            //     if (keyCode == RIGHT_KEY) {
                //         controller.right = isPressed;
                //     }
                //     if (keyCode == UP_KEY) {
                    //         controller.up = isPressed;
                    //     }
                    //     if (keyCode == DOWN_KEY) {
                        //         controller.down = isPressed;
                        //     }
                        //     if (keyCode == SPACE_KEY) {
                            //         controller.space = isPressed;
                            //     }
                            // }
                            //     /*
                            //     console.log(keyCode); // do kontroli ady wpisać 32 w SPACE_KEY
                            //     */
                            // // granica - obijanie się - tworzenei podstawowej funkcji
                            // // nie działa
                            // /*
                            // function ensureBounds(sprite) { 
                                //     if (sprite.x < 20){
                                    //         sprite.x = 20;
                                    //     }
                                    //     if (sprite.y < 20) {
                                        //         sprite.y = 20;
                                        //     }
                                        //     if (sprite.x + sprite.w > 480){
                                            //         sprite.x = 480 - sprite.w;
                                            //     }
                                            //     if (sprite.y + sprite.h > 480) {
                                                //         sprite.y = 480 - sprite.h;
                                                //     }
                                                // }
                                                // */
                                                // function setPosition(sprite){
                                                    
                                                    //     var e = document.getElementById(sprite.element);
                                                    //     e.style.left = sprite.x + 'px';
                                                    //     e.style.top = sprite.y + 'px';
                                                    // };
                                                    // function handleCondrols () {
                                                        //     if (controller.up) {
                                                            //         hero.y -= HERO_MOVEMENT;
                                                            //     }
                                                            //     if (controller.down) {
                                                                //         hero.y += HERO_MOVEMENT;
                                                                //     }
                                                                //     if (controller.left) {
                                                                    //         hero.x -= HERO_MOVEMENT;
                                                                    //     }
                                                                    //     if (controller.right) {
                                                                        //         hero.x += HERO_MOVEMENT;
                                                                        //     }
                                                                        //     if (controller.space && laser.y <= 120) {
                                                                            //         laser.x = hero.x + 9;
                                                                            //         laser.y = hero.y - laser.h;
                                                                            //     }
                                                                            // }
                                                                            
                                                                            // //granica sceny przypisana dla hero
                                                                            // // nie działa  
                                                                            // /*
                                                                            // ensureBounds(hero);
                                                                            // */ 
                                                                            
                                                                            // function showSprites() {
                                                                                //     setPosition(hero);
                                                                                //     setPosition(laser);
                                                                                //     for (var i = 0; i < enemies.length; i++){
                                                                                    //         setPosition(enemies[i]); // dostanie się do elementu [i] w tablicy enemies
//     }
// }

// function updatePositions() {
//     for ( var i = 0; i < enemies.length; i++){
    //         enemies[i].y +=4;
    //         enemies[i].x += getRandom(7) - 3;
    //     }
    //     laser.y -= 12;
    // }
    
    // function addEnemy() { 
        //     if (getRandom(50) == 0) {
            //         var elementName = 'enemy' + getRandom(10000000);
            //         var enemy = createSprite(elementName, getRandom(450), -40, 35,  35);
            
            //         var element = document.createElement('div');
            //         element.id = enemy.element;
            //         element.className = 'enemy';
            //         document.children[0].appendChild(element);
            
            //         enemies[enemies.length] = enemy;
            //     }
            // }
            
            // function getRandom(maxSize) {
                //     return parseInt(Math.random() * maxSize);
                // }
                
var LEFT_KEY = 37; // wyszło w Console
var UP_KEY = 38; // wyszło w Console
var RIGHT_KEY = 39; // wyszło w Console
var DOWN_KEY = 40; // wyszło w Console
var SPACE_KEY = 32; // wyszło w Console
var HERO_MOVEMENT = 3; // prędkość


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
       let bullet = document.createElement("div");
       bullet.id = "laser";
       bullet.style.top = this.positionY + 'px';
       bullet.style.left = this.positionX + 'px';
       document.getElementById("GameBoard").appendChild(bullet);   
     }
}  

function Enemy(positionX, positionY){
    this.speed = 5;
    this.health = 2;
    this.positionX = positionX;
    this.positionY = positionY;
}

Enemy.prototype.createSprite = function(){
    let enemy = document.createElement("div");
    enemy.id = "enemy";
    enemy.style.top = this.positionY + 'px';
    enemy.style.left = this.positionX + 'px';
    document.getElementById("GameBoard").appendChild(enemy);
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
            var i;
            var enemies = [];
            for(i = 0; i < 5; i++ ){
                let enemy = new Enemy(i * 50 , 10);
                enemies.push(enemy);
                                
            }

            for(i = 0; i < enemies.length; i++){
                let enemyFromList = enemies.indexOf(i);
                enemyFromList.createSprite();

            }
        }

    }
}


/*
function ensureBounds(sprite) {
 if (deltaX < (window.innerWidth-55)) {deltaX += 5;}
                   square.style.setProperty("left", deltaX);
                   square.style.marginLeft = deltaX+'px';
                   //console.log('Left position:', deltaX);
           break;
               if (deltaY < (window.innerHeight-55)) {deltaY += 5;}
                   square.style.setProperty("top", deltaY);
                   square.style.marginTop = deltaY+'px';
                   //console.log('Top position:', deltaY);
           break;
       }
   }
   window.addEventListener("keydown", move);
   });

   */
    
    
    function loop(){
        listenForKeysPressed();
        // updatePositions();
        // handleCondrols();
        // addEnemy();
        
        // showSprites();
    }
    // evt - skrót od event tkj: 'e', 'ev'
    //agrgument funkcji onmousemove jest obiekt typu Event
    
player.sprite.style.left = 240 + 'px';
setInterval(loop, 40);


// var hero = createSprite('hero', 250, 460, 20, 20);
// var laser = createSprite('laser', 0, -120, 2, 50);
// //↑ to wszystko jest juz zamieszczone w createSprite ↑
// var hero = new Object();
// hero.element = 'hero';
// hero.x = 250;
// hero.y = 460;
// hero.w = 20; //przypisanie długości bohatera - dane z  css
// hero.h = 20; //przypisanie wysokosci bohatera - dane z  css

// {
//     constructor(spriteId)    
//     {
//         this.health = 100;    
//         this.sprite = document.getElementById(spriteId);
//         this.sprite.style.top = 100  + 'px';
//         this.sprite.style.left = 100 + 'px'; 
//     };

//     Move(){
//         console.log("dupa");    
//      }
// }
// class GameEngine
// {
//     constructor()    
//     {
//         console.log("STWORZYLEM GAME ENGINE");    
//         this.player = new Player('hero');
//         this.enemies = new Array();  
//     }
//     ListenForKeysPressed(){
//         document.onkeydown = function(evt) {
//             console.log(evt);    
//         }
//     };
//     loop() {
//         this.ListenForKeysPressed();    
//     };
// }


// // deklaracja biektu typu GameEngine
// var game = new GameEngine();
// setInterval(game.loop, 1000);


