# Javascript from beginner to professional

## chapter 7: classes
- blueprints/templates for object creation
- enables object-oriented programming paradigm
    - one of most important design advancements in software development
    - reduced complexity of applications
    - increased maintainability
    - Javascript classes special compared to other languages
    - classes in Javascript are wrapped in a special function
        - alternative syntax for defining objects
        - constructor function

### object-oriented programming:
- code structured in objects:
    - more maintainable
    - code reusable
(1/9/2023)
- think of all sorts of topics as objects
    - bundle properties - wrap in blueprint(class)
    - may be inheriting properties of parents

- based on four essential principles:
    - abstraction 
        - abstract beheviour of objects summarised in classes or prototypes
    - data encapsulation 
        - properties and methods encapsulated in form of classes or prototypes
        - hidden from external access
    - inheritence 
        - properties and methods can be inherited from one class to another class
        - also from one object(prototype) to another object
    - polymorphism
        - objects take on different types dependent on use


- classes and objects:
- classes:
    - encapusulate data and functions a part of that class
    - can create objects later based on created class
- syntax:
```Javascript
// define class 
class ClassName {
    // parameters of contructor same as properties of class
    constructor(prop1, prop2) {
        // properties can also be seen here with 'this' keyword - refers to object property belongs to
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
// declare object variable initialises with new instance of object
let obj = new ClassName('arg1', 'arg2');
// 'arg1', 'arg2' will be used by constructor when creating new object instance
```
- classes are blueprints for object creation
- used for defining objects that share certain properties
- unlike object literals - a class needs much less typing if you needed to create say 20 instances
- instances/members of class have own:
    - propertoes to hold or define state
    - methods to define behaviour
        - defined by class and shared by all instances

- use 'class' keyword - class name begin with capital letter

- Javascript: classes use prototype-based inheritence
    - if two objects inherit properties (function-valued properties/methods)
        - instances of same class
        - created and initialised by same contructor/factory function at runtime of program, typically
    - object-based programming:
        - object instances created on basis of other objects
        - represent the prototype
        - methods defined directly on objects
        - a.k.a prototype-based/prototypical programming

- define abstract behaviour:
     - classes and prototypes are the template for the instances of the objects created, based on the template; abstract state
     - when object instance properties are provided  actual values; defines concrete state

- encapsulate condition and behaviour:
    - data encapsulation refers to:
        - grouping of properties and methods into classes/prototypes
        - implementation details remain hidden
            - properties only provided by getters and setters to prevent direct access
            - prevent object being set to unauthorised state e.g invalid values
            - setters/getters - accessors

- inherit condition and behaviour:
- where a class inherits properties/methods from another class:
    - inheritence relationship
    - intance of subtype objects inherit from supertype object
    - instance of supertype isn't necessarily an instance of subtype

- accept different types:
- polymorphism: objects ability to take on a different type/ shape
    - present differently depending on context/use
    - if function expects supertype object, object instances of supertype and subtype can be passed
    - this makes the instances polymorphic as in one situation a general instance (supertype) can be use but also the more specific instance (subtype)
    - objects instances of subclass can be treated as object instances of their superclass

### javascript and object oriented programming:
- several ways to program in Javascript in object oriented way:
    - prototypical object orientation
        - most natural 
        - only uses objects
    - pseudoclassical object orientation
        - contructor functions used
        - use class based programming
    - object orientation with class syntax
        - represents syntactic simplification of above orientation

- the concept of prototypes:
- the the top superclass is Object ( all objects are subclass to this) has no prototype
- object set to null has no prototype

- to access object prototype:
    - Object.getPrototypeOf()
- to check if object is prototype of another:
    - Object.isPrototypeOf()

- common to define a function that creates and initialises new object:
    - Object.create() returns a newly created object
    - inherits from specified prototype object
    - defines class

### constructors:
- special method to initialise objects with class blueprint
    - only one per class
    - contains properties set when initiating class
- syntax:
```Javascript
// special function based on constructor
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
// to create an instance:
let contact = new person('brummie','quinn');
// new => creates new instance from person object stored in variable contact
// check new instance
console.log('hi', contact.firstname);
//output: hi brummie
```
- like with functions, passing too few properties as arguments results in property for value not set, being set to undefined
- default can be set within constructor(firstname, lastname = 'doe')

### practice exercise 7.1:
- create a person class, log instances of friends names:

1. create class for person:
    - include constructor for firstname/lastname

2. create variable:
     - assign value of new person object
     - using friends first and last name

3. add second variable:
     - use another friends first and last name

4. output both friends on console:
    - use a greeting of hello

* planning:
```Javascript
// 1. class declaration defines variable and assigns value of constructor function to it
class Person {
    // define constructor function for class
    constructor(firstname, lastname) {
        // non inherited properties unique to object
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
// 2.
let friend1 = new person('dan', 'jeffery');
// 3.
let friend2 = new person('alyssa', 'parris');
// 4.
console.log('hi', friend1);
console.log('hi', friend2);
```
### methods:
- specifying methods allows object to do things with own properties
    - methods defined without keyword - name and parentheses only
- example:
```Javascript
// building on previous example:
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // add method:
    greet() {
        console.log('hi, I am', this.firstname);
    }
}
// call:
let contact = new person('brummie', 'quinn');
contact.greet();
// output: hi I am brummie
```
- class methods can take parameters and return results
    - if method doesn't need external arguments and only the properties of object, no parameters work, method can use its object properties

### practice exercise 7.2:
- using practice exercise 7.1 person class

1. add method called fullname
    - return concatenated value of firstname and last name

2. create values for person1 and person2 using two friends' first and last names

3. using fullname method within class return full name of one or both people

* planning:
```Javascript
class Person {
    // define constructor function for class
    constructor(firstname, lastname) {
        // non inherited properties unique to object
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname() {
        return `${firstName}${lastName}`;
    }
}
// 2.
let friend1 = new person('dan', 'jeffery');
let friend2 = new person('alyssa', 'parris');
// 3. 
friend1.fullname();
friend2.fullname();
```
- properties:
 - sometimes called fields
 - hold the data of class
 - can be added and removed like objects
 - can be accessed outside class
 - must be defined in constructor function/class method
 - prefix with '#' to render immutable (invisible and inaccessible) to code outside class body
    - class in control of values of properties
    - define getter function to provide read-only access to get data from class
    - define setter function to provide write-only access to set data fields on class

### getters and setters:
- computed properties
    - more like properties than functions
    - called accessors

- good practice:
    - make fields private as much as possible
    - use setters and getters to provide access
    - excapsulation
    - object in control of own fields
- example:
```Javascript
// building on previous example:
class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // used to get property: takes no parameters
    get firstname() {
        // returns property
        return this.#firstname;
    }
    // used to set property: takes a parameter
    set firstname(firstname) {
        // assigns new value to property
        this.#firstname = firstname;
    }
    // can be used outside object like property
    get lastname() {
        return this.#lastname;
     }
    //  return nothing: may contain more logic
    set lastname(lastname) {
        if(lastname.startsWith('')) {
            this.#lastname = lastname;
        } else {
            this.#lastname = '' + lastname;
        }
     // checks last name using conditional to change value if condition not met   
    }
}
```
### inhertence
