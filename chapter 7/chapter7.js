// practice exercise 7.1:
// practice exercise 7.2:
class person {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname() {
        // use this in template literals too
        return `${this.firstname} ${this.lastname}`;
    }
}
let friend1 = new person('dan', 'jeffery');
let friend2 = new person('alyssa', 'parris');
console.log('hi', friend1.firstname, 'hi', friend2.firstname);
console.log(friend1.fullname());
console.log(friend2.fullname())

