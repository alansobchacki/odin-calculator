let firstNumber = "";
let secondNumber = "";
let choseOperator = false;
let calculus = [];


//calculator number buttons
const buttonSeven = document.querySelector('#seven');
buttonSeven.addEventListener('click', () => {
    if (choseOperator == false) {
        firstNumber = firstNumber + "7";
        console.log(firstNumber);
    } else {
        secondNumber = secondNumber + "7";
        console.log(secondNumber);
    }
});

const buttonEight = document.querySelector('#eight');
buttonEight.addEventListener('click', () => {
    if (choseOperator == false) {
        firstNumber = firstNumber + "8";
        console.log(firstNumber);
    } else {
        secondNumber = secondNumber + "8";
        console.log(secondNumber);
    }
});

//calculator operator buttons
const buttonSum = document.querySelector('#sum');
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
        console.log("This is our first number: " + firstNumber);
        console.log("This is our second number: " + secondNumber);
    }
})

