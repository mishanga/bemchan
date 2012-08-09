module.exports = function(serves) {

    serves['b-chan'] = function(ctx, callback) {

        ctx.data = ctx.db.getBoard();

        console.log(ctx.data)

        callback(null);
    }

}