// example of filling an array with the Fibonacci sequence using a while loop - Fibonacci = golden ratio
let number1 = 0;
let number2 = 1;

// temporary variable to store the next value for number2
let temp;

let fibonacciArray = [];
// avoid infinite loop by creating an endpoint of 25 elements within the array
while (fibonacciArray.length < 25) {
    fibonacciArray.push(number1);
    temp = number1 + number2;
    number1 = number2;
    number2 = temp;
}
console.log(fibonacciArray);
console.table(fibonacciArray);

// Practice exercise 5.1:

// create variable to be used as max number of guesses
let maxValue = 5;

// generate random number for solution combining Math.random() and Math.floor
// Math.floor comes first as solution to Math.random will be calculated within its parentheses
let solution = Math.floor(Math.random() * maxValue) + 1;

// generate a random number for user input to generate a number between 1 and 5 (adding + 1 ensures a random number floor of 1 not 0)
// originally placed the user random number here -  it caused an infinite loop as user number never changed
// NOTE: remember to put the thing I want to iterate inside the loop

// create a variable to use for tracking whether answer correct - initialise to false
let result = false;

// create while loop
while (result === false) {
    // NOTE: this is where I should generate user random number
    let user = Math.floor(Math.random() * 5) + 1;
    let guess = user;
    console.log(`Guess a number between 1 and ${maxValue}: ${guess}`);
    if (guess === solution) {
        result = true;
        console.log(`You guessed correct: you:${guess} - answer: ${solution}`);
    } else if (guess > solution) {
        console.log(`Too high - you guessed ${guess} the answer was ${solution}`);
    } else {
        console.log(`Too low - you guessed ${guess} - the answer was ${solution}`);
    }
}

// Practice exercise 5.2:
// create counter variable: set value to 0
let counter = 0;

// create a step variable: will increase counter within the do-while loop; set value to 1
let step = 1;
do {
    console.log(counter);
    // counter incremented by step value every loop until 100 inclusive
    // forgetting to increase counter here causes a world of problems
    counter += step;
} while (counter <= 100);

// Practice 5.3:

// create blank array
let myWork = [];

// create a for loop 
for (let i = 1; i <= 10; i++) {
    // assign property name to object with a value using template literal - use (i) for lesson number
    // create the object
    let lessons = { name: `lessons ${i}`, status: `${i}` };
    console.log(typeof lessons.status);
    // lessons.name = `lessons ${i}`; - commented out due to being wrong but kept to show how  I went wrong
    // change the typeof (i) = string to status typeof number using Number()  
    // @ts-ignore
    // lessons.status = Number(i);
    console.log(typeof lessons.status);
    // converted if-else statement from planning to a ternary operator condition
    // @ts-ignore
    lessons.status % 2 === 0 ? lessons.status = true : lessons.status = false;

    myWork.push(lessons);
    console.log(lessons);
};

console.log(myWork);

// a few tweaks like you know actually assigning true/false to lessons.status after the condition (bombastic side eye at myself lol)

// push object to the myWork array - i've made it this far but I'm becoming stumped, to push the objects to the array outside the block obviously only pushes the final item

// push the object within the array and I'm getting an array of that number of objects with the same data multiple times

// I need to log the object to the array once the status has been updated to true/false - what am I missing?

// what's with this? it freaking works!? I took out the part lessons.status = Number(i) which was apparently changing the value and an unecessary extra step but it turns out not to be the case.
// adding it back as a test has made no difference to the final output being correct. I have no idea except that it suddenly works and apparently I have to get used to these head scratching anomalies.

// Practice exercise 5.4:
let myTable = [];
// originally used the small values in planning but once it worked I decided to play with the values of columns and rows

let rows = 10;
let columns = 10;

let couter = 0;

for (let i = 0; i < rows; i++) {
    let tempTable = [];
    for (let j = 0; j < columns; j++) {
        counter++;
        tempTable.push(counter);

        myTable.push(tempTable);
    }
}
console.table(myTable);

// Practice exercise 5.5:
let grid = [];

let cells = 64;

let increment = 0;

let row = [];

for (let i = 0; i < cells + 1; i++) {

    if (increment % 8 === 0) {

        if (typeof row !== 'undefined') {

            grid.push(row);
        }
        // instead of deleting the row - removes property from object NOT variable/array element
        // set row back to an empty array
        row = [];
    }


    increment++;

    row.push(increment);

}
console.table(grid);

// Practice exercise 5.6
let exerciseArray = [];
// create loop to run 10 times
for (let i = 1; i <= 10; i++) {
    // add new incrementing value to the array
    exerciseArray.push(i);
    console.log(exerciseArray);
    // use for loop to iterate through array
    for (let j = 1; j < exerciseArray.length; j++) {
        console.log(exerciseArray);
        // use for-of loop to out put value from array
        for (let array of exerciseArray) {
            console.log(array);
        }
    }
}

// Practice exercise 5.7:
// create a simple object - 3 items inside
let person = {
   firstName: 'Sarah',
    age: 25,
   city: 'London'

};
// use for in loop to get properties names and values
for (let property in person) {
    console.log( property, person[property]);
};

// create array with same items
let personArray = [{
    firstName: 'Sarah',
    age: 25,
    city: 'London'

}];
// using for in loop
for (let person in personArray) {
    console.log(person, personArray[person]);
};
// using for of loop
for (let person of personArray) {
    console.log( person);
}

// Practice exercise 5.8:
// string for output
let string = '';
// skip variable
let numberToSkip = 5;
// for loop
for (let i = 0; i < 10; i++) {
    // add skip condition
    if (i === numberToSkip) {
       // add continue
        continue;
    }
     // append new count
        string += i;
}
console.log(string);
// doing the same with break
// string for output
let string2 = '';
// skip variable
let numberToSkip2 = 5;
// for loop
for (let i = 0; i < 10; i++) {
    // add skip condition
    if (i === numberToSkip2) {
       // add break
        break;
    }
// append new count
    string2 += i;
}
console.log(string2);

// Chapter 5 Project:
// math multiplication table
// create blank array 
let multiplicationTable = []; 
let value = 12;
// create outer loop to iterate through each row 
for (let i = 0; i < value; i++) { 
    // create temp array to store row values leave empty for now 
    let tempArray = [];
// create inner for loop for column values     
for (let j = 0; j < value; j++) {
//    push values to temp array  j * i      
tempArray.push(j * i); 
} 

//    push temp array to multiplication table array        
multiplicationTable.push(tempArray);
}
// log to check output 
console.table(multiplicationTable);