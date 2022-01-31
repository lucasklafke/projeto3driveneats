let selecionado;
let comida = null;
let bebida = null;
let sobremesa = null;
let precoPrato = null;
let precoBebida = null;
let precoSobremesa = null;
let total = 0;
    
function selecionarPrato(seletor){
        const addSelecionado = document.querySelector("."+seletor)
        const selecionado = document.querySelector(".pratos .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }       
        addSelecionado.classList.add("selecionado")

        const nomePrato = addSelecionado.querySelector("h3").textContent
        const preco = addSelecionado.querySelector("span").textContent
        return comida = nomePrato ,precoPrato = preco ;
    }
    function selecionarBebida(seletor){
        const selecionado = document.querySelector(".bebidas .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
        const nomeBebida = addSelecionado.querySelector("h3").textContent
        const preco = addSelecionado.querySelector("span").textContent
        return bebida = nomeBebida ,precoBebida = preco ;
    }
    function selecionarSobremesa(seletor){
        const selecionado = document.querySelector(".sobremesas .selecionado")
        if (selecionado !== null) {
            selecionado.classList.remove("selecionado")
        }
        const addSelecionado = document.querySelector("."+seletor)
        addSelecionado.classList.add("selecionado")
        const nomeSobremesa = addSelecionado.querySelector("h3").textContent
        const preco = addSelecionado.querySelector("span").textContent
        return sobremesa = nomeSobremesa ,precoSobremesa = preco ;
    }
    function verificaSelecao(){
        
        if ((comida !== null) && (bebida !== null) && (sobremesa !== null)){
            let botaoFinalizar = document.querySelector("footer button")
            botaoFinalizar.style.backgroundColor = "#32B72F"   

            let textoFinalizarp = botaoFinalizar.querySelector(".finalizado")
            textoFinalizarp.innerHTML = "Fechar pedido"
            let textoFinalizarspan = botaoFinalizar.querySelector("span")
            textoFinalizarspan.style.display = "none"
        }
    
    }
    function finalizado(){
        total = (precoPrato + precoBebida + precoSobremesa)
        let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${comida} ${precoPrato}\n- Bebida: ${bebida}${precoBebida}\n- Sobremesa: ${sobremesa} ${precoSobremesa}`  
        window.open(`https://wa.me/5551985951423?text=${encodeURIComponent(mensagem)}`)
    }
    verificaSelecao()


// CRIA UMA FUNCAO PARA LIMPAR OS DADOS
// faz um loop e transforma todas bordas em branco

// CRIA UMA FUNCAO -- SELECIONA E TRANSFORMA OS DADOS
// transforma o prato selecionado em verde
// transforma o verificador de pratos selecionados para true

// CRIA UMA FUNCAO ---- VERIFICA SE OS REQUISITOS FORAM CUMPRIDOS
// verifica se todos os requisitos são true ---- se todos forem true libera o botao para finalizar
