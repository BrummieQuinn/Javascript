# Calculator project: (start 2/09/2023)

## Objective:
- to create a calculator with basic functionality to start, gradually adding more complex functionality as I progress
- overall I believe this will show my ability to build a simple html, css and vanilla website using:
  - event driven programming
  - problem solving
  - analysis
  - independent working
  - ability to adapt my plans
  - ability to learn fast
  - ability to learn from my mistakes
  - my own code
  - my thought process

### Planning:
(02/09/2023)
- I'll start with the html and css and with a Javascript goal of simple addition and handling the click events.

* User Interface:
- I want my user interface to use semantic html. Accessibility is really important to me when I make websites and this calculator will be no different.
- The calculator needs:

  - display:
    - for input from user
    - for output from calculation
  - buttons: numbers 0 - 9
  - button: equals '='
  - button: add '+'
  - button: clear 'reset'

- The html tags:
  - `<header>`this will hold the page title `<h1>` and `<p>` to explain purpose of page
  - `<main class='calculator'>` container of the calculator
  - `<section class='display'>` container of display
  - `<input type='number'>`
  - `<output>`
  - `<section class='buttons'>` container of buttons
  - `<buttons>` one for each number 0 - 9 plus two for calculation add '+' and equals '=' and a clear button for resetting the values of input and output
  - As I've been creating my html, I've decided I would leave the css until after the Javascript interactivity and logic has been completed. The CSS will add the design and layout of the calculator but getting the buttons etc to do what they need to is more important as it will take me the most time to complete.

* Javascript Functionality:

1. List of all the things I need to handle:

   - each number button when clicked needs to display the corresponding number on input
   - full input should be displayed
   - the add button should add two numbers
   - the equals button should return the sum to the input replacing numbers and '+' from input
   - the clear button should clear the output and input:
     - possibly a condition based on whether there is a value to be removed at all in:
       - both input and output !== ''
       - input !== ''
       - output !== ''

2. The first thing to work on is getting 1 number to enter on the input
   - add function to add event listener to listen for button click
   - add function to add event listener to update display
   - on click the button should update the input box to display number of button

* edge cases (that I can think of so far):

- the edge cases I will need to account for even with just basic addition in mind for my first goal.
- During planning I've managed to come up with a few situtations so far that would need to have a solution for handling even though i'm only handling addition for now anything beyond that functionality would need to throw an error and alert the user that the functionality is not ready yet or I can disable the relevant buttons involved with these cases:

~~what happens if user inputs letters?~~ 
~~throw error 'not a valid input.~~ ~~please use numbers 0 - 9'~~ 
 
- I've taken care of this by setting the input to readonly. only the buttons will be able to change the value

- what happens if user inputs decimal? (not possible without a decimal button being added anyway - input readonly) return floating point number <=== seems like complex functionality

- what happens if user inputs a large number that requires BigInt? condition to cover BigInt number input? <=== seems like complex functionality
    - will need to throw an error and inform user number too big for now

- what happens if a user attempts more than one calculation at a time? e.g. 7 + 5 - 9 \* 10 / 3
    - throw error and inform user that only simple calculations can be done for now

- what happens if the user attempts to divide by 0?

- what happens if user attempt to use double operators? 

  - only time this should happen eventually is for exponentials '**' <= future complex functionality
    - all other cases should throw error in which case I need to catch and deal with it 


### Planning:
(03/09/2023)
- Today I'm working on the interactivity of the calculator
- I came up with the idea of the numbers and operators being in an array. Using an array for the numbers would be ideal as the zero based index would line up with the numbers of the calculator.
- this feels like its complicating things way too much for me. I've used a type='number' in input and made it read only so it can only be manipulated by javascript so maybe necessary later on but not right now

```Javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```

- I gave all my buttons an ID as I've read that getElementById is faster than all other options when traversing the DOM
- I've changed my mind and decided to use querySelectorAll('.buttons'); this has given me a node list of all buttons I can loop through if necessary but also makes the buttonClick function I'm creating more generic/reusable for each button that passes the check I hope to log
```Javascript
const buttons = document.querySelectorAll('.buttons');

buttons.addEventListener(onclick,() => {

})
```
- I need to store:

  - current input
  - previous input
  - current operation
    - result of current operation

- I need to add event listeners to:

  - number button(s) on click
  - add button on click
  - current input should update on click

- the calculation will be a function:

  - I have two options I think here:

    1. I can wait until complete calculation input:

       - then calculate the input in full
       - e.g display = 9 + 3
       - user click equals => update display => result (12)

    2. I can store each value as input:
       - store first input
       - store second input
       - store operand used
       - calculate result of operation
       - update output display with result of calculation

- I also have to handle the clear button:

  - clear/reset displayed values

- For the calculator display I have decided to go with a form containing a readonly `<input>` only updatable with the buttons and an `<output>`

- I think I need to create functions at this point:

  - it needs to register the click on the button
  - it needs to check that the value is a number
  - it needs to check that the value of the number of the button matches the element in the array 'numbers'
  - it needs to log output

