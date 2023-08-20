let previousNumber = "";
let currentNumber = "";
let calculusResults = "";
let isOperatorSelected = false;
let inputingCurrentNumber = false;

// function to insert a number into the calculator
function insertNumber(number) {
    if (isOperatorSelected == false) {
        previousNumber = previousNumber + number;
        document.getElementById("display-bottom").innerHTML = previousNumber;
    } else {
        currentNumber = currentNumber + number;
        document.getElementById("display-bottom").innerHTML = currentNumber;
        inputingCurrentNumber = true;
    }
}

// function to run the calculus of the user's inputs
function calculate(operator) {
    isOperatorSelected = true;
    let previous = Number(previousNumber);
    let current = Number(currentNumber);
    if (operator === 'sum') {
        document.getElementById("display-top").innerHTML = previousNumber + ' + ';
        let calculus = previous + current;
        previousNumber = String(calculus);
        calculusResults = 'sum';
    } else if (operator === 'minus') {
        if (previous === 0) {
            previousNumber = -previous;
        }
        let calculus = previous - current;
        previousNumber = String(calculus);
        document.getElementById("display-top").innerHTML = previousNumber + ' - ';
        calculusResults = 'minus';
    } else if (operator === 'times') {
        if (inputingCurrentNumber === false) {
            current = 1;
        }
        let calculus = previous * current;
        previousNumber = String(calculus);
        document.getElementById("display-top").innerHTML = previousNumber + ' * ';
        calculusResults = 'times';
    } else if (operator === 'divide') {
        if (current != 0) {
            let calculus = previous / current;
            previousNumber = String(calculus);
        }
        document.getElementById("display-top").innerHTML = previousNumber + ' / ';
        calculusResults = 'divide';
    }
    document.getElementById("display-bottom").innerHTML = previousNumber;
    currentNumber = "";
    inputingCurrentNumber = false;
}

// function to make the equal button work
function equalsTo() {
    let previousTop = previousNumber;
    let currentTop = currentNumber;
    
    if (inputingCurrentNumber === true) {
        if (calculusResults === 'sum') {
            calculate('sum');
            document.getElementById("display-top").innerHTML = previousTop + ' + ' + currentTop + ' = ';
        } else if (calculusResults === 'minus') {
            calculate('minus');
            document.getElementById("display-top").innerHTML = previousTop + ' - ' + currentTop + ' = ';
        } else if (calculusResults === 'times') {
            calculate('times');
            document.getElementById("display-top").innerHTML = previousTop + ' * ' + currentTop + ' = ';
        } else if (calculusResults === 'divide') {
            calculate('divide');
            document.getElementById("display-top").innerHTML = previousTop + ' / ' + currentTop + ' = ';
        }      
        inputingCurrentNumber = false;
    }
}

// the section below is used only for buttons
// calculator operator buttons
const buttonSum = document.querySelector('#plus');
buttonSum.addEventListener('click', () => {
    document.getElementById("display-top").innerHTML = previousNumber + ' + ';
    calculate('sum');
})

const buttonMinus = document.querySelector('#minus');
buttonMinus.addEventListener('click', () => {
    document.getElementById("display-top").innerHTML = previousNumber + ' - ';
    calculate('minus');
})

const buttonTimes = document.querySelector('#times');
buttonTimes.addEventListener('click', () => {
    document.getElementById("display-top").innerHTML = previousNumber + ' * ';
    calculate('times');
})

const buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('click', () => {
    document.getElementById("display-top").innerHTML = previousNumber + ' / ';
    calculate('divide');
})

const buttonEqual = document.querySelector('#equal');
buttonEqual.addEventListener('click', () => {
    equalsTo();
})

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

const buttonDot = document.querySelector('#dot');
buttonDot.addEventListener('click', () => {
    insertNumber(".");
});