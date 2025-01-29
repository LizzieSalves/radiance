const navContainer = document.getElementById('nav-mobile');
const btnBurguerNav = document.getElementById('btn-burguer');
const nav = document.querySelector('nav');

let navBarTaAberta = false;

function navMobileMostrar() {

    if (navBarTaAberta) return; // Se a nav ja estiver aberta saia da funcao

    //* Dica: Toda vez que voce usar um return , c ta dizendo que a funcao vai acabar ali pois toda funcao tem um return implicito no final

    navBarTaAberta = true; // Cliquei no btn-burguer e "boom" nav bar agr ta aberta, logo atualiza o valor da varivel 

    navContainer.style.display = 'block';

    nav.style.backgroundColor = '#DA60E0';

    document.addEventListener('click', verificaCliqueForaTela ); // Evento de clique em qualquer lugar da tela chama a funcao verificaCliqueForaTela
    
    document.addEventListener('touchend', verificaCliqueForaTela);
}



function verificaCliqueForaTela(event) { 

    //*Dica: Toda vez que uma funcao dentro de um eventListeiner receber um parametro exemplo "event", ele recebe um "objeto" com contendo varias informacoes sobre o evento que aconteceu


    // Se o elemento que disparou o evento for diferente do btn burguer ou de qualquer elemento presente na tag nav, feche a navbar
    if (event.target !== btnBurguerNav && !nav.contains(event.target)) {
        ocultarNav();
    }

    //*Dica: event.target é o elemento que disparou o evento
    //* Olha no console o que acontece quando vc clica fora e dentro do botao
    console.log(event.target);
    
}

function ocultarNav() {

    navContainer.style.display = 'none';
    navBarTaAberta = false; // Navbar ta fechada entao atualiza o valor da varivel

    //remove os eventos adicionados
    document.removeEventListener('click', verificaCliqueForaTela);
    document.removeEventListener('touchend', verificaCliqueForaTela);
}

