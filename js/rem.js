;(function (doc, win) {
  var docEl = doc.documentElement,
    // resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      console.log(clientWidth)
      if (clientWidth > 414) {
        docEl.style.fontSize = '100px'
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
      }
    }
  if (!doc.addEventListener) return
  // win.addEventListener(resizeEvt, recalc, false);
  win.addEventListener('resize', recalc, false)
  if (doc.readyState === 'loading') {
    // 此时加载尚未完成
    doc.addEventListener('DOMContentLoaded', recalc, false)
  } else {
    // 此时`DOMContentLoaded` 已经被触发
    recalc()
  }
})(document, window)
