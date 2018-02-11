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
    on_asset_loaded(arg0, arg1) {
        throw new Error("Method not implemented.");
    }
    on_load_error(arg0, arg1, arg2) {
        throw new Error("Method not implemented.");
    }
    on_asset_loading(arg0, arg1) {
        throw new Error("Method not implemented.");
    }
    /**
     * Creates an instance of UIOperator.
     * @param {DataOperator} data_op 
     * @memberof UIOperator
     */
    constructor(data_op) {

        this.load_assets()

        this.data_op = data_op
        this.setting = data_op.setting

        this.init_op_table(data_op.player_lst, data_op.score_span)
        this.init_back_menu()
    }

    //加载游戏资源
    load_assets() {
        Laya.init(this.setting.app_params.dpi_x, this.setting.app_params.dpi_y)
        Laya.loader.load(resArray,
            laya.utils.Handler.create(this, this.on_asset_loaded),
            laya.utils.Handler.create(this, this.on_asset_loading, null, false))
        Laya.loader.on(laya.events.Event.ERROR, this, this.on_load_error)
    }
    start() {
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
        let menu_items = this.setting.back_setting_items
        new Vue({
            el: '#back_menu',
            data: {
                items: menu_items
            }
        })
    }

}
