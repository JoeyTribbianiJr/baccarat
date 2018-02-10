/**
 * 
 * file: client.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Wednesday, 7th February 2015 10:18:19 am
 * -----
 * last modified: Wednesday, 7th February 2015 10:18:19 am
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */
const WebSocket = require('ws')


let ws = new WebSocket('ws://localhost:2014');
// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
    console.log(`open`);

    ws.send('Hello!');
});
// 响应收到的消息:
ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);
})
ws.emit('login', 'pls login')