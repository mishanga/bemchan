var BASE = require('../../bem-bl/blocks-common/i-bem/bem/techs/bemhtml'),
    PATH = require('bem/lib/path'),
    FS = require('fs');

for (var n in BASE) {
    if (n == 'bemBuild') {
        var old = BASE[n];
        exports[n] = function(prefixes, outputDir, outputName) {
            old.apply(this, arguments);
            var f = FS.openSync(PATH.join(outputDir, outputName + '.' + this.getTechName() + '.js'), 'a');
            FS.writeSync(f, 'typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);');
            FS.closeSync(f);
        };
    } else {
        exports[n] = BASE[n];
    }
}

exports.techModule = module;
