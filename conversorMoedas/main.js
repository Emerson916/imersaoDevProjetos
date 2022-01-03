function Converter(){
    const valorElemento = document.getElementById("valor");
    const valor = valorElemento.value;
    const valorDolar = parseFloat(valor);

    const valorEmReal = valorDolar * 5.60;

    const valorEmRealCurto = valorEmReal.toFixed(2);

    //pega um elemento "id" do HTML
    const elementoConvertido = document.getElementById("valorConvertido");

    const valorConvertido = "O resultado em real é R$" + valorEmRealCurto;

   

    //pega um elemento do HTML e joga na tela a váriavel "valorConvertido"
    elementoConvertido.innerHTML = valorConvertido;
}

