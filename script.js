let firstNumb = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");


class Calculator{
    firstValue;
    secondValue;
    construcor(firstValue, secondValue){
        firstValue = this.firstValue,
        secondValue = this.secondValue
    }
    additionNumbs(){

        return alert(this.firstValue + this.secondValue);
    }
    subtraction(){
        return this.firstValue - this.secondValue;
    }
    multiplication(){
        return this.firstValue * this.secondValue;
    }
    division(){
        return this.firstValue / this.secondValue;
    }
}

let res = new Calculator(Number(firstNumb.value), Number(secondNumber.value));

addition.addEventListener("click", res.additionNumbs)
subtraction.addEventListener("click", function(){
    alert(firstNumb.value)
})