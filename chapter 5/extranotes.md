# Extra notes:

so this page is for extra notes I make from other various resources.

I'm not too sure I'm completely confident applying what I've learned up to now.

I want Javascript to click and feel like I'm almost there, but I'm also aware that moving on too fast wouldn't be good either.

I'll also (maybe) look for some coding challenges that require me to use what I've learned to this point if possible

so this might also turn into a challenge planning page with a js file with solutions i've worked on

but yeah, not feeling too confident, so this:
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

### freecodecamp task:
#### Profile task notes:

- What I know:

* The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
	
	- If both are true, then return the "value" of that property.

	- If name does not correspond to any contacts then return the string No such contact.

	- If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


 
1. function needs to check 'if' 'name' is an actual contact's 'firstName' is a property of that contact 
	- represented by 'prop' in the function template
	- use hasOwnProperty() method for this check?
	- if (object.firstName.hasOwnProperty('firstName') {

2. 'if' both are 'true' then return the 'value' of that property
	- if (object.hasOwnProperty('firstName') && 'name' === object.firstName ) {
		return object.firstName.value;
	
	} else if ('name' !== object.firstName) {
		return 'No such contact';
3. 'if' 'name'does not correspond to any contacts, return the string 'No such contact'
	
	} else if ('name' !== object.prop) {
		return 'No such property';

4. 'if' 'prop' does not correspond to any valid properties of a contact found to match 'name' then return the string 'No such property'		
	}

	});

### Trying to work it out:

object within array = [{}]

name = firstName 'string'

prop argument used with name to query object based on argument of 'name'

prop = lastName 'string'/number 'Number'\likes['string', 'string', 'string]

 argument used with 'name' to query object properties where prop can be any property passed of particular nested object

1. check if name is an actual contacts 'firstName and the given 'prop' is a property of contacts

	- use (.) notation to chain object properties and methods

	- use conditional if() statement
        - nested - k

```Javascript
//  This function takes two arguments: 
// argument 'name' checks existence of property in objects
// argument 'prop' retrieves the value of property if it exists
  function lookUpProfile(name, prop) {
	// Only change code below this line
// use for/in loop to iterate array to access elements (objects)
for (let i in contacts) {
// declare new variable and assign current object from array
	let contact = contacts[i];
// check if new contact object contains 'firstName' property that matches 'name' argument
	if (contact.firstName === name) {
// check if property exists in the new contact object
		if (contact.hasOwnProperty(prop)) {
// if property exists return the value
			return contact[prop];
		} else {
            // returns after evaluating inner if conditional: if no property matches 
			return 'No such property'
		}
	}
}
  }
//   final return here:
// returns after evaluating outer if conditional: if no name matches 'firstName'
return 'No such contact'
```