- I've just realised I should give each button the value it represents as developer tools console shows it as an empty string which would return false on any boolean check I'd make

- I really wish I had continued this train of thought earlier (querySelectorAll()), but I wanted to try to consider any other options I might be missing first.  It was my original idea of using the ID's of the buttons since it was quicker than selecting from all the class names in the DOM. This turned out to be a dead end for me, but I'm glad I tried because mistakes made now, mean I won't try to do that again if I do something similar to this in the future.
- Basically I couldn't think of a way to do it and keep the button code reusable - it would always be specific to that button which would make maintaining the code difficult and would require me to add event listeners to each button individually which led me full circle to using the querySelectorAll() 

- I know I have a nodelist so I looked up what methods I needed to iterate one, turns out it can use the forEach and for of methods without any conversions necessary. I'm already storing the buttons in a variable so I created a for of loop. In the loop I've added event listeners to each button, and at this point I just wanted the button to log to the console (bringing my goals way back lol).

- I've been stuck at this point for a while trying to see if I could remember on my own, however until I refreshed my memory on the syntax for addEventListener (thank you MDN), I couldn't move on. My code now looks like this:

```Javascript
for (let button of buttons) {
    console.log(button);
    button.addEventListener('click', () => {
     
    })
}
```
- in the event listener I'm adding the 'click' event and an arrow function.  Now I'm here and thinking about what I have and need:
    - I have button variable holding each individual button after the loop
    - I have an event listener for click event
    - I need to get the value of the button clicked
    - I need to store the value of the button in another variable
    - console.log variable with button value
- I've looked at the console and looking over the list of available methods etc I see I hadn't needed to add a value to each of the buttons in the html file either, since I can see it as the key/value pair for innerHTML and innerText. I've heard innerText has security issues though so I'll assign this innerHTML value to the variable I've created in the loop.
```Javascript
button.addEventListener('click', () => {
let buttonValue = Number(button.innerHTML);
console.log(buttonValue, typeof buttonValue);
});
```
- I've added a console.log for buttonValue the new variable hopefully holding the currently clicked button number
- Its logging to console! so yeah its logging each button clicked to the console. this is working for everything I currently have a button for but I need to work out what to do for the clear button which logs clear lol
- checking the console.log with typeof unsurprisingly returned string, but I'm glad I checked as it means I need to perform a conversion before they're logged to the input.
- I can change the value to number using the Number() constructor method but I only need that for 0 - 9. The buttonValue variable I've created is scoped to the event listener function so this is where I need to both convert the data type from string to number and a condition its only the buttons with numbers 0-9 that are converted

### Planning:
(04/09/2023)

