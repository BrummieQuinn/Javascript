# freecodecamp notes:
## ES6:

- Object.freeze:
    - function to prevent data mutation
    - changes to object values rejected
    - error thrown in strict mode
- example:
```Javascript
let obj = {
    name: '',
    review: ''
};
Object.freeze(obj);
// assignment results in values rejected or in strict mode an error thrown
obj.review = 'bad';
obj.newProp = 'test';
// output: unchanged 
console.log(obj);
```