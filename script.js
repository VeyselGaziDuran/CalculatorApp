const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
};

keys.addEventListener('click', function(e){
    const element = e.target;

    if(!element.matches('button')) return;


    if(element.classList.value.includes('operator')){
        handleOperator(element.value)
        updateDisplay()
        return;
    }


    if(element.classList.value.includes('decimal')){
        inputDecimal(element.value);
        updateDisplay();
        return;
    }

    if(element.classList.value.includes('clear')){
        clear();
        updateDisplay()
        return;
    }

    inputNumber(element.value);
    updateDisplay();
});

function inputNumber(num){
    if(waitingForSecondValue){
        displayValue = num;
        waitingForSecondValue = false;
    }else{
        displayValue = displayValue === '0' ? num: displayValue + num
    }
}

function inputDecimal(dot){
    if(!displayValue.includes('.')){
    displayValue += '.';
    }
}

function clear(clear){
    displayValue = '0'
}

function handleOperator(nextOperator){
    const value = parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        const value = parseFloat(displayValue);
        return;
    }

    if(firstValue == null){
        firstValue = value;
    }else if(operator){
        const result = calaculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(7))}`
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
}

function calaculate(first, second, operator){
    if(operator === '+'){
        return first + second;
    }else if(operator === '-'){
        return first - second;
    }else if(operator === '*'){
        return first * second;
    }else if(operator === '/'){
        return first / second;
    }

    return second

}
