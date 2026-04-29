let somaNotas = 0;

for (let i = 1; i <= 5; i++){
    let nota = Number(prompt("Digite as notas"));
    somaNotas = somaNotas + nota;
}

let media = somaNotas / 5;

alert ("A média das notas é " + media);