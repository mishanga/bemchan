var server = require('express').createServer();

server.listen(3000);

server.on('*', function(req, res) {

    var ctx = {
        req: req,
        cgi: require('i-cgi'),
        http: require('i-http')
    };

    bChan.serv(ctx, function(err) {
        err && res.write('Error in serv');

        bChan.priv(ctx, function(err) {
            err && res.write('Error in priv');

            bChan.bemhtml(ctx, function(err) {
                err && res.write('Error in bemhtml');

                res.write(ctx.html);
            })
        })
    });

});

