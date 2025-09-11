let amigos = [];
function adicionar(){
    let nomeAmigo   = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';  
    //console.log (nomeAmigo);
    //console.log (listaAmigos);
}
function sortear(){
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < amigos.length; i++ ){
        if(i == amigos.length -1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' ==> ' + amigos[0] + '<br>'
        }else{
         listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' ==> ' + amigos[i + 1] + '<br>'
        }
    }
}
function embaralha(lista) {
    
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar(){
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}