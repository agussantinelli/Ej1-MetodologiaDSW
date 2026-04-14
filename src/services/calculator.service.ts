export class CalculatorService {
  calcular(a: number, b: number, operacion: string): number | string {
    switch (operacion) {
      case 'sumar':
        return a + b;
      case 'restar':
        return a - b;
      case 'multiplicar':
        return a * b;
      case 'dividir':
        return b !== 0 ? a / b : 'Error: División por cero';
      default:
        return 'Operación no válida';
    }
  }
}
