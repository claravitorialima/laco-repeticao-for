let numero = Number (prompt("Adicione um número, por favor"));
let sequencia = "";

for (let i = 1; i <= numero; i++){
    sequencia = `${sequencia} ${i}`;
}
alert (sequencia);