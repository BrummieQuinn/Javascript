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
    - always in scope once declared
    - accessible in function or block
    - also accessible to 'lower' scopes
    - varible declared at top level of program
    - available throughout program
(28/08/2023)    
- can hide accessibility within a function:
    - specify new variable with same name within that scope
    - can use let, const and var
    - in the case of const - not the same as changing value
        - created new const variable that overrides the first one in the inner scope of the function
    - cannot specify two let or const in same scope
        - can do that for var but advised not to as can cause confusion in the program

- create a variable with same name inside a function:
    - a variables value will be used when referred to in the scope of function
- example:
```Javascript
let x = 'global';

function doingStuff() {
    let x = 'local';
    console.log(x);
}
doingstuff();
console.log(x);
// output: local
// output: global
// inside the function: the variable used is x = local
// outside function: variable used is x = global
```
- pay extra attention not to mix up names of variables in local and global scope
    - same true for parameter names
- example:    
```Javascript
let x = 'global';

function doingStuff(x) {
    console.log(x);
}
doingStuff('parameter');
// output: parameter
```
- should not rely on global variables
    - *NOTE:* I would assume this to be something to do with modular functions and keeping functions self contained within programs
    - since local variables override global variables:
        - best to work with local variables within functions
        - gives more control over code

- declaring a variable without let, var or const:
    - doing this within a function will lead to interpreter assigning global scope to variable
- example:
```Javascript
function javascriptQuirk(){
    x = 'guess my scope...';
    console.log('inside the function', x);
}
javascriptQuirk();
console.log('outside the function', x);
// output: inside the function guess my scope...
// output: outside the function guess my scope...
```

- immediately invoked function expression(IIFE):
    - a function expressed to be immediately invoked
    - an anonymous function as it self-executes (since the names for functions are necessary to call them later) 
    - useful for initialising something 
    - many design patterns make use of this e.g. creating:
        - private variables
        - public variables
        - functions
- an IIFE declared at top-level will not mean its content accessible from outside
- syntax:
```Javascript
// function surrounded by () creates a function instance
(function () {
    console.log('IIFE');
    // executed with final ();
})('parameters go here');

// combine with arrow function:
(() => {
    console.log('run right away');
    // 
})();
```

### practice exercise 6.5:
- use IIFE to create immediately invoked functions - observe how scope is affected

1. create a variable value with let
    - assign string value '1000'

2. create an IIFE function
    - assign a new value to variable of same name
    - output local value from within function

3. create an IIFE expression
    - assign a new result variable 
    - assign a new value to variable of same name
    - return local value to result variable and invoke
    - output result variable along with variable name previously used
    - what is the value now?

4. create an anonymous function that has a parameter
    - add logic to assign a passed-in value to the same variable name as other steps
    - output as part of a string sentence
    - invoke and pass in desired value within rounded brackets

* Planning:
- just realised I didn't do any planning for the last one, but I didn't really struggle until the anonymous function bit.
    - I misread anonymous as arrow function: have no idea why apart from the fact that I obviously need to read questions and tasks way more.
    - if I had planned I'd probably have noticed and adjusted my approach

### recursive functions:
- call the same function from inside the function
    - elegant solution to complex problems
- example:
```Javascript
// recursive function with conditional to give a stopping point - without it, it would never stop
function recursive(nr) {
    console.log(nr);
    if (nr < 0) {
        recursive(--nr);
    }
}
// will print 3 then counts down until 0
recursive(3);
```    
- the steps of the above function:
    - recursive(3)
        - recursive(2)
            - recursive(1)
                - recursive(0)
                - done with recursive(0) execution
            - done with recursive(1) execution
        - done with recursive(2) execution
    - done with recursive(3) execution
- example:
```Javascript
function logRecursive(nr) {
    console.log('started function:', nr);
    if(nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log('done with recursion');
    }
    console.log('ended function:', nr);
}
logRecursive(3);
```
- if a function needs to be called muliple time and a loop is needed - consider recursion instead
- instead of looping over everything inside same function 
    - example usage:
        - search/ query
    - split it up inside function
        - call function repeatedly from inside
    - performance slightly worse than a regular loop however
    - if a bottleneck occurs consider another option/approach

### practice exercise 6.6:
- common problem that can be solved with recursion is calculating the factorial
    - call function with a lower number until 0
    - calculate factorial result of numeric value set as function argument

1. create function
    - has condition to check for argument value 0

2. if parameter equal to 0
    - return value of 1
    - else return value of argument
        - multiplied by value returned from function itself
        - subtract 1 from value of argument provided
        - block should run until value 0

