# Javascript from beginner to professional

## Chapter 3: Multiple values

- arrays and objects

  - allow for more complex programming
  - can store multiple values

- objects:

  - collection of properties and methods
  - properties are variables - can be simple data structures (primitive data types)
    - can be complex data structures (complex data types)

- arrays:

      - can store multiple values
      - acts like a list of values
      - example:
       - a shopping list - single variable holding multiple values

  (see chapter3.html and chapter3.js)

- defining an array with keyword 'const' - cannot change the array itself - can change the values of the array
  (see chapter3.html and chapter3.js)

### Accessing elements

- reference array index
- first element assigned index position
  - arr[1]
- access last element in the array

  - arr[arr.length - 1]
  - uses built-in length property

- overwrite elements

  - arr[2] = 'new value'
  - overwriting non-existant element or negative index will lead to automatic addition of element to that index position

- find the number of elements in an array - use built-in length property - returns number of elements in array - length is 1 higher than last index position
  (see chapter3.html and chapter3.js)

### Practice exercise 3.1

1. create an array to use as a shopping list with 3 items
   - milk
   - bread
   - apples
2. output list length
3. update bread to oranges
4. output the list
   (see chapter3.html and chapter3.js)

### Array methods

- built-in methods
  - methods are functions on a certain object
  - methods hold _actions_ where properties hold _values_
  - can call methods and functions to execute specific code in that function
- add and replace elements:

  - push() method adds elements to the end of the array
  - returns a new length of array
  - can be stored in a variable

- example:

```javascript
let favouriteFruits = ['grapefruit', 'orange', 'mango'];
favouriteFruits.push('kiwi');
// store length to a variable
let lengthOfFavouriteFruits = favouriteFruits.push('lemon');
//console.log to see updates
console.log(favouriteFruits);
// new array would be ['grapefruit', 'orange', 'mango', 'kiwi', 'lemon']
```

- splice() method allow specific index position to be chosen when adding new elements

- example:

```Javascript
  let arrOfShapes = ['circle', 'triangle', 'rectangle', 'pentagon'];
  // insert square and trapezoid on index position 2
  arrOfShapes.splice(2, 0, 'square', 'trapezoid');
  console.log(arrOfShapes);
  // new array would be ['circle', 'triangle', 'square', 'trapezoid']
```

- elements shift by 1 index position to the right
  - splice() methods take multiple parameters
    - parameter 1 = index position start point
    - parameter 2 = number of elements to remove
    - parameter 3 = elements to insert

```Javascript
arrOfShapes.splice(2, 2, 'square', 'trapezoid');
//would replace elements 'rectangle' and 'pentagon' with 'square' and 'trapezoid'
```

- concatenate another array
  - concat() method concatenates two or more arrays
  - returns new array with extra array added to the end of the original
  - can be stored in a variable

(see chapter3.html and chapter3.js)

### Deleting elements

- pop() method removes the last element from array
  - returns removed element

```Javascript
numbers2.pop();
console.log(numbers2);
// new array would be [12, 24, 36, empty x 2, 48, 4, 5, 6, 7, 8]
```

- shift() method removes the first element from array
  - returns removed element

```Javascript
  numbers2.shift();
  console.log(numbers2);
  // new array would be [24, 36, empty x2, 48, 4, 5, 6, 7, 8]
```

- splice() method can also be used to delete elements
  - specify index position to start from
  - specify number of elements to remove
  - return removed elements

```Javascript
  numbers2.splice(1, 3);
  console.log(numbers2)
  // new array would be [24, 4, 5, 6, 7, 8]
  // 3 elements removed from array starting from index position 1
```

- delete operator
  - can be used to change value or index position to undefined

```Javascript
delete numbers2[1];
console.log(numbers2)
// new array would be [24, null, 5, 6, 7, 8]
```

- useful when relying on index or array length to stay the same
  - example:
    when keeping user input with need to determine number of user inputs, based on array user pushes to, deleting would decrease the array length - if not desired using delete operator will keep array length intact

### Finding elements

- check whether value present in array - use find() method - function executed on each element until a match found - returns first matching element - returns undefined if no match found
  (see chapter3.html and chapter3.js) - the find(element of array) method, takes an element of the array as input

- finding the elements index position - using indexOf() method - returns index on which element value found
  -returns first occurance position
  -returns -1(falsey) if value not found
  (see chapter3.html and chapter3.js)

      - indexOf can take a second argument
      - useful for specifying starting position for the search
      - if the second argument not specifed, search starts array[0]

      - lastIndexOf() method finds last occurance of an element

```Javascript
  let animals = ['cat', 'dog', 'bird', 'fish', 'cat'];
  let lastCat = animals.lastIndexOf('cat');
  console.log(lastCat);
```

- value of lastCat would be animals[4] - last occurance in array

- sorting arrays

  - built-in methods for sorting arrays
    - sort() method
  - sorts numbers small to high
  - sorts strings from a - z

- reverse sorting - reverse() method - whether array sorted or not, order reversed
  (see chapter3.html and chapter3.js)

### Practice exercise 3.2

