const { Server } = require('ws');
let ws = new Server({ port: "8889" }, () => {
  console.log("链接到8889");
})
var clients = [];
var sendToAll = (msg) => {
  for (let client of clients) {
    // console.log('qwe client.readyState', client.readyState)
    client.send(msg)
  }
}
setInterval(() => {
  sendToAll(new Date().toLocaleTimeString())
}, 6000);
ws.on('connection', (client,request) => {
  console.log("有一个游客进入，ip地址是%s", request.socket.remoteAddress);
  clients.push(client);
  client.on('message', (data) => {
    if (data.includes("黄")) {
      client.send("系统怀疑你在开车，已被踢出群聊")
      clients.splice(clients.indexOf(client), 1)
      client.close();
      sendToAll("有人开车，已被踢出群聊")
    } else {
      sendToAll(data)
    }

  })
  client.on("close", (client) => {
    // clients.splice(clients.indexOf(client),1)
    console.log("有一个游客离开", client);

  })
})