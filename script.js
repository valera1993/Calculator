let firstNumb = document.querySelector("#firstNumber");
let secondNumb = document.querySelector("#secondNumber");
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");

class Calculator {
    firstValue;
    secondValue;
    constructor(firstValue, secondValue) {
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }
    additionNumbs() {
        return alert(this.firstValue + this.secondValue);
    }
    subtraction() {
        return alert(this.firstValue - this.secondValue);
    }
    multiplication() {
        return alert(this.firstValue * this.secondValue);
    }
    division() {
        return alert(this.firstValue / this.secondValue);
    }
}

function identif(sign) {
    let res = new Calculator(Number(firstNumb.value), Number(secondNumb.value));
    switch (sign) {
        case addition:
            res.additionNumbs();
            firstNumb.value = '';
            secondNumb.value = '';
            break;
        case subtraction:
            res.subtraction();
            firstNumb.value = '';
            secondNumb.value = '';
            break;
        case multiplication:
            res.multiplication();
            firstNumb.value = '';
            secondNumb.value = '';
            break;
        case division:
            res.division();
            firstNumb.value = '';
            secondNumb.value = '';
            break;
    }
}

addition.addEventListener("click", () => { identif(addition) });
subtraction.addEventListener("click", () => { identif(subtraction) });
multiplication.addEventListener("click", () => { identif(multiplication) });
division.addEventListener("click", () => { identif(division) });