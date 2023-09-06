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

 ~~ - what happens if user inputs letters? throw error 'not a valid input. please use numbers 0 - 9'~~ 
 
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

 ~~ - within the condition I added an event listener to these buttons and converted them to integers to pass to input.value~~

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
  - I need to fix the current behaviour of my functions so I can move onto creating a calculator function.  I just need to iterate what I already have and be prepared to scrap or salvage what I have on my way to a solution
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




















#### Thoughts of the day:
- I created this part as I've found myself making observations that aren't really appropriate for the planning area of this document, but I still want to record them for future me or anyone else.

(02/09/2023)
- I'm not the most confident person in the world, but I've decided that if I don't start to build something now I never will. I decided on a calculator because it requires user input, so I have to use html and css. It also requires Javascript logic to handle the inputs and outputs required for user interaction as well as the calculations.
- This project will not rely on any tutorials and will be built entirely from HTML, vanilla CSS and vanilla Javascript. I will limit myself to my programming books and MDN if I need to look something up. I'm aware there are plenty of tutorials out there, but if I just copy forever what will I really learn if somebody already puzzled out the hardest bits
- I've decided to start slow, I've always put myself off doing something like this because the final result is usually all singing, all dancing in my head and I usually lose confidence thinking about all the steps involved and my impression of what I think I'm capable of, but not this time.

(03/09/2023)
- I don't need functions (just yet), I need to write the code, statement by statement and stop trying to run/walk before I can crawl. I can create this calculator, it's not an impossible task, I've just got to do it with what I know/remember or think of, even if it means baby steps.
- Once I realised this I stopped trying to create functions and I forced myself to think in terms of what I wanted to happen and write each statement that leads up to that point and worry about breaking it down into functions later.  Without statements I have no functions

(04/09/2023)
- I have created a working calculator in the past by following a tutorial at https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/, however while I can do the html and css, I'm not able to reproduce its functionality as easily. This is despite understanding on a theoretical level what is going on in the code
- This frustration is what led me to choose this project of building a calculator.  I can build a function for an exercise that can find the hypotenuese when I was asked for statements. I can build a recursive factorial function when the exercise asks and have even built a basic calculate function that took three parameters a, b and operator so technically I have the knowledge to do this, but not being able to write what I know is frustrating and knocking my confidence.

- Sleeping on a problem always seems to work for me when I'm struggling with a problem or stuck on something logic based, and this isn't any different.
- last night while reading my webtoon I could feel myself still working through what I had already accomplished and what I still needed to do.
- I can feel that I'm on the right track and building statements as building blocks is helping me focus on getting one thing to work and seeing how I can add to it to make it do that and the next thing. My approach has changed drastically from I need to create functions to do x, y and z which is funny when I need to know what statements to give the functions first.
- I deleted everything this morning and decided to start again based on what I'd learned. The bonus of having puzzled the code out myself is that deleting it isn't so daunting when you know how to write it again if necessary.
- so going back to my goal and using what I've figured out, things that I knew and had read about and even done exercises etc about before.  It feels like I never really knew what I was doing at all.

- I can't believe I managed to work it out up to here, while simple for some, I feel amazing!  
- Translating what you know in your head into executable code I've found to be terribly frustrating and difficult. I've decided that while following tutorials can be helpful, your hand is held the whole time, you know why the functions work on a theoretical level but to then go off and try again on your own from scratch months later without even looking at it for reference is difficult.  You think your absorbing everything and can answer all the questions, but at this point turning what I know into something workable is dreadfully difficult.  But every step I make on this project, is a step carved into my mind including the things that don't work.
- I've also managed to identify things that I keep doing that slows me down:
  - I originally think of the project as build a calculator and start thinking functions.  It's not a major problem since functions will be a step I need to complete, but for a beginner like me, I should actually start with a smaller concept
  - I was on the right track by readjusting my thinking to a single small goal of addition.  However I was overambitious again in my goal and attempted to do too much in one go.
  - Yesterday I decided to scale the goal back even further to just console.log(buttonValue) and as I made progress on this I realised, this is an actual step. Broken down from Calculator => simple addition function => log button value to console with event listener
  - Building on this I realised everything had to happen within the eventlistener since all the variables created were scoped to that method (as should be). 

- Once again trying to do too much at once. Once again I'm reminded how much further I need to break this project down.
- Starting again is getting easier I'm not gonna lie, once I realise the direction is right or wrong, stopping to think about what I've done so far and what I need to do next usually quickly lets me know if I should continue that path or scrap and start again.  

