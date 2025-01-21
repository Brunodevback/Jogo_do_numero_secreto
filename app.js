let listadeNumerosSorteados = [ ];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
function textoInicial(){
    exibirTextonaTela("h1", "Jogo do número secreto");
    exibirTextonaTela("p", "Escolha um número entre 1 e 100");
}
textoInicial();

function verificarChute(){
    let chute = document.querySelector ("input").value;
   
    if (chute == numeroSecreto){
        exibirTextonaTela('h1', 'ACERTOU!')
        let palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa'
        let numeroTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTent}!`);
        exibirTextonaTela('P', numeroTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled')
    } else{
        if (chute > numeroSecreto) {
            exibirTextonaTela('p','O número secreto é menor!');
        } else {
            exibirTextonaTela('p', 'O número secreto é maior!');
            tentativas++
            limparCampo()
        }
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElemento = listadeNumerosSorteados.length;

    if (quantidadeElemento == numeroLimite) {
        listadeNumerosSorteados = [ ];
    }

   if (listadeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listadeNumerosSorteados.push(numeroEscolhido)
    console.log(listadeNumerosSorteados);
    
    return numeroEscolhido
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true)
}
//mudança teste..
//mudança 2.