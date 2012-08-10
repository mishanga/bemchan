serv['b-board'] = function(data) {

    var fs = require('fs'),
        gib = eval(fs.readFileSync('./gibberish/data.js', 'utf-8')),
        db = data.db;

    console.log(db.getCollection('posts'));

    return gib.map(function(comm) {
        return comm.comment;
    }).join('<br><br>');

}