let display = document.querySelector('.display input');
let buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operator = '';
let decimalAllowed = true; 

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function appendOperator(op) {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = op;
        decimalAllowed = true;
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function clearAll() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
    decimalAllowed = true;
}

function calculateResult() {
    if (currentNumber !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
            case '^':
                result = Math.pow(parseFloat(previousNumber), parseFloat(currentNumber));
                break;
        }
        display.value = result;
        currentNumber = result;
        previousNumber = '';
        operator = '';
        decimalAllowed = true; 
    }
}

function appendDecimal() {
    if (decimalAllowed) {
        currentNumber += '.';
        display.value = currentNumber;
        decimalAllowed = false; 
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonValue = button.innerText;
        if (buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === 'AC') {
            clearAll();
        } else if (buttonValue === '=') {
            calculateResult();
        } else if (isNaN(parseInt(buttonValue))) {
            appendOperator(buttonValue);
        } else if (buttonValue === '.') {
            appendDecimal();
        } else {
            appendNumber(buttonValue);
        }
    });
});
