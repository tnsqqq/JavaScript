const name = "tanishq"
const repoCount = 50

// console.log(name + repoCount);

console.log(`hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('tanishq-ta-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));



const newName = gameName.substring(0, 4);
console.log(newName); 


// const anotherString = gameName.slice(0, 4);
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  tanishq  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://tanishq.com"

console.log(url.replace('com', '-'));

console.log(url.includes('tani'));

console.log(gameName.split('-'));