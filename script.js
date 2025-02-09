let A = 0;
let B = null;
let operator = null;
let lastOperator = null;
let currentInput = "0";

const display = document.querySelector(".result");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButton = document.querySelector("[data-all-clear]");
const signChangeButton = document.querySelector("[data-sign-change]");
const percentButton = document.querySelector("[data-percent]");
const equalsButton = document.querySelector("[data-equals]");


// Function to round numbers to specified decimal places
const roundTo = (number, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
};

// Function to resize the display based on the length of the input
const resizeDisplay = () => {
    if (currentInput.length > 7) {
        display.style.fontSize = '50px'; // Very small font for very long numbers
    } else if (currentInput.length > 5) {
        display.style.fontSize = '70px'; // Smaller font for long numbers
    } else {
        display.style.fontSize = '90px'; // Default font size
    }
};

// Function to update display
const updateDisplay = () => {
    display.value = currentInput; 
    resizeDisplay();
};

// Event listener for sign change button
signChangeButton.addEventListener("click", () => {
    if (currentInput === "0") return;

    currentInput = currentInput[0] === "-" 
        ? currentInput.slice(1) 
        : "-" + currentInput;

    updateDisplay();
});

// Event listener for percentage button
percentButton.addEventListener("click", () => {
    let value = parseFloat(currentInput);
    let percentValue = value / 100;

    currentInput = percentValue.toString(); 
    updateDisplay();
});

// Event listener for all clear button
allClearButton.addEventListener("click", () => {
    currentInput = "0";
    A = 0;
    operator = null;
    B = null;
    updateDisplay();
});

// Event listeners for number buttons
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        let value = numberButton.dataset.number;

        if (currentInput.length >= 10) {
            alert("You cannot enter more than 10 digits."); // Alert user
            return; // Exit function to prevent further input
        }

        // Handle decimal point
        if (value === "." && currentInput.includes(value)) return;

        currentInput = currentInput === "0" ? value: currentInput + value;

        updateDisplay(); 
    });
});

// Event listener for operator buttons
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operatorValue = button.dataset.operation;

        if (operator && currentInput !== "0") {
            const isAdditionOrSubtraction = (operator === 'add' || operator === 'subtract');

            if (isAdditionOrSubtraction && (operatorValue === 'add' || operatorValue === 'subtract')) {
                B = parseFloat(currentInput); 
                A = calculate(A, B, operator); 
                currentInput = A.toString(); 
                updateDisplay();
            } else if (operator === 'multiply' || operator === 'divide') {
                B = parseFloat(currentInput); 
                A = calculate(A, B, operator);
                currentInput = A.toString(); 
                updateDisplay();
            }

        } else if (!operator) {
            A = parseFloat(currentInput);
        }

        operator = operatorValue;
        currentInput = "0";
    });
});


// Event listener for equals button
equalsButton.addEventListener("click", () => {
    if (!operator  || currentInput === "0") return;

    B = parseFloat(currentInput); 
    A = calculate(A, B, operator); 

    currentInput = roundTo(A, 5).toString(); 
    operator = null;
    updateDisplay();
});

// Perform basic operations with appropriate formatting
const calculate = (a, b, operator) => {
    let result;

    switch (operator) {
        case "add":
            return a + b; 
        case "subtract":
            return a - b; 
        case "multiply":
            return a * b; 
        case "divide":
            return b === 0 ? "Error" : a / b;
    
        default:
            return a; 
    }
};


// Initialize the display font size when loading the script
updateDisplay();
