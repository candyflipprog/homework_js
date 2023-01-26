const value = 596;

let firstNum = Math.floor(value % 10);
let secondNum = Math.floor(value / 10 % 10);
let thirdNum = Math.floor(value / 100);

let result = firstNum + secondNum + thirdNum;
let multiplication_result = firstNum * secondNum * thirdNum;
console.log("Результат сложения:", result);
console.log("Результат умножения:", multiplication_result);
