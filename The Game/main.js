// var LEFT_KEY = 37; // wyszło w Console
// var UP_KEY = 38; // wyszło w Console
// var RIGHT_KEY = 39; // wyszło w Console
// var DOWN_KEY = 40; // wyszło w Console
// var SPACE_KEY = 32; // wyszło w Console
// var HERO_MOVEMENT = 3; // prędkość

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

// function loop(){
//     if (new Date().getTime()- lastLoopRun > 40) {
//         updatePositions();
//         handleCondrols();

//         addEnemy();

//         showSprites();

//         lastLoopRun = new Date().getTime();
//     }
//     setTimeout('loop();', 2);

// }
// // evt - skrót od event tkj: 'e', 'ev'
// //agrgument funkcji onmousemove jest obiekt typu Event
// document.onkeydown = function(evt) {
//     toggleKey(evt.keyCode, true);
// };
// document.onkeyup = function(evt) {
//     toggleKey(evt.keyCode, false);
// };

// var hero = createSprite('hero', 250, 460, 20, 20);
// var laser = createSprite('laser', 0, -120, 2, 50);
// /* ↑ to wszystko jest juz zamieszczone w createSprite ↑
// var hero = new Object();
// hero.element = 'hero';
// hero.x = 250;
// hero.y = 460;
// hero.w = 20; //przypisanie długości bohatera - dane z  css
// hero.h = 20; //przypisanie wysokosci bohatera - dane z  css
// */
// loop();
class GameEngine{
    constructor(){
        this.enemies = new Array();
        this.lastDate = new Date().getTime();
    }
    // funkcja loop: aktualna data(new Date) minus ostatnia data ma być mniejsza od minisekundy (40) 
    loop(){
        if(new Date().getTime() - this.lastDate){
            console.log('czas');
            this.lastDate = new Date().getTime();
        }

    }
    drawSprite(){

    }
    listenForKeysPressed(){

    }



}


let g = new GameEngine();

g.loop();
