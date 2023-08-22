// STUFF TO DO //
// needs graphical revamp
// needs a footer with your name & copyright logo

// code mostly works like this:
// we have an empty array called "calculus"
// if this array has an index of 2 (3 items), it is ready to perform an operation (i,e. ['3', '+', '8'] will input '11')
// if the index is lower than 2, the user will either input a number, or an operator
// we remove/insert values into our array using the splice method

// global variables to make everything work
const numberPattern = /^(?!0\d)(-?(?!0\d)\d+(\.\d*)?)$/;
let previousNumber = "";
let currentNumber = "";
let calculus = [];
let isOperatorSelected = false;
let isMinusPressed = false;
let isNumberValid = false;

// function to update the display values of the calculator
function updateDisplay() {
    document.getElementById("display-top").innerHTML = calculus.join(' ');
    if (calculus.length === 1 || calculus.length === 2) {
        document.getElementById("display-bottom").innerHTML = calculus[0];
    } else if (calculus.length === 3) {
        document.getElementById("display-bottom").innerHTML = calculus[2];
    } else {
        document.getElementById("display-top").innerHTML = '';
        document.getElementById("display-bottom").innerHTML = 0;
    }
}

// function to insert a number into the calculator
function insertNumber(number) {
    if (calculus.length <= 1) {
        if (isMinusPressed === true) {
            previousNumber = previousNumber - number;
            isNumberValid = numberPattern.test(previousNumber);
            if (isNumberValid === true) { 
                calculus.splice(0, 1, previousNumber);
                updateDisplay();
            } else {
                previousNumber = previousNumber.slice(0, -1);
                updateDisplay();
            }
            isMinusPressed = false;
        } else {
            previousNumber = previousNumber + number;
            isNumberValid = numberPattern.test(previousNumber);
                if (isNumberValid === true) { 
                    calculus.splice(0, 1, previousNumber);
                    updateDisplay();
                } else {
                    previousNumber = previousNumber.slice(0, -1);
                    updateDisplay();
                }
        }
    } else {
        currentNumber = currentNumber + number;
        isNumberValid = numberPattern.test(currentNumber);
            if (isNumberValid === true) {
                calculus.splice(2, 1, currentNumber);
                updateDisplay();
            } else {
                currentNumber = currentNumber.slice(0, -1);
                updateDisplay();
            }
    }
}

// function to update our array and the calculator with current values
function updateCalculus(operator) { 
    calculus.splice(0, 3, String(result));
    calculus.splice(1, 1, operator);
    currentNumber = "";
    updateDisplay();
}

// function to run the calculus of the user's inputs
function calculate(operator) {
    isOperatorSelected = true;
    if (calculus.length === 1 || calculus.length === 2) {
        calculus.splice(1, 1, operator);
        updateDisplay();
    } else if (calculus.length === 3) {
        if (calculus[1] === '+') {
            result = Number(calculus[0]) + Number(calculus[2]);
            updateCalculus(operator);
        } else if (calculus[1] === '-') {
            result = Number(calculus[0]) - Number(calculus[2]);
            updateCalculus(operator);
        } else if (calculus[1] === '*') {
            result = Math.round(Number(calculus[0]) * Number(calculus[2]) * 1000) / 1000;
            updateCalculus(operator);
        } else if (calculus[1] === '/') {
            if (calculus[2] === '0') {
                calculus.splice(2, 1, '1');
                updateDisplay();   
            } 
            result = Math.round(Number(calculus[0]) / Number(calculus[2]) * 1000) / 1000;
            updateCalculus(operator);           
        }
    }
}

// function to make the backspace button work
function erasingNumber() { 
    if (calculus.length === 1) {
        let erasingPrevious = calculus[0];
        let erased = erasingPrevious.slice(0, -1);
        calculus.splice(0, 1, erased);
        previousNumber = erased;
        updateDisplay();
    } else if (calculus.length === 3) {
        let erasingCurrent = calculus[2];
        let erased = erasingCurrent.slice(0, -1);
        calculus.splice(2, 1, erased);
        currentNumber = erased;
        updateDisplay();
    }
}

// function to make the clear button work
function clear() {
    isOperatorSelected = false;
    calculus.splice(0, 3);
    currentNumber = "";
    previousNumber = "";
    updateDisplay();
}

// function to make the clear entry button work
function clearEntry() {
    if (calculus.length === 1) { 
        calculus.splice(0, 1);
        previousNumber = "";
        updateDisplay();
    } else if (calculus.length === 3) {
        calculus.splice(2, 1);
        currentNumber = "";
        updateDisplay();
    }
}

// the section below is used only for buttons
// calculator operator buttons
const buttonSum = document.querySelector('#plus');
buttonSum.addEventListener('click', () => calculate('+'));
document.addEventListener('keydown', (event) => {
    if (event.key === '+') {
        calculate('+');
    }
});

const buttonMinus = document.querySelector('#minus');
buttonMinus.addEventListener('click', () => {
    isMinusPressed = true;
    calculate('-');
});
document.addEventListener('keydown', (event) => {
    if (event.key === '-') {
        isMinusPressed = true;
        calculate('-');
    }
});

const buttonTimes = document.querySelector('#times');
buttonTimes.addEventListener('click', () => {
    calculate('*');
});

document.addEventListener('keydown', (event) => {
    if (event.key === '*') {
        calculate('*');
    }
});

const buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('click', () => {
    calculate('/');
});

document.addEventListener('keydown', (event) => {
    if (event.key === '/') {
        calculate('/');
    }
});

const buttonEqual = document.querySelector('#equal');
buttonEqual.addEventListener('click', () => {
    calculate('=');
});

document.addEventListener('keydown', (event) => {
    if (event.key === '=' || event.key === 'Enter') {
        calculate('=');
    }
});

// calculator misc buttons
const buttonDot = document.querySelector('#dot');
buttonDot.addEventListener('click', () => {
    insertNumber(".");
});

document.addEventListener('keydown', (event) => {
    if (event.key === '.' || event.key === ',') {
        insertNumber(".");
    }
});

const buttonBackspace = document.querySelector('#backspace');
buttonBackspace.addEventListener('click', () => {
    erasingNumber();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        erasingNumber();
    }
});

const buttonClearEntry = document.querySelector('#clear-entry');
buttonClearEntry.addEventListener('click', () => {
    clearEntry();
});

const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', () => {
    clear();
});

// calculator number buttons
for (let i = 0; i <= 9; i++) {
    const numberButton = document.querySelector(`#btn${i}`);
    numberButton.addEventListener('click', () => insertNumber(i.toString()));
    document.addEventListener('keydown', (event) => {
        if (event.key === i.toString()) {
            insertNumber(i.toString());
        }
    });
}

// allows buttons to change color when pressed with the keyboard

const buttons = document.querySelectorAll(".button");

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const button = Array.from(buttons).find(btn => btn.textContent === key);
  
  if (button) {
    button.classList.add("pressed");
  }
});

document.addEventListener("keyup", () => {
  buttons.forEach(button => {
    button.classList.remove("pressed");
  });
});