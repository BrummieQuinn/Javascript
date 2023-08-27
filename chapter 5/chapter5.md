# Javascript from beginnner to professional

## Chapter 5: Loops

- loops execute a code block a certain number of times
    - repeating operations a number of times
    - iterating over
        - data sets
        - arrays
        - objects

- whenever there is need to copy a piece of code and place it underneath the line copied from - use a for loop instead

- loops include:
    - while
    - do-while
    - for
    - for-in
    - for-of

### While loops:

- syntax:

```Javascript
while (condition) {
    // code executed as long as condition is true
}
```

- a while loop executes a certain block of code as long as condition evaluates to true
    - if condition false to begin with the code will be skipped

- example:
```Javascript
// create variable i and set value to 0
let i = 0;
// start the while loop and check the condition of i value being smaller (in this case) than 10
while (i < 10) {
    // while condition true the code logs i
    console.log(i);
    // and increases i by 1
    i++;
    // logging will continue until i = 10
    }
// example usage:
let array = ['Mike', 'Antal', 'Marc', 'Emir', 'Louiza', 'Jacky'];
let notFound = true;

while (notFound && array.length > 0) {
    if (array[0] === 'Louiza') {
        console.log('Found her!');
    } else {
        array.shift();
        console.log(notFound);
    }
    console.log(array);
}
```
- flow of above code:
    - the while loop checks the first value of the array[0] for the value 'Louiza' - when it is not found, the array.shift() method removes the first element of the array
    - each iteration for as long as i is < array.length it will remove an element until 'Louiza' is at array[0] and console.log not found
    - when the element value it is looking for is found it will log this to the console
    
    - output would be:
```Javascript
true
['Antal', 'Marc', 'Emir', 'Louiza', 'Jacky']
true
['Marc', 'Emir', 'Louiza', 'Jacky']
true
['Emir', 'Louiza', 'Jacky']
true
['Louiza', 'Jacky']
Found her!
['Louiza', 'Jacky']
```
- the && array.length > 0 added to while condition preventing infinite loop - when value being looked for wasn't in the the array
        - make sure to end things if value not found so code can continue

### Practice exercise 5.1:

create a number guessing game (originally meant to take user input, I will attempt to pass a random number instead) and replies based on how accurate the users guess was

1. create a variable to be used as max value of guessing game
    - number of allowed guesses = 10

2. generate random number for user input
    - using Math.random() and Math.floor()
    - need to add 1 so that the value returned as 1 minus max value
    - log the value to the console for development
        - see the value as the game created
        - comment the game completion

3. create a variable to be used for tracking the answer for correctness
    - set it to a default boolean value of false
    - update to true if user guess is a match

