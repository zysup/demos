function fb(n) {
  if (n == 1 || n == 2) {
    return 1
  }
  return fb(n - 1) + fb(n - 2)
}

console.time('worker3')
var result = fb(43)
console.timeEnd('worker3')

self.postMessage(`worker3 => ${result}`)
