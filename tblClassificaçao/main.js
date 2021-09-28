//Criação de um objeto

const nome1 = {
    nome:"Emerson",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 10
}

const nome2 = {
    nome:"Clebinho",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 10
}

function calcularPontos(jogador){
    const pontos =  jogador.vitorias * 3 + jogador.empates
    return pontos;

}

nome1.pontos = calcularPontos(nome1)

console.log(nome1)

const jogadores = [nome1, nome2];

function exibirJogadores(jogadores){
    var elemento =""

    for (var i = 0;  i < jogadores.length; i++) {

    elemento +="<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=  " <td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>";
    elemento +=   " <td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento +=    "<td><button onClick='adicionarDerrota()'>Derrota</button></td>";
    elemento += "</tr>";
    }

    const tblJogadores = document.getElementById("tabelaJogadores");
    tblJogadores.innerHTML = elemento;
}

exibirJogadores(jogadores);

function adicionarVitoria(i) {
    const jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador);
    exibirJogadores(jogadores)
}