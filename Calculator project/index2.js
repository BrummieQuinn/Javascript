// calculator button input display
// variable assignment to document elements
const input = document.getElementById('input');
const buttons = document.querySelectorAll('.buttons');

//variables for calculator input
let currentValue = '';
let currentOperator = '';
let previousValue = input.value;

// add event listeners to buttons using for of loop
// creates an event object (button)
for (let button of buttons) {
  button.addEventListener('click', numberClick);
  button.addEventListener('click', operatorClick);
  button.addEventListener('click', equalClick);
  button.addEventListener('click', clearClick);
}

// function to handle number buttons
// pass event object created in for loop to function
function numberClick(button) {
  // assign element innerHTML to variable through event.target.innerHTML
  let buttonNumbers = button.target.innerHTML;
  // add condition for numbers
  if (buttonNumbers >= '0' && buttonNumbers <= '9') {
    // currentValue: add and assign button content
    currentValue += buttonNumbers;
    // previousValue: assign currentValue
    previousValue = currentValue;
    // update input to reflect currentValue
    input.value = currentValue;
    console.log(input.value);
    console.log(currentValue);
    console.log(previousValue);
  }
}

// function to handle operator buttons
function operatorClick(button) {
  let buttonOperators = button.target.innerHTML;
  if (
    buttonOperators === '+' ||
    buttonOperators === '-' ||
    buttonOperators === '*' ||
    buttonOperators === '/'
  ) {
    currentOperator = buttonOperators;
    previousValue = currentValue;
    currentValue += currentOperator;
    input.value = previousValue + currentOperator;
    console.log(buttonOperators);
    console.log(input.value);
    console.log(previousValue);
  }
}

// function to handle clear button
function clearClick(button) {
  let buttonClear = button.target.innerHTML;
  if (buttonClear === 'clear') {
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    input.value = currentValue;
    console.log(buttonClear);
    console.log(input.value);
  }
}

// function to handle equals button
function equalClick(button) {
  let buttonEqual = button.target.innerHTML;
  if (buttonEqual === '=') {
    // calculate code to go here
    console.log(buttonEqual);
  }
}
