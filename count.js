/**
 * 
 * file: count.js
 * project: hello
 * author: Joey Tribbiani (joeyfrancistribbiani@outlook.com)
 * file created: Tuesday, 6th February 2015 5:43:06 pm
 * -----
 * last modified: Tuesday, 6th February 2015 5:43:07 pm
 * modified by: Joey Tribbiani (joeyfrancistribbiani@outlook.com>)
 * -----
 * Copyright © 2014-2015 Phoebe Buffay, Xing Xin Internet cafes.
 * 
 */

const serialport = require('serialport')
const createTable = require('data-table')

serialport.list((err, ports) => {
    console.log('ports', ports);
    if (err) {
        document.getElementById('error').textContent = err.message
        return
    } else {
        document.getElementById('error').textContent = ''
    }

    if (ports.length === 0) {
        document.getElementById('error').textContent = 'No ports discovered'
    }

    document.getElementById('error').textContent = 'No ports discovered'
    const headers = Object.keys(ports[0])
    const table = createTable(headers)
    tableHTML = ''
    table.on('data', data => tableHTML += data)
    table.on('end', () => document.getElementById('ports').innerHTML = tableHTML)
    ports.forEach(port => table.write(port))
    table.end();
})