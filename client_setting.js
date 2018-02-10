/**
 * 
 * file: client_setting.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Friday, 9th February 2015 10:13:54 pm
 * -----
 * last modified: Friday, 9th February 2015 10:13:54 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */

export class Setting {
    config_path = './config.ini'
    server_ips

    constructor() {
        let local_setting = load_local(config_path)
        this.server_ips = local_setting.server_ips
    }
}