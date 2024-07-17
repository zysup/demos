// https://blog.csdn.net/m0_56698268/article/details/129815340

const myPromise = require('./promise')

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 3000)
})
console.log('qwe', promise)
promise.then(
  (value) => {
    console.log('promise success:', value)
  },
  (reason) => {
    console.log('promise fail:', reason)
  }
)
