function fb(n) {
  if (n == 1 || n == 2) {
    return 1
  }
  return fb(n - 1) + fb(n - 2)
}

console.time('worker2')
var result = fb(42)
console.timeEnd('worker2')

self.postMessage(`worker2 => ${result}`)
