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
  // checks button clicked and assigns appropriate operator to input
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
   
  } else if (
    // checks for double operator input and sends error message to user in output
    currentValue.includes('++') ||
    currentValue.includes('--') ||
    currentValue.includes('//') ||
    currentValue.includes('**')
  ) {
    output.value = 'Invalid Input. Click "clear" and start again';
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
    // assign convertInput function to variable to call and to access returned object
    let numbers = convertInput(currentValue);
    // access returned inputs object and use to call arithmetic functions
    let number1 = numbers.input1;
    let number2 = numbers.input2;
    // use conditions to call appropriate arithmetic functions
    if (currentOperator === '+') {
     add(number1, number2);
    } else if (currentOperator === '-') {
      subtract(number1, number2);
    } else if (currentOperator === '*') {
      multiply(number1, number2);
    } else if (currentOperator === '/') {
      divide(number1, number2);
    }
    // console checks
    console.log(numbers);
    console.log(output.value);
  }
}

// functions to handle calculations
function add(number1, number2) {
    let resultAdd = number1 + number2;
    output.value = resultAdd;
    console.log(resultAdd);
    return resultAdd;
}

function subtract(number1, number2) {
    let resultSubtract = number1 - number2;
    output.value = resultSubtract;
    console.log(resultSubtract);
    return resultSubtract;
  }

function multiply(number1, number2) {
    let resultMultiply = number1 * number2;
    output.value = resultMultiply;
    console.log(resultMultiply);
    return resultMultiply;
}
  
function divide(number1, number2) {
    let resultDivide = number1 / number2;
    output.value = resultDivide;
    console.log(resultDivide);
    return resultDivide;
  }

// function to convert calculation input into two numbers at the operator
function convertInput(calculation) {
  // split input at currentOperator
  let inputArray = calculation.split(currentOperator);
  // assign variables to array index positions
  let input1 = inputArray[0];
  let input2 = inputArray[1];
  // convert to a number type
  input1 = parseInt(input1);
  input2 = parseInt(input2);
  // create an object to return to equalClick function
  let inputs = {
    input1: input1,
    input2: input2
  };
  // return inputs object to equalClick function that called it
  return inputs;
}
