//@ts-check
/**
 * 
 * file: ui.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Wednesday, 7th February 2015 4:43:44 pm
 * -----
 * last modified: Wednesday, 7th February 2015 4:43:44 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */
//<script src="../layaair/libs/laya.core.js" ></script>
//<script src="../layaair/libs/laya.utils.js" ></script>
//<script src="./asset.js" ></script>
import Vue from '../vue'
import DataOperator from './data_operator'

export default class UIOperator {
    /**
     * Creates an instance of UIOperator.
     * @param {DataOperator} data_op 
     * @memberof UIOperator
     */
    constructor(data_op) {
        this.data_op = data_op
        this.setting = data_op.setting


        this.load_assets()

    }

    //加载游戏资源
    load_assets() {
        console.log('start load assets')
        Laya.loader.load(resArray,
            laya.utils.Handler.create(this, this.on_asset_loaded),
            laya.utils.Handler.create(this, this.on_asset_loading, null, false))
        Laya.loader.on(laya.events.Event.ERROR, this, this.on_load_error)
    }

    on_asset_loaded(arg0, arg1) {
        // 不支持WebGL时自动切换至Canvas
        let webgl = Laya.WebGL
        Laya.init(this.setting.app_params.dpi_x, this.setting.app_params.dpi_y, laya.webgl.WebGL)
        // Laya.init(1136, 640, Laya.WebGL);

        //设置适配模式
        Laya.stage.scaleMode = "exactfit";
        //设置横竖屏
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        //设置水平对齐
        Laya.stage.alignH = "center";
        //设置垂直对齐
        Laya.stage.alignV = "middle";
        Laya.stage.bgColor = "#7a654f";

        //设置后台菜单项
        this.init_back_menu()

        //设置操作表格
        this.init_op_table(this.data_op.player_lst, this.data_op.score_span)


        laya.media.SoundManager.playMusic('./res/wav/scene.mp3', 0)
        console.log('res load over')
    }

    on_load_error(arg0, arg1, arg2) {
        console.log(arg0)
        alert('资源加载出错!')
    }

    on_asset_loading(progress) {
        console.log('加载进度: ${progress}')
    }

    init_op_table(player_list, score_span) {
        new Vue({
            el: '#scores',
            data: {
                scores: player_list,
                score_span: score_span,
                checked_rows: []
            },
            methods: {

                row_click: function (index) {
                    var i = this.checked_rows.indexOf(index)
                    if (i > -1) {

                        //用pop会出错
                        this.checked_rows.splice(i, 1);
                        // this.checked_rows.pop(index);
                    }
                    else {
                        this.checked_rows.push(index);
                    }
                },

                add_score: function (button, operate) {
                    for (var i = 0; i < this.scores.length; i++) {
                        var j = this.checked_rows.indexOf(i)
                        if (j > -1) {
                            if (operate == 'add') {
                                this.scores[i].score += button;
                                this.scores[i].last_add = button;
                            }
                            if (operate == "sub") {
                                var cur_score = this.scores[i].score;
                                var last_sub = this.scores[i].last_sub;
                                if (cur_score - button > 0) {
                                    this.scores[i].score -= button;
                                    this.scores[i].last_sub = button;
                                }
                                else {
                                    this.scores[i].score = 0;
                                    this.scores[i].last_sub = cur_score;
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    init_back_menu() {
        let menu_items_map = this.setting.back_setting_items
        new Vue({
            el: '#back_menu',
            data: {
                items: menu_items_map
            },
            methods: {
                menu_btn_click: function (item, index) {
                    console.log(menu_items_map.get(item[0]).value)
                    let v_idx = item[1].values.indexOf(item[1].value)
                    let len = item[1].values.length
                    item[1].value = v_idx == len - 1 ? item[1].values[0] : item[1].values[v_idx + 1]
                    console.log(menu_items_map.get(item[0]).value)
                }
            }
        })
    }

}
