module.exports = function(serves) {

    var express = require('express'),
        server = express();

    server.use(express.bodyParser());
    server.listen(3000);

    server.all('*', function(req, res) {

        var ctx = {
                originalReq: req,
                req: {
                    type: 'render',
                    page: 'home',
                    commentId: 0
                },
                cgi: function() {},
                db: serves['i-db']
            },
            postQuery = req.url.match(/post\/(\d+)/) || [];

        if (req.url == '/') {
            ctx.req.page = 'home';
        } else if (postQuery[1]) {
            ctx.req.page = 'comment';
            ctx.req.commentId = postQuery[1];
        }

        if ((req.route.method == 'post') && req.param('message')) {
            ctx.req.type = 'write';
            ctx.req.message = req.param('message');
        }

        console.log(ctx.req);


        serves['b-chan'](ctx, function(err) {
            serves.plates['b-chan'](ctx, function(err) {
                var html = serves.bemhtml.apply(ctx.bemjson);
                res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
                res.end(html);
            })
        });

    });

};