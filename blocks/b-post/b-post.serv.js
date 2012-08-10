serv['b-post'] = function(data, req) {

    var fs = require('fs'),
        gib = eval(fs.readFileSync('./gibberish/data.js', 'utf-8')),
        db = data.db;

    if (req.query.post) {
        db.posts.save({ post: req.query.post })
        return 'saved!'
    }

    return gib[0].comment;

}