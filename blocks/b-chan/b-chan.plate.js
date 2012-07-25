module.exports = function(plates) {

    plates['b-chan'] = function(ctx, callback) {

        ctx.bemjson = ctx.data.map(function(comment) {
            return {
                block: 'b-comment',
                content: [
                    { elem: 'id', tag: 'h1', content: comment.id },
                    { elem: 'content', tag: 'code', content: comment.comment }
                ]
            }
        });

        callback(null);

    }

}