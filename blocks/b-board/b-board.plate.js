module.exports = function(plates) {

    plates['b-board'] = function(ctx, callback) {

        ctx.bemjson = ctx.data.map(function(comment) {
            return [
                {
                    block: 'b-comment',
                    content: [
                        { elem: 'id', tag: 'h1', content: comment.id },
                        { elem: 'date', tag: 'p', content: comment.date.toLocaleString() },
                        { elem: 'content', tag: 'code', content: comment.message }
                    ]
                }
            ]
        });

        ctx.bemjson.push(
            {
                block: 'b-cancer',
                tag: 'form',
                attrs: {
                    method: 'post'
                },
                content: [
                    { tag: 'textarea', attrs: { name: 'message' }, content: 'Show Must Go On' },
                    { tag: 'input', attrs: { type: 'submit' } }
                ]
            }
        )

        callback(null);

    }

}