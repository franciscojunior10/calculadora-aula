const calc = require('./calc')
const prompt = require('prompt-sync')();

function options() {
    console.log(`
    1 - somar
    2 - subtrair
    3 - multiplicar
    4 - dividir
    0 - sair
    `)
}

function calculadora(value) {
    const num1 = Number(prompt('Informe o primeiro número: '));
    const num2 = Number(prompt('Informe o segundo número: '));

    if (value === '1') {
        return calc.somar(num1, num2);
    }

    if (value === '2') {
        return calc.subtrair(num1, num2);
    }

    if (value === '3') {
        return calc.multiplicar(num1, num2);
    }

    if (value === '4') {
        return calc.dividir(num1, num2);
    }

    return 0;
}

let value;
const results = [];
let user = {
    name: ''
};

console.log('Olá, bem vindo a nossa calculadora');
user.name = prompt('Informe seu nome: ');

while (value !== '0') {
    options();
    value = prompt('Informe uma opção: ');

    if (value !== '0') {
        const result = calculadora(value);
        results.push(result);
        console.log();
        console.log(`O resultado da operação foi: ${result}`);
    }
}

console.log(`\nObrigado ${user.name} volte sempre\n`);
console.log(`Resultados: ${results}\n`);