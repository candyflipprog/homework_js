const value = 73;

let firstNum = Math.floor(value % 10);
let secondNum = Math.floor(value % 100 / 10);

let currentValue = `${firstNum}${secondNum}`;

console.log("Результат:", currentValue);
