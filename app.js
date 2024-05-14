document.addEventListener('DOMContentLoaded',() => {
    const display = document.querySelector('.display')
    const numbers = document.querySelectorAll('.all-button');
    let operator = null;
    let previousInput = null;
    let input = '0';
    let resetDisplay = false;

    numbers.forEach((num) =>{
        num.addEventListener('click', ()=>{
            const value = num.textContent;

            if(value >= '0' && value <= '9'){
                handleNum(value)
            }
            else {
                inputOperator(value)
            }
            displayContent();
        })  
    })   


    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2; 
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    function operate(num1, num2, operating) {
        switch(operating) {
            case '+': return add(num1, num2)
            case '-': return subtract(num1, num2)
            case '*': return multiply(num1, num2)
            case '/': return divide(num1, num2)
            default: return num2;
        }
    }

    function handleNum(num) {
        if(resetDisplay){
            input = num;
            resetDisplay = false;
        }
        else if(input === '0'){
            input = num;
        }
        else {
            input += num;
        }
        console.log(input)
    }

    function inputOperator(ope) {
        operator = ope;
        if(previousInput != null && !resetDisplay){
            previousInput = operate(parseFloat(previousInput), parseFloat(input), operator);
            input = previousInput.toString();
        }
        else {
            previousInput = input
        }
        
        resetDisplay = true;
        console.log(operator)
    }

    function displayContent() {
        display.textContent = input
    }
});