4. use a while loop to iterate over a prompt(random number) that asks the user to enter a number between 1 and 5
    - if using prompt convert the response to a number to match data type of a random number (wonder if the author realised the last project might've had people forgetting they were dealing with strings and numbers - like me lol)

5. inside the while loop
    - check using condition to see if random number is equal to solution number
    - apply logic: if user correct - set status to true to break out of loop
    - provide player with feedback as to whether guess too high or too low
    - another prompt should be initiated until guess correct
    - the loop will keep asking until solution is correct
    - at that point stop the iteration of block of code

(see chapter5.js)

### do-while loops:

- syntax:
```Javascript
do {
    // code to be executed if condition true
} while {
    // condition to evaluate
}
```
- executes the code within do block
- evaluates the while block
- if condition true - it will go back to execute the do block
- will continue until condition false

- useful when code needs to be run at least once
    - usage:
        - if valid user input needed, would need to ask user at least once
        - trying to connect to a database or other external source in order for success
    - also needs to run as long as result not what is needed

- example:
    - using a prompt() method to get user input
    - use a do-while loop to ask for a number between 0 and 100
```Javascript
let number;
do {
    number = prompt(`please enter a number between 0 and 100: ${number}`);
} while (!(number >= 0 && number < 100));
```

### Practice exercise 5.2:

create a basic counter that will increase a dynamic variable by a consistent step value to an upper limit

1. set the counter to 0
```Javascript
let counter = 0;
```
2. create a variable 'step' to increase counter by 1
```Javascript
let step = counter + 1;
```
3. add a do-while loop
    - print each counter to the console
    - increment it by step amount each loop

4. continue to loop until counter equal to 100 or more than 100 
    - condition to evaluate

(see chapter5.js)

### for loops:

- special loops
- syntax:
```Javascript
for (initialise variable; condition; statement){
    // code to be executed
}
```
- flow of loop:
    - initialise the variables
    - check condition
        - if condition true: execute code block
        - if condition false: loop ends here
    - perform statement e.g. i++/i--
    - go back to check condition

- example:
```Javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```
- not increasing variable (i) will cause infinite loop
    *NOTE:* - due to value of (i) not changing, i've noticed my previous problems with do and do-while loops came from being used to initialising for loops (first loop learned).
    - I don't think I realised that the part that needs to increase should be within the curly brackets
    - I hope I fix this soon!

- example:
```Javascript
let arr = [];
for (let index = 0; index < 100; index++) {
    arr.push(i);
}
// this loop creates a sequence and adds value to an empty array
// result is an array with a count from 0 - 99 (for a length of 100 elements/items)
// element values match index values!
```

- example:
```Javascript
let arr = [];
for (let i = 0; i < 100; i = i + 2) {
    arr.push(i);
}
// this loop creates an even only sequence and adds value to an empty array
// changing 2 to 5 would create a multiplication of 5 sequence 
```

- i++ and i-- most commonly used but any statement can go in third part of the expression

### Practice exercise 5.3:

use a for loop to create an array that holds objects
- starting with creating a blank array
- the block of code within the loop will create an object that gets inserted into the array

1. set up a blank array - myWork

```Javascript
let myWork = [];
```

2. using a for loop:
    - create a list of 10 objects
    - each object is a numbered lesson
        - lesson 1 - lesson 10
    - alternate boolean value assigned to status property
        - name: 'Lesson 1', status: true

3. can specify the status using a ternary operator that checks the modulo '%' of the given lesson value is equal to zero
    *NOTE: 23/08/2023* think I just realised I misread this and caused myself so much stress trying to reach a error free solution
    - set up boolean value to alternate status values each iteration

4. create a lesson using a temporary object variable, containing:
    - name(name: 'lesson 1')
    - predefined status(status: true/false)

5. push objects to myWork array

6. output array to console

* Planning:
(19/08/2023)

I feel like this one takes a lot of planning for each step
    - step 2 - step 4 seem like they should be tackled together
        ~~- step 2 defininitely needs the objective broken into smaller steps~~
    
*NOTE:* 23/08/2023 oh the hindsight, broken into the steps I did caused so much headache 

I will attempt to break it down into the steps required
- this problem solving doesn't come easily or quickly for me - just like maths
- I really enjoy coding so much bu I wonder if I'm too slow to learn

```Javascript
for (let i = 1; i <= 10; i++) {

}
```
- what should be the final expression in this for loop
    - should increase up to 10 objects within the array so less than or equal to seems the best choice for the middle expression as a limit
    - final expression should increment by 1 so I can create the 10 objects

- creating the object:
    - numbered lesson with alternating true/false status
```Javascript
let lessons = {name: `lesson ${i}, status: undefined`};
i % 2 = 0 ? status = true : status = false;
console.log(lessons);
myWork.push(lessons);

console.log(myWork);
```

- lessons is the temporary object variable
    - containing name with the value lesson and numeric value hopefully passed by (i) - template literal using (i)

- the ternary operator should assign true or false based on even or odd using modulo operator
    - hoping the ternary operator expression will check based on i being even or odd
    - if even status should update from undefined to true
    - if odd status should update from undefined to false

- placing it within for loop should ensure that the object should be created in lessons 10 times and hopefully (i) will pass the number of the loop counter to the template literal for lesson number to be evaluated by ternary operator statement inside the loop

*NOTES:* I have no doubt that this initial plan will fail in some way, big or small, whether I  create an infinite loop or my logic fails.
I know for all my planning, like in war, it likely won't survive engagement with the question, oftentimes ending up way off what I though I would be doing.

I've also stopped assuming that the steps given are necessarily all the steps needed for the solution (progress?)

I'm still at the point where I know what I want to do and I suppose quite possible that I at least have the knowledge to make an attempt I can fix.

The way questions are framed and my utter panic are tripping me up big time.  I need to calm down and read the question and really understand it

In a way these markdown files will be a journal of my journey in Javascript post bootcamp - I know I know more than I did - just not enough to do what I want to do

Feels like crawling when I want to be walking.

I'm going to follow this book and go back to freecodecamp.org when I feel like I can tackle the last problem I did, like when I went back over the golf score one and it clicked how the parameters and arguments etc of a function fit together

This book has filled in a lot of blanks - reinforcing my learning here before moving on with freecodecamp seems to be my best bet

I guess I'll know when I'm ready for code wars and hacker rank

- I had to create an if/else-if statement before the ternary but at least I managed it

```Javascript
// create blank array
let myWork = [];
console.log(myWork);

// create blank object
let lessons = {};
console.log(lessons);

// create a for loop - limit to <= 10
// i begins at 1 so lessons start at 1
for (let i = 1; i <= 10; i++) {
    // assign property name to object with a value using template literal using i as lesson number
    lessons.name = `lessons ${i}`;
    // assign property status to object with a value of a number object that converts i to a number
    lessons.status = Number(i);
    // check to make sure previous number() method worked
    // created an initial if else statement to understand the way to use the modulo operator to assign boolean values
    if (lessons.status % 2 === 0) {
        // initially created as a pure if statement to update all even numbers allocated to status value to true to test my syntax - actually turns out my application of this condition was fine but I somehow missed I was trying to first find equality with the assignment operatio which caused an obvious error with left-hand assignment
        // second I then attempted to find equality with 4 ==== which really took me a while to see
        lessons.status = true;
        console.log(lessons.status);
        // once I reached here an it updated all even numbers to true I added the else statement
    } else {
        lessons.status = false;
    }
    console.log(lessons);
}
```
(see chapter5.js)

### nested loops:
- loops within loops are sometimes necessary
    - not the best solution to a problem often
    - can be a sign of poorly written code (optimisation)
    - but every now and then a fine solution to a problem 

- example:
```Javascript
while (condition 1) {
    // code that gets executed as long as condition 1 met
    while (condition 2) 
    // loop dependant on condition 1 being met
    {
        // code executed as long as condition 2 met
    }
}
```
- useful when creating an array of arrays

- example:
```Javascript
// create an outer loop for top-level array
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
    // create an inner loop to store the values to array
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}
console.log(arrOfArrays);
// output: array of arrays with values from 0 up to 6
console.table(arrOfArrays)
```
- using nested loops to create an array in an array:
    - means rows and columns can be worked with after creating the loop

- console.table() can be used output tabular data

### Practice exercise 5.4:
(24/08/2023)
- generating a table of values
- use loops to generate rows and columns(nested within rows)
- nested arrays can be used to represent rows in a table
- columns should align by creating an equal number of cells in each row

1. To create a table generator, create an empty array myTable, to hold table data

2. set variable values for the number or rows and columns
    - allows dynamic control of number of rows and columns
    - separating the values from main code helps make updates to dimensions easier

3. set up a counter variable with an initial value of 0
    - counter used to set content
    - counts the values of the cells within the table

4. create a for loop with conditions to set the number of iterations - to construct each row of table
    - within loop set up a new temporary array (tempTable) to hold each row of data
    - columns are nested within the rows, generating each cell for column

5. nest second loop within first to count columns
    - columns run within the row loop to get a uniform number of columns

6. increment main counter each iteration of the inner loop
    - tracks master count of each cell and how many created

7. push counter values to the temporary array
    - the array is nested to represent a table
    - values of counter can be used to illustrate cell values next to each other in table
    - although separate representing new rows the value counter will illustrate overall sequence of cells in final table

8. push temporary array to the main table
    - each iteration builds a new row of array items
    - will continue to build the main table in array

9. output to console with console.table(myTable) 
    - visual representation of table structure

* Planning:

```Javascript
// create table generator
let myTable = [];
// variable values for rows and columns
let rows = 4;
let columns = 4;
// variable for counter set to 0
let counter = 0;
// create first for loop and set number of iteration for each row of data
for (let i = 0; i < rows; i++){
    // create temp array to hold row data
	let tempTable = [];
    // second loop to create columns nested within rows
	for (let j = 0; j < columns; j++) {
        // increment main counter each iteration
		counter++;
        // push counter values to tempTable array
		tempTable.push(counter);
        // push temporary array to main table
		myTable.push(tempTable);
	}
}
// output to console
console.log(myTable);
console.table(myTable);
```
(see chapter5.js and/or chapter5.html)

### loops and arrays:
- loops make life with arrays more comfortable

- combine array length property and the condition part of for or while loops to loop over and log everything in an array

- example:
```Javascript
let arr = [some array];
for (initialise variable; variable smaller than arr.length; statement) {
    // code to execute
    console.log(arr[i]);
}
```
- while the above will only log the values:
    - values of the array could be changed during loop
    - e.g. greetings

- when an array comes in somewhere in application 
    - data can be sent to the database per value
    - data can be modified
    - data can be filtered
- example:
```Javascript
let names = ['chantal', 'john', 'maxime', 'bobbi', 'jair'];
for (let i = 0; i < names.length; i++) {
    if(names[i].startsWith('M')) {
        delete names[i];
        continue;
    }
    names[i] = 'hello' + names[i];
}
console.log(names);
```
- if element were removed instead of deleted, the empty index value would cause the next value to be accidentally skipped

- startsWith() method:
    - checks whether string starts with certain character

### Practice exercise 5.5:
- creating a table grid that contains nested arrays as rows within a table
- rows will contain number of cells needed for the number of columns set in the variable
- grid will dynamically adjust depending on values of variables

1. create a grid array variable

```Javascript
let grid = [];
```

2. set value of 64 for number of cells

```Javascript
let cells = 64;
```

3. set counter to 0

```Javascript
let counter = 0;
```

4. create a global variable to be used for row array

```Javascript
let row = [];
```

5. create a loop that will iterate up to number of cells in array add 1 to include zero value

```Javascript
for (let i = 0; i < cells + 1; i++) {
    // create outer if statement
if(counter % 8 === 0) {
    // add another if statement
    if(row !== undefined) {
        // push row to main grid
        grid.push(row);
    }
    // clear row array
    delete row;
}
// increment counter by 1
counter++;
// temp variable to hold counter value
let temp = counter[i];
// push to row array
row.push(temp);
// check if value of counter equal to total number of columns wanted
if (counter === cells / 8) {
    grid.push(row);
}
}
console.log(grid);
console.table(grid);
```

6. add an outer if statement, using modulo to check if main counter divisible by 8 for number of columns

7. inside if statement, add another if statement to check if row is undefined
    - indicates if first run or whether row complete
    - if row defined push row to main grid array

8. finish outer if statement, if counter divisible by 8, clear the row array

9. at the end of the for loop, increment main counter by 1

10. set up temporary variable to hold the value of the counter and push to row array

11. within the loop iteration 
    - check if value equal to total number of columns
    - if it is add current row to the grid

12. note that the extra cell will not be added to the grid since there aren't enough cells to make a new row within the condition that adds the rows to the grid
- an alternative solution would be to remove the +1 from the loop condition and add **grid.push(row)** after the loop is completed
- both will provide same solution output

13. output grid to console

*NOTE:* as per usual plan didn't survive engagement

decided on another tactic of building the grid from the outside in starting with outer for loop --> outer if statement --> inner if statement

fingers crossed as it seems different this time, my array isn't empty anymore for a start off

my 2nd approach freaking worked!
I must've gotten confused doing the code in sequence because when I worked my way from the outside in the values were passed the way they should be
I even created a html file to link to chapter5.js to check in developers console and it was correct
Is this what they mean by breaking the problem into smaller steps?

### for of loop:

- use to iterate over the elements of an array
    - unlike regular loop, cannot be used to change value associated with index
    - for processing values 

- example:
```Javascript
let arr = [some array];
for (let variableName of arr) {
    // code to be executed
    // value of variableName updated each iteration
    // all values of array will be variableName once
}
```
- syntax:
     - for every value of the array:
        - call it variableName
        - do the following

    - variableName is a necessary temporary variable
    - variableName used to put the value of current iteration in, and after interation,
    - gets replaced with next value
 - limitations:
    - cant modify array
 - advantages:
    - all elements could be written to a database or a file or somewhere else
    - cannot accidentally get stuck in infinite loop
    - cannot skip values

### Practice exercise 5.6:
- construct an array as it loops through the incrementing values of x
- once the array is done, will also demonstrate several ways to output array contents

1. create an empty array

```Javascript
let myArray = [];
```

2. run a loop 10 times adding new incrementing value to array

```Javascript
for (let i = 0; i < 10; i++) {
    myArray.push(i);
    console.log(myArray);
    for (let j = 0; j < myArray.length; j++);
    console.log(myArray);

}
```
*NOTE:* As you can see I did begin planning but as I was going I suddenly felt like I knew what I needed to do.

Part 4 was a little confusing, I knew I needed to create a new for loop after previous exercises but still hesitated - re reading countless times before going in and creating the second for loop

I'm in shock that it came together with no looking anything up to verify except my own notes and previous work

Is this Javascript starting to click?
I really hope so
(see chapter5.js)

3. log the array to console

4. use the for loop to iterate through array
    - adjust the number of iterations to however many values in the array
    - output to console

5. use for of loop to output value to console from array

### loops and objects:
- can iterate over the properties of an object
- helpful when all the object properties need iterating but exact properties are unknown

- for in loop:
    - can loop over object directly
    - can convert object to an array and loop over the array

 - somewhat similar to the for of loop
 - need to specify a temporary name/key
    - stores each property name of object not the value
- example:
```Javascript
let car = {
    model: 'Golf',
    make: 'volkswagon',
    year: 1999,
    colour: 'black',
};

for (let property in car) {
    console.log(car[property]);
}
// output: using the temporary variable property each iteration to get the value out of car object
// Golf Volkswagen 1999 black

// just logging the property
for (let property in car) {
    console.log(property);
}
// output would be car object property keys 
```
- not useful for arrays - as only outputs index positions
    - order of execution cannot be guaranteed

### Practice exercise 5.7:
- experiment with looping over objects and internal arrays

1. create a simple object with 3 items inside
```Javascript
let person = {
{
  name: "Sarah",
  age: 25,
  city: "London"
}
};

```
2. using the for in loop, get the properties names and value from the object - output
```Javascript
for(let objectProp in myObject) {
    console.log(myObject[objectProp]);
}
```

3. create an array containing the same 3 items
```Javascript
let myArray = [{
  name: "John",
  age: 30,
  city: "New York"
},
{
  name: "Sarah",
  age: 25,
  city: "London"
},
{
  name: "Alexa",
  age: 40,
  city: "Seoul"
}];

```
    - use either for of loop 
```Javascript
for (let array of myArray) {
    console.log(array);
}
```
    - or for in loop 
```Javascript
for(let array in myArray) {
    console.log(myArray[array]);
}
```
    - output values from array to console
(see chapter5.js)

### looping over objects by converting to an array:
(25/08/2023)
- when object converted to an array 
    - any loop can be used
- converting can be done by:
    - convert the keys of object to array
    - convert values of object to array
    - convert key/value entries to array
        - arrays contain two elements:
            - object key
            - object value
- example:
```Javascript
let car = {
    model: 'Golf',
    make: 'Volkswagen',
    year: 1999,
    colour: 'black',
};
```
- use for in loop to loop over keys of object
- use for of loop if converted to an array first
- use Object.keys(nameOfObject)
    - built in function
    - takes an object
    - grabs all properties of this object
    - converts to an array
- example:
```Javascript
let arrKeys = Object.keys(car);
console.log(arrKeys);
// output: ['model', 'make', 'year', 'colour']

// loop over properties of array with for of loop
for(let key of Object.keys(car)) {
    console.log(key);
}
// output: model make year colour
```

- for of loop can loop over values of an object 
    - converts object to an array
    - use Object.values(nameOfObject)

- example:
```Javascript
for (let key of Object.values(car)) {
    console.log(key);
}
// loop over the array: can use length and index strategy
let arrKeys = Object.key(car);
for(let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ":" + car[arrKeys[i]]);
}
// output: model: Golf make: Volkswagen year: 1999 colour: black
```
- to loop over both arrays at the same time 
    - use for of loop
    - use Object.entries() first

- example:
```Javascript
let arrEntries = Object.entries(car);
console.log(arrEntries);
// output: [['model', 'Golf'], ['make' 'Volkswagen'], ['year', 1999], ['colour', 'black']]
// returns 2-dimensional array with key/value pairs
// loop over this with for of 
for(const [key, value] of Object.entries(car)) {
    console.log(key, ":", value);
}
//output: model: Golf make: Volkwagen year: 1999 colour: black
```

### break and continue:
- break and continue keywords control flow of execution of loop
    -break: stop the loop and move to code **below** the loop
    
    - continue: stop current iteration and move back to **top** of loop
        - if for loop used will perform statement and check condition
- example: (see example.js)
```Javascript
let cars = [
    {
        model: 'Golf',
        make: 'Volkswagen',
        year: 1999,
        colour: 'black',
    },
    {
        model: 'Picanto',
        make: 'Kia',
        year: 2020,
        colour: 'red',
    },
    {
        model: 'Peugeot',
        make: '208',
        year: 2021,
        colour: 'black',
    },
    {
        model: 'Fiat',
        make: 'Punto',
        year: 2020,
        colour: 'black',
    }
];
```
*NOTE:* I think my best bet to understanding break and continue is to follow along with the example give in examples.js

I think this actually might help me get unstuck in freecodecamp javascript course - pay attention to conditions being added to find object in array

- as when using break to end a switch statement
    - when the break statement executed in a loop it will end
    - even if condition is still true

- example.js explained:
    - looks for a car with year 2020 or later
    - looks for a car that is also black
    - last car in array also an option however the break ensures it will stop looking for other cars
    
- best practice and break command:
    - not best practice to use break
```Javascript
while (true) {
// this condition is not an actual condition and code hard to read
// actually a statement that runs forever
    if (superLongArray[0] != 42 && superLongArray.length > 0)
} else {
    console.log('found 42!');
// break statement here is a workaround
    break;
}
// better to write without break - without using while(true)
// while(true) = forever
// condition of while easier to read and includes notFound flag
while(superLongArray.length > 0 && notFound) {
// specify condition: should evaluate to true/false
    if(superLongArray[0] != 42) {
        superLongArray.shift();
    } else {
        console.log('Found 42!');
// updates status of notFound to end loop with condition
        notFound = false
    }
}
```
- use the condition to break out the loop 
    - prevents infinite loop
    - code easier to read

- continue used to move on to next iteration of loop
    - quits current iteration and moves back up to check condition to start new iteration
    (see examples.js)

- use caution if using while loop and continue
- example:
```Javascript
// only log odd numbers
// this would output 1 before becoming stuck in an infinite loop
let i = 1;
while (i < 50) {
    // remember to use increment counter before using continue
    i++;
    if((i - 1) % 2 ===0) { // subtract 1 from i here
// continue here is before it can increment
// will continue to run again and and again
        continue;
    }
    console.log(i);
    // i++;: move increment counter from here
}

// an even better way is without continue at all - error chance smaller:
for(let i = 1; i < 50; i = i + 2) {
    console.log(i);
} 
// alot shorter and more readable
```
- break and continue best used with loops over large data sets - possibly external
    - would give less influence to apply other types of control
    - not best practice for basic examples


### Practice exercise 5.8:
- how to create a string with all the digits as it loops through them
    - set a value to skip by adding a condition that will use continue to skip matching condition
    - second option: do the same with break

1. set up a string variable to use as output

2. select a number to skip 
    - set number as a variable

3. create a for loop that counts to 10

4. add a condition to check if value of the looped variable is equal to the number that should be skipped

5. if a number is to be skipped in condition 'continue' to next number

6. as values iterated through
    - append the new count value to the end of the main output variable

7. output main variable after loop completes

8. reuse code 
    - change continue to break
    - should now stop at skip value

* Planning:
```Javascript
// string variable for output
let string = 'Found!';
// number to skip variable
let numberToSkip = 5;
// for loop to 10
for (let i = 0; i < 10; i++) {
    // add condition equal to number to skip
    if (i === numberToSkip) {
// if number to be skipped in condition - continue
        continue;
// append new count value to end of main output variable
        string += i;
    }
// output after string completes
    console.log(string)
}

```
- well thats the plan I'm starting with - probably wrong in several places
- BUT - I think its a good outline to work from:
    - I'm still not comfortable with using psuedocode before using actual javascript to plan my code.  I even know how helpful it is after researching it, but for some inexplicable reason I find it easier to plan using javascript syntax
    - it feels like if I don't plan in syntax I'll be stuck writing what I want to do in plain words - which is something I seem to do in my head.
    - I already know what I want it to do when I read the question (thought process) :
        - inputs and outputs are confirmed
        - group steps into order of execution if possible 
        - being aware that I might have missed a step or the step being too small(watch for side effects)
        - I also imagine what the steps would look like in javascript
    - example:
    step 1: set up string variable for output 
        - before even contemplating this I looked through the rest of the question to see how this output variable would be used
        - I extrapolated that this variable should output a message based on usage
    - I do like that I've been searching my notes for answers more than searching the internet
    - I also don't mind that my code is messy or not optimised, that'll come.  At the moment I'm just surprising myself that my answers have come from within and my notes - not the internet!
    - for this plan I looked at my notes for where to place the continue command but the rest was all me - so happy!
    - a few minor tweaks made to the plan:
        - adding string appending value e.g. string += i inside loop NOT the condition
        - that just meant the console.log ended up moving down one
        - I knew something was up when my output wasn't empty it was logging for every number including the condition that really tipped me off that something needed to move and it wasn't the continue - that left the appended string which as soon as it was moved to the loop, this led to the desired output of everything logged except numberToSkip and I was  able to do the same with break which logged everything up to numberToSkip

- break, continue and nested loops:
    - when break or continue used in nested loop, outer loop will note break
- example (see examples.js):
```Javascript
// array of arrays
let groups = [
    ['martin', 'daniel', 'keith'],
    ['margot', 'marina', 'ali'],
    ['helen', 'jonah', 'sambikos'],
];
```
- looking for all groups that have 2 names beginning with 'm'
- if found it will be logged

1. use first for loop over top-level array
    - counter is 'matches' initial value 0
    - loops over the values

2. use second for loop over values with first if statement
    - when a value startsWith('m')
    - matches increases by 1
    - use else block for continue

3. second if statement checks if number of matches equals 2
    - log output for matches with a string
    - log output for groups[i] the array matching conditional statements
    - break is used to break out of inner loop if 2 matches found
    - outer loop will continue to next top-level array

- to break the array down further into the individual values that match
- example:
```Javascript
// for of loop through top-level array groups
for (let group of groups) {
    // for of loop through values in group 
    for (let member of group) {
        // conditional to find values in members that match
        if (member.startsWith('m')) {
            console.log('found one:', member);
            break;
        }
    }
}
// output: found one: martin etc...
```
- loops over arrays:
    - for every array it will check value and evaluate if it starts with an m
    - if it does, inner loop breaks
    - only first value in an array will be found even if their are multiple
    - due to iteration of array having break - continues to next array

- the first example (example.js) for loop is the best way to find groups
    - breaks out of inner loops as soon as match found
    - useful when needing to make sure an array in a data set contains at least one of something

- nature of for of loop doesn't return index/position found
    - will break and returns the value of element of the element to use
    - if more is needed use counters that update each iteration

- break and continue and labelled blocks:
    - use to see whether only one of all elements in array there
    - use to break out of outer loop from inner loop
    - have to give loop a label for this to work
- example:
```Javascript
outer:
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith('m')) {
            console.log('found one:', member);
            break outer;
        }
    }
}
// output: found one: martin
```
- give loop block a label e.g. outer: and inner:
    - will only log first element found
    - due to breaking out of the outer loop which ends all loops
    - can use continue in a similar way to keep searching for the first element of next array (see example.js)

### Chapter 5 Project:
- math multiplication table:
- create a math multiplication table using loops
- suggested steps:
1. set up a blank to contain final multiplication table

2. set value variable 
    - specify number of values to multiply with one another 
    - log results

3. create outer for loop 
    - iterate through each row
    - create temp array variable to store row values
    - for each row an array of cells nested into final table

4. create inner for loop
    - for column values
    - push multiplies row and column values to temp array

5. add temp row data containing calculated solutions to final table
    - final result will add row of values for the calculations

* Planning:
```Javascript
// create blank array
let multiplicationTable = [];
// specify how many values to multiply with one another
let value = 5;
// create outer loop to iterate through each row
for (let i = 0; i < 12; i++) {
    // create temp array to store row values
    let tempArray = [i];
    // create inner for loop for column values
    for (let j = 0; j < 12; j++) {
    // create column variable for multiplication
       let columns = j * value;
    //    push values to temp array
       tempArray.push(columns);
       }
    //    push temp array to multiplication table array
       multiplicationTable.push(tempArray);
    }
    // log to check output
    console.table(multiplicationTable);
```
*NOTE:* so this is another plan based on suggested steps.

I'm happy with it as far as the second for loop.  But nothing different is coming to mind at present on how to change it so I guess its time to test and adjust

I'm learning to stay flexible

It's pretty important to have at least one idea to try - I think its just as important to have a toolbox like with css where I can keep trying different things to get my desired result if my first attempt doesn't work

I guess I just want to have core options I can manipulate to a solutution

I think I can use practice exercise 5.4 and 5.5 to help me build this,

(26/08/2023) 
before going to sleep last night I decided to add a counter like with the previous exercise while it seems the right direction there are a few things I might have to tweak

Once again I was on the right path to a certain point:
- I didn't need the counter variable this time
    - while the project was overall similar to the two previous practice exercises it wasn't the same in terms of needing a counter since the loop I was using both times did that for me, once that became clear I  removed this
- not assigning i inside the tempArray = [i]
    - if the counter was giving me output I didn't need, assingning i to the index filled the column with an extra row not needed which pushed the zeros column to the right leading to the multiplication tables not being in sync with the rows
- I really misunderstood that the value variable representented the times tables themselves not what is multiplied by 
    - since I know now that the value variable was referring to which multiplications tables (ascending) moving values into the middle for expression instead of hardcoding the rows and columns with actual number, this also had the benefit of freeing the .push()parentheses for the true calculation of j * i
- with these three changes I was able to build the multiplication table
- could I figure out something similar and equally open to misinterpretation? not confident

```Javascript
// create blank array 
let multiplicationTable = []; 
// specify how many multiplication tables e.g 1 * 1 - 12, 2 * 1 - 12 etc
let value = 5; 
// let counter = 0; unecessary counter variable
// create outer loop to iterate through each row 
for (let i = 1; i <= value; i++) { 
 // create temp array to store row values  - leave empty for next step   
    let tempArray = [];
 
// create inner for loop for column values     
for (let j = 1; j <= value; j++) {
// create column variable for multiplication        
// let columns = j * value;  didn't need the new columns variable or calculation
//    push values to temp array        
tempArray.push(j * i); 
} 
// counter++; (This counter is not actually necessary)
//    push temp array to multiplication table array        
multiplicationTable.push(tempArray);
}
// log to check output 
console.table(multiplicationTable); 
```

### summary:
- one thing I need to remember is when looping through an array containing an objects I can use the for in loop to extract the objects into declared variable.
- example 
```Javascript
// first variable declared in for in loop - gives access to the objects held by the array
for (let i in contacts) {
// declare new variable here - variable will now hold reference to each object 
let contact = contacts[i];
// use this variable to evaluate any conditional statements related to object contacts

}
```
- for/in loops over keys and for/of loops over values:
    - super useful for iterating arrays and objects

    