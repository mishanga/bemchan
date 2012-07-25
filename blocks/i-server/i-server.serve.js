module.exports = function(serves) {

    var server = require('express').createServer(),
        plates = require('../../pages/index/index.plate.js').plates,
        BEMHTML = require('../../pages/index/index.bemhtml.js').BEMHTML;

    server.listen(3000);

    server.get('/', function(req, res) {

        var ctx = {
            req: req,
            cgi: function() {}
        };

        serves['b-chan'](ctx, function(err) {
            plates['b-chan'](ctx, function(err) {
                var html = BEMHTML.apply(ctx.bemjson);
                res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
                res.end(html);
            })
        });

    });

};