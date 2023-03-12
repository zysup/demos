
/**
 * 是否为空对象
 * @param {object} obj  
 * @return {boolean}
*/
function isEmptyObject(obj) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object || false;
}

/**
 * 是否为空对象，这个方法不严谨,JSON.stringify 会过滤掉 undefined
 * 
 * eg: let bb = {cc: undefined} 会被返回true
 * @param {object}
 * @returns {boolean}
*/
function isObjectEmpty(obj) {
  return (
    Object.prototype.toString.call(obj) === '[object Object]' &&
    JSON.stringify(obj) === '{}'
  );
}

/**
 * 加法，用于解决浮点数误差
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns {number}
 */
function floatAdd(arg1, arg2) {
  let r1, r2, m, c;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    let cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", "")) * cm;
    } else {
      arg1 = Number(arg1.toString().replace(".", "")) * cm;
      arg2 = Number(arg2.toString().replace(".", ""));
    }
  } else {
    arg1 = Number(arg1.toString().replace(".", ""));
    arg2 = Number(arg2.toString().replace(".", ""));
  }
  return (arg1 + arg2) / m;
}
Number.prototype.floatAdd = function (arg) {
  return floatAdd(this, arg);
};

/**
 * 减法，用于解决浮点数误差
 * @param {number} arg1 被减数
 * @param {number} arg2 减数
 * @returns {number}
 */
function floatSub(arg1, arg2) {
  let r1, r2, m, n, x;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  x = ((arg1 * m - arg2 * m) / m).toFixed(n)
  return Number(x);
}
Number.prototype.floatSub = function (arg) {
  return floatSub(this, arg);
};

/**
 * 乘法，用于解决浮点数误差
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns {number}
 */
function floatMul(arg1, arg2) {
  let m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) { }
  try {
    m += s2.split(".")[1].length;
  } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
Number.prototype.floatMul = function (arg) {
  return floatMul(this, arg);
};
/**
 * 除法，用于解决浮点数误差
 * @param {number} arg1 被除数
 * @param {number} arg2 除数
 * @returns {number}
 */
function floatDiv(arg1, arg2) {
  let t1 = 0, t2 = 0, r1, r2;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) { }
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) { }
  with (Math) {
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * pow(10, t2 - t1);
  }
}
Number.prototype.floatDiv = function (arg) {
  return floatDiv(this, arg);
};

/**
 * 返回随机字符串
 * @returns {string}
 */
function randomString() {
  return Math.random().toString(36).slice(2)
}

/**
 * 页面垂直平滑滚动到指定滚动高度
 * @param {number} position 
 */
function scrollSmoothTo(position) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      return setTimeout(callback, 17);
    };
  }
  // 当前滚动高度
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  // 滚动step方法
  let step = function () {
    // 距离目标滚动距离
    let distance = position - scrollTop;
    // 目标滚动位置
    scrollTop = scrollTop + distance / 5;
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, position);
    } else {
      window.scrollTo(0, scrollTop);
      requestAnimationFrame(step);
    }
  };
  step();
};






















