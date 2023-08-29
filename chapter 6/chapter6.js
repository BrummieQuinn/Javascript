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

// practice exercise 6.5:

// create a variable
let string = '1000';

// create an IIFE:
(function () {
    // create variable of same name with new value
    let string = '2000';
    console.log(string);
})();
// create an IIFE expression:
let result1 = (function () {
   
    let result2 = '3000';
    return result2;
})();
console.log(`result1: ${result1}`);

// create an anonymous function with a parameter:
(function (result2) {
    console.log(`I am result2: ${result2}`)
})('3000');

// practice exercise 6.6:
// attempt 1:
function factorial(n) {
    if (n === 0) {
        console.log(n);
        return 1;
    } else if (n > 0) {
        
    
        console.log(n);
        return n * factorial(n - 1);    
    }
    console.log(n);
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(15));

// practice exercise 6.7:
// create start variable - loop starting value
let start = 10;
// create first countdown function
function countdown(countdownValue) {
    // console.log output
    console.log(countdownValue);
    // create first condition
    if (countdownValue < 1) {
        // return the function  - step 4
        return;
    }
    // return function including decrement by 1
    return countdown(countdownValue - 1);
}
// call function using start variable - end of loop 1
countdown(start);
//// update and create second countdown - step 7
function secondCountdown(countdownValue) {
    console.log(countdownValue);
    // create the condition
    if (countdownValue > 0) {
    //  decrement by 1  
        countdownValue--;
        // return the function to invoke
        return secondCountdown(countdownValue);
    }
    // return to end loop 2
    return;
}
// call second countdown with start variable
secondCountdown(start);
// interesting that despite the number given for the condition logs the same output

// practice exercise 6.8:
// function expression:
let output = function (parameter) {
    console.log(parameter);
}
output('hello');
// function declaration:
function output2(parameter) {
    console.log(parameter);
}
output('hello 2');

// chapter 6 projects:
// create a recursive function:
function countToTen(n) {
    if (n < 10) {
        console.log(n);
        return countToTen(n + 1);
    }
    return;
}
countToTen(0);

// set timeout order
// create arrow functions and output values
let one = () => console.log('one');
let two = () => console.log('two');
// create arrow function output value
let three = () => {
    console.log('three');
    // invoke previously created arrow functions
    one();
    two();
    

};
// create arrow function and output value
let four = () => {
    console.log('four');
    // setTimeout() for one() for immediate invoke
    setTimeout(one, 0);
    // invoke three()
    three();
}
// call four()
four();
