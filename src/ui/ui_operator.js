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

import Vue from '../vue'
class UIOperator {
    //UI??
    asset
    stage
    ticker
    bg
    ground
    sat_chips = new Array(14)

    //????
    player_lst
    setting

    constructor({ player_list, setting }) {
        this.player_lst = player_list
        this.setting = setting
        this.initTable(this.player_lst, this.setting.score_span)
        this.initBackMenu()
    }
    resources = [
        { id: 'bg', src: 'images/desk.png' },
        { id: 'chip', src: 'images/chip.png' },
        { id: 'number', src: 'images/number.png' },
        { id: 'cover', src: 'images/cover.png' },
        // { id: 'keymap', src: 'src/keymap.txt' }
        // { id: 'ready', src: 'images/ready.png' },
        // { id: 'over', src: 'images/over.png' },
        // { id: 'bird', src: 'images/bird.png' },
        // { id: 'holdback', src: 'images/holdback.png' }
    ];
    initTable(player_list, score_span) {
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

                        //???splice + index,pop()??????
                        this.checked_rows.splice(i, 1);
                        // this.checked_rows.pop(index);
                    }
                    else {
                        this.checked_rows.push(index);
                    }
                },
                //???????????????????????ui?????
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

                    UIOperator.initSatChip()
                }
            }
        })
    }
    initBackMenu() {
        let menu_items = this.setting.back_setting_items
        new Vue({
            el: '#back_menu',
            data: {
                items: menu_items
            }
        })
        menu_items.forEach(element => {

        });
    }

    static initSatChip() {
    }
}
export default UIOperator