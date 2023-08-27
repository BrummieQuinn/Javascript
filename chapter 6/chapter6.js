// practice exercise 6.1:
// declare variables
let number1 = 10;
let number2 = 5;

/**
 * @param {any} a
 * @param {any} b
 */
// declare function accepts parameters a and b
function add(a, b) {
    // body of function block
    // declared variable to store the calculation
    let result = a + b;
    // console.log(result)
   console.log(result);
    // return the result
     return result;
}
// call function with globally declared variables 
add(number1, number2);
// call function with arguments
add(2999, 2364);

// practice exercise 6.3:
let value1 = 83;
let value2 = 39;

let operator = '+';

/**
 * @param {number} a
 * @param {number} b
 * @param {string} operator
 */
function calculate(a, b, operator) {
    if (operator === '+') {
        console.log(a + b);
    } else if (operator === '-') {
        console.log(a - b);
    } else {
        console.log(a + b);
    }
}
calculate(value1, value2, '+');
calculate(value1, value2, '-');
// @ts-ignore
calculate(25, value2);
calculate(25, 60, '-');
calculate(value1, 60, '/');

// practice exercise 6.4:

let values = [];

for (let i = 0; i < 10; i++) {
    let multiplyByFive = i * 5;
    let squared = i * i;

    let result = calculator(multiplyByFive, squared);
    
    values.push(result);
    console.log(values);
}
function calculator(a, b) {
    return a + b;
}