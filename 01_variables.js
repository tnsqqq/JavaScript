// var, const, let assign in memory
// const- can not change
// let- 

// 2 ways to declare variable in js- 1. let -----> prblm of scope is solved
//                                   2. var

// prefer not to use var -----> cuz of issue in block scope and functional scope


const accountId = 2310991347
let accountEmail = "hitesh@google.com"
var accountPassword = "1234"
accounCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2345"
accounCity = "germany"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accounCity, accountState]);