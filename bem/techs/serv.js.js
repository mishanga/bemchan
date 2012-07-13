var PATH = require('path'),
    fs = require('fs');

exports.baseTechPath = require.resolve('./priv.js');

exports.getBuildResult = function(prefixes, outputDir, outputName) {
    return this.__base.apply(this, arguments).then(function(res) {

        res.push(fs.readFileSync("pages/index/index.route.js"));

        return res

    })
}