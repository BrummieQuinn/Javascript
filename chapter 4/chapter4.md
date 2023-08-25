# Javascript from beginner to professional

### If and if-else statements:

- template:

  - if _some condition is true_, then _a certain action will happen_, else, _another action will happen_

- syntax:

```Javascript
if (expression) {
// code associated with if block here
// only executed 'if' the expression true
} else {
  // code associated with else block here
  // else block conditional
  // only executed 'if' the expression false

  // example
  if (age < 18) {
    console.log('we are very sorry, but no entry for under 18');
  } else {
    console.log('welcome');
  }
}
```

- common mistake - one I've been guilty of due to typo

```Javascript
let hobby = 'dancing';
if(hobby = 'coding') {
  console.log('** I love coding too! **');
} else {
  console.log('** can you teach me that? **');
}
// this will console.log ** I love coding too! ** as it changes the value of hobby to coding in the if block
// correct statement
if(hobby === 'coding') {
  console.log('** I love coding too! **');
} else {
  console.log('** can you teach me that? **')
}
```

### Practice exercise 4.1:

1. create a variable with a boolean value

2. output value

3. check whether variable true - if true, output
   - use the syntax:

```Javascript
if (myVariable) {
// action
}
```

- add another if statement with an !(Not) in front of variable

  - check if variable is not true
  - create a message to log
  - there should be 2 if statements - one with ! and one without
  - update to if/ else

- change variable to the opposite and see how results change

- Planning

  - create a variable with a boolean value
  - output the value of the variable

```Javascript
let myVariable = true;
console.log(myVariable);
```

- check whether variable true, if so output

```Javascript
if (myVariable === true) {
console.log('I am true');
}
```

- add another if statement with an ! in front of the variable
  - check whether condition not true

```Javascript
if(!myVariable === true) {
console.log('I am false');
}
```

- try creating if and else statement

```Javascript
if (myVariable === true) {
console.log('I am true');
} else {
  console.log('I am false');
}
```

- change variable to opposite value

```Javascript
myVariable = false;
```

### Else/if statements:

- can be more efficient as only one block will run or none

- if there are many if else statements under one another

  - statements will be evaluated in order and possibly executed
  - this is even if one of the ones above evaluated to true
  - will proceed to execute the next associated code block

- template:

  - if a _value falls into a certain category_, then _a certain action will happen_, else if _the value falls into a different category than the previous statement_, then _ a certain action will happen_, else if _the value falls into a different category than either of the previous blocks_, then _a certain action will happen_

- example:

```Javascript
let age = 10;
let cost = 0;
let message;

if (age < 3) {
  cost = 0;
  message = 'Access is free under three';
} else if (age >= 3 && age < 12) {
  cost = 5;
  message = 'child discount, fee is 5 dollars';
} else if (age >= 12 && age < 65) {
  cost = 10;
  message = 'regular ticket, fee is 10 dollars';
} else {
  cost = 7;
  message = 'senior ticket, fee is 7 dollars';
}
console.log(message);
console.log('your total cost' + cost);
```

- as soon as a true is encountered, the others are ignored
- another way

```Javascript
if (age < 3) {
  console.log('access free under three');
} else if (age < 12) {
  console.log('child discount, fee is 5 dollars');
} else if (age < 65) {
  console.log(age >= 65) {
  console.log('senior ticket, fee is 7 dollars');
  }
}
```

### Practice exercise 4.2:

1. create a prompt to ask user's age

2. convert response from prompt to a number

3. declare a message variable to store message for user

4. if input age equal to or greater than 21

   - set message variable to confirm entry and ability to purchase alcohol

5. if input age is equal to or greater than 19

   - set message variable to confirm entry, deny alcohol purchase

6. provide default else statement

   - set message to deny entry if all conditions are not met

7. output response message

- Planning:

  - create prompt to ask for age

  - conversion from string to number:
    - parseInt() - the first parameter is the variable to convert and the second specifies base e.g. parseInt(age, 10);
    - parseFloat() - would provide a decimal number e.g parseFloat(age);
    - +age - this way is the simplest but hardest to read
    - Number() - the number object method Number(age)
  - declare message variable(variables in observablehq)

- logic statements\*

  - if input age >= 21 - message1 = you may enter, you may purchase alcohol

  - if input age >= 19 - message2 = you may enter, you may NOT purchase alcohol

  - default else - message3 = you may NOT enter

  - output

