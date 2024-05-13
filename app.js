document.addEventListener('DOMContentLoaded',() => {

    const numbers = document.querySelectorAll('.num-button');
    numbers.forEach((num) =>{
        num.addEventListener('click', ()=>{
            document.querySelector('#first-num').textContent = num.textContent
        })
       
        
    })
     
})

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2; 
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}