(05/09/2023)
- I can't believe the progress I've made so far, people told me I could code and I was like yeah with a searchbar I can do anything, but if I had to do it from scratch without easy access to other people's hardwork, could I?  I know this isn't the hardest project to tackle in the grandscheme of things, but if nothing else I've given myself a much needed boost in confidence.  
- I started with a blank html, js and md file and an idea.  So far I've  built the structure of a calculator interface with an input and output for result of calculation, I've added the  buttons which I decided to style after the interactivity and calculator functionality had been accomplished.  
- I  started the Javascript 3.09.2023 so its taken me less than three days to get to this point without using tutorials or code snippets from ai or stackoverflow.  Just my own thoughts and ideas, MDN and 4 books on Javascript I have access to for reference.
- A few times I thought about asking for help, and I had to resist the temptation of looking for direct answers from a tutorials etc which led me to identify my problem number 3:
  - I have no deadline for this project, I started on a whim after completing the freecodecamp.org basic Javascipt part of their course about to move onto the ES6 course to get a deeper look at the fundamentals of Javascript, I have also recently completed a 3 month web development bootcamp (which gave me insights into what I was lacking in terms of web development skills - hello Javascript) and I have been in the process of completing exercises from the book Javascript beginner to professional (I'm at chapter 7: classes).  I have been tentatively attempting to complete hackerrank and codewars problems.  I don't have actual problems writing the code so much as deciphering the questions themselves which really knocks my confidence.
  - But basically I have no timeline for this project but the one I set myself.  I don't need to finish by a certain time, I just have to meet my own goals - which I have
  - I had shared what I've been doing since bootcamp, with a mentor from the bootcamp, when she suggested adding css and html to one of the exercises which made me think about what I was doing - why was I trying to get a deeper understanding of Javascript in the first place?  I knew it was the area I identified as my weakness and something I needed to focus on understanding but it was ultimately to create things on the web and if I could do other things with it all the better but it was also a stepping stone into higher level languages like C#.  Ultimately until I tested myself by building something without a guide from ai or a tutorial to hold my hand, I have no idea what I can and can't do
-  I actually imagined a weeks long struggle to get even here and the speed I've managed to get the input working has surprised me.  So I'm going to stick to my guns on this one and will not be working on the calculation functionality until I can make my code less messy, currently its a bunch of statements calling the event listener, my next goal is to create reusable functions out of my current code with clear variables I can pass into the calculation function.
- It's suggested everywhere to plan in psuedocode first don't worry about the syntax and it doesn't seem to help me anymore than writing out a bullet pointed list of what I want to do. I can't see it as helpful if I still have to find the appropriate syntax etc later on so thats why I plan using Javascript syntax instead of psuedocode currently.  As I get better, psuedocode may become a useful tool for me, as I am always open to changing my approach where necessary
- Another thought which is obvious but also an insight for me is, write something, anything, either in a planning file or a Javascript file.  Write down any code your brain might come up with during the time away from the computer, it might lead to a dead end, it might lead to the behaviour you want.  Point is without a single word you can't write a sentence and without writing down statements you can't know if you've stumbled across your next solution or your next dead end.

(06/09/2023)
- I need to remember this project is not beyond me, I've spent roughly 2 months manipulating html elements with Javascript with no problem. This is just a case of me having taking a break to learn strengthening my understanding of Javascript without applying them sooner.
- Now I've taken the time to reflect a bit, I feel a lot better going forward with this calculator project
- Its really funny thinking that if I were to have built a form with a submit button and needing valued from various inputs I'd probably be done by now since I never had any issues before. Seeing how rusty I've gotten has shown that while learning what the programming fundamentals are hasn't done me any harm, writing statements in the syntax hasn't been too difficult, but targeting the html elements with those statements would've been a better process as pointed out by my mentor, I should've been pairing it with creating functions that interacted with html a lot more than I have. I'm just glad to have realised this now while trying to get this calculator to work using what I know
- I'm so glad I decided to do this project, I mean how else would I have learned about looping through the element nodelist in an event listener would cause me to create events.  I guess it's true when you decide to build something you learn things an algorithm exercise or challenge can't.
- I can't believe it! I've exceeded my goal for when I started this calculator project on the 2/09/2023.  The original objective was simple addition and as I continued to build I realised that that in itself was not a step but an actual goal to meet.  Breaking down that goal led me to understand the actual process of breaking something down into a smaller task.
