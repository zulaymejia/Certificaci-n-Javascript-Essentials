class Operations {
  addition;
  subtraction;
  multiplication;
  division;

  constructor() {}

  getAddition(a, b) {
    this.addition = a + b;
    return true;
  }

  getSubtraction(a, b) {
    this.subtraction = a - b;
    return true;
  }

  getMultiplication(a, b) {
    this.multiplication = a * b;
    return true;
  }

  getDivision(a, b) {
    this.division = a / b;
    return true;
  }
}

const operationsMate = new Operations();

console.log(operationsMate.getAddition(2, 2));
console.log(operationsMate.addition);
console.log(operationsMate.getSubtraction(2, 2));
console.log(operationsMate.subtraction);
console.log(operationsMate.getMultiplication(6, 2));
console.log(operationsMate.multiplication);
console.log(operationsMate.getDivision(8, 2));
console.log(operationsMate.division);
