(function () {

    window.onload = function () {
        game.init();
    }

    var game = window.game = {
        width: 800,
        height: 500,

        PlayerState: {
            sitting: 1,
            playing: 2,
            cancling: 3
        },
        KeyFunc: {
            xian: 0,
            he: 1,
            zhuang: 2,
            amount: 3,
            cancle: 4,
            hide: 5
        },
        asset: null,
        stage: null,
        ticker: null,
        state: null,
        Player: null,

        bg: null,
        ground: null,
        sat_chips: new Array(14),

        init: function () {
            this.asset = new game.Asset();
            this.players = new game.Player();
            this.asset.on('complete', function (e) {
                this.asset.off('complete');
                this.initStage();
            }.bind(this));
            this.asset.load();
        },

        initStage: function () {
            this.scale = 1.36;
            this.width = Math.min(innerWidth, 512) * this.scale;
            this.height = Math.min(innerHeight, 384) * this.scale;
            // alert(innerWidth)
            // alert(innerHeight)
            // this.width = 1024
            // this.height = 768

            //舞台画布
            var canvasType = location.search.indexOf('dom') != -1 ? 'dom' : 'canvas';
            var canvas = Hilo.createElement(canvasType);

            //舞台
            this.stage = new Hilo.Stage({
                renderType: canvasType,
                canvas: canvas,
                width: this.width,
                height: this.height,
                scaleX: this.scale,
                scaleY: this.scale
            });
            var desk = document.getElementById('desk');
            desk.appendChild(this.stage.canvas);
            // document.body.appendChild(this.stage.canvas);

            //启动计时器
            this.ticker = new Hilo.Ticker(60);
            this.ticker.addTick(Hilo.Tween);
            this.ticker.addTick(this.stage);
            this.ticker.start(true);

            //绑定交互事件
            // this.stage.enableDOMEvent(Hilo.event.POINTER_START, true);
            // this.stage.on(Hilo.event.POINTER_START, this.onUserInput.bind(this));

            //Space键控制
            if (document.addEventListener) {
                document.addEventListener('keydown', function (e) {
                    // if (e.keyCode === 32) this.onUserInput(e);
                    this.onUserInput(e);
                }.bind(this));
            } else {
                document.attachEvent('onkeydown', function (e) {
                    // if (e.keyCode === 32) this.onUserInput(e);
                    this.onUserInput(e);
                }.bind(this));
            }

            //舞台更新
            // this.stage.onUpdate = this.onUpdate.bind(this);

            //初始化
            this.initBackground();
            this.initPlayer();
            this.initSatChip();
        },

        initBackground: function () {
            //桌布
            var bgImg = this.asset.bg;
            this.bg = new Hilo.Bitmap({
                id: 'bg',
                image: bgImg,
                scaleX: this.width / bgImg.width,
                scaleY: this.height / bgImg.height
            }).addTo(this.stage);

        },
        initPlayer: function () {
            this.Player = new game.Player();
            this.Player.initTable();
            this.initSatChip();
        },

        initSatChip: function () {
            var p_lst = this.Player.players;
            for (var i = 0; i < p_lst.length; i++) {

                //先全部移除再添加
                game.stage.removeChildById("satchip_" + i);
                if (p_lst[i].score > 0) {
                    var chip = new game.Chip({
                        id: 'satchip_' + i,
                        number: this.Player.players[i].score,
                        x: game.asset.chipxy[i][6],
                        y: game.asset.chipxy[i][7]
                    })
                    chip.addTo(this.stage);
                }
            }
        },
        onUserInput: function (e) {
            this.userBet(e.keyCode);
        },
        drawBetChip: function (player) {
            var p_idx = this.Player.players.indexOf(player);

            //根据玩家押注金额和类型重新画押注筹码
            for (var i = 0; i < 3; i++) {
                var chipid = 'betchip_' + p_idx + '_' + i;
                //先移除再添加
                // game.stage.removeChildById(chipid);

                if (player.bet_amount[i] > 0) {
                    var chip = new game.Chip({
                        id: chipid,
                        number: player.bet_amount[i],
                        x: game.asset.chipxy[p_idx][i * 2],
                        y: game.asset.chipxy[p_idx][i * 2 + 1]
                    })
                    chip.addTo(this.stage)
                }
            }

            //更新座位上的筹码
            var satchipid = 'satchip_' + p_idx
            game.stage.removeChildById(satchipid)
            var chip = new game.Chip({
                id: satchipid,
                number: player.score,
                x: game.asset.chipxy[p_idx][6],
                y: game.asset.chipxy[p_idx][7]
            })
            chip.addTo(this.stage)


            var coverid = 'cover_' + p_idx;
            game.stage.removeChildById(coverid);
            if (player.hide == true) {
                var cover = new Hilo.Bitmap({
                    id: coverid,
                    image: game.asset.cover,
                    height: 30,
                    width: 90,
                    x: game.asset.chipxy[p_idx][0],
                    y: game.asset.chipxy[p_idx][0],
                }).addTo(this.stage);
            }
        },

        gameStart: function () {
        },


    };

})();