// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myDate2 = new Date(2023, 0, 23)
// let myDate2 = new Date(2023, 0, 23, 3)
// let myDate2 = new Date("2023-01-14")
// console.log(myDate2.toDateString());
let myDate2 = new Date("01-14-2023")
// console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
  weekday: "long",
  // timeZone: ''
})