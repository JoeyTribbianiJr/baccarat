/**
 * 
 * file: data_operator.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Thursday, 8th February 2015 4:20:15 pm
 * -----
 * last modified: Thursday, 8th February 2015 4:20:15 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */

import Setting from './setting'

export default class DataOperator {

    KeyFunc = {
        xian: 0,
        he: 1,
        zhuang: 2,
        amount: 3,
        cancle: 4,
        hide: 5
    };

    //上分退分的按钮值
    score_span = [1, 10, 100, 500, 1000]


    //牌局相关参数
    gamming_setting = {
        game_num: 1000,    //总局数
        all_game_cards: [],     //所有局的扑克排列
        all_game_waybills: [],    //所有局的露单
        cur_game_cards: [],       //当前局的扑克排列
        cur_game_waybill: [],    //当前局的露单
        cur_round_idx: 1         //当前局进行到第几场
    }

    constructor() {

        this.setting = this.init_setting()

        this.player_lst = this.init_player_list(14, [13])

        this.keymap = this.init_key_map()
        console.log('data_op constructed!')
    }

    //本地读取设置，若第一次打开则new
    init_setting() {
        let local_setting = this.load_local_setting()
        return local_setting != null ? local_setting : new Setting()
    }
    load_local_setting() {
        return new Setting()
    }
    store_local_setting() {
    }

    //#region 数据初始化函数

    /**
     * 生成指定数目的玩家
     * 过度设计的典范
     * @param {number} count 玩家人数
     * @param {Array} exclude_numbers 排除的号码
     * @returns 
     * @memberof Game
     */
    init_player_list(p_count, exclude_numbers) {
        let p_lst = []
        let len = exclude_numbers.length
        for (var i = 1; i < p_count + len + 1; i++) {
            if (exclude_numbers.indexOf(i) != -1)
                continue;
            var player = new Player(i)
            p_lst.push(player);
        }
        return p_lst
    }
    get_p_idx(key) {
        for (var p_idx = 0; p_idx < 14; p_idx++) {
            var keys2player = this.setting.keymap[p_idx];
            var key_func_idx = keys2player.indexOf(key);
            if (key_func_idx == -1 && p_idx < 13) {
                continue;
            }
            else if (key_func_idx > -1) {
                // return new Array(items: [p_idx, key_func_idx])
                var arr = new Array(2)
                arr[0] = p_idx
                arr[1] = key_func_idx
                return arr
            }
            return [-1, -1]
        }
    }
    userBet(key) {
        //从映射表获取按键对应的用户和功能
        var player_func = this.get_p_idx(key);

        var p_idx = player_func[0];
        // alert(player_func)
        var func_idx = player_func[1];
        var player = this.Player.players[p_idx];
        if (p_idx == -1 || func_idx == -1) {
            return;
        }

        switch (func_idx) {
            //押注：增加本轮押注金额
            case this.KeyFunc.zhuang:
            case this.KeyFunc.xian:
            case this.KeyFunc.he: {
                var add_score = player.score >= player.bet_amount ? player.bet_amount : player.score
                player.score -= add_score
                player.bet_score[func_idx] += add_score
                break
            }
            //修改每次押注金额
            case this.KeyFunc.amount: {
                player.bet_amount = player.bet_amount == 10 ? 100 : 10;
                break;
            }
            //取消所有押注
            case this.KeyFunc.cancle: {
                var cancle_score = player.bet_score.reduce(function (pre_value, value) {
                    return pre_value + value
                })
                player.score += cancle_score
                player.bet_score = [0, 0, 0]
                break;
            }
            //是否隐藏压了哪家
            case this.KeyFunc.hide: {
                player.hide = player.hide == true ? false : true;
                break;
            }
        }

        this.drawBetChip(player);
    }

    //回调函数列表
    get_evt_map() {
        let map = new Map()
        map.set("login", this.login)
        return map
    }

    login() {
        alert('接收到login事件！')
        this.svr_socket.client.emit('login', '服务器返回login值')
    }
    //#endregion

}