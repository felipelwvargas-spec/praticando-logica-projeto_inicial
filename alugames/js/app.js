function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let r = confirm("Deseja continuar?");
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (r == true) {
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
        }
    }
    else{
        let x = "Você pressionou Cancelar!";
    }



    // alert(nomeJogo.textContent);
}
