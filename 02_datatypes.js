"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

let name = "tanishq"
let age = 19
let islog = false
let state;


// number -----> 2 to power 53
// bigint 
// string -----> ""
// boolean ----> true/false
// null -------> standalone value // empty value
// undefined --> value not assigned
// symbol -----> unique


// object 

console.log(typeof "tanishq");
console.log(typeof age);
console.log(typeof null); // object
console.log(typeof undefined); // undefined


// Primitive

// 7 types: String, Number, Boolean, null, undefined, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const Temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const big = 12345678998765432n


// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["spiderman", "superman"]
let myObj = {
  name: "tanishq",
  age: 19,
}


const myfunction = function(){
  console.log("hello");
}

console.log(typeof big);
console.log(typeof heros);
console.log(typeof anotherId);




// Stack (Primitive), Heap (Non-Primitive)

let myYou = "tanishq"

let anothername = myYou
anothername = "tanshii"

console.log(myYou);
console.log(anothername);


let userOne = {
  email: "tnsqqqbaliyan@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tnsq@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);