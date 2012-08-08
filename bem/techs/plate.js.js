var INHERIT = require('inherit'),
    Template = require('bem/lib/template'),
    Tech = require('bem/lib/tech').Tech,
    _techShortName;

exports.Tech = INHERIT(Tech, {

    _getTechShortName: function(suffix) {

        return _techShortName || (_techShortName = suffix.replace(/\.js$/, '') + 's');

    },

    getBuildResultChunk: function(relPath, path, suffix) {

        var vars = {
            TechName: this._getTechShortName(suffix),
            ChunkPath: relPath
        };

        return Template.process([
            "require('{{bemChunkPath}}')({{bemTechName}});"],
            vars);

    },

    getBuildResult: function(prefixes, suffix, outputDir, outputName) {

        var _this = this;

        return this.__base(prefixes, suffix, outputDir, outputName).then(function(result) {

            var vars = {
                TechName: _this._getTechShortName(suffix)
            };

            return Template.process([
                'var {{bemTechName}} = {};\n',
                result.join(''),
                'exports.{{bemTechName}} = {{bemTechName}};'],
                vars);

        });

    },

    getCreateResult: function(path, suffix, vars) {

        vars.TechName = suffix.replace(/\.js$/, '');

        return Template.process([
            'module.exports = function({{bemTechName}}) {',
            "{{bemTechName}}[{{bemBlockName}}] = function(ctx, callback) {",
            '',
            '}',
            '})({{bemTechName}});'],
            vars);

    }

});
