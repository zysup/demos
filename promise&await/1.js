// 同一页面三个组件请求同一个 API 发送了三次请求，如何优化
const fetchUser = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Fetch: ', id)
      resolve(id)
    }, 5000)
  })
}

const cache = {}
const cacheFetchUser = id => {
  console.log('qwe 1')
  if (cache[id]) {
    return cache[id]
  }
  console.log('qwe ')
  cache[id] = fetchUser(id)
  console.log('qwe 2')
  return cache[id]
}

cacheFetchUser(3).then(id => console.log(id))
cacheFetchUser(3).then(id => console.log(id))
cacheFetchUser(3).then(id => console.log(id))
