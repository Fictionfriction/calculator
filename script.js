function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

function updateScreen(e) {
    if (this.textContent === 'AC') {
        screenText.textContent = '';
        num1 = '';
        num2 = '';
        wipe = 0;
        operator = '';
    }
    else {
        checkOperator(this.textContent);
    }
}

function checkOperator(button) {
    if (operator == '') {
        if (answer === 1) {
            screenText.textContent = button;
            num1 = button;
            answer = 0;
        }
        else {
            screenText.textContent = screenText.textContent + button;
            checkNum();
        } 
    }
    else {
        if (wipe === 0) {
            screenText.textContent = '';
            screenText.textContent =
                screenText.textContent + button;
            wipe++;
            checkNum();
        }
        else {
            screenText.textContent = screenText.textContent + button;
            checkNum();
       }
    }
}

function checkNum() {
    operator === '' ?
            num1 = screenText.textContent : num2 = screenText.textContent
}

function operateScreen(e) {
    if (num1 === '') {
        screenText.textContent = '';
    }
    else {
        checkEquals(this.textContent);
        if (screenText.textContent !== "Not allowed :(") {
            operator = this.textContent;
        }
    }
}

function checkEquals(operatorGiven) {
    if (operatorGiven === '=') {
        if (num2 === '') {
            return;
        }
        else if (operator !== '/' || num2 !== '0') {
            screenText.textContent = operate(operator, num1, num2);
            num1 = screenText.textContent;
            num2 = '';
            operator = '';
            wipe = 0;
            answer = 1;
        }
        else {
            screenText.textContent = "Not allowed :(";
            num1 = '';
            num2 = '';
            wipe = 0;
            operator = '';
            answer = 1;
        }
    }
    else if (num2 !== '') {
        if (operator !== '/' || num2 !== '0') {
            screenText.textContent = operate(operator, num1, num2);
            num1 = screenText.textContent;
            num2 = '';
            operator = '';
            wipe = 0;
            answer = 1;
        }
        else {
            screenText.textContent = "Not allowed :(";
            num1 = '';
            num2 = '';
            wipe = 0;
            operator = '';
            answer = 1;
        }
    }
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'X':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

let num1 = '';
let num2 = '';
let operator = '';
let wipe = 0;
let answer = 0;

const screenText = document.querySelector('.numbers');

const numButtons = document.querySelector('.numButtons').childNodes;
numButtons.forEach(numButton => {
    numButton.addEventListener('click', updateScreen);
});

const opButtons = document.querySelector('.opButtons').childNodes;
opButtons.forEach(opButton => {
    opButton.addEventListener('click', operateScreen);
});