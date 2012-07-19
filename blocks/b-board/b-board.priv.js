exports.priv = function(ctx, callback) {

    ctx.bemjson = {
        block: 'b-board',
        content: ctx.data.map(function(post) {
            return {
                block: 'b-thread',
                content: post.comment
            }
        })
    }

    callback(null)

}