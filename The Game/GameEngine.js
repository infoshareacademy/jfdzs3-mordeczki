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


