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
(27/08/2023)
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
function addTwoNumbers(a, b) {
    console.log(a + b);
}
```
- function adds parameters when called and log result
    - to do that it needs to be passed arguments (actual values) to add
```Javascript
addTwoNumbers(12, 46);
```
- outcome of function changes depending on arguments(practice exercise 6.1) 
- so functions are:
    - powerful
    - flexible
- arguments take the place of the parameters in the functions template
    - sent to function to be used in functions scope

### practice exercise 6.3:
- create basic calculator:
    - takes two numbers and a string value representing an operation
    - if operation equals add - two numbers added
    - if operation equals subtract - two numbers subtracted from one another
    - if no option specified - value should be add
    - log result of function
    - test with different operators and no operator

1. set up two variables containing number values
2. set up a variable to hold an operator
    - '+'
    - '-'
3. create function that retrieves the two values and operator string value
    - use values with condition to check operator
    - if operator '+' - add values
    - if operator '-' - subtract values
    - if no operator or operator not valid - add values
4. inside console.log()
    - call function using variables
    - output to console
5. update operator value to another typer
    - call function again with new arguments

* Planning:
```Javascript
// two variables containing numbers
let value1 = 83;
let value2 = 39;
// variable holding operator as a string
let operator = '+';
// function that takes 3 parameters:
// two values and operator string value
function calculate(a, b, operator) {
    // function block:
    // if statement: checks operator against '+'
    if (operator === '+') {
        console.log(a + b);
        // else if statement: checks operator against '-'
        } else if (operator === '-') {
            console.log(a - b);
            // final else statement: all other arguments
        } else {
            console.log(a + b);
        }
    }
console.log(calculate(value1, value2, '+'));
```
(see chapter6.js)

### default or unsuitable parameters

- a function can be declared with default parameters so it doesn't return 'NaN' when no arguments passed
- example:
```Javascript
function addTwoNumbers(a = 2, y = 3) [
    console.log(x + y);
]
```
- called with no parameters the above function would return the default
    - passed arguments will take priority 

- calling a function with more arguments than parameters    
    - will be executed using the first arguments that can be mapped to parameters

### special functions and operators
- arrow functions, spread operator and rest operator
    - arrow functions:
        - send functions as parameters
        - shorter notation
    - spread operator/ rest operator:
        - more flexible when sending arguments
        - working with arrays easier

- arrow functions:
- syntax:
```Javascript
// with two parameters
(param1, param2) => body of the function;
// no parameters
() => body of the function;
// one parameter
param => body of the function;
// multiline function with two parameters
(param1, param2) => {
    // line 1
    // rest of function body
};
```
- useful when writing implentation on the spot
    - function as an argument inside another function
    - due to being shorthand notation
    - for functions consisting of one statement
- example:
```Javascript
// rewrite a function as arrow function
function doingStuff(x) {
    console.log(x);
}
// store in a variable or send it in as an argument - () optional with one parameter
let doingArrowStuff = (x) => console.log(x)
// invoke variable to execute arrow function
doingArrowStuff('hello');
```
- arrow functions can be combined with certain built-in methods
- example:
```Javascript
// using forEach() on an array with arrow function
// can execute a certain function for every element of the array - this case will log each element of the array
const arr = ['squirrel', 'alpaca', 'dolphin'];
arr.forEach(element => console.log(element));
// output: squirrel alpaca dolphin
```
- the above example show without counting or using a loop, something can be done to each element of the array

- spread operator:
- (...) used before referenced expression/string
    - spreads out argument or elements of array
- example:
```Javascript
let spread = ['so', 'much', 'fun'];
let message = ['javascript', 'is', ...spread, 'and', 'very', 'powerful'];
// output: ['javascript', 'is', 'so', 'much', 'fun', 'and', 'very', 'powerful']
```
- elements of spread operator become indivdual elements in array

- can also spread multiple arguments to a function
- example:
```Javascript
function addTwoNumbers(a, b) {
    console.log(a + b);
}
let arr = [5, 9];
addTwoNumbers(...arr);
// output: 14
```
- avoid having to copy a long array or string into function
    - saves time
    - reduces code complexity

- function can be called with multiple spread operator
- example:
```Javascript
// use all elements of arrays as input
function addFourNumbers(a, b, c, d) {
    console.log(a + b + c + d);
}
let arr = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr, ...arr2);
// same as addFourNumbers(5, 9, 6, 7);
// output: 27
```

- rest parameter:
- similar to spread (...)
    - used inside function parameter list
    - allows any number of arguments to be sent and will translate to parameter array
- example:
```Javascript
function someFunction(param1, ...param2) {
    console.log(param1, param2);
}
someFunction('hi', 'there', 'how are you?');
// output: hi ['there', 'how are  you?']
// because this function takes 2 parameters in the console log, the rest parameter ensures all the extra arguments are passed by grouping them in an array to pass as the second parameter
```
- useful when number of arguments that will be passed are unknown
    - can then process all extra arguments with a loop

### returning function values:

- return value:
    - allows functions to give back a result
    - return value can be stored in a variable
- example:
```Javascript
let result = addTwoNumbers(4, 5);
console.log(result);
// output 9 undefined
```
(I actually noticed/fell victim to this lil fun fact when working on practice exercise 6.3)
- in previous example addTwoNumber() already contains a console.log statement
    - console.log(result) has nothing inserted in the function to store result 
        - addTwoNumbers sends nothing back so is assigned 'undefined'
        - by returning value instead of using console.log 
            - store result
            - work with result of function
- example:
```Javascript
// rewrite addTwoNumbers() function to return value
function addTwoNumbers(a, b) {
    return a + b;
}
```
- return ends the function
    - sends back whatever value comes after return
    - if an expresion - will evaluate to one result and return to where it was called
    - the variable it is stored in

### practice exercise 6.4:
- modify calculator created in practice exercise 6.3 to return added values rather than logging them
- call the function 10 times or more in a loop
- store results in an array
- when loop finished - output final array to console

1. set up empty array to store values to be calculated within loop

2. create loop that runs 10 times
    - increments by 1
    - creates two values each iteration
    - first value multiply value of loop counter by 5
    - second value multiply value of loop counter by itself

3. create a function that returns the value of two parameters passed into function when called
    - add values together
    - return result

4. within loop 
    - call calculation function 
    - passing in two values as arguments
    - store result returned in a response variable

5. still within loop
    - push result values into array as it iterates through loop

6. after loop completer
    - output value of array to console

7. should see values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] array output in console

* Planning:
- showing me what the output should look like feels helpful which probably means I'll struggle
- starting with previous calculate function
```Javascript
// two variables containing numbers
let value1 = 83;
let value2 = 39;
// variable holding operator as a string
let operator = '+';
// function that takes 3 parameters:
// two values and operator string value
function calculate(a, b, operator) {
    // function block:
    // if statement: checks operator against '+'
    if (operator === '+') {
        console.log(a + b);
        // else if statement: checks operator against '-'
        } else if (operator === '-') {
            console.log(a - b);
            // final else statement: all other arguments
        } else {
            console.log(a + b);
        }
    }
