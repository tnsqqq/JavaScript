const userEmail = "tanishq.ai"

if(userEmail){
  console.log("got user email");
} else {
  console.log("no user email");
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values 
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("obj is empty");
}

// Nullish Coalescing Operator (??)


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1); // 5


// Terniary Operator

// condition ? true : false.

const ice = 100
ice >= 80 ? console.log("less than 80") : console.log("more than 80");
