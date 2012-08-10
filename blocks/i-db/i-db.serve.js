module.exports = function(serves) {

    var db = require('mongojs').connect('bemchan', ['comments']);

    serves['i-db'] = {

        getBoard: function(id, callback) {

            var board = [];

            db.comments.find(null, function(err, comments) {
                if (err) { console.log('==! i-db error: no comments') };
                comments.forEach(function(comment) {
                    board.push(comment)
                });
                callback(board);
            }).sort({date: -1});

        },

        getComment: function(id, callback) {

            db.comments.find({ id: id }, function(err, comment) {
                if (err) { console.log('==! i-db error: no comment') };
                callback(comment);
            })

        },

        postComment: function(comment, callback) {

            db.comments.insert({
                id: Math.floor(Math.random() * 10000),
                date: new Date(),
                message: comment.message
            }, function(err) {
                callback();
            })

        }

    }

}