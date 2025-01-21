let currentInput = "0";

const display = document.querySelector(".result");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButton = document.querySelector("[data-all-clear]");
const signChangeButton = document.querySelector("[data-sign-change]");
const percentButton = document.querySelector("[data-percent]");
const equalsButton = document.querySelector("[data-equals]");

// A+B, A-B,A*B, A/B
let A = 0;
let operator = null;
let B = null;

// Function to round numbers to specified decimal places
const roundTo = (number, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
};

// Function to update display
const updateDisplay = () => {
    display.value = currentInput; 
};

// Event listener for sign change button
signChangeButton.addEventListener("click", () => {
    if (currentInput === "0") {
        return;
    }

    if (currentInput[0] === "-") {
        currentInput = currentInput.slice(1); 
    } else {
        currentInput = "-" + currentInput; 
    }

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

        // Handle decimal point
        if (value === ".") {
            if (currentInput != "" && !currentInput.includes(value)) {
                currentInput += value; 
            }
        } else { 
            if (currentInput === "0" || currentInput === "0.0") {
                currentInput = value;
            } else {
                currentInput += value;
            }
        } 

        updateDisplay(); 
    });
});

// Event listener for operator buttons
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operatorValue = button.dataset.operation;

        if (operator && currentInput !== "0") {
            B = parseFloat(currentInput); 
            A = calculate(A, B, operator); 
            currentInput = A.toString(); 
            updateDisplay();
        } else if (!operator) {
            A = parseFloat(currentInput);
        }
       
        operator = operatorValue;
        currentInput = "0";
    });
});

// Event listener for equals button
equalsButton.addEventListener("click", () => {
    if (operator && currentInput !== "0") {
        B = parseFloat(currentInput); 
        A = calculate(A, B, operator); 
        currentInput = roundTo(A, 5).toString(); 
        operator = null;
        updateDisplay();
        console.log(currentInput);
    }
});

// Perform basic operations with appropriate formatting
const calculate = (a, b, operator) => {
    let result;

    switch (operator) {
        case "add":
            result = a + b; 
            break;
        case "subtract":
            result = a - b; 
            break;
        case "multiply":
            result = a * b; 
            break;
        case "divide":
            if (b === 0) {
                return "Error"; 
            }
            result = a / b; 
            break;
        default:
            return a; // Return the first operand if no operator
    }

    // Return the result for further processing
    return result;
};


// Initialize the display font size when loading the script
updateDisplay();
