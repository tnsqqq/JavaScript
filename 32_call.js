function SetUsername(username) {
  // complex DB calls
  this.username = username
  console.log("called");

}

function createUser(username, email, password) {
  SetUsername.call(this, username)

  this.email = email
  this.password = password
}

const tnsq = new createUser("chai", "tn@.com", "123")
console.log(tnsq);
