// 1. criar uma calculadora 
// 2. ler as notas inseridas pelo aluno
// 3. calcular a media das notas
// 4. se a media for maior que 6, aluno aprovado . se não, aluno reprovado

let notas = [];

function adicionarNota() {
    const notasInput = document.getElementById("nota");
    const lista = document.getElementById("lista");
    const nota = parseFloat(notasInput.value);

        notas.push(nota);
        const li = document.createElement('li');
        li.textContent = `${nota}`;
        lista.appendChild(li);
        notasInput.value = ''; // Limpa o campo de entrada
}

function calcularMedia() {
    let somatoria = 0;
    let media = 0

    for ( let i = 0; i < notas.length; i ++){
        somatoria = somatoria + notas[i];
    }

    media = somatoria / notas.length;

    if ( media < 6){
        document.getElementById("resultado").innerHTML = `Média: ${media.toFixed(2)}`
    } else {
        document.getElementById("resultado").innerHTML = `Média: ${media.toFixed(2)}`
    }
}

function resetar(){
   resultado.innerHTML= "";
    lista.innerHTML="";
    notas = [];
}