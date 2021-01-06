const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const records = require('./records.js');
const hostname = '10.28.109.66';
const port = 3000;

// 線上人數
let onlineCount = 0;

//掛載的頁面
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/view/index.html');
});

// 連線時
io.on('connection', (socket) => {
  onlineCount++;

  io.emit("online", onlineCount);

  socket.emit("maxRecord", records.getMax());
  socket.emit("chatRecord", records.get()); 

  socket.on("greet", () => {
    socket.emit("greet", onlineCount);
  });

  socket.on('disconnect', () => {
    onlineCount = (onlineCount < 0) ? 0 : (onlineCount = onlineCount - 1);
    io.emit("online", onlineCount);
  });

  socket.on("send", (msg) => {
    records.push(msg);
  });
});

records.on("new_message", (msg) => {
  io.emit("msg", msg);
});

// 注意，這邊的 server 原本是 app
server.listen(port, hostname, () => {
  console.log(`聊天室跑起來 http://${hostname}:${port}/`);
});