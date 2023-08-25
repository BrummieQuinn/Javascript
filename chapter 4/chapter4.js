//Practice exercise 4.1
let myVariable = true;

if (myVariable === true) {
  console.log('I am true');
}

if (!myVariable === false) {
  console.log('I am false');
}

if (myVariable === true) {
  console.log('I am true');
} else {
  console.log('I am false');
}

myVariable = false;
if (!myVariable === true) {
  console.log('I am true');
} else {
  console.log('I am false');
}

// Practice exercise 4.3:

// create ID with boolean value
let ID = false;

// create message variables
let message1 = 'entry allowed';
let message2 = 'entry denied';

// check ID valid
// output

ID === true
  ? console.log(`system message: ${message1}`)
  : console.log(`system message: ${message2}`);

// Chapter 4 Projects:
// rock, paper, scissors game

// create an array containing choices as elements
let selections = ['rock', 'paper', 'scissors'];

// generate random numbers for player and computer
let player = Math.random();
player = player * 3;
player = Math.floor(player);

let computer = Math.random();
computer = computer * 3;
computer = Math.floor(computer);

console.log(`player: ${player}, computer: ${computer}`);

// create variable to hold response message to user

// my original way was comparing number with strings[logic error]!
// [logic error] fixed by using player and computer variables to index into selections array to get corresponding strings
let message = `computer chose: ${selections[computer]}, player chose: ${selections[player]}`;

// create conditions to handle player and computer selections
// apply games logic
// use index values assigned to each element automatically in array for comparisons
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