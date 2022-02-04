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