1. create an empty array to use as a shopping list
2. add milk, bread, apples to the list
3. update bread with mangoes and eggs
4. remove last item from the array and output
5. sort the list alphabetically
6. find and output the index value of milk
7. after bananas, add carrots and lettuce
8. create a new list containing juice and pop
9. combine both lists
   - add new list twice to the end of first
10. get last index value of pop
    - console output
11. final list should be

```Javascript
['banana', 'carrots', 'lettuce', 'eggs', 'milk', 'juice', 'pop', 'juice', 'pop']
```

- Planning:

```Javascript
  // create array
  let shoppingList = [];

  // add milk, bread, apples
  shoppingList.push('milk', etc...);
  console.log(shoppingList);

  // update bread with mangoes and eggs
  shoppingList.splice(1, 1, 'mangoes', 'eggs');
  console.log(shoppingList);

  // remove last item
  shoppingList.pop();
  console.log(shoppingList);

  // output
  console.log(shoppingList);

  // sort alphabetically
  shoppingList.sort();
  console.log(shoppingList);

  // find and output index value of milk
  let milk = shoppingList.indexOf('milk');
  console.log(milk);
  console.log(shoppingList);

  //add carrots and lettuce after bananas
  let bananas = shoppingList.indexOf('bananas');
  console.log(bananas);
  console.log(shoppingList);

  // splice based on index returned
  shoppingList.splice([index of bananas], 0, 'carrots', 'lettuce');
  console.log(shoppingList);

  //create new list
  let shoppingList2 = ['juice', 'pop'];

  // concatenate to list 1 twice
  shoppingList.concat(shoppingList2);
  shoppingList.concat(shoppingList2);
  console.log(shoppingList);

  // get last index value of pop - output
  let pop = shoppingList.lastIndexOf('pop');
  console.log(pop)

```

### Multi-dimensional arrays:

- arrays can hold other arrays
- array of arrays = list of lists

```Javascript
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

// create a 2-dimensional array from existing arrays
let arrayOfArrays = [someValues1, someValues2, someValues3];
let arrayOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// access elements of inner array
// 1. grab the first array element - index[0]
// 2. grab a value from inner array using index position again [0][1][3]
let value1 = arrayOfArrays2[0][1];
// value1 now stores element value of  2
console.log(value1);

// this will store the element value from the third arrays, third value
let value2 = arrayOfArrays2[2][2];
// value2 now stores element value of 9
console.log(value2);
```

- multi-dimensional arrays are useful when working with matrices

### Practice exercise 3.3:

1. create an array containing three values

- 1
- 2
- 3

2. nest the array from step 1 into a new array 3 times

3. output the value 2 from one of the arrays to the console

- Planning:

  - an array with 3 values

```Javascript
let array = [1, 2, 3];
```

- nest array into new array three times

```Javascript
let nestedArray = [[array], [array], [array]];
```

- output the value 2 from one of the nested arrays

```Javascript
nestedArray[2][1]
console.log(nestedArray[2][1]);
```

### Working with objects:

- objects can be used to describe reali life objects:

  - person, car, animal etc

- objects can be used as complex abstract concepts that allow for more flexibility in code

- arrays are a type of object

  - index positions are properties

- all other objects have named properties

  - offers a chance to group multiple variables into one
  - name of the property is the key
  - value of the property is the value
  - known as key/value pairs

- example:

```Javascript
let dog = {
  dogName: 'Javascript',
  weight: 2.4,
  colour: 'brown',
  breed: 'chihuahua',
  age: 3,
  burglarBiter: true,
};
```

- when deciding whether something should be a property:

  - template sentence:
    - objectName has a(n) property name

- access a property using:
  - square brackets []

```Javascript
let dogColour = dog['colour'];
```

- dot notation
- used when chaining methods

```Javascript
let dogColour2 = dog.colour;
```

- updating objects:
  - value of properties can be changed

```Javascript
dog['colour'] = 'blue';
dog.weight = 2.3;
console.log(dog);
// new object would be
dog = {
  dogName: 'Javascript',
  weight: 2.3,
  colour: 'blue'
  breed: 'chihuahua,
  age: 3,
  burglarBiter: true
}
```

- changing the data type of a value of a property is possible
  - Javascript will change whole value and data type for new situation

```Javascript
dog['age'] = 'three';
```

- variables can also be used to reference object properties
- use square brackets to access '[]'

```Javascript
let variable = 'age';
console.log(dog[variable]);
// would output 'three'
```

- changing value of variable to another dog object property allows another property to be accessed

```Javascript
variable = 'breed'
console.log(dog[variable]);
// would output chihuahua
// values can also be updated this way
dog[variable] = 'golden retriever';
console.log(dog['breed']);
// would output golden retriever
```

### Practice exercise 3.4:

1. create a new myCar object

- make: 'Honda'
- model: 'Accord'
- year: 2018
- engineSize: 1.5
- boolean value: isAlarmed

2. create a variable that can hold the string value colour

- colour = 'blue'
- use variable within square brackets '[]' to assign new value to colour property

3. use same variable and assign new property string value to it

- such as forSale
- use square brackets '[]' to assign new value to forSale property to indicate whether car is for sale

