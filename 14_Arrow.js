const user = {
  username: "tanishq",
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//   let username = "tanishq"
//   console.log(this.username);
// }

// chai()


// const chai = function () {
//   let username = "tanishq"
//   console.log(this.username);
// }
// chai()


const chai = () => {
  let username = "tanishq"
  // console.log(this);
}
// chai()


// const add = (n1, n2) => {
//   return n1 + n2
// }

// console.log(add(3, 4))


// const add = (n1, n2) => n1 + n2

// const add = (n1, n2) => (n1 + n2)

// console.log(add(3, 4));


const add = (n1, n2) => ({username: "tanishq"}) 

console.log(add(3, 4));

// const myArray = [2,3,4,5]

// myArray.forEach()






