//getter & setters
let user = {
  name: "John",
  surname: "Smith",

  // setter
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  // getter
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith

// Prototype
// define two objects in JS
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true

// Constructor is just a normal function
function Person(name, birthYear) {
  // this = {};  (implicitly)

  this.name = name;
  this.birthYear = birthYear;
  // This would create duplicate for every object created using this constructor function
  // very bad practice
  // do NOT create methods inside constructor function
  // use prototype inheritance below
  // this.calcAge = function () {
  //   const today = new Date();
  //   const currentYear = today.getFullYear();
  //   return currentYear - this.birthYear
  // }

  // return this;  (implicitly)
}
// This is the better way, no duplicate function created, only one copy
Person.prototype.calcAge = function () {
  const today = new Date();
  const currentYear = today.getFullYear();
  return currentYear - this.birthYear 
}
// can also set properties on prototype
Person.prototype.species = 'Homo Sapien'

const anhao = new Person('An Hao', 2002);
console.log('anhao object: ', anhao)
console.log('Person prototype', Person.prototype)
console.log('anhao.__proto__: ', anhao.__proto__)
console.log(anhao.calcAge())

/*
`Person.prototype` is not the prototype of Person. It is what's gonna be used as the prototype of all objects created using the `Person` constructor function.
*/
console.log(anhao.__proto__ === Person.prototype) // true
console.log(Person.prototype.isPrototypeOf(anhao)) // true
console.log(Person.prototype.isPrototypeOf(Person)) // false
console.log(anhao.hasOwnProperty('name')) // true
console.log(anhao.hasOwnProperty('species')) // false