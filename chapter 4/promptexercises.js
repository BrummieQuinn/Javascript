// Practice exercise 4.2:

// let age = prompt('How old are you?');
// console.log(typeof age);

// console.log(age);

// age = Number(age);
// console.log(typeof age);

// let message;

// if (age >= 21) {
//     message = 'you may enter, you may purchase alcohol';
// } else if (age >= 19) {
//     message = 'you may enter, you may NOT purchase alcohol';
// } else {
//     message = 'you may not enter';
// }
// console.log(message);



// Practice exercise 4.4:

// create a variable to hold question value
// let question = prompt("ask your question");

// create random number between 0 - 5 for 6 possible results
// let randomNumber = Math.random();
// randomNumber = randomNumber * 6;
// randomNumber = Math.floor(randomNumber);
// console.log(randomNumber);

// create switch statement
// let answer = "";

// switch (randomNumber) {
//   case 0:
//     answer = "yes";
//     break;

//   case 1:
//     answer = "no";
//     break;

//   case 2:
//     answer = "maybe?";
//     break;

//   case 3:
//     answer = "why are you asking me?";
//     break;

//   case 4:
//     answer = "do you have an easier question?";
//     break;

//   case 5:
//     answer = "Absolutely!";
// }
// console.log(`${question} ${answer}`);

// Practice exercise 4.5:
let prize = prompt('choose a number between 0 and 10');
prize = Number(prize);

let message = 'my selection:';

let response;

switch (prize) {
    case 0:
    case 1:
        response = `${message}${prize}: you have won... another day to live`;
        break;
    case 2:
    case 3:
        response = `${message}${prize}: you were expecting something?`;
    case 4:
    case 5:
        response = `${message}${prize}: you guessed correctly... so what?`;
        break;
    case 6:
    case 7:
        response = `${message}${prize}: well done... are you psychic?`;
        break;
    case 10:
        response = `${message}${prize}: you guessed correctly... guess today's your lucky day!!!`;
        break;
    default: 
        response = 'I do not recognise numbers above 10 or below 0'
}
console.log(response);

//