console.log(calculate(value1, value2, '+'));
```
- using my previous function to create the - as I go through the steps and create the extra bits, then attempt to merge the two
```Javascript
// create empty array to store values calculated in the loop
let values = [];
// create for loop: up to 10
for (let i = 0; i <= 10; i++) {
    // create two values each iteration
    let value1 = i * 5;
    let value2 = i * i;
    // added to check loop statements working
    console.log(value1, value2);
    // calling calculator and (hopefully) storing result to variable
    let result = calculator(value1, value2);
    // push calculation to array
    values.push(result);
    // output array (hopefully)
    console.log(values);
}
// created calculator function outside of loop
function calculator(a, b) {
    return a + b;
} 
```
*NOTE:*
- oh my gosh it worked with no tweaks except giving the variables better names
- why do functions come to me better than my previous work or is this the power of my studying everyday and javascript clicking?
- I did nothing different to how I normally approach a problem, except I guess I know to expect the steps not to be in javascript logical order, just human logical order.
- the for loop came effortless and I understood to assign variable to each calculation I wanted to perform with (i) each loop
- creating the calculator function I'll admit caused me to dither over where to place it, but realised the question was very explicit about what should be in the loop, it also clicked when I finally noticed I was to call the function in the loop
- once over that particular hurdle I was surprised at how quickly the rest of the function came including pushing the values to the array. 
- I didn't need to check anything but the question to reach a solution
- really, really, hoping this is the power of hardwork and not a fluke of some kind
(see chapter6.js)

### returning with arrow functions:
- one line arrow function returns without keyword
- example:
```Javascript
let addTwoNumbers = (x, y) => x + y;
// call and store
let result = addTwoNumbers(12, 15);
console.log(result);
// output: 27
```
- multiline arrow function requires return keyword

### variable scope in functions:
- often considered challenging
- scope:
    - defines where a certain variable can be accessed
    - in scope - can access variables
    - out of scope - cannot access variables

- local variables in functions:
    - only in scope in function its defined in
    - true for variables defined with let and var
    - function parameters are local variables
- example:
```Javascript
function testAvailability(x) {
    console.log('available here:', x);
}
testAvailability('Hi');
console.log('not available here:', x);
// output: available here: hi
// output: referenceError: x is not defined
```
- called inside function x is logged
- called outside function console.log fails as x is local to the function testAvailability()
    - function parameters only in scope within function

- this is also true for variables defined inside a function too
- example:
```Javascript
function testAvailability() {
    let y = 'local variable';
    console.log('available here:', y);
}
testAvailability();
console.log('not available here:', y);
// output: available here: local variable
// output: referenceError: y is not defined
```
- combining local variables and return allows values to be available outside of function
    - if variable values required outside of functon return them
    - cannot return the variable itself
    - store the value in a different variable outside of function
- example:
```Javascript
function testAvailability() {
    let y = 'returned value';
    console.log('available here:', y);
}
// could have also been declared as variable y but would have been confusing (two different y variables)
let z = testAvailability();
console.log('outside function:', z);
console.log('not available here:', y);
// output: available here: returned value
// output: outside function: returned value
// output: referenceError: y is not defined
```
- let versus var variables:
- var is function-scoped
- let is block-scoped e.g. {
    let available in here
}
- var example:
```Javascript
function doingStuff() {
    if(true) {
        var x = 'local';
    }
    console.log(x);
}
doingStuff();
// output: local
```
- being function-scoped var is available anywhere within function block
    - even before defining with value undefined
    - after if block ends - x still accessible
- let example:
```Javascript
function doingStuff() {
    if(true) {
        let x = 'local';
    }
    console.log(x);
}
doingStuff();
// output: referenceError: x is not defined
```
- being block-scoped let is only available in the block defined in
    - x out of scope when if block ends

- order of declaration:
- let:
    - trying to use value before defining it with let will give reference error: x is not defined
    - variables declared with let cannot be accessed before being defined 
    - even in same block
- var:
    - simply gives undefined
    - known as 'hoisting'
    - when using variable before being declared will result in undefined, not a referenceError

- const scope:
    - block-scoped like let

### global variables:
- declared outside a function and other code blocks
    - accessible in function or block defined
    - also accessible to 'lower' scopes
    - varible declared at top level of program available throughout program 