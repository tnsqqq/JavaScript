const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.filter( (num) => num > 4)

// const newNum = myNum.filter( (num) => {
//   return num > 4
// })


const newNum = []

myNum.forEach((num) => {
  if(num > 4) {
    newNum.push(num)
  }
});

// console.log(newNum);








//////////////////////// maps ////////////////////////



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)

// const newNums = myNums.map( (num) => { return num + 10 } )

const newNums = myNums
.map( (num) => num * 10 )
.map( (num) => num + 1 )
.filter( (num) => num >= 40)

// console.log(newNums);


const myNum2 = [1, 2, 3]

// const myTotal = myNum2.reduce(function(acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0)

const myTotal = myNum2.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [{
  itemName: "js course",
  price: 2999
},
{
  itemName: "py course",
  price: 999
},
{
  itemName: "dev course",
  price: 3999
},
{
  itemName: "ds course",
  price: 4999
}, 
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);