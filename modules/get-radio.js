
args = require('./argv')

const exec = require('./execSync.js');

let config = require('config')

let radio = config.get('radio')

function stream()
{
    if (args.getArgs('cc'))
    {
        exec.e(`${radio.cc}`)
    }
    else if (args.getArgs('rtl'))
    {
        exec.e(`${radio.rtl}`)
    }
    else if (args.getArgs('virgin'))
    {
        exec.e(`${radio.virgin}`)
    }
    else if (args.getArgs('dj'))
    {
        exec.e(`${radio.italia}`)
    }
    else if (args.getArgs('subasio'))
    {
        exec.e(`${radio.subasio}`)
    }
    else if (args.getArgs('mc2'))
    {
        exec.e(`${radio.mc2}`)
    }
    else if (args.getArgs('rai1'))
    {
        exec.e(`${radio.rai1}`)
    }
    else if (args.getArgs('rai2'))
    {
        exec.e(`${radio.rai2}`)
    }
    else if (args.getArgs('rai3'))
    {
        exec.e(`${radio.rai3}`)
    }
    else if (args.getArgs('m2o'))
    {
        exec.e(`${radio.m2o}`)
    }
    else if (args.getArgs('kiss'))
    {
        exec.e(`${radio.kiss}`)
    }
    else if (args.getArgs('sport'))
    {
        exec.e(`${radio.sport}`)
    }
    else if (args.getArgs('latteMiele'))
    {
        exec.e(`${radio.latte}`)
    }
    else if (args.getArgs('arancia'))
    {
        exec.e(`${radio.arancia}`)
    }
    else
    {
        console.log("\n\rPlease pass a valid radio name");
    }
}

module.exports = {stream}

