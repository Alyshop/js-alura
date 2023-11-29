let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'; 

function verificarChute(){
    console.log('O botao foi clicado');
}

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

function verificarAlerta(){
    alert('Eu amo JS');
}



function verificarPrompt(){
  let cidade = prompt('Fale o nome de uma cidade do Brasil?');
   alert(`Estive em ${cidade} e lembrei de voce`);
}

function verificarSoma(){

    let primeiroNumero = parseInt(prompt('Digite o primeiro numeros'));
    let segundoNumero = parseInt(prompt('Digite o segundo numero'));
    let resultado = primeiroNumero + segundoNumero;
     alert('A soma e : ' + resultado);
  }