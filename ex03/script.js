let numero = Number(prompt("Digite um número para a visualização da tabuada:"));
let resultado = "tabuada do" + numero + ":\n";

for (let i = 1; i <= 10; i++){
    let conta = numero * i;
    resultado += numero + "x" + i + "=" + conta +"\n";
}
alert (resultado);
