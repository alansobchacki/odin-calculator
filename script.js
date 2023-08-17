// stuff to solve
// 1 - cannot add more than one 'dot' to a number
// 2 - 'zero' cannot be added multiple times as a first number (i.e, you cannot enter '0000', but you can enter '8000)
// 3 -  add a backspace button that erases the last value of the current string (i.e, '72' becomes '7')
// 4 -  add a C button (clear) that erases everything and resets the calculator to its default settings
// 5 -  add a CE button (clear entry) that erases the entire, most recent entry
// 6 -  add a equal buttont that returns the value of the operation

let previousNumber = "";
let currentNumber = "";
let finalCalculus = "";
let isOperatorSelected = false;

function insertNumber(number) {
    if (isOperatorSelected == false) {
        previousNumber = previousNumber + number;
        document.getElementById("display-bottom").innerHTML = previousNumber;
    } else {
        currentNumber = currentNumber + number;
        document.getElementById("display-bottom").innerHTML = currentNumber;
    }
}

function calculate(operator) {
    isOperatorSelected = true;

    if (operator === 'sum') {
        let previous = Number(previousNumber);
        let current = Number(currentNumber);
        let calculus = previous + current;
        previousNumber = String(calculus);
        document.getElementById("display-top").innerHTML = previousNumber + ' + ';
        finalCalculus = 'sum';
    } else if (operator === 'minus') {
        let previous = Number(previousNumber);
        let current = Number(currentNumber);
        let calculus = previous - current;
        previousNumber = String(calculus);
        document.getElementById("display-top").innerHTML = previousNumber + ' - ';
        finalCalculus = 'minus';
    } else if (operator === 'times') {
        let previous = Number(previousNumber);
        let current = Number(currentNumber);
        if (current != 0) {
            let calculus = previous * current;
            previousNumber = String(calculus);
        }
        document.getElementById("display-top").innerHTML = previousNumber + ' * ';
        finalCalculus = 'times';
    } else if (operator === 'divide') {
        let previous = Number(previousNumber);
        let current = Number(currentNumber);
        if (current != 0) {
            let calculus = previous / current;
            previousNumber = String(calculus);
        }
        document.getElementById("display-top").innerHTML = previousNumber + ' / ';
        finalCalculus = 'divide';
    }

    document.getElementById("display-bottom").innerHTML = previousNumber;
    currentNumber = "";
}

//calculator operator buttons
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
    if (finalCalculus === 'sum') {
        let previousTop = previousNumber;
        let currentTop = currentNumber;
        calculate('sum');
        document.getElementById("display-top").innerHTML = previousTop + ' + ' + currentTop + ' = ';
        console.log(finalCalculus);
    } else if (finalCalculus === 'minus') {
        let previousTop = previousNumber;
        let currentTop = currentNumber;
        calculate('minus');
        document.getElementById("display-top").innerHTML = previousTop + ' - ' + currentTop + ' = ';
        console.log(finalCalculus);
    } else if (finalCalculus === 'times') {
        let previousTop = previousNumber;
        let currentTop = currentNumber;
        calculate('times');
        document.getElementById("display-top").innerHTML = previousTop + ' * ' + currentTop + ' = ';
        console.log(finalCalculus);
    } else if (finalCalculus === 'divide') {
        let previousTop = previousNumber;
        let currentTop = currentNumber;
        calculate('divide');
        document.getElementById("display-top").innerHTML = previousTop + ' / ' + currentTop + ' = ';
        console.log(finalCalculus);
    }
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