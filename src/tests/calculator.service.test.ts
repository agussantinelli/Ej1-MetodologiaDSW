import { describe, it, expect } from 'vitest';
import { CalculatorService } from '../services/calculator.service';

describe('CalculatorService', () => {
  const calculator = new CalculatorService();

  it('debería sumar correctamente 10 + 5', () => {
    expect(calculator.calcular(10, 5, 'sumar')).toBe(15);
  });

  it('debería restar correctamente 10 - 5', () => {
    expect(calculator.calcular(10, 5, 'restar')).toBe(5);
  });

  it('debería multiplicar correctamente 10 * 5', () => {
    expect(calculator.calcular(10, 5, 'multiplicar')).toBe(50);
  });

  it('debería dividir correctamente 10 / 5', () => {
    expect(calculator.calcular(10, 5, 'dividir')).toBe(2);
  });

  it('debería dar un mensaje de error al dividir por cero', () => {
    expect(calculator.calcular(10, 0, 'dividir')).toBe('Error: División por cero');
  });

  it('debería manejar una operación no válida', () => {
    expect(calculator.calcular(10, 5, 'volar')).toBe('Operación no válida');
  });
});
