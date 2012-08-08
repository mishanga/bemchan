var INHERIT = require('inherit'),
    PATH = require('path'),
    Template = require('bem/lib/template'),
    BaseTech = require('./plate.js.js').Tech;

exports.Tech = INHERIT(BaseTech, {

    getBuildResult: function(prefixes, suffix, outputDir, outputName) {

        var _this = this;

        return this.__base(prefixes, suffix, outputDir, outputName).then(function(result) {

            var _getTechPath = function(name) {
                    return './' + outputName + '.' + name + '.js';
                },
                vars = {
                    Bemhtml: _getTechPath('bemhtml'),
                    Plate: _getTechPath('plate'),
                    TechName: _this._getTechShortName(suffix)
                };

            return Template.process([
                result,
                "{{bemTechName}}.bemhtml = require('{{bemBemhtml}}').BEMHTML;",
                "{{bemTechName}}.plates = require('{{bemPlate}}').plates;"],
                vars);

        })

    }

});
