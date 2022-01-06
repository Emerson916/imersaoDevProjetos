function Converter(){
    var selectedValue = document.getElementById("moeda").value;
    const valorElemento = document.getElementById("valor").value;
   
    console.log(selectedValue);

    const valorMoeda = parseFloat(valorElemento);
    var valorSelect = parseFloat(selectedValue);

     //pega um elemento "id" do HTML
    const elementoConvertido = document.getElementById("valorConvertido");


    if(valorSelect == 0){
        const valorNulo = "Escolha uma moeda para converter!!"
        elementoConvertido.innerHTML = valorNulo;
    }else 
    
    if(valorMoeda == 0){
        const moedaNulo = "Você precisa adicionar um valor";
        elementoConvertido.innerHTML = moedaNulo;
    }else{

        const valorEmReal = valorMoeda * valorSelect;
        const valorEmRealCurto = valorEmReal.toFixed(2);

        const valorConvertido = "O resultado em real é R$" + valorEmRealCurto;
    
   
        //pega um elemento do HTML e joga na tela a váriavel "valorConvertido"
        elementoConvertido.innerHTML = valorConvertido;
    }   
}

