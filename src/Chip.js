/**
 * 
 * file: Chip.js
 * project: src
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Wednesday, 31st January 2015 1:37:43 pm
 * -----
 * last modified: Wednesday, 31st January 2015 1:37:43 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright Â© 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */


(function (ns) {

    var Chip = ns.Chip = Hilo.Class.create({
        Extends: Hilo.Container,
        constructor: function (properties) {
            Chip.superclass.constructor.call(this, properties);
            this.init(properties);
            // this.createChip();
        },

        init: function (properties) {
            // this.height = 300;
            // this.wight = 300;
            var chipImg = game.asset.chipImg
            // var groundOffset = 60;
            var ground = new Hilo.Bitmap({
                // id: 'chip',
                image: chipImg,
                // scaleX: 0.05,
                // scaleY: 0.05,
                height: 40,
                width: 40
            });
            // var scoreLabel = new Hilo.BitmapText({
            //     id: 'score',
            //     glyphs: properties.numberGlyphs,
            //     textAlign: 'center',
            //     scaleX: 0.5,
            //     scaleY: 0.5,
            //     letterSpacing: 0,
            //     // text: 0
            // });
            var scoreLabel = new Hilo.Text();
            scoreLabel.text = properties.number
            scoreLabel.textAlign = 'center'
            scoreLabel.setFont("font-weight:900;color:white;")

            // ground.x = 0
            // ground.y = 0
            scoreLabel.x = ground.x + 18
            scoreLabel.y = ground.y + 15
            this.addChild(ground, scoreLabel);

            // this.ground.y = this.height - this.ground.height;
            // this.ground.y = this.height - this.ground.height;

        },

    });

})(window.game);