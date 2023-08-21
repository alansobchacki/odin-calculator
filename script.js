// needs to limit the output of dots to only one, and only after the initial number output

// needs a backspace button
// needs a clear entry button
// needs a clear button
// needs to prevent zeros from being used at the start of a number (unless if used with a dot)
// needs to allow users to use the keyboard to press keys
// needs graphical revamp
// needs a footer with your name & copyright logo

let previousNumber = "";
let currentNumber = "";
let calculus = [];
let isOperatorSelected = false;
let isMinusPressed = false;

// function to update the display values of the calculator
function updateDisplay() {
    document.getElementById("display-top").innerHTML = calculus.join(' ');
    if (calculus.length === 1 || calculus.length === 2) {
        document.getElementById("display-bottom").innerHTML = calculus[0];
    } else if (calculus.length === 3) {
        document.getElementById("display-bottom").innerHTML = calculus[2];
    }
}

// function to insert a number into the calculator
function insertNumber(number) {
    if (calculus.length <= 1) {
        if (isMinusPressed === true) {
            previousNumber = previousNumber - number;
            calculus.splice(0, 1, previousNumber);
            updateDisplay();
        } else {
        previousNumber = previousNumber + number;
        calculus.splice(0, 1, previousNumber);
        updateDisplay();
        }
    } else {
        currentNumber = currentNumber + number;
        calculus.splice(2, 1, currentNumber);
        updateDisplay();
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

// the section below is used only for buttons
// calculator operator buttons
const buttonSum = document.querySelector('#plus');
buttonSum.addEventListener('click', () => {
    calculate('+');
})

const buttonMinus = document.querySelector('#minus');
buttonMinus.addEventListener('click', () => {
    isMinusPressed = true;
    calculate('-');
})

const buttonTimes = document.querySelector('#times');
buttonTimes.addEventListener('click', () => {
    calculate('*');
})

const buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('click', () => {
    calculate('/');
})

const buttonEqual = document.querySelector('#equal');
buttonEqual.addEventListener('click', () => {
    calculate('=');
})

//calculator misc buttons
const buttonDot = document.querySelector('#dot');
buttonDot.addEventListener('click', () => {
    insertNumber(".");
});

const buttonBackspace = document.querySelector('#backspace');
buttonBackspace.addEventListener('click', () => {
    
});

const buttonClearEntry = document.querySelector('#clear-entry');
buttonClearEntry.addEventListener('click', () => {
    
});

const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', () => {
    
});

//calculator number buttons
const buttonOne = document.querySelector('#one');
buttonOne.addEventListener('click', () => {
    insertNumber("1");
});

const buttonTwo = document.querySelector('#two');
buttonTwo.addEventListener('click', () => {
    insertNumber("2");
});

const buttonThree = document.querySelector('#three');
buttonThree.addEventListener('click', () => {
    insertNumber("3");
});

const buttonFour = document.querySelector('#four');
buttonFour.addEventListener('click', () => {
    insertNumber("4");
});

const buttonFive = document.querySelector('#five');
buttonFive.addEventListener('click', () => {
    insertNumber("5");
});

const buttonSix = document.querySelector('#six');
buttonSix.addEventListener('click', () => {
    insertNumber("6");
});

const buttonSeven = document.querySelector('#seven');
buttonSeven.addEventListener('click', () => {
    insertNumber("7");
});

const buttonEight = document.querySelector('#eight');
buttonEight.addEventListener('click', () => {
    insertNumber("8");
});

const buttonNine = document.querySelector('#nine');
buttonNine.addEventListener('click', () => {
    insertNumber("9");
});

const buttonZero = document.querySelector('#zero');
buttonZero.addEventListener('click', () => {
    insertNumber("0");
});