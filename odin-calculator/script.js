//
const buttons = document.querySelectorAll('.calc-button');

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert(button.dataset.action);
        alert(button.dataset.value);
    });
});

// Create calculator object
const calculator  = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    divide: (a, b) => a / b,
    percent: (a) =>  a / 100,
};

