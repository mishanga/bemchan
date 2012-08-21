module.exports = function(plates) {

    plates['b-post'] = function(ctx, callback) {

        ctx.bemjson = {
            block: 'b-comment',
            content: [
                { elem: 'id', tag: 'h1', content: ctx.data.id },
                { elem: 'date', tag: 'p', content: ctx.data.toLocaleString() },
                { elem: 'content', tag: 'code', content: ctx.data.message }
            ]
        };

        callback(null);

    }

}