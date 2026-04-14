import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { CalculatorService } from './services/calculator.service';

const calculator = new CalculatorService();
const terminal = readline.createInterface({ input, output });

async function iniciarCalculadora() {
    console.log('--- BIENVENIDO A MI CALCULADORA ---');

    try {
        const numero1Str = await terminal.question('Escribí el primer número: ');
        const numero2Str = await terminal.question('Escribí el segundo número: ');

        console.log('\nPodés elegir: sumar, restar, multiplicar o dividir');
        const operacion = await terminal.question('¿Qué operación querés hacer?: ');

        const n1 = parseFloat(numero1Str);
        const n2 = parseFloat(numero2Str);

        if (isNaN(n1) || isNaN(n2)) {
            console.log('\n¡Error! Tenés que poner números válidos.');
        } else {
            const resultado = calculator.calcular(n1, n2, operacion.toLowerCase().trim());
            console.log(`\nEl resultado es: ${resultado}`);
        }
    } catch (error) {
        console.log('Hubo un problema:', error);
    } finally {
        terminal.close();
    }
}

iniciarCalculadora();
