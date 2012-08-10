module.exports = function(serves) {

    serves['b-post'] = function(ctx, callback) {

        ctx.db.getComment(+ctx.req.commentId, function(comment) {
            ctx.data = comment;

            callback(null);
        });

    }

}