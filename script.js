let selecionado;
let comida = null;
let bebida = null;
let sobremesa = null;

    function selecionarPrato(seletor){
        const addSelecionado = document.querySelector("."+seletor)
        const selecionado = document.querySelector(".pratos .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        
        addSelecionado.classList.add("selecionado")
        return comida = "1";
    }
    function selecionarBebida(seletor){
        const selecionado = document.querySelector(".bebidas .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
        return bebida = '1';
    }
    function selecionarSobremesa(seletor){
        const selecionado = document.querySelector(".sobremesas .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
        return sobremesa = '1';
    }
    function verificaSelecao(){
        
        if ((comida !== null) && (bebida !== null) && (sobremesa !== null)){
            let botaoFinalizar = document.querySelector("footer button")
            let textoFinalizarp = botaoFinalizar.querySelector("p")
            textoFinalizarp.textContent = "Fechar pedido"
            let textoFinalizarspan = botaoFinalizar.querySelector("span")
            textoFinalizarspan.style.display = "none"
            botaoFinalizar.style.backgroundColor = "#32B72F"
        }
    }
    verificaSelecao()


// CRIA UMA FUNCAO PARA LIMPAR OS DADOS
// faz um loop e transforma todas bordas em branco

// CRIA UMA FUNCAO -- SELECIONA E TRANSFORMA OS DADOS
// transforma o prato selecionado em verde
// transforma o verificador de pratos selecionados para true

// CRIA UMA FUNCAO ---- VERIFICA SE OS REQUISITOS FORAM CUMPRIDOS
// verifica se todos os requisitos são true ---- se todos forem true libera o botao para finalizar
