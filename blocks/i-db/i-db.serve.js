module.exports = function(serves) {

    var db = require('mongojs').connect('bemchan', ['comments']);

    serves['i-db'] = {

        getBoard: function(id) {

            var board = [];

            return db.comments.find(null, function(err, comments) {
                if (err) { console.log('no comments') };
                comments.forEach(function(comment) {
                    board.push(comment)
                });

                return board;
            });

        },

        getPost: function(id) {

            return { id: '223344', comment: 'Voyager'};

        }

    }

}