```Javascript
if (age >= 21) {
message1 = 'you may enter, you may purchase alcohol';
} else if (age >=19)  {
message2 = 'you may enter, you may NOT purchase alcohol';
} else {
  message3 = 'you may NOT enter'
}
```

### Conditional ternary operators:

- template:

  - operand1 ? operand2 : operand3;
  - if _operand1_, then, _operand2_, else, _operand3_

- syntax:

  - expression ? statement for true : statement associated with false;

- examples:

```Javascript
let access = age < 18 ? 'denied' : 'allowed';
```

- this can be read as:
  - if age less than 18, then assign value denied to access, else, assign value allowed

_NOTE:_ **should remember this as not remembering this way of assigning a boolean value to a variable using a ternary operator, let me down in a future exercise of assigning a Boolean value to an object property**

```Javascript
age < 18 ? console.log('denied') : console.log('allowed');
```

- best practice for ternary operators is very short actions
  - if logic contains multiple comparison argument
  - use if-else statement

### Practice exercise 4.3:

1. create a boolean value for an ID variable

2. use a ternary operator:

   - create a message variable
   - check whether ID valid
   - allow or deny entry

3. output

- Planning:

- create boolean value for ID variable

```Javascript
let ID = false;
```

- create message variable
  - decided to declare 2
  - check ID validity
  - allow or deny entry

```Javascript
let message4 = 'entry allowed';
let message5 = 'entry denied';
ID === false ? console.log(`system message: ${message4}`) : console.log(`system message: ${message5}`);
```

- output

### Switch statements:

- best choice when evaluating more than for or five values
- syntax:

```Javascript
switch (expression) {
case value1:
// code to be executed
break;
case value2:
// code to be executed
break;
case value-n:
// code to be executed
break;
  default:
// code executed when no case matches
break;
}
```

- if expression === value1 - execute code for this case
- if expression === value2 - execute code for this case
- etc...
  - the break statement is necessary to stop the code continuing to execute statements even after finding the value that matches expression
  - switch statements use strict type checking
  - default
    - like the last else statement in if/else-if statement
    - represents code that is executed when no cases match
    - best practice to use at end of switch statement
  - example:

```Javascript
// display time based current activity
switch(activity) {
  case 'get up':
    console.log('it is 6:30AM');
    break;
  case 'breakfast':
    console.log('it is 7:00AM');
    break;
  case 'drive to work':
    console.log('it is 8:AM');
    break;
  case 'lunch':
    console.log('it is 12PM');
    break;
  case 'drive home':
    console.log('it is 5:00PM');
    break;
  case 'dinner':
    console.log('it is 6:30PM');
    break;
// code to execute if no cases match
  default:
    console.log('cannot determine current time');
}
```

### How to create a random number:

- to get a random number using built-in Math.random() method:
  - return a random number in range of 0 to less than 1
  - inclusive of 0 but not 1
  - set the scale for desired reang: - multiply the result - use Math.floor() to round to nearest whole number
    (see chapter4.html and promptexercises.js)

### Practice exercise 4.4

This exercise will create a Magic-6-Ball random answer generator

1. set a variable that gets a random number assigned to it

   - value assigned by generating a random number between 0 and 5 inclusive
   - for 6 possible results

2. create a prompt

   - get a string value from user input prompt
   - repeat back in final output

3. create 6 responses using the switch statement

   - each assigned to a different value from random number generator

4. create a variable to hold the end responses

   - should be a sentence printed to the user
   - assign different string values for each case
   - assign new values depending on the results from the random value

5. output the user original question, plus the randomly selected response to console after question entered

- Planning:

```Javascript
// create a prompt for user input
let question = prompt('What is your question?');

// to create a random number between 0 and 1
 let randomNumber = Math.random();
 // multiply to obtain number between desired range
 randomNumber = randomNumber * 6;
 // remove decimal places to provide integer
 randomNumber = Math.floor(randomNumber);
 //console random number
 console.log(randomNumber);
```

```Javascript
// create switch statement
let answer = '';

switch(randomNumber) {
	case 0:
	answer = 'yes';
	break;

	case 1:
	answer = 'no';
	break;

	case 2:
	answer = 'maybe?'
	break;

	case 3:
	answer = 'why are you asking me?'
	break;

	case 4:
	answer = 'can I have another question?';
	break;

	case 5:
	answer = 'really couldn't say';
	break;
}
console.log(`${question} ${answer}`);
```

