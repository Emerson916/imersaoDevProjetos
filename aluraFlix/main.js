// const listaFilmes = [
//     //Pegar URLs de imagens e colocar aqui
// ];

// for (const i = 0; i < listaFilmes.length; i++) {
//     document.write("<img src=" + listaFilmes[i]  + ">")
// }

function adicionarFilme() {
    const filmeFavorito = document.getElementById("filme").value;

    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmes(filmeFavorito)
    } else {
        console.error("endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
    const elementoFilmeFavorito = "<img src=" + filme + ">";
    const listaFilmes = document.getElementById("listaFilmes")
    listaFilmes.innerHTML =
        listaFilmes.innerHTML + elementoFilmeFavorito;
}