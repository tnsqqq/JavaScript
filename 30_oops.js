// javascript and classes

// js does not have oops

// OOP

// object

// - collection of properties and methods
// - toLowerCase

// why use OOP - make code readable

// parts of OOP
// object literal

// - Constructor function
// - Prototypes
// - Classes
// - Instances (new, this)


// 4 pillars-

// Abstraction
// Encapsulation
// Inheritance
// Polymorphism



const user = {
  username: "tani",
  login: 8,
  signedIn: true,

  getUser: function () {
    // console.log("got");
    // console.log(`username: ${this.username}`);
    console.log(this);
  }
}

// console.log(user.username);
// console.log(user.getUser());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  this.greet = function(){
    console.log(`Hello, ${this.username}!`)
  }

  return this
}

const userOne = new User("tanishq", 12, true)
const userTwo = new User("tanishq", 11, false)
console.log(userOne.constructor);

console.log(userOne);
console.log(userTwo);
