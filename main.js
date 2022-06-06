/*
    * Basic Functionality
    TODO: Create Basic Mathematic Operations
    TODO: Create a function that gets two numbers an performs an operation
*/
let inputString = [];

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

const sumOfNum = function (a, b) {
    return a + b;
};

const diffOfNum = function (a, b) {
    return a - b;
};

const prodOfNum = function (a, b) {
    return a * b;
};

const quoOfNum = function (a, b) {
    return a / b;
};

const printDisplay = function (event) {
    const { value } = event.target.dataset;

    const operators = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const equals = ["="];

    if (operators.indexOf(value) != -1) {
        console.log("Operation");

        display.value += ` ${value} `;
    } else if (numbers.indexOf(value) != -1) {
        console.log("Numbers");

        display.value += value;
    } else if (equals.indexOf(value) != -1) {
        console.log("Equals");

        display.value = calculate();
    }
};

const calculate = function () {
    inputString = display.value.split(" ");

    firstNum = parseFloat(inputString[0]);
    secondNum = parseFloat(inputString[2]);

    console.log(`${firstNum} ${secondNum}`);

    switch (inputString[1]) {
        case "+":
            return sumOfNum(firstNum, secondNum);

        case "-":
            return diffOfNu(firstNum, secondNum);

        case "*":
            return prodOfNum(firstNum, secondNum);

        case "/":
            return prodOfNum(firstNum, secondNum);

        default:
    }
    console.table(inputString);
};

buttons.addEventListener("click", printDisplay);
