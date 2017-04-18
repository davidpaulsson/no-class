var pkg = require(process.env.PWD + '/package.json');
var banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.license} License | ${pkg.homepage} */`;

process.stdout.write(banner);
process.stdin.pipe(process.stdout);
