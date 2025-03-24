const favorite_game_input = document.querySelector("#favorite_game_input");
const favorite_console_input = document.querySelector("#favorite_console_input");
const favorite_playstyle_input = document.querySelector("#favorite_playstyle_input");
const submit = document.querySelector("#submit");
const gamer_tag = document.querySelector("#gamer_tag");

submit.onclick = function() {
    let _gamer_tag = favorite_playstyle_input.value + "_" + favorite_game_input.value + "_" + favorite_console_input.value + "_player";
    
    gamer_tag.textContent = `Your gamer tag: ${_gamer_tag}`;
};