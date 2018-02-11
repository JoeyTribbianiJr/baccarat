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

// (function(){
const resArray = [
    { url: "./res/img/bg_scale.png", type: Laya.Loader.IMAGE },
    { url: "./res/img/bg_login.jpg", type: Laya.Loader.IMAGE },

    { url: "./res/wav/din1-.wav", type: Laya.Loader.SOUND },    //开始发牌
    { url: "./res/wav/openB.wav", type: Laya.Loader.SOUND },    //庄开
    { url: "./res/wav/openP.wav", type: Laya.Loader.SOUND },    //闲开
    { url: "./res/wav/place1-.wav", type: Laya.Loader.SOUND },    //开啥押注
    { url: "./res/wav/StopBet.wav", type: Laya.Loader.SOUND },    //停止押分
    { url: "./res/wav/winB.wav", type: Laya.Loader.SOUND },    //庄赢
    { url: "./res/wav/winP.wav", type: Laya.Loader.SOUND },    //闲赢
    { url: "./res/wav/winT.wav", type: Laya.Loader.SOUND },    //和赢
    { url: "./res/wav/XP.wav", type: Laya.Loader.SOUND },    //和赢
    { url: "./res/wav/X0.wav", type: Laya.Loader.SOUND },    ////
    { url: "./res/wav/X1.wav", type: Laya.Loader.SOUND },    //
    { url: "./res/wav/X2.wav", type: Laya.Loader.SOUND },    //
    { url: "./res/wav/X3.wav", type: Laya.Loader.SOUND },    //
    { url: "./res/wav/X4.wav", type: Laya.Loader.SOUND },    //
    { url: "./res/wav/X5.wav", type: Laya.Loader.SOUND },    //
    { url: "./res/wav/X6.wav", type: Laya.Loader.SOUND },    //
    { url: "./res/wav/X7.wav", type: Laya.Loader.SOUND },    //
    { url: "./res/wav/X8.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/X9.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z0.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z1.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z2.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z3.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z4.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z5.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z6.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z7.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z8.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/Z9.wav", type: Laya.Loader.SOUND },
    { url: "./res/wav/scene.mp3", type: Laya.Loader.SOUND }
]
// })();