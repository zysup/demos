// exports.aaa = 123
// exports.bbb = 'hello'

export const aaa = 123
export const bbb = 'hello'

// console.log(import.meta)
let resolve = import.meta.resolve('./1.js')
console.log('resolve', resolve)
console.log('this', this, globalThis, this)