// Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.

let n = 100
for (let i = 1, msg; i < n; i++, msg = '') {
    if (!(i % 3)) { msg += 'Fizz' }
    if (!(i % 5)) { msg += 'Buzz' }
    console.log(msg || i)
}
