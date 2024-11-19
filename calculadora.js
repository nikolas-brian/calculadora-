
const display = document.getElementById('display');
const numeros = document.querySelectorAll('.num');
const operadores = document.querySelectorAll('.operador');
const limpar = document.getElementById('limpar');
const igual = document.getElementById('igual');

let primeiroNumero = '';
let operadorAtual = '';
let novoCalculo = false;

// Evento para números
numeros.forEach(numero => {
    numero.addEventListener('click', () => {
        if (novoCalculo) {
            display.value = '';
            novoCalculo = false;
        }
        display.value += numero.dataset.num;
    });
});

// Evento para operadores
operadores.forEach(operador => {
    operador.addEventListener('click', () => {
        if (display.value !== '') {
            if (primeiroNumero === '') {
                primeiroNumero = display.value;
                operadorAtual = operador.dataset.op;
                display.value = '';
            } else {
                calcular();
                operadorAtual = operador.dataset.op;
            }
        }
    });
});

// Botão de igual
if (igual) {
    igual.addEventListener('click', () => {
        calcular();
        novoCalculo = true;
    });
}

// Botão de limpar
if (limpar) {
    limpar.addEventListener('click', () => {
        display.value = '';
        primeiroNumero = '';
        operadorAtual = '';
    });
}

// Função de cálculo
function calcular() {
    if (primeiroNumero !== '' && display.value !== '') {
        let resultado;
        const num1 = parseFloat(primeiroNumero);
        const num2 = parseFloat(display.value);

        switch (operadorAtual) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
            default:
                return;
        }

        display.value = resultado;
        primeiroNumero = resultado.toString();
    }
}