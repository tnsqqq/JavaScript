
// var c = 300

let a = 300

if (true) {
  let a = 10
  const b = 20
  // console.log("INNER: ", a);
  // var c = 30
  // c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
  const username = "tanishq"

  function two(){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);

  two()
}

// one()

if (true) {
  const username = "tanishq"
  if (username === "tanishq") {
    const website = " youtube"
    // console.log(username + website);
  }

  // console.log(website);
}

// console.log(username);



// ********************************************************


console.log(addone(5))
function addone(num){

  return num + 1

}


addTwo(5)
const addTwo = function(num){
  return num + 2
}

