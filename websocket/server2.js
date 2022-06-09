const { Server } = require('ws');

function heartbeat(data) {
  console.log('qwe heartbeat', data.toString())
  this.isAlive = true;
}

const wss = new Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('qwe connection...',)
  ws.isAlive = true;
  ws.on('pong', heartbeat);
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) {
      console.log('关闭连接！')
      return ws.terminate();
    }

    ws.isAlive = false;
    ws.ping(new Date().toLocaleTimeString(), null, (err) => {
      console.log('qwe err', err)
    });
  });
}, 3000);

wss.on('close', function close() {
  console.log('qwe close',)
  clearInterval(interval);
});