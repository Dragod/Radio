const execSync = require('child_process').execSync;

let config = require('config')

let player = config.get('player')

function e(arg)
{
    return execSync(`${player.mpv} ${arg}`, { stdio: [0, 1, 2] });
}

module.exports = { e }

