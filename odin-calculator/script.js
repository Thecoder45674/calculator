const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".calc-button");
const operationButtons = document.querySelectorAll(".cal-button.operator");
const per


// test 123

/* const MAXINTS = 5;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".calc-button");

function processInput() {
    let state = [];
    let currentInput = "0";

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const action = button.dataset.action;
            const value = button.dataset.value;
            
            // Handle number input
            if (value) {
                if (currentInput === "0") {
                    currentInput = value; // Start a new number
                } if (currentInput.length < MAXINTS) {
                    currentInput += value;
                } else {
                    alert("Max " + MAXINTS + " digits allowed");
                }
                display.innerHTML = currentInput;
            } 
            
            // Handle actions
            else if (action) {

                // Handle the all-clear action
                if (action === "all-clear") {
                    currentInput = "";
                    state = [];
                    display.innerHTML = currentInput;
                    return;
                }

                // Handle the operator actions
                if (button.classList.contains("operator")) {
                    const currentNumber = 0;
                    if (currentInput !== 0) {
                        currentNumber = parseFloat(currentInput);
                    }
                    
                    if (state.length === 0) {
                        state.push(currentNumber);
                        state.push(button.dataset.action);
                    } 

                    else {
                        alert(state[0], state[1], currentNumber);
                        let result = calculate(state[0], state[1], currentNumber);
                        alert(result)
                        
                    }

                    currentInput = 0;
                    display.innerHTML = "";
                }
            }
        });
    });
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a) {
    return a / 100;
}

function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2; 
            break;
        case 'multiply':
            result = num1 * num2; 
            break;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            result = num1 / num2; 
            break;
        case 'percent':
            result = (num1 * num2) / 100; 
            break;
        default:
            return 'Error: Invalid operator';
    }

    return result;
}

processInput();

*/