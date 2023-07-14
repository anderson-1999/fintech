function excluirNotificacao() {
    botoes = document.querySelectorAll('main button');
    for (var i = 0; i < botoes.length; i++) {
        let botao = botoes[i];
        botao.addEventListener("click", function() {
            console.log(botao.id);
            let div = document.getElementById(botao.id);
            div.parentNode.removeChild(div);
        });
        console.log(botoes);
    }
    
}

var botoes;
