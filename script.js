const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';

updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}


keys.addEventListener('click', (e) => {
    const element = e.target;
    const value = element.value;

    if (!element.matches('button')) {
        return;
    }

    if (element.classList.contains('operator')) {
        console.log('operator', element.value);
        return;
    }

    if (element.classList.contains('decimal')) {
        inputDecimal(element.value);
        return;
    }

    if (element.classList.contains('all-clear')) {
        console.log('clear', element.value);
        clearAll();
        updateDisplay();
        return;
    }

    inputNumber(element.value);
});

function inputNumber(num) {
    if (displayValue === '0') {
        displayValue = num;
    } else {
        displayValue += num;
    }

    updateDisplay();
}

function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot;
    }

    updateDisplay();
}

function clearAll() {
    displayValue = '0';
    updateDisplay();
}

