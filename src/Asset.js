/**
 * 
 * file: Asset.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Monday, 29th January 2015 5:19:59 pm
 * -----
 * last modified: Monday, 29th January 2015 5:19:59 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */


(function (ns) {

    var Asset = ns.Asset = Hilo.Class.create({
        Mixes: Hilo.EventMixin,

        queue: null,
        bg: null,
        chip: null,
        cover: null,
        numberGlyphs: null,
        chipxy: [],
        keymap: new Array(14),

        load: function () {

            this.queue = new Hilo.LoadQueue();
            this.queue.add(resources);
            this.queue.on('complete', this.onComplete.bind(this));
            this.queue.start();
        },
        test: function () {
            new Vue({
                el: '#testtext',
                data: {
                    // text: game.asset.keymap
                    text1: "urioewtuioewuio"
                },
            })
        },

        onComplete: function (e) {
            this.test();
            this.bg = this.queue.get('bg').content;
            this.chipImg = this.queue.get('chip').content;
            this.cover = this.queue.get('cover').content;
            // this.keymap = this.queue.get('keymap').content;
            // var file = "src/keymap.txt";
            // var fr = new FileReader(); //???FileReader??
            // fr.onload = function (e) {
            //     this.keymap = e.target.result; //e.target??fr
            // };
            // fr.readAsText(file); //???DataURL


            var number = this.queue.get('number').content;
            this.numberGlyphs = {
                0: { image: number, rect: [0, 0, 60, 91] },
                1: { image: number, rect: [61, 0, 60, 91] },
                2: { image: number, rect: [121, 0, 60, 91] },
                3: { image: number, rect: [191, 0, 60, 91] },
                4: { image: number, rect: [261, 0, 60, 91] },
                5: { image: number, rect: [331, 0, 60, 91] },
                6: { image: number, rect: [401, 0, 60, 91] },
                7: { image: number, rect: [471, 0, 60, 91] },
                8: { image: number, rect: [541, 0, 60, 91] },
                9: { image: number, rect: [611, 0, 60, 91] }
            };

            //?????????????
            var xian_7_x = 50;
            var xian_7_y = 30;
            var he_8_x = 90;
            var he_8_y = 100;
            var margin_x = 50;
            var margin_y = 40;
            for (var i = 0; i < 14; i++) {
                if (i == 13) {
                    continue;
                }
                if (i < 7) {
                    var xy = [
                        xian_7_x + margin_x,//zhuang_x
                        xian_7_y + (6 - i) * margin_y,//zhuang_y

                        xian_7_x + 2 * margin_x,//he_x
                        xian_7_y + (6 - i) * margin_y,//he_y

                        xian_7_x, //xian_x
                        xian_7_y + (6 - i) * margin_y,//xian_y

                        i * 60,//satx
                        0//saty
                    ]
                    this.chipxy.push(xy);
                }
                else {
                    var xy = [
                        he_8_x + margin_x,//zhuang_x
                        he_8_y + (i - 7) * margin_y,//zhuang_y

                        he_8_x,//he_x
                        he_8_y + (i - 7) * margin_y, //he_y

                        he_8_x + 2 * margin_x,//xian_x
                        he_8_y + (i - 7) * margin_y,//xian_y

                        i * 60,//satx
                        0//saty
                    ];
                    this.chipxy.push(xy);
                }
            }

            this.queue.off('complete');
            this.fire('complete');
        }
    });

})(window.game);