//recuperando o atributo na página HTML
const saldo = document.querySelector('[saldo]');

//imprimimdo valor do atributo
console.log(saldo.textContent);

//alterando valor do atributo
setTimeout(function() { 
    saldo.textContent = '3,00';
    console.log(saldo.textContent);
}, 5000);
