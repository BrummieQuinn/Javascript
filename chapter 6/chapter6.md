# Javascript from beginner to professional

## chapter 6: functions

- building blocks that will reduce amount of code needed
    - can be a template with variables - thats how I had to think of it to understand functions and parameters!
    - can be called whenever needed
    - can be reused in many situations - depending on way written

- think about structure of code differently when writing functions
    - are an abstraction layer
    - get the hang of it and should have:
        - nicely structured
        - reusable
        - low-maintenance code

### basic functions:
- groups of statement blocks that get executed

- invoking functions:
    - functions have '()' at the end and can be invoked by simply writing the functionName(); if no parameters or if takes arguments functionName(input)
- function syntax:
```Javascript
function nameOfFunction() {
    // statements to execute when called
}
// call the function
nameOfFunction();
```
- relationship between functions and variables:
    - variables shape how function operated
    - varibles may contain functions - function expressions
- example:
```Javascript
// declare first function variable to hold function expression
let functionInsideVariable = function () {
// this function expression holds two statements:
// variable holding a string
    let variableInsideFunction = 'I'm in a function.';
    // console.log to output another string and variable holding string
    console.log('hi there!', variableInsideFunction);
};
// calling this function expression will execute the nameless function within
functionInsideVariable();
```
- variables:
    - contain certain value
    - are something
    - don't do anything
- functions:
    - are actions

- naming functions:
    - name should describe what function doing - addNumbers
    - use verbs to describe what function doing - sayHi

### practice exercise 6.1:
- write a function:
    - add two numbers

1. create a function that takes two parameters
    - add parameters
    - return result

2. set up two different variables with different values

3. use function on two variables
    - output result using console.log

4. create a second call to function
    - use two different numbers as arguments sent to function

* Planning:
- this exercise felt pretty straightforward as I read through it maybe 4 times before attempting it.
- realised the steps could be followed in a different order
- declared variables first globally outside of function number1 and number2
- declared function with parameters a and b
- inside the function I decided to declare a variable to hold the calculation
- output the console.log first since using return sends interpreter back to where it was called
- calling with variables and arguments showed me my function worked

### practice exercise 6.2:
- program to randomly describe input name

1. create an array of descriptive words
2. create a function that contains a prompt asking user for name
3. select random value from array using Math.random (and Math.floor)
4. output into console 
    - prompt value
    - randomly selected array value
5. invoke function

* Planning:
- Ive decided to miss this one out - I loathe exercises that use prompt() i'll be honest.
- The implementation always feels awkward although I did come up with some code I will probably test it another day.
```Javascript
// array of descriptive words
let words = ['happy', 'sad', 'angry', 'awkward', 'awesome'];
// declare function
function describe() {
    // declare variable to hold prompt value
    let name = prompt('what is your name? ');
    // declare variable to randomly choose a word from the
    randomValue = Math.floor(Math.random() * words.length);

    console.log(`${name}, ${words[randomValue]}`);
}
describe();
```
- okay so after writing it, I felt a strong urge to test what I'd written (see promptexercises.js) and oh boy!
    - it works every single time 
    - I remembered the way to access the array using [] notation from the freecondecamp.org profile lookup task as well as all the extra research I put into arrays and objects and I can't believe how well the extra study paid off
    - this came to me after remembering that adding just words to the template literal would just output the whole array - the random value with the Math.random calculation gives a random index of the array. 
    - once that clicked I added it to the template literal for words and crossed my fingers that it was valid syntax lol - it was

### parameters and arguments:
- information passed into function

- parameters:
    - defined variable within function parentheses
- example:
```Javascript
function addTwoNumbers
```