# Extra notes:

so this page is for extra notes I make from other various resources.

I'm not too sure I'm completely confident applying what I've learned up to now.

I want Javascript to click and feel like I'm almost there, but I'm also aware that moving on too fast wouldn't be good either.

I'll also (maybe) look for some coding challenges that require me to use what I've learned to this point if possible

so this might also turn into a challenge planning page with a js file with solutions i've worked on

but yeah, anything i'm not too confident on will be here:
***

## statements:

- statements can be compared to Javascript commands
    - expressions are evaluated to produce value
    - statements are executed to make something happen
- expression statement:
    - an expression with side effects 
    - assignments
    - function invocations
    - can stand alone as a statement

- declaration statement:
    - declare new variables
    - define new functions

- Javascript programs are fundamentally a sequence of statements to execute
    - due to interpreter default executing statement one after another, control structure e.g conditional/branching, jumps and loops/iteration

- conditionals/branching:
    - if and switch statements
    - execute or skip other statements depending on value evaluated by expression

- loops/iterations:
    - while, do-while and for
    - execute statements repetitively

- jumps:
    - break, return and throw
    - interpreter will jump to another part of program

### expression statements:

- simplest of statements are expressions with side effects
- example:
```Javascript
// assignment statements are expression statements
greeting = 'Hello ' + name;
// or
i *= 3; 
// even
i++; i--; counter++
```
- increment and decrement assignments are changing the variable value as if assignment performed
    - this side effect relates them to assignment statements

- delete operator has side effect of deleting 'object property' 
    *NOTE:* remember the above!!!
    - used as statement rather than larger expression

- function calls are expression statements
    - will have side effects that affect host environment or program state
    - can be used as statements
    - a function without a side effect, makes no sense to call
    - a function without a side effect, if called, should be part of:
        - assignment statement - as in call to assign result to a variable
        - larger expression

### compound statements:
- statement block combines multiple statements into a compound statement e.g within {}
    - primitive statements within block end with ';'
    -{} do not end with ';'

- expressions can contain subexpressions
- statements can contain substatements
    - the while loop syntax expect single statement to serve as loop body
    - statement blocks allow the use of many statements within the single statement

- empty statements:
    - allows the inclusion of no statements where one is expected
    - use ';' 
    - useful to create a loop with empty body
- example:
```Javascript
// initialise array a
for (let i = 0; i < a.length; a[i++] = 0) ;
// no loop body necessary due to a[i++] = 0 ;
```
- javascript syntax a statement for loop body
    - empty statement ; used so no loop body necessary
    - if using comment code with clear purpose

### loops:
- common usage - iterate over array elements

- do-while:
    - less used than while in practice
    - do loop must end with ;
    - while loop has no need if in {}

- for/of:
- loops through iterable objects
    - arrays, strings, sets and maps
- with arrays:
- example:
```Javascript
// for of loop through array elements:
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for (let element of data) {
    sum += element
}
sum
// output: 45
```
- with objects:
- object not iterable by default
- would cause type error if for/of used directly
    - use for/in or for/of Object.keys
- example:
```Javascript
let o = { x: 1, y: 2, z: 3 };
let keys = '';
for (let k of Object.keys(o)) {
    keys += k
}
keys
// output: 'xyz'
```
- Object.keys() returns array of property names 
- for/of iterates arrays

- Object.values() returns array of property values
- for/of iterates array

- Object.entries() returns array of arrays:
    - each inner array contains keys and values
    - one property of the object
- for/of iterates array

- for/in:
    - works with any object after in
- example:
```Javascript
// assign property names of object to variable property
for (let property in object) {
console.log(object[p]);
}
```
- as I said I would I worked on the freecodecamp challenge to test my understanding

## objects and arrays extras:

- (.) accesses a property based on literal name
- [] accesses a property as an expression to be evaluated

- object properties can change
    - a single object value can have different content at different times

- having to references to an object different to having two object with the same properties

- objects compared by identity - only true if value the same
    - an object with identical propertied would return false

