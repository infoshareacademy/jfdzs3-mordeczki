let playBtn = document.querySelector("#game_starter"); 
let helpBtn = document.querySelector("#help_button"); 

function viewManual (action){
    document.querySelector(".container__game_rules").style.display = action;
}

playBtn.addEventListener("click", () => viewManual("none")); 
helpBtn.addEventListener("click", () => viewManual("block")); 
