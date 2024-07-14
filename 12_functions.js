

function say(){
console.log("t");
console.log("a");
console.log("n");
console.log("i");
}

// say()

function add(n1, n2){
  console.log(n1 + n2);;
}

function add(n1, n2){
  // let result = n1 + n2;
  // console.log("Tanishq");
  // return result;

  return n1 + n2
}

add(3, 4)
add(3, "4")
add(3, "a")

const result = add(3, 5)
// console.log("Result: ", result);


function login(username = "tan"){
  if(username === undefined){   //if(!username)
    console.log("please enter a username");
    return
  }
  return `${username} just logged`
}

// console.log(login("tanishq"));
// console.log(login());


function calculateCartPrice(val1, val2, ...num1){
  return num1

}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "tanishq",
  price: 199
}

function handle(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handle(user)

handle({
  username: "tanishq",
  price: 999
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
