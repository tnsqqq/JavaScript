// for 

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }



// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   // console.log(element);

//   if (element == 5) {
//     console.log("5 is best");
//   }
//   // console.log(element);
// }




// for (let i = 0; i <=10; i++){
//   // console.log(`outer loop val: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`inner loop value ${j} and ${i}`);
//     // console.log(i + '*' + j + ' = ' + i*j );
// }
// }


// let myArray = ["flash", "batman", "superman"]
// // console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   // console.log(element);
// }



// break and continue


for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    // console.log(`Detected 5`);
    // break;
    continue;
  }

  // console.log(`Value of i is ${index}`);
}


// while 


// let i=0
// while (i<=10) {
//   // console.log(`i: ${i}`);
//   // i++;
//   i+=2;
// }


// let myArray = ['1', '2', '3']
// let arr = 0;
// while(arr<myArray.length){
//   console.log(myArray[arr]);
//   arr=arr+1;
// }

// let score = 11;
// do{
//   console.log(`score is ${score}`);
//   score++
// } while (score<=10);




// for of 


// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//  console.log(num); 
// }












// const greet = "helo"
// for (const greets of greet) {
//   console.log(greets);
// }







// Maps 

// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "America")
// map.set('IN', "India")

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, '-->', value);
// }

// const myObj = {
//   'game1': 'NFS',
//   'game2': 'GTA',
// }

// for (const [key, value] of myObj) {
//  console.log(key, '-->', value); 
// }


// const myObj = {
//   js: 'javascript',
//   cpp: 'C++',
//   rb: 'Ruby',
//   swift: 'swift by apple'
// }

// for (const key in myObj) {
//  console.log(`${key} shortcut is for ${myObj[key]}`); 
// }

// const prog = ["js", "cpp", "java"]
// for(const key in prog){
//   // console.log(key);
//   console.log(prog[key]);
// }










// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "America")
// map.set('IN', "India")

// for(const key in map){
//   console.log(key);
// }


// for each


const coding = ["js", "ruby", "java"]

// coding.forEach( function (item) {
//   console.log(val); 
// })


// coding.forEach( (item) => {
//   console.log(item);
// })


// function printMe(item){
//   console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
// })



const myCode = [
  {
    langName: "javascript",
    name: "js"
  },
  {
    langName: "java",
    name: "java"
  },
  {
    langName: "python",
    name: "py"
  }
]


myCode.forEach((item) => {
  console.log(item.langName, item.name);
})
