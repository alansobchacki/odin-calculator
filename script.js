let firstNumber = "";
let secondNumber = "";
let choseOperator = false;
let calculus = [];

function insertNumber(number) {
    if (choseOperator == false) {
        firstNumber = firstNumber + number;
        console.log(firstNumber);
    } else {
        secondNumber = secondNumber + number;
        console.log(secondNumber);
    }
}

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

//calculator operator buttons
const buttonSum = document.querySelector('#plus');
buttonSum.addEventListener('click', () => {
    if (choseOperator == false && calculus.length < 1) {
        let initialValue = Number(firstNumber); //the string becomes a number
        calculus.unshift(initialValue); //that number is pushed into the beginning of our array, which has an index of 0 ([x])
        console.log(calculus);
        choseOperator = true; //this boolean will make us build the second number of our equation now
    } else {
        let secondValue = Number(secondNumber); //the string becomes a number
        calculus.push(secondValue); //that number is pushed into the end of our array, which now has an index of 1 ([x, x])
        let sum = calculus.reduce((accumulator, current) => accumulator + current, 0); //we get the sum of the numbers inside our array
        calculus.splice(0, 2, sum); //since our array remains intact, we remove all previous values and insert the value of sum
        firstNumber = String(sum); 
        secondNumber = "";
        console.log("This is the result of your calculus: " + calculus);
    }
})

