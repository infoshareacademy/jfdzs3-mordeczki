let playBtn = document.querySelector("#game_starter"); 
let helpBtn = document.querySelector("#help_button"); 
let restartBtn = document.querySelector("#game_restarter"); 

function cardDisplayer (card, action){
    document.querySelector(card).style.display = action;
}

playBtn.addEventListener("click", () => cardDisplayer(".container__game_rules", "none"));  
helpBtn.addEventListener("click", () => cardDisplayer(".container__game_rules", "block")); 
restartBtn.addEventListener("click", () => cardDisplayer(".container__game_over", "none")); 
