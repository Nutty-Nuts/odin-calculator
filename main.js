/*
    * Basic Functionality
    TODO: Create Basic Mathematic Operations
    TODO: Create a function that gets two numbers an performs an operation
*/
let inputString = [];

let equalState = false;

const history = document.querySelector(".history");
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
    const clear = ["C"];

    if (operators.indexOf(value) != -1) {
        console.log(inputString.length);

        inputString < 1 ? (history.value = `${display.value} ${value}`) : null;

        if (inputString.length == 1) {
            inputString.pop();
            inputString.push(display.value);
        } else {
            inputString.push(display.value);
        }

        if (inputString.length == 3) {
            display.value = calculate();

            inputString.push(value);
        } else {
            console.log("Operation");

            inputString.push(value);

            display.value = "";
        }
    } else if (numbers.indexOf(value) != -1) {
        console.log("Numbers");

        if (equalState) {
            display.value = "";
            history.value = `${inputString[0]} ${inputString[1]}`;

            equalState = false;
        } else {
        }
        display.value += value;
    } else if (equals.indexOf(value) != -1) {
        console.log("Equals");

        inputString.push(display.value);

        display.value = calculate();
    } else if (clear.indexOf(value) != -1) {
        display.value = "";
        history.value = "";
        inputString = [];
    }

    console.table(inputString);
};

const calculate = function () {
    console.table(inputString);

    equalState = true;

    firstNum = parseFloat(inputString[0]);
    secondNum = parseFloat(inputString[2]);

    console.log(`${firstNum} ${secondNum}`);

    history.value = "";

    switch (inputString[1]) {
        case "+":
            inputString = [];
            inputString.push(sumOfNum(firstNum, secondNum));
            return sumOfNum(firstNum, secondNum);

        case "-":
            inputString = [];
            inputString.push(diffOfNum(firstNum, secondNum));
            return diffOfNum(firstNum, secondNum);

        case "*":
            inputString = [];
            inputString.push(prodOfNum(firstNum, secondNum));
            return prodOfNum(firstNum, secondNum);

        case "/":
            inputString = [];
            inputString.push(quoOfNum(firstNum, secondNum));
            return quoOfNum(firstNum, secondNum);

        default:
    }
};

buttons.addEventListener("click", printDisplay);
