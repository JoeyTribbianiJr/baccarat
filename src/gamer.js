//@ts-check
/**
 * 
 * file: gamer.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Wednesday, 7th February 2015 3:39:40 pm
 * -----
 * last modified: Wednesday, 7th February 2015 3:39:40 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */
import UIOperator from './ui_operator'
import Server from './socket_server'
import DataOperator from './data_operator'

console.log('hehe')
const SETTING_FILE_PATH = ''
export class Game {

    //游戏数据

    constructor() {

        console.log('new game')
        //游戏数据管理类
        this.data_operator = new DataOperator()

        //初始化UI
        this.ui_op = new UIOperator(this.data_operator)

        //开启socket，监听后台连接
        let usr_evt_lst = this.data_operator.get_evt_map()
        this.svr_socket = new Server({
            port: this.data_operator.setting.app_params.server_port,
            usr_evt_lst: usr_evt_lst
        })

    }
}
(function () {
    new Game()
})()
