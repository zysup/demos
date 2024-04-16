// https://blog.csdn.net/m0_56698268/article/details/129815340

const myPromise = require('./promise')

const promise = new myPromise((resolve, reject) => {
  resolve('ok')
});
promise.then((value) => {
  console.log("promise success:", value);
}, (reason) => {
  console.log("promise fail:", reason);
})