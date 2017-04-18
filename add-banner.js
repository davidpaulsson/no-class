var pckgJson = require(process.env.PWD + '/package.json');
var banner =
    '/*! ' +
    pckgJson.name +
    ' v' +
    pckgJson.version +
    ' | ' +
    pckgJson.license +
    ' License | ' +
    pckgJson.homepage +
    ' | ' +
    pckgJson.author +
    ' */\n';

process.stdout.write(banner);
process.stdin.pipe(process.stdout);