4. output make and model

5. output value of forSale

- Planning:

```Javascript
// new object
let myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 2018,
  engineSize: 1.5,
  isAlarmed: true
};
console.log(myCar);

// create variable to hold string value colour
let variable = 'colour';
myCar[variable] = 'blue';
console.log(myCar);

// use same variable to assign new property value
variable = 'forSale';
myCar[variable] = true;
console.log(myCar);

// output make and model
console.log(myCar.make, myCar.model);
```

(see chapter3.html and chapter3.js)

### Working with objects and arrays:

- nested objects and nested arrays e.g.
  - arrays in arrays
  - objects in objects

```Javascript
let company = {
  companyName: 'Healthy Candy',
  activity: 'food manufacturing',
  address: {
    street: '2nd Street',
    number: '123',
    zipcode: '33116',
    city: 'Miami',
    state: 'Florida'
  },
  yearOfEstablishment: 2021
};
// access or modify one of the nested objects properties
// approach 1
company.address.zipcode = '33117';
// approach 2
company['address']['number'] = '100';
```

- Array in objects:
  - change activity to activities to create array within object

```Javascript
let company = {
  companyName: 'Healthy Candy',
  activities: ['food manufacturing', 'improving health', 'manufacturing toys'],
  address: {
    street: '2nd Street',
    number: '100',
    zipcode: '33117',
    city: 'Miami',
    state: 'Florida'
  },
  yearOfEstablishment: 2021
};
// access or modify nested array
// assign variable to store property value
let activity = company.activities[1];
// output would be 2nd element of activities array in company object
```

### Objects in arrays:

- create an array of address objects

```Javascript
let addresses = [{
  street: '2nd Street',
  number: '100',
  zipcode: '33117',
  city: 'Miami,
  state: 'Florida'
  }
  {
    street: '1st West Avenue',
    number: '5',
    zipcode: '33116',
    city: 'Addison',
    state: 'Texas'
  }]

  // arrays can be accessed using object name followed by index position followed by property to access
  let streetName = company.address[0].street;
  // variable stores property value
```

### Practice exercise 3.5:

1. create an object named people that contains an empty array called friends

2. create three variables - each containing an object with these properties:

   - firstName
   - lastName
   - ID value

3. add the three friends array to the console

4. output value of friends array

- Planning:

1. create object containing empty array

```Javascript
let people = {};
```

2. create 3 variables

```Javascript
people = people.firstName;
people = people.lastName;
people = people.ID;
console.log(people);
```

3. add 3 friends to friend array

```Javascript
people = people.friends;
people = people.push('friend1', 'friend2', 'friend3');
console.log(people);
```

4. output the value of friends array

```Javascript
console.log(people[friends]);
```

- as is becoming usual, this plan did not survive creation of the program
- it was a pretty good starting point
  - steps 1, 3 and 4 being valid
  - steps 1 and 3 needed breaking down further to accomplish error free solution

### Chapter 3 Projects:

- manipulating an array:
  - take the following array:

```Javascript
const theList = ['laurence', 'svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
```

- manipulate the array using various methods and transform into:

```Javascript
['FIRST', 'svekis', 'MIDDLE', 'hello World', 'LAST']
```

- Hints:
  - remove first and last item
  - add 'FIRST' to start of array
  - assign 'hello World' to the fourth item value
  - assign 'MIDDLE' to the third index value
  - assign 'LAST' to last position in array
  - output

* Planning:

- remove first item
  - shift() method

```Javascript
theList.shift();
```

- remove last item
  - pop() method

```Javascript
theList.pop();
```

- add 'FIRST' to start
  - unshift() method

```Javascript
theList.unshift('FIRST');
```

- assign 'hello World'
  - splice() method to add to 4th item value

```Javascript
theList.splice(3, 0, 'hello World');
```

- assign 'MIDDLE'
  - splice() method to add to 3rd index position

```Javascript
theList.splice(2, 0, 'MIDDLE');
```

- add 'LAST' to end
  - push() method

```Javascript
theList.push('LAST');
```

- output

_Note:_ I'm starting to get used to my planning being more of a starting point

was originally left with unneccessary items in the array until I remembered to use the 2nd splice parameter to delete elements

hence the solution being different to the planning

(see chapter3.html and chapter3.js)

### Company product catalog

in this project, implement a data structure for a product catalog and create queries to retrieve data

1. create an array to hold an inventory of store items

2. create three items, each having properties of:

   - name
   - model
   - cost
   - quantity

3. add all three objects to the main array using an array method - output array

4. access the quantity element of the third item and output

- Planning:

```Javascript
// create empty array
let inventory = [];
// create three item objects
let item1 = {
  name: '',
  model: '',
  cost: 0,
  quantity: 0
}
let item2 = {
  name: '',
  model: '',
  cost: 0,
  quantity: 0
}
let item 3 = {
  name: '',
  model: '',
  cost: 0,
  quantity: 0
}
// add to main array
inventory.push([item1, item2, item3]);
console.log(inventory);

// access the quantity element of third item and output
console.log(inventory[2].quantity)

```
