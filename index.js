const addOperation = function(num1, num2) {
    return num1 + num2
};

const subtractOperation = function(num1, num2) {
    return num1 - num2
};

const multiplyOperation = function(num1, num2) {
    return num1 * num2
};

const divideOperation = function(num1, num2) {
    return num1 / num2
};

const operate = function(operator, num1, num2) {
    if (operator == "+") {
       return addOperation(num1, num2)
    } else if (operator == "-") {
        return subtractOperation(num1, num2)
    } else if (operator == "*") {
        return multiplyOperation(num1, num2)
    } else if (operator == "/") {
        return divideOperation(num1, num2)
    } else {
        return "Error"
    }
};

let working = document.querySelector("#working");
let displayText = document.querySelector("#main-display");
let displayArr = [];
let firstArgument = null;
let secondArgument = null;
let operatingArgument = null;


function updateDisplay(e) {
    displayArr.push(e.target.textContent);
    let updatedDisplay = displayArr.join('');
    displayText.textContent = updatedDisplay;
};

function deleteCharacter() {
    displayArr.pop();
    if (displayArr.length == 0) {
        reset();
    } else if (displayArr.length == 1 && displayArr[0] == "-") {
        reset();
    } else {
        let updatedDisplay = displayArr.join('');
        displayText.textContent = updatedDisplay;
    }
};

function reset() {
    displayArr = [];
    displayText.textContent = 0;
}

function toggleSign() {
    if (displayArr[0] == "-") {
        displayArr.shift();
    } else {
        displayArr.unshift("-");
    }
    let updatedDisplay = displayArr.join('');
    displayText.textContent = updatedDisplay;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {number.addEventListener('click', updateDisplay)});

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {operator.addEventListener('click', setOperator)});

const del = document.querySelector("#del");
del.onclick = deleteCharacter;

const clear = document.querySelector("#clear");
clear.onclick = reset;

const posOrNeg = document.querySelector("#plus-minus");
posOrNeg.onclick = toggleSign;