4. create variable to hold end responses
   - should be a sentence printed for user
   - assign different string values for each case
   - values assigned based on results from random value
5. output to console - original question - randomly generated responses
   (see promptexercises.js and chapter4.html for answer)

_Notes:_

- UPDATE:

  - my mistakes and thoughts:

    - original switch statement was a mess before I was able to find a solution
    - I knew to assign a number value equal to a randomly generated number to each case
    - fell down in part 4 which led to part 5 being completed at the same time
    - was unsure how to make part 4 work e.g. creating the variable to hold the answer and assign to the switch statement. ISTG I feel stupid while learning Javascript, as soon as I saw the syntax I felt like an idiot

  - future reference:
    - create a variable to hold end responses
    - should be the output for user
    - assign a different string value for each case
    - values assigned based on results from random value
    - declare a variable and assign empty string
      - this will hold the end response values created in the switch statement cases
    - create a switch statement
      - for each case assign a response to the end response variable created previously

### Combining cases:

- when multiple cases require the exact same action

- switch statements allows for combining these cases

- syntax:

```Javascript
switch(grade) {
  case 'F':
  case 'D':
    console.log('You have failed!');
    break;
  case 'C':
  case 'B':
    console.log('You have passed!');
    break;
  case 'A':
    console.log('Nice!');
    break;
  default:
    console.log('Unknown grade');
}
```

- more readable than the alternative if/else-if statement

### Practice exercise 4.5:

1. create a variable called 'prize'

- user input prompt
- user sets a value (for prize)
- value between 0 and 10 (use random number code)

2. convert response to number data tyoe

3. create a variable to use for the output message containing the value

- "My Selection:"

4. using switch statement (and creativity)

- provide a response regarding a prize awarded
- dependent on number selected

5. use switch 'break' to add combuned results for prizes

6. output message

- concatenate the prize variable strings and output message strings

* Planning:

```Javascript
// create variable to store user response
let prize = prompt('choose a number between 0 and 10');
// convert to number type
prize = Number(prize);
// create variable for the output message
let message - 'my selection:';
console.log(message, typeof prize);
// create variable to to allow concatenation of message and prize
let response;

// switch statement to provide response
switch(prize) {
  case 0:
  case 1:
    response = `${message}${prize}: you have won... another day to live`;
    break;
  case 2:
  case 3:
    response = `${message}${prize}: you were expecting something?`;
    break;
  case 4:
	case 5:
		response = `${message}${prize}You guessed correctly... so what?`;
		break;
	case 6:
	case 7:
		response = `${message}${prize}Well done... are you psychic?`;
		break;
	case 8:
	case 9:
		response = `${message}${prize}Try again... probability says you won't guess right next time`;
		break;
	case 10:
		response = `${message}${prize}You guessed right... guess today is your lucky day!!!`;
		break;
}
console.log(response);
```

the above should combine steps 4 to 6

(see chapter4.html and promptexercises.js)

## Chapter 4 projects:

17/08/2023 - will come back and do if I need practice on switch statements

### Evaluating a number game:

- ask the user (random number generator):

  - check whether the number is:

    - less than
    - greater than
    - equal to

  - compare with dynamic number value in code

  - output result

### Friend checker game:

- ask the user to enter name:

  - use switch statement to return a confirmation of friendship
    - if the name is known in case statements
    - add default if name unknown
    - output to console.

### Rock paper scissors game:

*Note:* decided to start planning as I go as ideas have been coming to me as I go through the steps - progress?

- game between player and computer

	- both make random selection of rock paper or scissors
		- I think this could be done with the random number generator with numbers assigned to the choices e.g. 
			- rock = 0
			- paper = 1
			- scissors = 2
		- who knew i'd be right - is this progress?
	- if randomNumber === 0 = rock
	- if randomNumber === 1 = paper
	- if randomNumber === 2 = scissors
	- this could also be represented with a selections array

	- use Javascript to create a version of this game
		- apply the logic with if statements

- suggested steps:

	1. create an array that contains the variables rock, paper and scissors.
```Javascript
	let selections = ['rock', 'paper', 'scissors'];
	console.log(selections);
