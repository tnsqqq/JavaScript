// new keyword

function tanishq(num) {
  return num * 5;
}

tanishq.power = 2;

console.log(tanishq(5));
console.log(tanishq.power);
console.log(tanishq.prototype);


function user(username, score) {
  this.username = username;
  this.score = score;
}

user.prototype.increment = function () {
  this.score++
}

user.prototype.print = function () {
  console.log(`price is ${this.score}`);

}

const chai = new user("chai", 25)
const tea = user("tea", 250)

chai.print()

/*

Here's what happened behind the scenes when the new keyword 
is used:

A new object is created: The new keyword initiates the 
creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked 
to the prototype property of the constructor function. This
means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is called: The constructor function is 
called with the specified arguments and this is bound to
the newly created object. If no explicit return value is
specified from the constructor. JavaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function
has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object
is returned.

*/


// Prototype


// let myname = "tanishq        "
// console.log(myname.length);
// console.log(myname.trim().length);
// console.log(myname.trueLength);



let hero = ["spider", "thor"]

let heroPower = {
  spider: "web",
  thor: "hammer",

  getSpider: function () {
    console.log(`spider power is ${this.spider}`);

  }

}

Object.prototype.tanishq = function () {
  console.log(`tnishq`);

}

Array.prototype.hitanishq = function () {
  console.log(`tanishq hi2`);
}

// heroPower.tanishq()
hero.hitanishq()
hero.tanishq()


// inheritance


// const user = {
//   name: "tanishq",
//   age: 20,
// }

// const teacher = {
//   make: true
// }

// const teaching = {
//   isAvail: false
// }

// const support = {
//   makeAssign: "js",
//   fullTime: true,
//   __proto__: teaching
// }

// teacher.__proto__ = user

// modern syntax 
// Object.setPrototypeOf(support, teacher)

let anotherUser = "tanishq    "

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length: ${this.trim().length}`);
}

anotherUser.trueLength()
"tanishq".trueLength()


