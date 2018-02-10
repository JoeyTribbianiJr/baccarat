/**
 * 
 * file: server.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Thursday, 8th February 2015 10:59:50 pm
 * -----
 * last modified: Thursday, 8th February 2015 10:59:50 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */// import WebSocket from 'ws'
var WebSocket = require('ws')
const WebSocketServer = WebSocket.Server;
// 实例化:客户端端口要设置成相同，免去验证
const ws_svr = new WebSocketServer({
    port: 2014,
    // host: 'ws://localhost/aqing'
});

ws_svr.on('connection', function (ws) {
    this.client = ws
    // alert('new connection founded successfully')
    ws.on('message', function (message) {
        console.log(message)
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
    ws.on('login', () => {
        console.log('receive login event');
        ws.send('logined')
    })

    ws.on('close', function () {
        // alert('closed!')
    })
    //  this.addUserEvents()
});

