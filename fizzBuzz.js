// this program console logs the numbers
// from 1 to n. But for multiples of three prints
// “Fizz” instead of the number and for the multiples
// of five prints “Buzz”. For numbers which are multiples
// of both three and five prints “Fizz Buzz”.

var fizzBuzz = function(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('Fizz');
    } else if (i % 5 === 0) {
      // Is the number a multiple of 5?
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

  // return something otherwise when this function is run from command line it will print undefined
  return ''; 
}

module.exports = fizzBuzz;
require('make-runnable/custom')({
    printOutputFrame: false
})
