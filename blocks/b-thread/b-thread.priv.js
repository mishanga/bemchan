exports.priv = function(ctx, callback) {

    ctx.bemjson = {
        block: 'b-thread',
        content: ctx.data.comment
    }

    callback(null);

}