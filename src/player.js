//@ts-check
/**
 * 
 * file: players.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Thursday, 1st February 2015 9:30:03 am
 * -----
 * last modified: Thursday, 1st February 2015 9:30:03 am
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */
class Player {
    id = 0
    score = 0
    last_add = 0
    add_score = 0
    last_sub = 0
    sub_score = 0

    bet_score = [0, 0, 0]

    bet_amount = 10
    bet_hide = false
    /**
     * Creates an instance of Player.
     * @param {number} id 
     * @memberof Player
     */
    constructor(id) {
        this.id = id
    }

}

