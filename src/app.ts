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

        console.log('\nElegí la operación por su número:');
        console.log('1. Sumar');
        console.log('2. Restar');
        console.log('3. Multiplicar');
        console.log('4. Dividir');

        const opcion = await terminal.question('\nOpción: ');

        const n1 = parseFloat(numero1Str);
        const n2 = parseFloat(numero2Str);

        if (isNaN(n1) || isNaN(n2)) {
            console.log('\n¡Error! Tenés que poner números válidos.');
        } else {

            const opciones: Record<string, string> = {
                '1': 'sumar',
                '2': 'restar',
                '3': 'multiplicar',
                '4': 'dividir'
            };

            const operacion = opciones[opcion] || 'invalida';
            const resultado = calculator.calcular(n1, n2, operacion);

            console.log(`\nEl resultado es: ${resultado}`);
        }

        console.log('\n');
        await terminal.question('Presioná una tecla para continuar...');

    } catch (error) {
        console.log('Hubo un problema:', error);
    } finally {
        terminal.close();
    }
}

iniciarCalculadora();
