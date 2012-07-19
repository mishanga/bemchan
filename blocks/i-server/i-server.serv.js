var server = require('express').createServer(),
    BEMHTML = require('./index.bemhtml.js').BEMHTML,
    bChan = {
        serv: require('../../blocks/b-chan/b-chan.serv.js').serv,
        priv: require('../../blocks/b-chan/b-chan.priv.js').priv
    };

server.listen(3000);

server.get('/', function(req, res) {

    var ctx = {
        req: req
        //cgi: require('i-cgi'),
        //http: require('i-http')
    };

    bChan.serv(ctx, function(err) {
        //err && res.write('Error in serv');

        bChan.priv(ctx, function(err) {
            //err && res.write('Error in priv');

            res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
            res.write(BEMHTML.apply(ctx.bemjson));
            res.end();
        })
    });

});

