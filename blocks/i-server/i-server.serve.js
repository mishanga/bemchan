module.exports = function(serves) {

    var server = require('express')();

    server.listen(3000);

    server.get('/', function(req, res) {

        var ctx = {
            req: req,
            cgi: function() {}
        };

        serves['b-chan'](ctx, function(err) {
            serves.plates['b-chan'](ctx, function(err) {
                var html = serves.bemhtml.apply(ctx.bemjson);
                res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
                res.end(html);
            })
        });

    });

};