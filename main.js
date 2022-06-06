/*
    * Basic Functionality
    TODO: Create Basic Mathematic Operations
    TODO: Create a function that gets two numbers an performs an operation
*/

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

let storage = [];

const numButtons = document.querySelector(".buttons");
numButtons.addEventListener("click", inputNum);

const operateButtons = document.querySelector(".buttons");
operateButtons.addEventListener("click", operateNum);

const display = document.querySelector(".display");

function inputNum(event) {
    const { value } = event.target.dataset;
    let intValue = parseInt(value);

    console.log(`Value: ${intValue} Type: ${typeof intValue}`);

    if (!isNaN(value)) {
        console.log("Clicked");
        display.value += value;
    }
}

function operateNum(event) {
    const { value } = event.target.dataset;
    let total;
    let intValue = parseInt(value);

    if (isNaN(intValue)) {
        console.log("Operation");

        let tempValue = parseInt(display.value);
        storage.push(tempValue);

        if (storage.length == 1) {
            display.value = "";
        } else if (storage.length == 2) {
            switch (value) {
                case "+":
                    total = display.value = sumOfNum(storage[0], storage[1]);

                    break;
                case "-":
                    total = display.value = diffOfNum(storage[0], storage[1]);

                    break;
                case "*":
                    total = display.value = prodOfNum(storage[0], storage[1]);

                    break;
                case "/":
                    total = display.value = quoOfNum(storage[0], storage[1]);

                    break;
            }
            storage.pop();
            storage.pop();
        }
        console.table(storage);
        storage.length;
    }
}
