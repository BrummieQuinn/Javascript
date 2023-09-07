// refactored from index2.js
// calculator button input display
// variable assignment to document elements
const input = document.getElementById('input');
let output = document.getElementById('output');
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
    output.value = currentValue;
  }
}

// function to handle equals button
function equalClick(button) {
  let buttonEqual = button.target.innerHTML;
  if (buttonEqual === '=') {
    convertInput(currentValue);
    // console checks
    // console.log(currentValue);
    // console.log(previousValue);
    // console.log(currentOperator);
    // console.log(buttonEqual);
    // console.log(output.value);

  }
}

// functions to handle calculations
function add(number1, number2, currentOperator) {
  if (currentOperator === '+') {
    let resultAdd = number1 + number2;
    output.value = resultAdd;
    console.log(resultAdd);
    return resultAdd;
  }
}

function subtract(number1, number2, currentOperator) {
  if (currentOperator === '-') {
    let resultSubtract = number1 - number2;
    output.value = resultSubtract;
    console.log(resultSubtract);
    return resultSubtract;
  }
}

function multiply(number1, number2, currentOperator) {
  if (currentOperator === '*') {
    let resultMultiply = number1 * number2;
    output.value = resultMultiply;
    console.log(resultMultiply);
    return resultMultiply;
  }
}

function divide(number1, number2, currentOperator) {
  if (currentOperator === '/') {
    let resultDivide = number1 / number2;
    output.value = resultDivide;
    console.log(resultDivide);
    return resultDivide;
  }
}

// function to convert calculation input into two numbers at the operator
function convertInput(calculation) {
  let inputArray = calculation.split(currentOperator);
  let input1 = inputArray[0];
  let input2 = inputArray[1];
  input1 = parseInt(input1);
  input2 = parseInt(input2);

  add(input1, input2, currentOperator);
  subtract(input1, input2, currentOperator);
  multiply(input1, input2, currentOperator);
  divide(input1, input2, currentOperator);
  console.log(inputArray);
}
