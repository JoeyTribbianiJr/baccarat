import { debug } from "util";

//@ts-check
/**
 * 
 * file: settings.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Wednesday, 7th February 2015 3:43:39 pm
 * -----
 * last modified: Wednesday, 7th February 2015 3:43:39 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */
const SETTING_FILE_PATH = ''

class MenuItem {
    constructor({ type, desc, value, values }) {
        //0:数字 1:文字
        this.type = type
        //显示在菜单上的描述
        this.desc = desc
        //0类型中描述后面跟的数字,1类型中选定的值索引
        this.value = value
        //item的所有可选值
        this.values = values
    }
}

let menu_items_arr = [...menu_items_map]

class Setting {
    //后台菜单项
    back_setting_items

    //牌局相关设置
    gamming_setting

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

    constructor() {
        let local_setting = this.read_form_file()
        this.this = local_setting
        this.init_back_setting()
        this.init_gamming_setting()
    }

    init_gamming_setting() {
        this.gamming_setting = {
            game_num: 1000,    //总局数
            all_game_cards: [],     //所有局的扑克排列
            all_game_waybills: [],    //所有局的露单
            cur_game_cards: [],       //当前局的扑克排列
            cur_game_waybill: [],    //当前局的露单
            cur_round_idx: 1         //当前局进行到第几场
        }
    }

    init_back_setting() {
        this.back_setting_items = new Map([
            ['printer', new MenuItem({ type: 0, desc: '热敏打印机', value: 1, values: [1, 2] })],
            ['round_num', new MenuItem({ type: 0, desc: '一局场数', value: 66, values: [30, 45, 66] })],
            ['check_waybill_tm', new MenuItem({ type: 0, desc: '对单时间', value: 30, values: [30, 60] })],
            ['print_waybill', new MenuItem({ type: 1, desc: '打印露单', value: '打印露单', values: ['打印露单'] })],
            ['bet_tm', new MenuItem({ type: 0, desc: '押分时间', value: 30, values: [30, 60] })],
            ['open_3_sec', new MenuItem({ type: 1, desc: '3秒功能开', value: 0, values: ['3秒功能开', '3秒功能关'] })],
            ['big_chip_facevalue', new MenuItem({ type: 0, desc: '大筹码', value: 100, values: [100, 500, 1000] })],
            ['mini_chip_facevalue', new MenuItem({ type: 0, desc: '小筹码', value: 10, values: [1, 10, 100] })],
            ['total_limit_red', new MenuItem({ type: 0, desc: '总限红', value: 3000, values: [3000, 5000] })],
            ['desk_limit_red', new MenuItem({ type: 0, desc: '单台限红', value: 3000, values: [3000, 5000, 30000] })],
            ['he_limit_red', new MenuItem({ type: 0, desc: '和限红', value: 3000, values: [3000, 5000, 30000] })],
            ['bgm_on', new MenuItem({ type: 1, desc: '背景音乐开关', value: '背景音乐开', values: ['背景音乐开', '背景音乐关'] })],
            ['waybill_font', new MenuItem({ type: 1, desc: '露单字体', value: '大字体露单', values: ['大字体露单', '小字体露单'] })],
            ['break_machine', new MenuItem({ type: 1, desc: '是否爆机', value: '爆机无', values: ['爆机无', '爆机有'] })],
        ])
    }

    read_form_file() {

    }
    write_to_file() {

    }

}
export default Setting