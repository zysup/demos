const fs = require('fs')

let jsonSouoce = { c: 3, B: 2, b:2, a: 1, cc: { bbb: 222, bab: 212, ccc: 333, AAA: 111, ddd: [1, 2, 3] }, AA: {}, bb: {}, ba: {}, d: [3, 2, 1] }

function sort1(obj) {
  let resObj = {}
  let arr = Object.keys(obj).sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1
    } else {
      return 1
    }
  })
  for (const i of arr) {
    resObj[i] = obj[i]
  }
  return resObj
}

function sort2(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      let item = obj[key]
      if (Object.prototype.toString.call(item) === '[object Object]' && Object.keys(item).length) {
        obj[key] = sort1(item)
        sort2(item)
      }
    }
  }
}
let obj = sort1(jsonSouoce)
sort2(obj)
let output = 'export default ' + JSON.stringify(obj, null, 2)

fs.writeFile('./output-obj.js', output, (err) => {
  if (err) {
    console.log(err)
  }
})


