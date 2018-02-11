/**
 * 
 * file: utils.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Sunday, 11th February 2015 7:16:19 pm
 * -----
 * last modified: Sunday, 11th February 2015 7:16:19 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */


const create_game_cards = (game_num, round_num, card_patten) => {
    let lst = []

    for (let i = 0; i < game_num; i++) {
        let round_cards = create_round_cards(round_num)
        lst.push(round_cards)
    }

    return lst
}
CardPatten = {
    single: 1,
    double: 2
}
const create_round_cards = (round_num, card_patten) => {
    let lst = []
    let all_cards = this.shift_cards()
    switch (card_patten) {
        case CardPatten.single: {
            for (let i = 0; i < round_num; i++) {
                let round_card = [all_cards[2 * i], all_cards[2 * i + 1]]
                lst.push()
            }
            break;
        }
        case CardPatten.double: {
            // todo
            break;
        }
        default: break;
    }
    return lst
}

/**
 * @returns {Array}
 * @memberof Setting
 */
const shift_cards = () => {
    let shifted_cards = []
    let card_box_num = this.back_setting_items.get('card_box_num').value
    return shifted_cards

}
BetSide = {
    xian: '闲',
    he: '和',
    zhuang: '庄'
}

const create_waybills = (game_cards) => {
    let all_waybills = []
    for (let cards of game_cards) {
        if (this.card_patten == CardPatten.single) {
            let rst = ''

            if (cards[0] == cards[1]) {
                rst = BetSide.he
            }
            else {
                rst = cards[0] > cards[1] ? BetSide.xian : BetSide.zhuang
            }
            all_waybills.push(rst)
        }
    }
    return all_waybills
}
const init_key_map = () => {
    for (var m = 0; m < 14; m++) {
        if (m == 4) {
            this.keymap[m] = [69, 81, 87, 85, 82, 73]
        }
        else {
            this.keymap[m] = [1, 1, 1, 1, 1, 1]
        }
    }
}