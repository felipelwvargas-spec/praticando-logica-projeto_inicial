function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaDeNumerosSorteados = [];
    let numero;
    // loop
    for (let i = 0; i< quantidade; i++){
        numero = gerarNumeroAleatorio(de, ate);
        listaDeNumerosSorteados.push(numero);
    }

  //  let listaDeNumerosSorteados = gerarNumeroAleatorio(de,ate) ;
    console.log("Quantidade:", quantidade);
    console.log("De:", de);
    console.log("Até:", ate);
    console.log("listaDeNumerosSorteados:", listaDeNumerosSorteados);
}

function gerarNumeroAleatorio(min, max) {   
    return Math.floor(Math.random() * (max - min +1)) + min;    
}

