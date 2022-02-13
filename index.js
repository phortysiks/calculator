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
    if (num1 === Infinity || num2 === Infinity) {
        return "Error"
    } else {
        return num1 / num2
    }
};

const operate = function(operator, num1, num2) {
    if (operator == "+") {
       return addOperation(num1, num2)
    } else if (operator == "-") {
        return subtractOperation(num1, num2)
    } else if (operator == "×") {
        return multiplyOperation(num1, num2)
    } else if (operator == "÷") {
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
let evaluated = null;


function updateDisplay(e) {
    if (e.target.textContent == "0" && displayArr.length == 1) {
        displayArr = [0];
    } else if (e.target.textContent == "." && displayArr.includes(".")) {
        return
    }  else if (evaluated || evaluated == 0) {
        displayArr = [];
        evaluated = null;
        displayArr.push(e.target.textContent);
        let updatedDisplay = displayArr.join('');
        displayText.textContent = updatedDisplay;
    } else {
        displayArr.push(e.target.textContent);
        let updatedDisplay = displayArr.join('');
        displayText.textContent = updatedDisplay;
    }
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
    firstArgument = null;
    secondArgument = null;
    operatingArgument = null;
    working.textContent = 0;
    evaluated = null;
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

function setOperator(e) {
    if (displayArr.length == 0) {
        return
    } else if (displayArr.length == 1 && displayArr[0] == "-" ) {
        return
    } else if (evaluated || evaluated == 0) {
        operatingArgument = e.target.textContent;
        firstArgument = evaluated;
        working.textContent = `${firstArgument} ${operatingArgument}`;
        evaluated = null;
        displayArr = [];
    } else if (firstArgument || firstArgument == 0) {
        secondArgument = parseFloat(displayText.textContent);
        working.textContent = `${firstArgument} ${operatingArgument}`;
        firstArgument = evaluate();
        displayArr = [];
        operatingArgument = e.target.textContent;
    } else {
        firstArgument = parseFloat(displayText.textContent);
        displayArr = [];
        operatingArgument = e.target.textContent;
        working.textContent = `${firstArgument} ${operatingArgument}`;
    }
}

function evaluate() {
    if (firstArgument == null || operatingArgument == null) {
        return
    } else {
        secondArgument = parseFloat(displayText.textContent);
        working.textContent = `${firstArgument} ${operatingArgument} ${secondArgument}`;
        evaluated = operate(operatingArgument, firstArgument, secondArgument);
        displayText.textContent = evaluated;
        firstArgument = null;
        secondArgument = null;
        return evaluated;
    }
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

const equalsButton = document.querySelector('#equals');
equalsButton.onclick = evaluate;