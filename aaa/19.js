let Greeter = (function () {
  function Greeter(message) {
    console.log(this)
    this.greeting = message
  }
  Greeter.prototype.greet = function () {
    return 'Hello, ' + this.greeting
  }
  return Greeter
})()

let greeter
greeter = new Greeter('world')
console.log(greeter.greet())
export default 666
