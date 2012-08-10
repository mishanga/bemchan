module.exports = function(serves) {

    serves['b-chan'] = function(ctx, callback) {

        switch (ctx.req.page) {
            case 'home':
                serves['b-board'](ctx, callback);
                break;
            case 'comment':
                serves['b-post'](ctx, callback);
                break;
            default:
                callback(null);
        }

    }

}