# Javascript from beginner to professional

## Chapter 2: Javascript Essentials

### Converting data types

- added so I don't forget
- easier to forget than I thought

```Javascript
numberToString = 6;

typeof numberToString = 'number'

numberToString1 = '6';

numberToString = String(numberToString);

typeof numberTostring1 = 'string'
```

### Practice exercise: 2.3

write some code to calculate the hypotenuse of a triangle using pythagorean theorem when given the values of the other two sides

the theorem specifies that the relation between the sides of a right-angled triangle is

```code
a^2 + b^2 = C^2
```

- use prompt to geth the value for a and b
- square the values of both a and b
- add together
- find the square root
- console.log the answer

* Planning:

```Javascript
// declare function that takes two parameters
function pythagoreanTheorem(a, b) {
// write expression to square a
a = a ** 2;
// write expression to square b
b = b ** 2;
//declare variable to store sum of a and b
hypotenuse = a + b;
//log output
console.log(hypotenuse);
}
// call function to check
function(3, 4)
```

(see practice2_3.html and practice2_3.js)

### Assignment operators:

the basic assignment operator is '='

the shorthand involves the following example below

- example:

```Javascript
// declare and assign variable x with initial value 2
let x = 2;
// add 2 using shorthand assignment operation
x += 2;
//multiple by 6
x *= 6;
// divide by 3
x /= 3;
// find remainder of x
x %= 3;
console.log(x);
```

### Practice exercise 2.4:

- create variables for three numbers a, b and c
- update variables using assignment operator shorthand:
  - add b to a
  - divide a by c
  - replace value of c with modulus of c and b

* Planning:

```Javascript
// declare 3 variables
a = 0;
b = 1;
c = 2;
// add b to a
a += b;
//divide a by c
c /= a;
// replace c with modulus of c and b
c %= b;
```

(see practice2_3html and practice2_3.js)

### Comparison operators

- basic comparison operator '=='
  - uses built-in type conversion to compare values
- better choice is strict equality '==='
- opposites are:

  - '!=' - not equal
  - '!==' - strict not equal

- other comparison operators:
  - '>' - greater than
  - '<' - less than
  - '>=' - greater than or equal
  - '<=' - less than or equal
  - logical operator:
  - And '&&' - checks if both conditions are true
  - Or '||' - checks if either condition is true
  - Not '!' - used to negate result of condition

### chapter 2 project:

#### Miles to kilometres converter:

1. create a variable that contains a value in miles
2. convert to kilometres
3. log value in kilometres in the following format

```Javascript
// turns out I struggled with this one cos the below statement seems to be an error
The distance of 130kms is equal to 208.2142 miles
```

1 mile = 1.60934km

- Planning:

```Javascript
let kilometres = 130;

let miles = 1.60934 * kilometres

console.log(output)
```

(see practice2.html and practice2.js)

- BMI calculator

  1.  set values for height in inches and weight in pounds

  2.  convert the values to centimetres and kilos

  3.  output to console
      - 1 inch = 2.54cm
      - 2.2046 pounds = 1 kilo

  4.output the results

  5.  calculate and log BMI:

  weight(in kilos) divided by squared height (in metres)

  6.  output results to console

- Planning:

let inch = 2.54 - declare variable to hold 1 inch = 2.54cm

let kilo = 2.2046 - declare variable to hold 1 kilo = 2.2046 pounds

let height = n \* inch - convert height to inches

let weight = n / kilo - convert weight to kilos

log (use template literal) - console.log conversion result

convert centimetres to metres by dividing by 100 (convert height = (centimetres/100) centimetres to metres)

let BMI = weight / (height \*\* 2) - calculate BMI

### Summary:

- var = global scope
- let = block scope
- const = block scope - cannot be reassigned
- typeof = returns data type
- data type conversion - built-in methods:

  - Number()
  - String()
  - Boolean()
  - Array()
  - Object()
  - Function()
  - Symbol()

- operators enable the manipulation of values assigned to variables
