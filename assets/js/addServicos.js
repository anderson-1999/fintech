//recuperando o tbody, vou adicionar o valore e os serviços
const tbody = document.querySelector('tbody');

// adicionando o escutador para evento submit
document.querySelector('form').addEventListener('submit', function(e) {

  //cancelando o evento submit padrão
  e.preventDefault();   
    
  //agora ele irá executar o bloco da função

  //pegando todos os serviços
  const checkbox = document.querySelectorAll('input');
  const novoServico = {};
  const valor = document.querySelectorAll('label');
  const novoValor = {};
  let corrigirContent;
  //index criado para intinerar arrays com valores inicialmente nulo
  let index = 0;
  
  //selenciondo os serviços
  for(let i = 0; i < valor.length; i++ ){
    //checando quais foram os serviços escolhidos
    if(checkbox[i].checked == true) {
      //colocando os serviços nos marcados
      novoServico[index] = checkbox[i].value;
      corrigirContent = valor[i].textContent.split(' valor ');
      novoValor[index] = corrigirContent[1];
      index++;
    }
  }
  
  //percorrendo o objeto para escrever na tela
  for(let i = 0; i < index ; i++) {
    
    //pegando linha da tabela de serviços 
    const tdInicial = document.querySelectorAll('td');
    //utilizar primeiro index do array para subistir a resposta padrão
    const textInicial = tdInicial[0].textContent;
    //checado se a tabela ainda não foi modificada
    if(textInicial == 'Nenhum Serviço adicionado') {
      //trocando o valor da primeira tr da tbody
      tdInicial[0].textContent = novoServico[i];
      tdInicial[1].textContent = novoValor[i];
      tdInicial[2].textContent = null;
    }
    // criando a tr 
    const tr = document.createElement('tr');
    // criando as td
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    //boolean adiciona para impedir que um elemento repitido seja inserido na tabela
    let isValorUnico = true;

    //colondo os serviços na td
    td1.textContent = novoServico[i];
    td2.textContent = novoValor[i];
    td3.className = 'bi bi-info-circle-fill';

    //checando se o serviço já está na tabela
    tdInicial.forEach(campo => {
      if(campo.textContent == td1.textContent) {
        isValorUnico = false;
      }
    })
  
    if(isValorUnico) {
      
        //colocando a td na tr
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      //colocando a tr no tbody
      tbody.appendChild(tr);
    }
  }
  
  //limpando o form
  this.reset();
})