```
	2. set up a variable to generate a random number 0-2 for the players selection
		- do the same for the computers selection
		- number represents index values of rock, paper, scissors in the array
```Javascript
let player = Math.random();
player = player * 3;
player = Math.floor(player);

player = player;
console.log(player);

let computer = Math.random();
computer = computer * 3;
computer = Math.floor(computer);

computer = computer;
console.log(computer);
```
	
	3. create a variable to hold a response message to the user
		- this can show the random results for the player and result for computer matching the element in the array
```Javascript
let message = `computer chose: ${computer}, player chose: ${player}`;
console.log(message);
```

	4. create a condition to handle the player and computer selections
		- if player === computer = draw
		- if player === selections[0](rock) && computer === selections[2](scissors) = player win
		- if player === selections[1](paper) && computer === selections[0](rock) = player win
		- if player === selections[2](scissors) && computer === selection[1](paper) = player win
		- else computer win
```Javascript
// first attempt at the if / else-if
if (player === computer) {
	console.log(`${message}: this is a tie`);
} else if (player === selections[0] && computer === selections[2]) {
	console.log(`${message}: player wins`);
} else if (player === selections[1] && computer === selections[0]) {
	console.log(`${message}: player wins`);
} else if (player === selections[2] && computer === selections[1]) {
	console.log(`${message}: player wins`);
} else {
	console.log(`${message}: computer wins`);
};

```
	- feel like I could do a better job with the conditions, since I've got the same message being consoled every time except for the else
	- since I'm tired (13:30 -23:03) I'll leave my solution here and start again tomorrow
	- still, since there are only 3 && conditions, this maybe the only way to do this without combining cases in switch statements

5. use conditions to apply the game logic and return the correct results
		- there are several ways to do this:
		- could check which players index value is bigger and assign the victory accordingly, with the exception of rock beating scissors
*Note:*  believe the conditions i've chosen above should cover it
	
	6. add new output message that show the player selection versus the computer selection and the result of the game

18/08/2023 - continuing fresh with this game cos I'm actually enjoying this challenge more than I would have the previous 2.
		   - one of the suggestions is to check which index value is bigger and assign victory - rock beating scissors an exception
		   - this implementation confuses me so I'm sticking with my original statement I created last night
created the code in the cell below, but there was some logic in my code causing the computer to win when the player was.
ran my code through bing chat to see where I was going wrong with the logic and while I thought I was linking the array to the if else-if statements quite well turns out it was the random number assignment part with the message:
>in my original code, i was generating random numbers for the player and computer variables, which represent the index values of rock, paper, and scissors in the selections array. However, when i created the response message and check the conditions to determine the winner, i was comparing these variables directly with the elements of the selections array, which are strings. This causes a logic error because you are comparing numbers with strings.

The original logic I had come up with always came up false unless it was a tie since the number and the string were never equal.
This meant the final else statement was chosen even when the player was the winner

- by simply adding selections to the template literal and the random number for player and computer in [] to represent the index number and therefore the value of the selections array
```Javascript
let message = `computer chose: ${selections[computer]}, player chose: ${selections[player]}`;
```
adding selections to the message and this
```Javascript
if (player === computer) {
	console.log(`${message}: this is a tie`);
} else if (player === 0 && computer === 2) {
	console.log(`${message}: player wins`);
} else if (player === 1 && computer === 0) {
	console.log(`${message}: player wins`);
} else if (player === 2 && computer === 1) {
	console.log(`${message}: player wins`);
} else {
	console.log(`${message}: computer wins`);
};
```
where selections was taken out and replaced by the index number, not only was the logic fixed, I was able to have the actual selection from the array appear in the console.log

### Summary:

My thoughts:

- I'm feeling kind of confident at this point, I know the book will come back to a lot of these topics to build on them so I just need to trust everything I've learned through mistakes will be there in my brain as I go forward with Javascript

- definitely need to remember to pay attention to the data types i'm working with
- the rock, paper, scissors game was almost complete, i think i did well 
	- only real problem was the comparisons, i didn't link the random numbers to the array the way i thought i had.
	- using the selection[i] the way I did, only ensured comparisons would always be false since I was comparing to the element value, not its index.
	- I will keep this in mind going forward that the random number in this case was able to be a variable to use in place of the actual index position
	- this means that the link is made between the element index and random number.
	the value itself is not compared only the numbers that now represent the index position