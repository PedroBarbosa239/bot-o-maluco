function nao() {
    const botaoUM = document.querySelector('#botao2');

    var altura = Math.floor(Math.random() * 300)- 300;
    var largura = Math.floor(Math.random() * 300)- 200;

    botaoUM.style.marginTop = `${altura}px`;
    botaoUM.style.marginLeft = `${largura}px`;
}

function sim() {
    const texto = document.querySelector('#texto');
    const aviso = document.querySelector('#aviso');

    texto.innerHTML = "Ótimo";
    aviso.style.display = "none";
}