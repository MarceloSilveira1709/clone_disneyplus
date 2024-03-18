document.addEventListener('DOMContentLoaded', function() {   //ve quando Dom terminou de carregar
    const buttons = document.querySelectorAll('[data-tab-button]'); //pega todos os botoes 'data-tab-button' é um Array
    const questions = document.querySelectorAll('[data-faq-question]'); // pega todos questions da 'data-faq-question'

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;  //pega a posição atual do scroll

        if (posicaoAtual < alturaHero) {  //quando posiçao atual menor que altura hero ele oculta//
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader(); // se nao exibe
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {  //enquanto i menor que nomero de botoes I encrementa
        buttons[i].addEventListener('click', function(botao) { // pega o evento de click
            const abaAlvo = botao.target.dataset.tabButton; //
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); //querySelector pesquisa entre o 'data-tab-id' que o valor seja = abaAlvo
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active'); // adiciona a classe is active
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header'); // oculta no header 
    header.classList.add('header--is-hidden'); // classe a ser oculta
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); //pega todos os botoes 'data-tab-id' 

    for (let i = 0; i < tabsContainer.length; i++) { //enquanto i menor que numero de tabsContainer encrementa I
        tabsContainer[i].classList.remove('shows__list--is-active'); // remove da aba is active
    }
}