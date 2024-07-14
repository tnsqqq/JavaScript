// Immediately Invoked Function Expression (IIFE)

(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( function tanishq() {
  console.log(`DB CONNECTED TWO`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('tanishq')

