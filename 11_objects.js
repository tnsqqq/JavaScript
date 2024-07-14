// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Alex"
tinderUser.age = 28

// console.log(tinderUser);


const regularUser = {
  email: "tnsq@gmail.com",
  fullname: {
    userFullname: {
    firstname: "tanishq",
    lastname: "baliyan"
  }
}
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}4
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)   

// Object.assign() --->  

//  method that copies all enumerable
//  own properties from one or more source 
//  objects to a target object. It will return the target object.

//  {} --> target, obj1,2,4 --> source
                           

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
  {
    id: 1,
    email: "@gmail.com"
  }
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('age'));

const course = {
  coursename: "js",
  price: "999",
  courseInst: "tanishq"
}

// course.courseInst

const {courseInst: instructor} = course
// console.log(courseInst);
console.log(instructor);


// const navbar = ({company}) => {

// }

// navbar(company = "tanishq")



// {
//   "name": "tanishq",
//   "coursename": "js",
//   "price": "free",
// }


[
  {},
  {},
  {}
]