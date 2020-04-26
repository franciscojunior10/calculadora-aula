class Calc{
    constructor(){
        this.soma;
        this.subtrair;
        this.multiplicar;
        this.dividir;
    }

    somar(num1, num2) {
        return num1 + num2;
    }

    subtrair(num1, num2) {
        return num1 - num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    dividir(num1, num2) {
        return num2 === 0 ? 0 : num1 / num2;
    }
}

module.exports = new Calc();