function somarValores(){
    let valorFinal = 0;
    const valores = document.querySelectorAll("tbody tr td");
    for(let i = 0; i < valores.length; i++) {
        if(i % 3 == 1){
            let numero = valores[i].textContent.replace(",", ".")
            valorFinal += Number.parseFloat(numero);
        }

    }
    const total = document.querySelectorAll("tfoot tr td");
    valorTratado = valorFinal.toFixed(2);
    total[1].textContent = valorTratado.replace(".", ",")
    

}