- I came to a conclusion this morning based on yesterdays efforts that I would delete everything and start anew based on what I'd accomplished yesterday:
  - The code I wrote yesterday logged every button being clicked to the console (big accomplishment lol) and thats how I identified that the button values were strings.  However I needed only the numbers to be added to the input if they're to be calculated.  Yesterday I was using Number(button.innerHTML) on the , but that was only because I had forgotten about parseInt(button.innerHTML).  I decided I needed a condition that would apply parseInt to the buttons between 0-9
  - Yesterdays major frustration and confusion of not being able to add the button value to the input and it turns out it was something to do with vs code. Writing input.value = buttonValue; gave a redline under input.value (value didn't even come up in the list of the available methods on the element object!) so I was under the impression I was writing invalid syntax.  I never even bothered to click on the buttons to check if it worked.
  - After checking MDN and multiple books, I found no other way to change the input value so today I decided as I said before to delete everything and rather than approaching it as I did yesterday I'm going with a lego approach and try to build one step on top of another.  That said this morning I've come up with this using my approach of focusing on one task and the steps necessary to complete it.  I never really understood the breaking down of a problem until today, I overambitiously declare I'm going to focus on the basic addition forgetting that even before all of that the input needs to be displayed.  So thats what I focused on getting input into the display and the steps/statements necessary to that end:

```Javascript
  // working out calculator:
// variable to store input element
const input = document.getElementById('input');

// variable to store button elements
// results in nodelist, to access individual buttons use for of or forEach
const buttons = document.querySelectorAll('.buttons');
// for of loop to access individual buttons
for (let button of buttons) {
  // console.log to check
    console.log(button);
    // add condition for buttons with strings between 0 - 9
    if (button.innerHTML >= '0' && button.innerHTML <= '9') {
      // add event listener to listen for button click, I've used an arrow function since its a callback for the click
        button.addEventListener('click', () => {
          // create new variable to hold each button value and change to a number for calculation
            let buttonValue = parseInt(button.innerHTML);
            // check 
            console.log(typeof buttonValue, buttonValue);
            // assign buttonValue to input value
            input.value = buttonValue;
        })
    }
}
```
 - currently clicking a number button updates the input to show the number pressed, this is good and better than yesterday but I get the feeling I'm missing something.  I think I need to include a way to store the numbers pressed and eventually the operator(s) used too and pass that to the input.value  as a whole instead of the individual basis its doing now
- Now this next step is identified I know what the next goal is:
  - I think I'm converting the strings earlier than I need to, I need the buttonValue to be be passed out to a global variable that can then pass to the input.  What I need to do though is get a concatenated version to be passed out:
    - but how can I pass the + and the future operators to that string?
    - I was planning to deal with the operators:
      - as an else if in the for loop and 
      - the clear button as an else which would return input.value = ''
      - each condition is assigned an eventListener while messy, I can always refactor later, the most important thing is just getting my statements written in a way they work in conjunction to give calculator functionality.
- I'm also starting to see how it breaks down into each step:
  - I've created a variable to hold the input element - I also worked out I can use input.value to update the input element
  - I created a variable to hold the buttons - This gave me access to a node list I was able to use a for of loop with a condition that only the numbers between 0 - 9 would log

~~within the condition I added an event listener to these buttons and converted them to integers to pass to input.~~
~~value~~

  - still thinking in terms of functions and modules and thereby constraining myself unconciously I decided I couldn't do that as only the individual numbers showed up and not every button pressed
- I've decided I need to filter the buttons into catagories and deal with them with them based on that - another subconcious constraint discovered is minimising the number of event listeners I'm using, why would I hobble myself in the process of just getting a working solution.  Obviously I shouldn't have too many, but logically I should've thought about grouping common elements and working with them separately. 
- Once I got the numbers logging to input with the previous code, I began to think about how I would work with the other buttons and thats when I realised I was on the right path for numbers.  But if I wanted to work with the other buttons I would need branches to handle them
```Javascript
// building a calculator - current goal(4/9/2023): addEventListener to button and update input value with button input:
const input = document.getElementById('input');
// create variable to hold all clicked  button values and pass to input to display
let currentValue;
// create a variable to hold all button elements:
// results in nodelist
const buttons = document.querySelectorAll('.buttons');
//  access individual buttons using for of loop:
// assigns individual buttons to button variable
for (let button of buttons) {
    console.log(button);
    // 1. condition to filter numbered buttons
    if (button.innerHTML >= '0' && button.innerHTML <= '9') {
      // declare new variable to hold the string assigned to each button
        let buttonNumbers = button.innerHTML;
        // add event listener for button click
        button.addEventListener('click', () => {
          // check
            console.log(buttonNumbers);
            // add and assign buttonNumbers to current value
            currentValue += buttonNumbers;
            // update input element value with current to access individual buttons using for of looalue string
            input.value = currentValue;
        })
    } else if (button.innerHTML === '=') {
        let buttonEquals = button.innerHTML;
        // code here will deal with calculation, possibly calling on an outside function to calculate the current input string
    } else if (button.innerHTML === 'clear') {
        let buttonClear = button.innerHTML;
        button.addEventListener('click', () => {
            console.log(buttonClear);
            currentValue = '';
            input.value = currentValue;
        })
        
    } else {
        let buttonOperators = button.innerHTML;
        // code here will deal with operator functions
       }
}
```
- I added the other operators to the html after I realised just logging + with the event listener wasn't enough to prove all the operators were covered by the final else statement and they were.  I had been wondering the most efficient way to group them without a long '&&' statement, but by filtering out '0-9' and then separating '=' and 'clear' there's nothing left but operators.
- wow feeling like such an idiot right now.  So pretty much spent the whole day trying to get the operators to show up in the input field, yeah I should've gone with a 'type="text"' instead of 'type="number"' cos yeah I'm working with numbers but that input field was giving me warnings in console about the operators not being in range and I thought it was talking about scope for some stupid inexsplicable reason.
- So far I've accomplished, logging the number buttons to the input field (now a text input field) and now the concatenated operators.
- However I now need to figure out how to have the whole value stay in the input field. Its current behaviour:
  - the number buttons when clicked are displayed in input field - concatenating in order clicked
  - the operator buttons when clicked are displayed in input field.
    - problems:
      - using '+=' will concatenate the operator on the right of itself so I changed that for an assignment 'currentOperator = buttonOperators'.
      - when clicking on another number value, the input field will add the operator to the right of the currentValue. Clicking another number after that replaces input with the new numbers concatenating. Clicking operator then shows it at the end of the string of numbers
      - In the console you can see each number is logged individually while concatenating for input. The operator concatenates to the number string just like input field
  - The clear button works currently to assign currentValue and currentOperator to empty strings, which works for current purpose - I will need to update this functionality as I progress no doubt

### Planning:
(5/9/2023)
- Todays goal is to fix the behaviour of the input field.  At this point all I can do is experiment with my current code and work it out iteratively.
  - the numbers log as they should, however I need to possibly update it with some condition that if there is an operator it concatenate the next number(s) chosen.
- I would also like to create a function out of what I currently have, I've been thinking about the following this morning:
```Javascript
function buttonInput (buttons) {
  const buttons = document.querySelectorAll('.buttons');
  for (let button of buttons) {
    if(button.innerHTML >= '0' && button.innerHTML <= '9') {
      let buttonNumbers = button.innerHTML;
      return buttonNumbers;
    } else if (button.innerHTML === '=') {
      let buttonEquals = button.innerHTML;
      return buttonEquals;
    } else if (button.innerHTML === 'clear') {
      let buttonClear = button.innerHTML;
      return buttonClear;
    } else {
      let buttonOperators = button.innerHTML;
      return buttonOperators;
    }
  }
}
``` 
- Can I then use this function in the event listener?
- I need to think about it some more so I'll focus on the input behaviour for now and keep it in mind for the future of this project.
- So I think I've made some progress on the input behaviour when a button is clicked. Before when an operator was clicked the input would disappear to be replaced by the new number and only the numbers were concatenating as a string. Any new operator just apppended itself temporarily on the right of the string of numbers.
- I had to really think about how I was using the previousValue variable I had created to store the input.value, I checked out the console and it was logging empty every time - because I wasn't assigning it any of the values in the event listeners to store.
- starting first with the event listener for the numbers I added the previousValue variable and assigned it the currentValue; now it was holding the string of numbers.  I had to do something similar to the event listener for the operators again I assigned the previousValue the currentValue but this time I decided to try currentValue += currentOperator.
- Now its kind of working to hold the input, breaking my code into functions is coming sooner than I thought I guess.  The only issue I have now is that the operator doesn't appear in the input when clicked. However it does appear in the appropriate place when another number is clicked and the whole of the calculation is staying in the input until the clear button is clicked.  I need to think about the operator not appearing until another number or operator is clicked and what I can do to fix it, its not a good user journey to not see the input until the next button is clicked
- This is my code so far, I feel so close to finding a solution for todays goal of getting the input behaviour to work as intended, I've gotten this far alone, I've clearly got more ability than I give myself credit for at this point.  It may be crude and messy but that can be refactored, I really feel like I'm on the right track and the solution doesn't require me to scrap everything this time
- my code at this point looks like this
```Javascript
// working out the calculator display and buttons:
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
    console.log(button);
    if (button.innerHTML >= '0' && button.innerHTML <= '9') {
        let buttonNumbers = button.innerHTML;
        button.addEventListener('click', () => {
            currentValue += buttonNumbers;
            input.value = currentValue;
            previousValue = currentValue;
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
            // assign previousValue currentValue
            previousValue = currentValue;
            // concatenate currentOperator to currrentValue
            currentValue += currentOperator;
            // update input with previousValue and currentValue
            input.value = previousValue + currentValue;
            // check: showing all input logged and concatenated correctly
            console.log(previousValue);
        })

       }
}
```
- I've done it! I figured out what I was doing wrong and how I needed to correct it.  In the previous iteration of the operators event listener input.value was only assigned the previousValue and currentValue, so even though the currentOperator was being appended it wasn't going to show up in the input.  By exchanging currentValue for currentOperator I'm now logging each number in the input and each operator in the input, the input is able to display each step of the calculation and a console.log of previousValue shows the input string up to the last operator added
```Javascript
// working out calculator - addEventListener to button and update input value with button input:
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
    console.log(button);
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
            console.log(previousValue);
        })

       }
    
}
// index1.js
```
- The only problem I have, and I'm not sure if this will be an issue going forward, is that previousValue will not be able to hold the next operator clicked unless another number chosen after that in which case that next number will also be missing.
- I'm not sure how this will affect my ablility to calculate the string going forwards but now I have met my goal of logging all input I now need to work out how I'm going to convert the string numbers to numbers to be passed to the calculate function I need to write.
- Before that though now I have this part working I've met todays goal, which means for the rest of today I'll be working out how to make my code less crude.  I was thinking since the beginning that I should probably refactor as I go and creating functions to make it easier on myself going forward with the next stage: calculation
- adding a console.log(input.value) shows my fears were unfounded, the previousValue variable is doing its job temporarily storing the string representing the previous input and the input.value is showing everything it holds. 
- I need to put some thought now into how I turn what I have into reusable code that doesn't repeat itself:
  - If I create a general buttonInput function it will need to pass the argument of the button.innerHTML and handle the behaviour for those buttons dependent on the value
```Javascript
function buttonInput (buttons) {
  if (button.innerHTML >= '0' && button.innerHTML <= '9') {
        let buttonNumbers = button.innerHTML;
        currentValue += buttonNumbers;
        previousValue = currentValue;
        console.log(buttonNumbers);

  } else if (button.innerHTML === '='){
    let buttonEquals = button.innerHTML;
  } else if (button.innerHTML === 'clear') {
     let buttonClear = button.innerHTML;
     console.log(buttonClear);
     currentValue = '';
     currentOperator = '';
     input.value = currentValue;
        
    } else {
        let buttonOperators = button.innerHTML;
            console.log(buttonOperators);
            currentOperator = buttonOperators;
            previousValue = currentValue;
            currentValue += currentOperator;
            input.value = previousValue + currentOperator;
            console.log(previousValue);
        }

       }
``` 
- Can this function be split up further and should it? Would it be more reusable, easier to read or easier to maintain if I did?  That's what I'm thinking when I look at the buttonInput function I've created.  I don't expect to come up with a solution today, frankly, for me I got the input working sooner than I expected. Now I've written something, I have something to experiment with.  

### Planning:
(06/09/2023)
- Today I'm continuing on from yesterday. That means creating reusable functions that will call the event listener when the button is clicked
- My plan is to take yesterdays function plan and break it up:
  - function 1: number buttons
```Javascript
function numberClick (button) {
  if (button.innerHTML >= '0' && button.innerHTML <= '9') {
        let buttonNumbers = button.innerHTML;
        currentValue += buttonNumbers;
        previousValue = currentValue; 
        input.value = currentValue;
        console.log(buttonNumbers);
  }
}
```
  - function 2: operator buttons
```Javascript
function operatorClick (button) {
  if (button.innerHTML === '+' || button.innerHTML === '-' || button.innerHTML === '*' || button.innerHTML === '/') {
        let buttonOperators = button.innerHTML;
            console.log(buttonOperators);
            currentOperator = buttonOperators;
            previousValue = currentValue;
            currentValue += currentOperator;
            input.value = previousValue + currentOperator;
            console.log(previousValue);
        }

}
```
  - I'm not to happy with the conditions for this one and believe a switch statement might actually better here, but as before the goal is getting it to work before further refinement of the code

  - function 3: clear button
```Javascript
 function clearClick (button) {
     let buttonClear = button.innerHTML
     console.log(buttonClear);
     currentValue = '';
     input.value = currentValue;
  }
```

  - function 4: equal button
```Javascript
function equalClick (button) {
 
    let buttonEqual = button.innerHTML;
    console.log(buttonEqual);
    // function to calculate the input: to be created
    calculate(previousValue,currentValue, currentOperator);
  }
```
 - add event listener:
 ```Javascript
 const buttons = document.querySelectorAll('.buttons');
 function buttonInput (buttons) {
 for (let button of buttons) {
  button.addEventListener ('click', () => {
    numberClick(button);
    operatorClick(button);
    equalClick(button);
    clearClick(button);

  });
 }
 }
 ```
 - I've come up with this for the event listener but it still doesn't feel as good as it could be.  I absolutely can feel there's a more efficient way to call the buttons but for now this is all I've got.
 - I know why this code for the event listener is bugging me, its calling all the buttons at the same time when one button is clicked. I don't think this is a good approach if I'm planning to do more than just calculate simple calculations, if I plan to add more complex calculations that deal with exponentials, floating point numbers etc.
 - I'll keep thinking and experimenting for now.  After looking at my previous approaches I don't necessarily think I'm on the wrong path here the functions for the buttons are okay, my problem is deciding the approach for the event listeners
 - function 1: number buttons
```Javascript
function numberClick (button) {
  if (button.innerHTML >= '0' && button.innerHTML <= '9') {
        let buttonNumbers = button.innerHTML;
        currentValue += buttonNumbers;
        previousValue = currentValue;
        console.log(buttonNumbers);
  }
}
```
  - function 2: operator buttons
```Javascript
function operatorClick (button) {
  if (button.innerHTML === '+' || button.innerHTML === '-' || button.innerHTML === '*' || button.innerHTML === '/') {
        let buttonOperators = button.innerHTML;
            console.log(buttonOperators);
            currentOperator = buttonOperators;
            previousValue = currentValue;
            currentValue += currentOperator;
            input.value = previousValue + currentOperator;
            console.log(previousValue);
        }

}
```
- function 3: clear button
```Javascript
 function clearClick (button) {
     let buttonClear = button.innerHTML
     console.log(buttonClear);
     currentValue = '';
     input.value = currentValue;
  }
```

  - function 4: equal button
```Javascript
function equalClick (button) {
 
    let buttonEqual = button.innerHTML;
    console.log(buttonEqual);
    // function to calculate the input: to be created
    calculate(previousValue,currentValue, currentOperator);
  }
```
- I read up on event listeners some more and after looking through MDN which actually showed a for of for an imaginary situation with 100 buttons but the point is even before looking I had practically worked it out, I knew I was right to be bugged about the way I had been passing the functions to the event listener before, I had remembered that the target object of the event could be a parameter, I just hadn't been thinking about it in the right way before I used the for loop to attach the event listeners correctly but fell down by calling each button function each time.  The new way passes the button function to an event listener as its event target. So any new buttons I add like a new operator button or a memory button can be easily incorporated into the program now I've refactored it to be more easily readable and maintainable
- event listeners:
```Javascript
const buttons = document.querySelectorAll('.buttons');
for (let button of buttons) {
    console.log(button);
  button.addEventListener('click', numberClick);
  button.addEventListener('click', operatorClick);
  button.addEventListener('click', equalClick);
  button.addEventListener('click', clearClick);


}
```
- So turns out that the behaviour of the functions isn't as intended, the buttons log in the console as undefined and there is no update to the input element.  But I have a place to start, the clicks are registering but the statements for the original program aren't doing what they did outside of the functions.
  - I need to fix the current behaviour of my functions so I can move onto creating a calculate function.  I just need to iterate what I already have and be prepared to scrap or salvage what I have on my way to a solution
  - The only console.logs I'm receiving are for the equalClick function and clearClick function which are undefined.
 - I need to now narrow my focus on getting just one function to work
  - adding console.log to the clearClick function show empty for currentValue
  - if I can get clearClick to log its button value I might get a hint to where I'm going wrong with the others
  - the equalClick and clearClick are also fired when the numbers and operators are clicked this tells me I messed up with the logic
- I've changed my mind and decided to work on the function for numbers.  I've commented out everything except the event listener for the number button function
```Javascript
const input = document.getElementById('input');
console.log(input)
const buttons = document.querySelectorAll('.buttons');
console.log(buttons);

//variables for calculator input
let currentValue = '';
console.log(currentValue)
let currentOperator = '';
console.log(currentOperator);
let previousValue = input.value;
console.log(previousValue);
console.log(input.value);

// add event listeners
for (let button of buttons) {
  console.log(button);
  button.addEventListener('click', numberClick);
  // button.addEventListener('click', operatorClick);
  // button.addEventListener('click', equalClick);
  // button.addEventListener('click', clearClick);
}
// function to handle number buttons
function numberClick(button) {
  let buttonNumbers = button.innerHTML;
   console.log(buttonNumbers);
  
    currentValue += buttonNumbers;
    previousValue = currentValue;
    input.value = currentValue;
   
    console.log(previousValue);
  
}
```
- I removed the condition that was based on button.innerHTML as an experiment to see if the comparison was causing any of my issues and now it logs to the input and console, only problem is that it's logging undefined and not the button.innerHTML.  More experiments and investigations to be made on what I can do to get the original behaviour of logging the numbers that the buttons are holding as a string
- so after console.log(button) in the numberClick function gave me the pointerEvent object when a button was clicked, I opened it up to see what methods were available and found its srcElement(I want to research this) and target with the button content.  This made me realise the for loop was creating an event object from the button clicked.
- So I've been passing an event to a function and wondering why .innerHTML wasn't working or the conditions.  I was comparing an event object with a string datatype lol.  On the whole  I think I'm making some progress here, I'm understanding things way better than before.
  - can I create a condition to compare the target and update the input for number buttons on this event call?
  - I'll build this back better than before but I decided to get rid of everything in the function and focus on one thing at a time, gaining access to the buttons and registering the input is what needs to happen now
- Progress at last!!!! I'm logging all buttons through the numberClick function, the idea to use button.target was a good one, however that literally logged the button object, looking into the target methods I found innerHTML and added it using (.) notation now I have something for my conditions to compare against.
```Javascript
// (06/09/2023) - cancelling out all functions except numbers to focus on a single thing without the other console.logs sending to dev tools console

// calculator button input display
// variable assignment to document elements

const input = document.getElementById('input');
console.log(input)
const buttons = document.querySelectorAll('.buttons');

//variables for calculator input
let currentValue = '';
console.log(currentValue)
let currentOperator = '';
console.log(currentOperator);
let previousValue = input.value;
console.log(previousValue);
console.log(input.value);

// add event listeners
// creates an event object (button)
for (let button of buttons) {
  console.log(button);
  button.addEventListener('click', numberClick);
  // button.addEventListener('click', operatorClick);
  // button.addEventListener('click', equalClick);
  // button.addEventListener('click', clearClick);
}
// function to handle number buttons
// pass event object created in for loop to function
function numberClick(button) {
  console.log(button);
  // access event target to access element of button clicked
  console.log(button.target);
  let buttonNumbers = button.target.innerHTML;
  currentValue += buttonNumbers;
  previousValue = currentValue;
  input.value = currentValue;
  console.log(buttonNumbers);
  console.log(input.value);
  console.log(currentValue);
  console.log(previousValue);  
}
// index2.js
```
- I'm so glad I decided to work on the numberClick function over the clearClick function in the end.  It may even have been a bad idea full stop to have started there or it may have been quicker if I had.  Who knows but the point is I figured it out and I'm happy about that, even more I know why my functions were failing and I'll always know that using a for loop in this way returns something I should've realised but hadn't since I've never done this before
- I also understand it was the console.log(button) inside the for loop of the event listener that made me forget that after that the event listener was updating it into something else
- adding the condition back was as easy as before using the buttonNumber variable I created to compare the strings ensures only the number buttons are input when numberClick function is executed. Updating the other functions to give me back the previous functionality I had now should be a piece of cake now I know how to access the element values
- All previous input functionality restored only this time I have functions for each button type when a button is clicked it fires the event and executes the code related to that button type.  If I want to add more buttons I just need to add them to the HTML and depending on what they do, give them a separate function or add it to the calculate function I will now write as my next goal.
- I'm now at what I initially thought of at the start of this project as the first step. Giving my calculator basic addition functionality, I've had an idea for the whole calculate function for a while so I have a sort of rough sketch in my head
```Javascript
function calculate(number1, number2, operator) {
  let result = 0;
  if (operator === '/') {
    result = number1 / number2;
    return result;
  } else if (operator === '-') {
    result = number1 - number2
    return result
  } else if (operator === '*') {
    result = number1 * number2
    return result
  } else {
    result = number1 + number2
    return number1 + number2
  }
}
```
  - to make sure I'm only focusing on one thing I'm going to start with addition and add the other basic arithmetic calculations as if / else-if statements as I go.
  - I also need to make sure that when I pass the currentValue to the calculate function that I remember to parseInt and turn into an number data type or the calculate function will just concatenate the strings when added and every other operation will fail.
- New approach needed for calculate function. checking both previousValue and currentValue makes it clear my calculate function needs me to create a conversion and parse function or possibly break that into two separate functions to give the calculate function the data it needs to work.
- I  can't believe I forgot this part! But what I've discovered wasn't outside of the two possibilities I came up with to handle the input calculation and my approach just means I can figure out a way to use the full input to calculate the result. This means I can then leverage this function to take on multi-calculation input.
- I'm currently passing my  calculate function one parameter of calculation, it's current behaviour logs and outputs the current calculation to the output element, so I've got that much working at least.  I now need to work out what string methods I want to use to take this argument and split it into 2 numbers and an operator I can eventually pass to a calculate function that takes 3 arguments
- I'll use the currentValue I'm currently storing as an argument for a conversion function that will split the input at the operator and convert the numbers to integers using string methods.
- We're adding numbers!!!!
- After researching the split() method for strings on MDN I came to the conclusion I could split the input calculation using the currentOperator as the argument and assign it to a variable (inputArray).  Using the index positions I then assigned the individual strings to 2 variables and converted them to numbers with parseInt().
- I then called the calculate function inside the convert function using the two input variables and the variable holding the currentOperator
- the equalClick function calls the convert function for the current input.  It's probably a really inefficient way to do this but I'm proud of coming up with a solution at all.  I'm going to start adding the other basic operators now and see if it still works or breaks it.
- If it breaks thats fine, it means it was a one time solution and I'll need to think of something else.  I'm actually looking forward to trying to take a more complex calculation and trying to parse the strings and operators to use in my calculate function. 
- Before any of that I need to add the next operators and then  work on the edge cases I came up with earlier in the project that I'll need to handle
- My calculator is now performing basic arithmetic, I still have edge cases to take care of but far from just basic addition I have the four basic arithmetic calculations done too!!
- currently division by 0 logs a result of infinity. I believe I need to return a BigInt data type to handle this case
- I need to handle what happens when 2 operators are entered with an exception for ** exponentials

### Planning:
(07/09/2023)
- Today I'm going to be experimenting with my calculator to see what exceptions I can create and work out solutions for them
- Current calculator behaviour:
  - Division by 0 = infinity:
    - currently looking at MDN it seems there's a way to represent infinity in its integer form.  If I can add a condition to the division branch result that if equal to infinity it will return result(Number.MAX_VALUE)
    - another idea is doing something in my convertInput function as I'm currently using parseInt() but something else may be able to give me the integer value for Infinty.
    - I've looked into it some more and apparently for a simple calculator a result of Infinity is fine, so it may not be the most pressing edge case to address
  - Trying to input a calculation beyond the current convert function ability e.g 12 + 20 - 3 = ['12+20','3']:
    - Possible thoughts on this would be to add another split on the input array and possibly create another global variable like previousOperator to split by if necessary
  - Trying to input with double operators e.g 1++2 = NaN with an array that looks like this ['1', '', '2'] this is also true for **:
     - I need to find a way to deal with throwing an error for invalid input (I've been looking forward to working with the error object, since covering it in my javascript practice)
     - the error can be set to show for user either in the output element or the input element
     - the exponential then would need to be an exception or a calculation function added to the calculator.  In this case, looking at the edge cases has led me to another conclusion
- I've now been looking at the function that calculates and I'm wondering how I can make it better.  I was able to encapsulate the code for the button types when I refactored it and that too originally started as a large group of if else statements inside a function before I broke it down into functions associated with type.
- The main issue is that as it stands adding any more branches would increase the function complexity and thats the wrong direction.  If I break up my calculate function into separate functions I can add conditions for the edge cases without putting it all in one function.
- So for my next two goals I have decided to focus on the following:
  - Calculations:
    - function 1: add
    - function 2: subtract
    - function 3: divide - handle division by 0 with
                           condition either throw error or try to find a way to display Infinity as an integer
    - function 4: multiply
    - function 5: exponential - adding exponential 
                                capabilitywould also allow me to handle the error when double operators are entered into the input
- Convert:
  - The function itself is fine for now, however, I think if I'm going to handle multiple calculation inputs:
    - I might try to split the inputArray created by initial split and see if I can get it to split at the operator again.  
    - I would like to do that without creating and using another global variable if possible to keep my code as clean as possible
- My calculate function looks like this:
```Javascript
// function to handle calculations
function calculate(number1,  number2, operator) {
  if (currentOperator === '/') {
    // add condition for division by 0?
    let result = number1 / number2;
    console.log(result);
    output.value = result;
    return result; 
  
  } else if (currentOperator === '-') {
    let result = number1 - number2;
    output.value = result;
    console.log(result);
    return result;
  
  } else if (currentOperator === '*') {
    let result = number1 * number2;
    output.value = result;
    console.log(result);
    return result;
  
  } else {
    let result = number1 + number2;
    output.value = result;
    console.log(result);
    return result;
  }
  
}
```
- The other thing I want to hope to avoid is repetition and causing redundant code.
- I'll start with breaking up the function by calculation type:
  - function 1: add
```Javascript
function add(number1, number2, operator) {
  let resultAdd  = number1 + number2;
  output.value = resultAdd;
  return resultAdd;
}
```
  - function 2: subtract
```Javascript
function subtract(number1, number2, operator) {
  let resultSubtract = number1 - number2;
  output.value = resultSubtract;
  return resultSubtract;
}
```
  - function 3: multiply
  - add condition for exponential
```Javascript
function multiply(number1, number2, operator) {
  let resultMultiply = number1 * number2;
  output.value = resultMultiply;
  return resultMultiply;
}
```
  - function 4: divide
  - add condition for division by 0
```Javascript
function divide(number1, number2, operator) {
  let resultDivide = number1 / number2;
  output.value = resutltDivide;
  return resultDivide;
}
```
- I'm not sure about giving addition and subtraction a condition to deal with double operators, I'm wondering if I can throw an error elsewhere.  I've been looking at my code and wondering the best place to warn the user of invalid input and my equalClick function which already uses an if statement could be adjusted to include an else if for the double operators that are not **
```Javascript
// function to handle equals button
function equalClick(button) {
  let buttonEqual = button.target.innerHTML;
  if (buttonEqual === '=') {
    
    convertInput(currentValue);
    // console checks
    console.log(currentValue);
    console.log(previousValue);
    console.log(currentOperator);
    console.log(buttonEqual);
    console.log(output.value);
  }
}
```
- It's not enough to just add the condions to these functions, I want to try to do it in an efficient or clean way which may include using switch instead of if else

- I've broken my calculate function into individual calculations that can handle any edge cases related to them without creating a complex function.  Now I'll test it and try to see if I've broken the behaviour again or if it will continue behaving the way it did before I broke it up.

- The individual functions work! I've added each function to convertInput currently, I'm not sure if thats best practice so I'll read up on it and see if I need to refactor it into something cleaner.
- The calculator code now looks like this:
```Javascript
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
    // handle returned object from convertInput here
    // use a for in loop to access properties
    for(let input in inputs) {
      console.log(input.input1, input.input2);
    } if (current Operator === '+') {
      add(input.input1, input.input2);
    }
    // console checks
    // console.log(currentValue);
    // console.log(previousValue);
    // console.log(currentOperator);
    // console.log(buttonEqual);
    // console.log(output.value);
  }
}

// functions to handle calculations
function add(number1, number2, operator) {
  if (currentOperator === '+') {
    let resultAdd = number1 + number2;
    output.value = resultAdd;
    console.log(resultAdd);
    return resultAdd;
  }
}

function subtract(number1, number2, operator) {
  if (currentOperator === '-') {
    let resultSubtract = number1 - number2;
    output.value = resultSubtract;
    console.log(resultSubtract);
    return resultSubtract;
  }
}

function multiply(number1, number2, operator) {
  if (currentOperator === '*') {
    let resultMultiply = number1 * number2;
    output.value = resultMultiply;
    console.log(resultMultiply);
    return resultMultiply;
  }
}

function divide(number1, number2, operator) {
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
  // create object to return multiple values 
  let inputs = {input1: input1, input2: input2};
  console.log(inputArray);
  console.log(inputs);
  // return inputs object to equalClick function that called it
  // equalClick can unpack the object to pass arguments to arithmetic
  // functions
  return inputs;
}

```
- I'm going to move the calculations currently being called in convertInput to equalClick as my next goal to organise the logic encapsulation. It was a step in the right direction to break up the calculate function as I'm trying to avoid too much complexity in one function.  However calling the calculations withing convertInput is giving convertInput two jobs when it should have one, converting input into number type.  The equalClick function should handle calling the arithmetic functions instead. 
- This will require convertInput to return the parsed inputs to equalClick function, which will call the appropriate arithmetic function based on the currentOperator and pass the converted  numbers to them as arguments since I'm returning more than one thing and eventually plan to tackle longer calculations I need to decide what form to return the numbers to equalClick as. The only way to return multiple values according to MDN is to create and object or an array