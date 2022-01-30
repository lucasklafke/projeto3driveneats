let selecionado;
let comida = null;
let refrigerante = null;
let sobremesa = null;

    function selecionarPrato(seletor){
        const selecionado = document.querySelector(".pratos .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
    }
    function selecionarBebida(seletor){
        const selecionado = document.querySelector(".bebidas .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
    }
    function selecionarSobremesa(seletor){
        const selecionado = document.querySelector(".sobremesas .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
    }
    function verificaSelecao(){
        
        if ((comida !== null) && (refrigerante !== null) && (sobremesa !== null)){

        }
    }


// CRIA UMA FUNCAO PARA LIMPAR OS DADOS
// faz um loop e transforma todas bordas em branco

// CRIA UMA FUNCAO -- SELECIONA E TRANSFORMA OS DADOS
// transforma o prato selecionado em verde
// transforma o verificador de pratos selecionados para true

// CRIA UMA FUNCAO ---- VERIFICA SE OS REQUISITOS FORAM CUMPRIDOS
// verifica se todos os requisitos são true ---- se todos forem true libera o botao para finalizar
