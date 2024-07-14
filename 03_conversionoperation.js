// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "tanishq"

console.log(typeof score);
console.log(typeof(score)); 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
let isLoggedIn = "tanishq"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false;
// "" => false
// "tanishq" => true


let n = 33

let stringNumber = String(n)
console.log(stringNumber);
console.log(typeof stringNumber);


// Operations ******************************************


let value = 3
let neg = -value
console.log(neg);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);


let str1 = "tanishq"
let str2 = " hello"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let n1, n2, n3

n1 = n2 = n3 = 2 + 2

let gamecounter = 100
// gamecounter++;
++gamecounter;
console.log(gamecounter);