3. invoke function
    - provide argument
    - code should:
        - run whatever number passed
        - decrease all the way to 0
        - output results of calculation to console
        - function can contain console.log to print current value of argument in function as it executes

4. change and update the number
    - how does it affect results?

* Planning:

- the plan is to follow the steps carefully since misreading happens to me alot, which affects the approach I take.

*NOTE:* I've never been good at coding challenges that have asked the same before, and thats without being so specific about the function used (in all honesty, I read the question, think I can do it(maybe), panic, confuse myself and get left thinking I will never learn Javascript)

the fact that I've never stopped learning despite the confidence knocking set backs, the fact I haven't been searching the internet to help me complete the exercises because I'm so determined to be able to write code myself and the fact that when I hit a wall I'm willing to invest more time in the concepts that I feel haven't quite stuck, I feel is a testament to how much I love programming and how determined I am to become fluent in Javascript, so I can learn C#

afterall, I'm learning Javascript now but its not my final goal. Being able to apply the concepts and fundamentals from this to C#, python or any other programming language that gets thrown at me is my true goal

- factorial of a number:
    - are a the product of all positive integers bigger than 0 up to the number itself
    - factorial of seven: 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1

```Javascript
// create function - 1 parameter
function factorial(n) {
    // create conditional
    if (n === 0) {
        return 1;
    } else if (n > 0) {
        console.log(n);
        return  n * factorial(n - 1);
    }
    console.log(n);
 }
factorial(5);
```
- okay so I just realised that while I know how a factorial works in mathematics:
    a. I need a refresher 
    b. have no idea how to make it work in javascript
- point is for the first time I'm having to look something up and I'm not feeling to great about that.
- on the bright side the recursive part works with current argument of 5 I'm logging all positive numbers below it - so really I just need to know what a factorial looks like.
- bit bummed but I don't know what I don't know, but I'll make sure I'll never forget it again if I find out
> else return value of argument
        - multiplied by value returned from function itself
- I can't believe this is my obstacle!!!
    - turns out if I'd console.log the function I would've been able to see if what I had been attempting worked.
    - I did lookup factorial and started putting the parameter in different places one being in the return function (produced Infinity) but I knew that n needed to be multiplied by the returned factorial fuction. it turns out one of my previous tweaks had worked 'return n * factorial(n - 1) but I didn't know
    - note to self when working with functions in the future, console.log the function call to see if its working or not!
*NOTE:* I can't believe I figured it out! by myself too - apart from refreshing my memory on factorials notation in maths.

once I did that it just became a matter of how to multiply n by the returned value of the function

I also thought I'd put in all the console.logs I needed

> function can contain console.log to print current value of argument in function as it executes

I read this part but didn't fully take on board what it meant for me to do, but I'm actually glad to have come up with the idea to console.log the function call though.  I mean even if it was mentioned in the intructions, to have it occur to me separate from that makes me feel like I have more tools to work with now

so even though the programs I write don't work first time (and why would they at this point or ever) I know that I can try various things to attempt to get the result I want

### nested functions:
- functions inside functions:
- example:
```Javascript
function outerFunction(n) {
    console.log('outer function');
    // called before declaration using outerFunction parameter n
    innerFunction(n);
    // outerFunction argument is used to calculate innerFunction value
    function innerFunction(x) {
        console.log(x + 7);
        console.log('can access outer varaiables', n);
    }
}
outerFunction(2);
// output: outer function
// output: 9
// can access outer variables 2
```
- outer function calls nested function
    - nested function can access parent function variables
    - parent function cannot access nested function variables - inner function scoped

### practice exercise 6.7:
- create countdown loop starting at a dynamic value of 10

1. set start variable at value of 10

2. create function
    - one argument: countdown value

3. within function
    - output current value of countdown

4. add condition
    - check if value less than 1
    - if less than 1 return function

5. add condition
     - if value not less than 1
    - continue loop: call function recursively

6. add decrement operator
    - decrease value until 0

7. update and create second countdown
    - use condition to check value
    - if greater than 0 decrease by 1

8. use return
    - return the function 
    - should keep invoking until condition not true

9. when new countdown value sent as function argument
    - make sure there's a way out of loop 
    - use return keyword
    - condition that continues loop if met

* Planning:
```Javascript
let start = 10

function countdown(n) {
    console.log(n);
    if (n < 1) {
        return countdown(n);
    } else if (n > 1) {
        return countdown(n - 1);
    }
}
```

