const cartas = [
    {
        nome: "Hiruzen Sarutobi",
        imagem: "https://criticalhits.com.br/wp-content/uploads/2019/10/Hiruzen-Sarutobi-.jpg",
        atributos: {
            ataque: 8,
            defesa: 6,
            magia: 8
        }
    },

    {
        nome: "Spider-Man (Miles Morales)",
        imagem: "https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg",
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 6
        }
    },

    {
        nome: "Luffy Rebaixado",
        imagem: "https://pbs.twimg.com/media/E4vaWoDWUAYo34I.jpg",
        atributos: {
            ataque: 4,
            defesa: 3,
            magia: 1
        }
    },

    {
        nome: "Saitama",
        imagem: "https://i.redd.it/spolpm8eofd61.jpg",
        atributos: {
            ataque: 10,
            defesa: 10,  
            magia: 10
        }
    },

    {
        nome: "Jotaro Kujo",
        imagem: "https://getwalls.io/media/large/2020/04/jotaro-kujo-hd-4k-2020-iphone-pics-large-1862532459.jpg",
        atributos: {
            ataque: 7,
            defesa: 7,
            magia: 8
        }
    },

    {
        nome: "Totoro",
        imagem: "https://wallpaperaccess.com/full/33507.jpg",
        atributos: {
            ataque: 6,
            defesa: 5,
            magia: 7
        }
    },

    {
        nome: "wallace e gromit",
        imagem: "https://c4.wallpaperflare.com/wallpaper/676/438/386/wallace-and-gromit-animation-hd-wallpaper-preview.jpg",
        atributos: {
            ataque: 8,
            defesa: 5,
            magia: 2
        }
    },

    {
        nome: "Edward Eric",
        imagem: "https://images8.alphacoders.com/964/964785.png",
        atributos: {
            ataque: 7,
            defesa: 6,
            magia: 8
        }
    },

    {
        nome: "killua",
        imagem: "https://c4.wallpaperflare.com/wallpaper/616/450/559/anime-hunter-x-hunter-killua-zoldyck-hd-wallpaper-preview.jpg",
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 7
        }
    },

    {
        nome: "Wall-e",
        imagem: "https://images.hdqwalls.com/download/movie-wall-e-ad-3840x2160.jpg",
        atributos: {
            ataque: 7,
            defesa: 6,
            magia: 8
        }
    },

];

const baralho = cartas;


var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10)
    cartaMaquina = baralho[numeroCartaMaquina];
    console.log(cartaMaquina)


    var numeroCartaJogador = parseInt(Math.random() * 10)
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 10)
    }

    cartaJogador = baralho[numeroCartaJogador];

    console.log(cartaJogador)


    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;


    exibirCartaJogador()
}


function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    const atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado");

    // const elementoResultado = document.getElementById("resultado")
    const valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    const valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        HTMLResultado = "<p class='resultado-final'> Parabéns, você venceu! </p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
        HTMLResultado = "<p class='resultado-final'> Você perdeu, a carta da máquina é maior"
    } else {
        HTMLResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = HTMLResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina()
}

function exibirCartaJogador() {
    const divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    const tagHTML = "<div id='opcoes' class='carta-status' >"

    var opcoesTextos = "";
    for (const atributo in cartaJogador.atributos) {
        opcoesTextos +=
            "<input type='radio' name='atributo'  value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";

    }
    const nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTextos + "</div>"
}

function exibirCartaMaquina() {
    const divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    const tagHTML = "<div id='opcoes' class='carta-status' >"

    var opcoesTextos = "";
    for (const atributo in cartaMaquina.atributos) {
        opcoesTextos +=
            "<input type='radio' name='atributo'  value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";

    }
    const nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTextos + "</div>"

    document.getElementById("btnRecarregar").disabled = false;
}


function Reset() {
    window.location.reload();
}