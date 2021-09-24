const listaFilmes = [
    "o hobbiti",
    "hary poty",
    "a besta enjaulada"
];

listaFilmes.push("O labirinto do Fauno");

listaFilmes.push("hary potter 2");

listaFilmes.push("o mundo da lua");

const filme1 = "o hobbit";
const filme2 = "Hary Poty";
const filme3 = "Os rapazes Z";

//Experimente além do <p>, outras tags;

// document.write criar uma linha direto do Js
//basta passar uma tag HTML o elemento e fecha a tag;
// document.write("<p>" + listaFilmes[3] + "</p>");


// laço de repetição
const tamanhoLista = listaFilmes.length;

for (var indice = 0; indice < tamanhoLista;  indice++) {

    document.write("<p>" + indice + "</p>");
    document.write("<p>" + listaFilmes[indice] + "</p>");
}