module.exports = function(plates) {

    plates['b-chan'] = function(ctx, callback) {

        if (ctx.data instanceof Array) {
            plates['b-board'](ctx, callback);
        } else {
            plates['b-post'](ctx, callback);
        }

    }

}