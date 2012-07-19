exports.serv = function(ctx, callback) {

    var servs = {
            'b-board': require('../b-board/b-board.serv.js').serv,
            'b-thread': require('../b-thread/b-thread.serv.js').serv
        },
        servName;

    servName = (ctx.req.url.length == 1) ? 'b-board' : 'b-thread';

    console.log(servName);

    ctx.template = servName;

    servs[servName](ctx, function(err) {
        callback(null);
    });

};
