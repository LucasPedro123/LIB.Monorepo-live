const sum = require('@lucas-pedro/sum');
const subtraction = require('@lucas-pedro/subtraction');
const multiplication = require('@lucas-pedro/multiplication');
const division = require('@lucas-pedro/division');

const calculadora = {
  sum: (a, b) => sum(a, b),
  subtraction: (a, b) => subtraction(a, b),
  multiplication: (a, b) => multiplication(a, b),
  division: (a, b) => {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return division(a, b);
  }
};

module.exports = calculadora;
