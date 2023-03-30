let firstNumb = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");


class Calculator{
    constructor(firstValue, secondValue){
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }
    additionNumbs(){
        if (!Number(this.firstValue)) {this.firstValue = 0}
        if (!Number(this.secondValue)) {this.secondValue = 0}
       return console.log(this.firstValue + this.secondValue);
        
    }
    subtraction(){
        if (!Number(this.firstValue)) {this.firstValue = 0}
        if (!Number(this.secondValue)) {this.secondValue = 0}
        return console.log(this.firstValue - this.secondValue);
    }
    multiplication(){
        if (!Number(this.firstValue)) {this.firstValue = 0}
        if (!Number(this.secondValue)) {this.secondValue = 0}
        return console.log(this.firstValue * this.secondValue);
    }
    division(){
        if (!Number(this.firstValue)) {this.firstValue = 0}
        if (!Number(this.secondValue)) {this.secondValue = 0}
        return console.log(this.firstValue / this.secondValue);
    }
}

function identif(){
    let res = new Calculator(Number(firstNumb.value), Number(secondNumber.value));
    return res;
}

addition.addEventListener("click", () => {
    let result = identif()
    result.additionNumbs()
    firstNumb.value = "";
    secondNumber.value = "";
})
subtraction.addEventListener("click", () =>{
    let result = identif()
    result.subtraction()
    firstNumb.value = "";
    secondNumber.value = "";
})
multiplication.addEventListener("click", () =>{
    let result = identif()
    result.multiplication()
    firstNumb.value = "";
    secondNumber.value = "";
})
division.addEventListener("click", () =>{
    let result = identif()
    result.division()
    firstNumb.value = "";
    secondNumber.value = "";
})
