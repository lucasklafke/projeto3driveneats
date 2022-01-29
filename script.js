let selecionado;

    function selecionarPrato(seletor){
        const selecionado = document.querySelector(".selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
    }



// CRIA UMA FUNCAO PARA LIMPAR OS DADOS
// faz um loop e transforma todas bordas em branco

// CRIA UMA FUNCAO -- SELECIONA E TRANSFORMA OS DADOS
// transforma o prato selecionado em verde
// transforma o verificador de pratos selecionados para true

// CRIA UMA FUNCAO ---- VERIFICA SE OS REQUISITOS FORAM CUMPRIDOS
// verifica se todos os requisitos são true ---- se todos forem true libera o botao para finalizar
// 