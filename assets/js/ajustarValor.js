//recuperando o atributo na página HTML
const saldo = document.querySelector('[saldo]');

//imprimimdo valor do atributo
console.log(saldo.textContent);

//alterando valor do atributo
let recebeValor = Number.parseFloat(saldo.textContent);


function atrasarSaldo() {
    saldo.textContent = '3,00';
    newPopup();
}
setTimeout(atrasarSaldo, 1000);
