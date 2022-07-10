function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function updateScreen(e) {
    if (this.textContent === 'AC') {
        screenText.textContent = '';
    }
    else {
        screenText.textContent = screenText.textContent + this.textContent;
    }
}

function operate(operator, num1, num2) {
    switch(operator) {
        case add:
            return add(num1, num2);
            break;
        case subtract:
            return subtract(num1, num2);
            break;
        case multiply:
            return multiply(num1, num2);
            break;
        case divide:
            return divide(num1, num2);
            break;
    }
}

const screenText = document.querySelector('.numbers');

const numButtons = document.querySelector('.numButtons').childNodes;
numButtons.forEach(numButton => {
    numButton.addEventListener('click', updateScreen);
});