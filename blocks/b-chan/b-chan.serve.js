module.exports = function(serves) {

    serves['b-chan'] = function(ctx, callback) {

        ctx.data = [
            { id: '112233', comment: 'Solar System'},
            { id: '223344', comment: 'Voyager'}
        ]

        callback(null);
    }

}