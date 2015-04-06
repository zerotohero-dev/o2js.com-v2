'use strict';

var chokidar = require('chokidar'),
    spawn = require('child_process').spawn,
    lock = false;

chokidar.watch('/var/www/SRC/', {ignored: /[\/\\]\.|node_modules/})
    // on('all')
    .on('change', function(event, path) {
        var process;

        if (!lock) {
            console.log('acquiring lock');

            lock = true;

            process = spawn('sh', ['./publish.sh']);

            process.on('close', function (code) {
                console.log('child process exited with code ' + code);
                console.log('releasing lock');

                lock = false;
            });
        }
    });