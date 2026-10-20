const frases = [
    "O destino do universo está em jogo.",
    "Uma nova ameaça está chegando. Prepare-se para Doomsday!",
    "Heróis se unirão. Lendas cairão. O mundo nunca mais será o mesmo.",
    " O maior confronto da Marvel está chegando!",
    "O fim está próximo. O caos está apenas começando.",
    " Quando tudo estiver em perigo, os heróis precisarão se unir novamente.",
    "Um novo capítulo do Universo Marvel está prestes a começar.",
     " Doutor Destino chegou. E nada será como antes.",
    " Vingadores: Doomsday — o próximo grande evento da Marvel!"
];

let indice = -1;

document.getElementById("botao-frase").addEventListener("click", function() {
    indice = (indice + 1) % frases.length;
    document.getElementById("frases").textContent = frases[indice];
});