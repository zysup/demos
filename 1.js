function delay(time = 1000) {
  let now = Date.now()
  while (Date.now() - now < time) {}
}
console.log('1.js')
delay()