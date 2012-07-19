exports.priv = function(ctx, callback) {

    var privs = {
            'b-board': require('../b-board/b-board.priv.js').priv,
            'b-thread': require('../b-thread/b-thread.priv.js').priv
        };

    privs[ctx.template](ctx, function(err) {
        callback(null);
    })

}