/**
 * 是否为空对象
 * @param {Object} obj
 * @return {boolean}
 */
export function isEmptyObject(obj) {
  return (obj && Object.keys(obj).length === 0 && obj.constructor === Object) || false
}

/**
 * 是否为空对象，这个方法不严谨,JSON.stringify 会过滤掉 undefined
 *
 * eg: let bb = {cc: undefined} 会被返回true
 * @param {object}
 * @returns {boolean}
 */
// export function isObjectEmpty(obj) {
//   return (
//     Object.prototype.toString.call(obj) === '[object Object]' &&
//     JSON.stringify(obj) === '{}'
//   );
// }

/**
 * 加法，用于解决浮点数误差
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}
 */
export function floatAdd(arg1, arg2) {
  let r1, r2, m, c
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  if (c > 0) {
    let cm = Math.pow(10, c)
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''))
      arg2 = Number(arg2.toString().replace('.', '')) * cm
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm
      arg2 = Number(arg2.toString().replace('.', ''))
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''))
    arg2 = Number(arg2.toString().replace('.', ''))
  }
  return (arg1 + arg2) / m
}
Number.prototype.floatAdd = function (arg) {
  return floatAdd(this, arg)
}

/**
 * 减法，用于解决浮点数误差
 * @param {number} arg1 被减数
 * @param {number} arg2 减数
 * @returns {number}
 */
export function floatSub(arg1, arg2) {
  let r1, r2, m, n, x
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2)) //last modify by deeka //动态控制精度长度
  n = r1 >= r2 ? r1 : r2
  x = ((arg1 * m - arg2 * m) / m).toFixed(n)
  return Number(x)
}
Number.prototype.floatSub = function (arg) {
  return floatSub(this, arg)
}

/**
 * 乘法，用于解决浮点数误差
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}
 */
export function floatMul(arg1, arg2) {
  let m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}
Number.prototype.floatMul = function (arg) {
  return floatMul(this, arg)
}
/**
 * 除法，用于解决浮点数误差
 * @param {number} arg1 被除数
 * @param {number} arg2 除数
 * @returns {number}
 */
export function floatDiv(arg1, arg2) {
  let t1 = 0,
    t2 = 0,
    r1,
    r2
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) {}
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) {}
  r1 = Number(arg1.toString().replace('.', ''))
  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
Number.prototype.floatDiv = function (arg) {
  return floatDiv(this, arg)
}

/**
 * 返回随机字符串
 * @returns {string}
 */
export function randomString() {
  return Math.random().toString(36).slice(2)
}

/**
 * 页面垂直平滑滚动到指定滚动高度
 * @param {number} position
 */
export function scrollSmoothTo(position) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      return setTimeout(callback, 17)
    }
  }
  // 当前滚动高度
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset
  // 滚动step方法
  let step = function () {
    // 距离目标滚动距离
    let distance = position - scrollTop
    // 目标滚动位置
    scrollTop = scrollTop + distance / 5
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, position)
    } else {
      window.scrollTo(0, scrollTop)
      requestAnimationFrame(step)
    }
  }
  step()
}

/**
 * 防抖函数
 * @param {function} func 要进行处理的函数
 * @param {number} wait 等待时间,默认500ms
 * @param {boolean} immediate 是否立即执行
 */
export function debounce(func, wait = 500, immediate = false) {
  let timeout
  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过就不再执行
      let callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * 节流函数
 * @param {function} func 要进行处理的函数
 * @param {number} wait 等待时间,默认500ms
 * @param {object} options 配置对象 
 * @description
  leading-false，trailing-true：默认情况，即在延时结束后才会调用函数  
  leading-true，trailing-true：在延时开始时就调用，延时结束后也会调用  
  leading-true, trailing-false：只在延时开始时调用
 */
export function throttle(func, wait = 500, options = null) {
  let timeout, context, args
  let previous = 0
  if (!options) options = { leading: false, trailing: true }

  let later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  let throttled = function () {
    let now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}

/**
 * 休眠xxxms
 * @param {number} 等待时间
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * 深拷贝
 * @param {object | array} obj 源数据
 */
export function deepCopy(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  if (obj === null) {
    return null
  }
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 
 * @param {number} timeStamp 毫秒级时间戳
 * @param {string} fmt 输出的时间字符串格式
 * @returns {string}
 * @description
  月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q)可以用1-2个占位符  
  年(y)可以用1-4个占位符，毫秒(S)只能用1个占位符  
  eg：  
  yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423  
  yyyy-M-d h:m:s.S" ==> 2006-7-2 8:9:4.18
 */
export function formatDate(timeStamp, fmt) {
  const date = new Date(+timeStamp)
  if (!timeStamp || !date || !fmt) return ''
  const o = {
    'M+': date.getMonth() + 1, // 月
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
  }
  return fmt
}
Date.prototype.formatDate = function (fmt) {
  return formatDate(this.getTime(), fmt)
}

/**
 * url查询字符串转对象
 * @param {string} search url查询字符串
 * @returns {object}
 */
export function getUrlSearchParams(search) {
  let obj = {}
  try {
    search = search.match(/\?([^#]+)/)[1]
    const arr = search.split('&')
    for (const item of arr) {
      const subArr = item.split('=')
      const key = decodeURIComponent(subArr[0])
      const value = decodeURIComponent(subArr[1])
      obj[key] = value
    }
    return obj
  } catch (e) {
    return obj
  }
}

/**
 * 休眠xxxms
 * @param {time} number 延迟多少毫秒
 */
export function dely(time) {
  const start = Date.now()
  while (Date.now() - start < time) {}
}

export default {
  isEmptyObject,
  floatAdd,
  floatSub,
  floatMul,
  floatDiv,
  scrollSmoothTo,
  debounce,
  throttle,
  sleep,
  dely,
  deepCopy,
  formatDate,
  getUrlSearchParams,
}
