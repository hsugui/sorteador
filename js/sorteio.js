nome = [
    "Joãozinho",
    "Zequinha",
    "Mariazinha",
    "Joaquina",
    "Firmino",
    "Firmina"
];

function sorteador() {
    let sorteado = Math.floor(Math.random() * nome.length);
    return nome[sorteado];
}

let nomeSorteado = document.querySelector(".sorteado");

let botao = document.querySelector(".btn-sorteio");
botao.addEventListener("click", function() {
    nomeSorteado.textContent = sorteador();
    nomeSorteado.style.backgroundColor = "rgb(4, 105, 105)"
});