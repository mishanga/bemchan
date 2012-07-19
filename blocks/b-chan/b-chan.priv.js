exports.priv = function(ctx, callback) {

    ctx.bemjson = {
        block: 'b-chan',
        content: ctx.data.text
    };

    callback(null);

}