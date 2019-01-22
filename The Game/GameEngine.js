/*
// class - pogrupowanie zmiennych i funkcji; programowanie obiektowe;
class GameEngine{
    constructor(){
        this.enemies = new Array();
        this.lastDate = new Date();
    }
    // funkcja loop, w której aktualna data(new Date) minus  (lastLoopRun)  jest mniejsza od minisekundy (40) to 
    loop(){
        if(new Date().getTime() - lastDate > 40){
            console.log('czas');
            lastDate = new Date().getTime();
        }

    }
    drawSprite(){

    }
    listenForKeysPressed(){

    }



}

*/


// definicja obiektu typu Player albo prototyp
class Player
{
    constructor(spriteId)
    {
        this.health = 100;
        this.sprite = document.getElementById(spriteId);
        this.sprite.style.top = 100  + 'px';
        this.sprite.style.left = 100 + 'px'; 
    };

    Move(){
        console.log("dupa");
     }
}
class GameEngine
{
    constructor()
    {
        console.log("STWORZYLEM GAME ENGINE");
        this.player = new Player('hero');
        this.enemies = new Array();  
    }
    ListenForKeysPressed(){
        document.onkeydown = function(evt) {
            console.log(evt);
        }
    };
    loop() {
        this.ListenForKeysPressed();
    };
}


// deklaracja biektu typu GameEngine
var game = new GameEngine();
setInterval(game.loop, 1000);
