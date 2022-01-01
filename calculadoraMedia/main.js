function Calcular() {
    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);
    const nota4 = parseInt(document.getElementById('nota4').value);

    const somaNotas = nota1 + nota2 + nota3 + nota4;

    const calculoMedia = somaNotas / 4;

    
    console.log(nota1);
    console.log(nota2);
    console.log(nota3);
    console.log(nota4);

    console.log(somaNotas);

    const resultado = document.getElementById("resultado");

    if (calculoMedia >= 5) {

        const console = "Parabéns, você passou, sua média é " + calculoMedia;
        resultado.innerHTML = console;
    } else {
        
        const console = "Puts, você reprovou, sua média é " + calculoMedia;
        resultado.innerHTML = console;
    }
}

function Reset(){
    window.location.reload();
}

