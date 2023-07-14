const pop = document.querySelector('main');
const divMain = document.createElement('div');
divMain.className = 'divMain col-6 col-lg-3'
var indexPopUP = 0;

function newPopup() {
    const p = document.createElement('p');
    const div = document.createElement('div');
    
    const botao = document.createElement('button');
    
    p.className = 'd-flex flex-wrap justify-content-start';
    botao.className = 'bi bi-x-circle-fill d-flex align-items-center';
    div.className = 'd-flex justify-content-end border border-dark divPopUp';
    div.id = indexPopUP;
    botao.id = indexPopUP;

    p.className = 'textPopUp';
    p.textContent = 'Voçê recebeu uma transferencia de R$ 1,00';
    div.append(p);
    div.append(botao);

    divMain.append(div);
    pop.append(divMain);
    indexPopUP++;
    excluirNotificacao();

}