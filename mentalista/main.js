const numeroSecreto = parseInt(Math.random() * 11);

function Chutar(){
    const resultado = document.getElementById("resultado");
    
    const chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSecreto){
        resultado.innerHTML = "Você acertou";
    }else if(chute > 10 || chute < 0){
        resultado.innerHTML = "Você deve digitar um númerode 0 a 10";

    }else{
        resultado.innerHTML = "Errou!!,  o número secreto era " + numeroSecreto;
    }

}



