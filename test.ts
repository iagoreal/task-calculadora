import * as readline from 'readline-sync';

function calcular(operador: string, num1: number, num2: number): number | null {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : null;
        default:
            return null;
    }
}

function main() {
    console.log("Calculadora Simples");

    const num1 = parseFloat(readline.question("Digite o primeiro número: "));
    const operador = readline.question("Digite o operador (+, -, *, /): ");
    const num2 = parseFloat(readline.question("Digite o segundo número: "));

    const resultado = calcular(operador, num1, num2);

    if (resultado !== null) {
        console.log(`Resultado: ${num1} ${operador} ${num2} = ${resultado}`);
    } else {
        console.log("Operador inválido ou divisão por zero!");
    }
}

main();