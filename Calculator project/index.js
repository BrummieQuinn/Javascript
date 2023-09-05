// working out calculator - display and buttons:
const input = document.getElementById('input');
// create variables to hold all clicked button values and pass to input to display:
// variable to hold current number clicked value
let currentValue = '';
// variable to hold current operator clicked value
let currentOperator = '';
// variable to hold previous value when operator clicked
let previousValue = input.value;
// results in nodelist, to access individual buttons use for of or forEach
const buttons = document.querySelectorAll('.buttons');
for (let button of buttons) {
   
    if (button.innerHTML >= '0' && button.innerHTML <= '9') {
        let buttonNumbers = button.innerHTML;
        button.addEventListener('click', () => {
            currentValue += buttonNumbers;
            input.value = currentValue;
            previousValue = currentValue
            console.log(buttonNumbers);
            
        })
    } else if (button.innerHTML === '=') {
        let buttonEquals = button.innerHTML;
    } else if (button.innerHTML === 'clear') {
        let buttonClear = button.innerHTML;
        button.addEventListener('click', () => {
            console.log(buttonClear);
            currentValue = '';
            currentOperator = '';
            input.value = currentValue;
        })
        
    } else {
        let buttonOperators = button.innerHTML;
        button.addEventListener('click', () => {
            console.log(buttonOperators);
            currentOperator = buttonOperators;
            previousValue = currentValue;
            currentValue += currentOperator;
            input.value = previousValue + currentOperator;
            console.log(input.value);
        })

    }
   
}

