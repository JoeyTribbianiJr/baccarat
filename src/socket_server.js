//@ts-check

/**
 * 
 * file: app.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Wednesday, 7th February 2015 10:01:05 am
 * -----
 * last modified: Wednesday, 7th February 2015 10:01:06 am
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */
import WebSocket from 'ws'

class SocketServer {

    /**
     * @property {WebSocket} client
     * @property {Map} usr_evt_lst
     * @memberof SocketServer
     */
    client
    usr_evt_lst
    /**
     * Creates an instance of SocketServer.
     * @memberof SocketServer
     */
    constructor({ port = 54322, usr_evt_lst = new Map() }) {
        this.port = port
        this.usr_evt_lst = usr_evt_lst

        // 导入WebSocket模块:
        // const WebSocket = require('ws');
        // 引用Server类:
        const WebSocketServer = WebSocket.Server;
        // 实例化:客户端端口要设置成相同，免去验证
        const ws_svr = new WebSocketServer({
            port: port,
            // host: 'ws://localhost/aqing'
        });

        ws_svr.on('connection', function (ws) {
            this.client = ws
            alert('new connection founded successfully')
            ws.on('message', function (message) {
                alert(message)
                ws.send(`ECHO: ${message}`, (err) => {
                    if (err) {
                        console.log(`[SERVER] error: ${err}`);
                    }
                });
            })

            ws.on('close', function () {
                alert('closed!')
            })
            this.addUserEvents()
        });
    }

    addUserEvents() {
        if (this.usr_evt_lst != null) {
            for (let evt_cb of this.usr_evt_lst.entries) {
                let { evt, callback } = evt_cb
                this.client.on(evt, callback)
            }
        }
    }
}
export default SocketServer