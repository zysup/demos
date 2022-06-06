function fb(n) {
  if (n == 1 || n == 2) {
    return 1
  }
  return fb(n - 1) + fb(n - 2)
}

console.time('worker1')
var result = fb(41)
console.timeEnd('worker1')

self.postMessage(`worker1 => ${result}`)