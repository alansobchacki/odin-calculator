let previousNumber = "";
let currentOperator = "";
let currentNumber = "";
let calculus = [];
let isOperatorSelected = false;
let isBuildingCurrentNumber = false;

// function to insert a number into the calculator
function insertNumber(number) {
    if (isOperatorSelected == false) {
        previousNumber = previousNumber + number;
        calculus.splice(0, 1, previousNumber);
        document.getElementById("display-bottom").innerHTML = previousNumber;
        console.log(calculus);
    } else {
        currentNumber = currentNumber + number;
        document.getElementById("display-bottom").innerHTML = currentNumber;
        calculus.splice(2, 1, currentNumber);
        console.log(calculus);
    }
}

function updateCalculus(operator) { 
    calculus.splice(0, 3, String(result));
    calculus.splice(1, 1, operator);
    currentNumber = "";
    console.log(calculus);
}

// function to run the calculus of the user's inputs
function calculate(operator) {
    isOperatorSelected = true;

    if (calculus.length === 1 || calculus.length === 2) {
        calculus.splice(1, 1, operator);
        console.log(calculus);
    } else if (calculus.length === 3) {
        if (calculus[1] === '+') {
            result = Number(calculus[0]) + Number(calculus[2]);
            updateCalculus(operator);
        } else if (calculus[1] === '-') {
            result = Number(calculus[0]) - Number(calculus[2]);
            updateCalculus(operator);
        } else if (calculus[1] === '*') {
            result = Number(calculus[0]) * Number(calculus[2]);
            updateCalculus(operator);
        } else if (calculus[1] === '/') {
            result = Number(calculus[0]) / Number(calculus[2]);
            updateCalculus(operator);
        }
    }
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
    calculate('+');
})

const buttonMinus = document.querySelector('#minus');
buttonMinus.addEventListener('click', () => {
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