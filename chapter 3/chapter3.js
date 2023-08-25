//chapter 3: Multiple values

// new Array() built-in method to create array
let arr = new Array('purple', 'green', 'yellow');
// not readable and has side effects with numbers

let arr1 = ['black', 'orange', 'pink'];
// most readable way to create a new array

let arr2 = new Array(10);
// creates array with 10 empty elements

let arr3 = [10];
// creates an array with 1 element with value of 10
console.log(`${arr}, ${arr1}, ${arr2}, ${arr3}`);

const arr4 = ['hi there'];
arr4[0] = 'new value';
console.log(arr4[0]);

/*arr4 = ['nope, this is overwriting the whole array']*/

let numbers = [12, 24, 36];
console.log(numbers);
let lastElement = numbers[numbers.length - 1];
console.log(lastElement);
numbers[5] = 48;
console.log(numbers);
console.log(numbers.length);

// practice exercise 3.1:
let list = ['milk', 'bread', 'apples'];
console.log(list);
console.log(list.length);
console.log(list[1]);

list[1] = 'oranges';
console.log(list);

// concatenate arrays
let numbers2 = [4, 5, 6];
numbers2 = numbers.concat(numbers2);
console.log(numbers2);

numbers2 = numbers2.concat(7, 8, 9);
console.log(numbers2);

// finding elements - written 2 ways
// method 1
let arr5 = [2, 6, 7, 8];
let findValue = arr5.find(function (e) {
  return e === 6;
});

// method 2
let findValue2 = arr5.find((e) => e == 10);

console.log(findValue, findValue2);
/*find(element of array) method takes an element of the array as input
when the element in the array equals 6 (method 1) or 10 (method 2), the find() method returns the element value */

// find index
//use element value of index position to be found
// create variable to hold value
let findIndex = arr5.indexOf(6);
console.log(findIndex);
// returns 1 index position of 6 in the array arr5
let findIndex2 = arr5.indexOf(10);
console.log(findIndex2);
// returns -1(falsey), 10 doesn't exist in the array arr5

// sorting and reverse sorting
// sort() method
let names = ['James', 'Alicia', 'Felicia', 'Mark', 'Bart'];
names = names.sort();
console.log(names);
let ages = [18, 72, 33, 56, 50];
ages = ages.sort();
console.log(ages);

// reverse() method
names = names.reverse();
console.log(names);

ages = ages.reverse();
console.log(ages);

// Practice exercise 3.2
let shoppingList = [];

// push() to add elements
shoppingList.push('milk', 'bread', 'apples');
console.log(shoppingList);

// splice() to add elements to specific position and remove 1 element
shoppingList.splice(1, 1, 'mangoes', 'eggs');
console.log(shoppingList);

// pop() to remove last element
shoppingList.pop();
console.log(shoppingList);

// sort() sort alphabetically
shoppingList.sort();
console.log(shoppingList);

// indexOf to get index position of input
let milk = shoppingList.indexOf('milk');
console.log(milk);

// splice() to insert elements
shoppingList.splice(1, 0, 'carrots', 'lettuce');
console.log(shoppingList);

// new shopping list
let shoppingList2 = ['juice', 'pop'];
console.log(shoppingList2);

// concatenate shoppingList2 to end of shoppingList twice
shoppingList = shoppingList.concat(shoppingList2, shoppingList2);
console.log(shoppingList);

// get last index value of Pop and output to console
console.log(shoppingList.lastIndexOf('pop'));

// output final list
console.log(shoppingList);

// Practice exercise 3.3:

let array = [1, 2, 3];

let nestedArray = [[array], [array], [array]];

console.table(nestedArray);
console.log(nestedArray);

// Practice exercise 3.4:
let myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 2018,
  engineSize: 1.5,
  isAlarmed: true,
};
console.log(myCar);

let variable = 'colour';

myCar[variable] = 'blue';
console.log(myCar);

variable = 'forSale';
console.log(variable);
myCar[variable] = false;

console.log(myCar);

console.log(`Model: ${myCar.model}, Make: ${myCar.make}`);

console.log(`For Sale: ${myCar.forSale}`);

// Practice exercise 3.5:
// create an object that contains an empty array called friends
let people = {};
console.log(people);

// create an empty array called friends inside people object
people.friends = [];
console.log(people);

// create three variables, each containing an object that contains a: first name, last name, and ID
let a = {
  firstName: '',
  lastName: '',
  ID: 0,
};

let b = {
  firstName: '',
  lastName: '',
  ID: 1,
};

let c = {
  firstName: '',
  lastName: '',
  ID: 2,
};
console.log(a, b, c);

// add three friends to friend array
people.friends.push(a, b, c);
console.log(people);

// access last friend object using index position
console.log(people.friends[2]);

// Chapter 3 Projects:
// manipulating an array
const theList = [
  'Laurence',
  'Svekis',
  true,
  35,
  null,
  undefined,
  { test: 'one', score: 55 },
  ['one', 'two'],
];
console.log(theList);

theList.shift();
console.log(theList);

theList.pop();
console.log(theList);

theList.unshift('FIRST');
console.log(theList);

theList.splice(3, 4, 'hello World');
console.log(theList);

theList.splice(2, 1, 'MIDDLE');
console.log(theList);

theList.push('LAST');
console.log(theList);

// Company product catalog
let inventory = [];

let item1 = {
  name: '',
  model: '',
  cost: 0,
  quantity: 0,
};

let item2 = {
  name: '',
  model: '',
  cost: 0,
  quantity: 0,
};

let item3 = {
  name: '',
  model: '',
  cost: 0,
  quantity: 0,
};

inventory.push(item1, item2, item3);
console.log(inventory);

let item3quantity = inventory[2].quantity;
console.log(item3quantity);

// experiment

inventory.push(item1, item2, item3);
console.log(inventory);

let item6cost = inventory[5].cost;
console.log(item6cost);
