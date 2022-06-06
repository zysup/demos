
var bb = {
  cc: undefined,
}
/**
 * 这个方法不严谨
 * @param {*} value 任何值 
 * @return {boolean} 
 */
function isObjectEmpty(value) {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    JSON.stringify(value) === '{}'
  );
}

function isEmptyObject(value) {
  return value && Object.keys(value).length === 0 && value.constructor === Object || false;
}

let flag = isEmptyObject(bb)
flag = isObjectEmpty(bb)
console.log(flag)