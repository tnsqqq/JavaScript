// singleton 

// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Tanishq",
  "full name": "tanishq baliyan",
  [mySym]: "mykey1",
  email: "tnsqqq@gmail.com",
  age: 19,
  location: "Chandigarh",
  islog: false,
  last: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])

jsUser.email = "chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "micro.com"
// console.log(jsUser);


jsUser.greeting = function(){
  console.log("hello");
}


jsUser.greeting = function(){
  console.log(`hello, ${this.name}`);
}


console.log(jsUser.greeting());




