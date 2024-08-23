const promise1 = new Promise(function (resolve, reject) {
  // Do async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log('Async task is complete');
    resolve()
  }, 1000)
})

promise1.then(function () {
  console.log('Promise is resolved')
})


new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2');
    resolve()


  }, 1000)
}).then(function () {
  console.log('Async 2 is resolved')
})


const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "tani", email: "tnsq" })
  }, 1000)
})

promise3.then(function (user) {
  console.log(user)
})


const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    // let error = false
    if (!error) {
      resolve({ username: "tanishq", email: "tnsqqq" })
    } else {
      reject("Error")
    }
  }, 1000)
})

promise4.then((user) => {
  console.log(user)
  return user.username
}).then((username) => {
  console.log(username);
}).catch(function (error) {
  console.log(error)
}).finally(() => {
  console.log('Finally')
})







const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    if (!error) {
      resolve({ username: "t", pass: "123" })
    } else {
      reject("Error")
    }
  }, 1000)
})

async function consumePromise() {
  // const response = await promise5
  // console.log(response)

  try {
    const response = await promise5
    console.log(response)
  } catch (error) {
    console.log(error);

  }
}

consumePromise()



// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);

//     const data = await response.json()
//     console.log(data);

//   } catch (error) {
//     console.log("E: ", error);

//   }

// }



// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error);
  })