- I'm thinking start should be the parameter in the function even though I've used n in my plan so I'll try that first and see where I am
(29/08/2023)
- so after using start I realised that wasn't right and rather than n, went with the more descriptive countdownValue.
- I don't think I was ever going to be on the right track for this exercise.  I'm not sure if it's how the steps are laid out but I was only able to figure out the second countdown was supposed to be a second function 
- it was this step that was very confusing to me and actually added as an extra condition to original function.
- I also forgot to call the function with the start value variable at first before I remembered to add it to the first function call
- step 4 I found unclear as I was returning the function but I just need to return the value of the function
- step 5 and 6 I understood so that part didn't need to be changed.  I remembered from the factorial exercise that the countdownValue variable could be decremented when returning the function
- once I saw the solution it was very clear what it did understand from the instructions and where I had misundertstood and I wondered about the vagueness from steps 7 - 9.
>  Update and create a second countdown using a condition if the value is greater than 0. If it is, decrease the value of the countdown by 1
- would I have gotten the solution eventually?  I don't know, since I've never attempted to do something like it before.  I genuinely thought I'd been making progress, but now I hit this wall and it's like what?
- since its something new I've learned I'll try not to feel too disheartened and keep up the momentum I had before this

### anonymous functions:
- functions without names stored in variables
- example:
```Javascript
// changing a named function to anonymous function:
function anonymous() {
    console.log('not so secret though');
}
// becomes:
function () {
    console.log('not so secret though');
}
// in order to invoke nameless functions:
// store in a variable
let functionVariable = function () {
    console.log('not so secret though');
}
// call
functionVariable();
```
- allows the passing of functions as parameters
- known as callbacks

### practice exercise 6.8:

1. set a variable name and assign a function to it
    - function expression with one parameter
    - outputs a provided argument to console

2. pass an argument into the function

3. create the same function as a normal function declaration

* Planning:
- I think creating the function declaration first and modifying it might be the way to approach this one for me
```Javascript
// function declaration
function output(parameter) {
    console.log(parameter);
}
output(argument);
// change to function expression
let output = function (parameter) {
    console.log(parameter);
}
output(argument)
```

### function callbacks:
- passing a function as an argument to another function
- example:
```Javascript
function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log('inside doFlexibleStuff');
}
// can call new function with an anonymous function
doFlexibleStuff(functionVariable);
// output: not so secret though (previous example output)
// output: inside doFlexibleStuff

// call with another anonymous function
// create function expression
let functionVariable2 = function () {
    console.log('another anonymous function'); 
}
// call doFlexibleStuff function
doFlexibleStuff(functionVariable2);
// output: another anonymous function
// output: inside doFlexibleStuff
```
- useful with asynchronous functions
    - built-in Javascript functions such as setTimeout() and setInterval() show the usefulness of the concept of a function executing a function having been called itself 
    - useful for managing asynchronus program execution
- example:
```Javascript
let youGotThis = function () {
    console.log('keep coding');
};
setTimeout(youGotThis, 1000);
// after waiting 1000ms (1 second) will output:
// 'keep coding'
setInterval(youGotThis, 1000);
// every 1000ms will output:
// keep coding  (until program ended)
```

### chapter 6 projects:
- create a recursive function:
    - counts up to 10
    - invoke with different start numbers as argument
    - function should run until value greater than 10

* Planning:
- I'll have a quick look over my recursive function factiorial - if I manage this I'll be able to complete the same freecodecamp task

```Javascript
function recursiveFunction(n) {
    if (n === 0) {
        console.log(n);
        return 1;
    } else if (n < 10) {
        console.log(n);
        return recursiveFunction(n - 1);
    }

}
```
- It worked! and after I looked at it I realised the first condition wasn't even necessary so I removed it from the final solution.
- once the numbers recursively counted down I realised it was working and changed n-1 to n+1 to count up instead

- set timeout order:
- using arrow format to create functions that output values one and two 
- create a third function that outputs three and invokes first two functions
- create a fourth function that outputs four
    - use setTimeout() to invoke first function immediately and then the third function

* Planning:
- I didn't do any planning for this one as I actually had a pretty clear idea of what I needed to do to get to the solution
- once I recognised three was a multiline arrow function I remembered to put the curly braces in an put each statement on a different line
- I also remembered to call my functions this time to see them working in real time to make any adjustments
- four wasn't as difficult as it first seemed, I did have to look up immediate invoking a setTimeout, I did however have a feeling it would be 0 or nothing - to make my code clear though I added 0
- one interesting thing I noticed though,  is the fact that even though the timer is set to 0, three() was still invoked before one()

### summary:


