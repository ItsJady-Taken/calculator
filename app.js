const display = document.querySelector('#display');
const buttons = document.querySelectorAll('#all-button');
let operator = null;
let input = '';
let previousInput = null;
let result = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if(value >= '0' && value <= '9'){
           handleNum(value) 
        }
        else if(value === 'C') {
            clearAll();
        }
        else if(value === '←') {
            backSpace();
        }
        else if(value === '=') {
            operate();   
        }
        else if(value === '.') {
            if (!input.includes('.')) {
                input += '.';
              }
              display.textContent = input; // Update display after decimal input  
        }
        else {
            handleOperator(value);
        
        }
        // display the numbers and operator
        if(operator != null) {
            display.textContent = previousInput + operator + input // if the user press and operater
        }
        else {
            display.textContent = input;
        }
        
    })
})

function clearAll() {
    display.value = "";
    input = '';
    operator = null;
    previousInput = null;
}

// alow multiple digit instead of just one
function handleNum(value) {
    if (input === '') {
        input = value;
    } 
    else {
        input += value;
    }
}

// if the user press an operater, safe the input in a previousInput than reset input
function handleOperator(value) {
    operator = value;
    if(previousInput === null) {
        previousInput = input;
        input = '';
    }
}

// delete the last number and than update the display
function backSpace() {
    input = input.toString()
    input = input.slice(0, -1);
    display.textContent = input;
}

function operate() {
    if(operator == null || input == '') {
        // 
        clearAll()
    }
    // after each case reset everything
    switch (operator) {
        case '+':
            input = parseFloat(previousInput) + parseFloat(input)
            previousInput = null;
            operator = null;
            break;
        case '-':
            input = parseFloat(previousInput) - parseFloat(input)
            previousInput = null;
            operator = null;
            break;
        case '*':
            input = parseFloat(previousInput) * parseFloat(input)
            previousInput = null;
            operator = null;
            break;
        case '/':
            input = parseFloat(previousInput) / parseFloat(input)
            previousInput = null;
            operator = null;
            break; 
    }
    display.textContent = input
}