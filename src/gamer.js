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
import UIOperator from './ui/ui_operator'
import Server from './socket_server'
import Setting from './setting'


class Game {

    svr_socket = new Server()
    data_operator
    ui_operator

    //游戏数据

    constructor() {
        this.setting = new Setting()

        //初始化UI
        let ui_op = new UIOperator()

        //游戏数据管理类
        this.data_operator = new DataOperator(this.setting)

        //开启socket，监听后台连接
        let usr_evt_lst = this.get_evt_map()
        this.svr_socket = new Server({
            port: 54322,
            usr_evt_lst: usr_evt_lst
        })
    }

}

var game = new Game()
