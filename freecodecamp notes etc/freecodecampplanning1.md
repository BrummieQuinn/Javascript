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