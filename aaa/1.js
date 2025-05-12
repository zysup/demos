class Foo {
  static ccc = 123
  static classMethod() {
    console.log(this)
    return console.log('hello')
  }
  aaa = 999
  classMethod() {
    console.log(this, this.constructor)
    return console.log('hello123')
  }
}

Object.assign(Foo.prototype, {
  classMethod() {
    console.log('hello123123', this.classMethod())
  },
  qwe: 123,
})
console.log('qwe', new Foo())

class Bar extends Foo {
  constructor() {
    super()
    // console.log(this.constructor)
  }
  static ccc = 1
  ccc = 2
  static classMethod() {
    console.log(1)
    super.classMethod()
  }
  classMethod() {
    console.log(2, this.hasOwnProperty('aaa'))
    // console.log( super)
    // super.classMethod()
    return '9999'
  }
}

// Bar.classMethod() // "hello, too"
const bar = new Bar()
bar.classMethod()
// console.log(bar, typeof bar, bar.hasOwnProperty('aaa'))
// console.log('qwe', bar.constructor, Bar.prototype)

// class Foo123 {
//   #privateValue
//   #abc() {
//     console.log(123)
//   }
//   static getPrivateValue(foo) {
//     return foo.#privateValue
//   }
// }

// const avt = Foo123.getPrivateValue(new Foo123()) // 42
// console.log(avt)

// let abc = new Foo123()
// console.log(abc.#privateValue)

// class Logger {
//   printName(name = 'there') {
//     this.print(`Hello ${name}`)
//   }

//   print(text) {
//     console.log(text)
//   }
// }

// const logger = new Logger()
// console.log('qwe', logger)
// const { printName } = logger
// console.log('qwe', printName)

// // printName() // TypeError: Cannot read property 'print' of undefined

// const aaabc = {}

// Object.setPrototypeOf(aaabc, { a: 1 })

// const { a } = aaabc
// console.log(a, aaabc)

class A {
  static hello() {
    console.log('hello world')
  }
}

class B extends A {}

B.hello() // hello world

console.log(A.hasOwnProperty('hello'), B.hasOwnProperty('hello'), 'hello' in A, 'hello' in B) // true false
console.log('qwe', process.cwd(), __dirname, __filename)
