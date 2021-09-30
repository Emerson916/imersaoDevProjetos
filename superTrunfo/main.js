const carta1 = {
    nome: "Wall-e",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

const carta2 = {
    nome: "Wallace",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

const carta3 = {
    nome: "Link",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};


const baralho = [carta1, carta2, carta3];

var cartaMaquina = 0;
var cartaJogador = 0;



function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = baralho[numeroCartaMaquina];
   
   

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }

    cartaJogador = baralho[numeroCartaJogador];
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
    
}



function exibirOpcoes(){
    const opcoes = document.getElementById("opcoes")
    var opcoesTextos = "";


    for (const atributo in cartaJogador.atributos){
       opcoesTextos +=
             "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTextos;
}

function obtemAtributoSelecionado(){
    const radioAtributos = document.getElementsByName("atributo");

    for (const i = 0; i < radioAtributos.length; i++ ) {
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }

    }
}

function jogar(){
    const atributoSelecionado = obtemAtributoSelecionado()
    const elementoResultado = document.getElementById("resultado")
    const valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    const valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu"
    } else if (valorCartaMaquina > valorCartaJogador){
        elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior"
    }else {
        elementoResultado.innerHTML = "Empatou"
    }

}

