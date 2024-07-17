class Promise {
  // Promise 等待态（初始状态）
  static PENDING = 'pending'
  // Promise 失败态
  static REJECTED = 'rejected'
  // Promise 成功态
  static FULFILLED = 'fulfilled'

  constructor(executor) {
    // 初始化 Promise 初始状态
    this.status = Promise.PENDING
    // 定义 Promise 成功的值
    this.value = undefined
    // 定义 Promise 失败的原因
    this.reason = undefined
    this.fulfilled = undefined
    this.rejected = undefined
    // 定义 resolve 函数
    const resolve = (value) => {
      if (this.status === Promise.PENDING) {
        this.status = Promise.FULFILLED
        this.value = value
        this.then()
      }
    }
    // 定义 reject 函数
    const reject = (reason) => {
      if (this.status === Promise.PENDING) {
        this.status = Promise.REJECTED
        this.reason = reason
        this.then()
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    this.fulfilled ||= onFulfilled
    this.rejected ||= onRejected
    onFulfilled ||= this.fulfilled
    onFulfilled ||= this.rejected
    if (this.status === Promise.FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === Promise.REJECTED) {
      onRejected(this.reason)
    }
  }
}

module.exports = Promise
