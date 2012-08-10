module.exports = function(serves) {

    serves['b-board'] = function(ctx, callback) {

        if (ctx.req.type == 'write') {
            ctx.db.postComment({ message: ctx.req.message }, function() {
                ctx.req.type = 'render';
                serves['b-board'](ctx, callback);
            });
        } else {
            ctx.db.getBoard('*', function(board) {
                ctx.data = board;
                callback(null);
            });
        }

    }

}