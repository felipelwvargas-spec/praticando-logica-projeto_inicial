function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaDeNumerosSorteados = [];
    let numero;
    let resultado = document.getElementById('resultado');
    if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
    }
    if (quantidade > (ate - de +1)){
            alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
            return;
    }
    // loop
    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        while(listaDeNumerosSorteados.includes(numero)){
            numero= gerarNumeroAleatorio (de,ate);
         //   alert('Tentando obter número inédito');
        }
        listaDeNumerosSorteados.push(numero);
    }
    //  let listaDeNumerosSorteados = gerarNumeroAleatorio(de,ate) ;
    console.log("Quantidade:", quantidade);
    console.log("De:", de);
    console.log("Até:", ate);
    console.log("listaDeNumerosSorteados:", listaDeNumerosSorteados);
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaDeNumerosSorteados}</label>`;
    alterarStatusBotaoParaAtivo();
    alterarStatusSortearParaInativo();
    

}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoParaAtivo(){
    let btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar.classList.contains('container__botao-desabilitado')){
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    }//else{
       // btnReiniciar.classList.add('container__botao-desabilitado');
     //   btnReiniciar.classList.remove('container__botao');
   // }
}
function alterarStatusBotaoParaInativo(){
    let btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar.classList.contains('container__botao')){
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }    
}
function reiniciar (){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotaoParaInativo();
    alterarStatusSortearParaAtivo();

}

function alterarStatusSortearParaInativo(){
    let btnSortear = document.getElementById('btn-sortear');
    if (btnSortear.classList.contains('container__botao')){
        btnSortear.classList.remove('container__botao');
        btnSortear.classList.add('container__botao-desabilitado');
    }  
}
function alterarStatusSortearParaAtivo(){
    let btnSortear = document.getElementById('btn-sortear');
    if (btnSortear.classList.contains('container__botao-desabilitado')){
        btnSortear.classList.remove('container__botao-desabilitado');
        btnSortear.classList.add('container__botao');
    }  
}