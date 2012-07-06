serv['b-post'] = function(data) {

    var fs = require('fs'),
        gib = eval(fs.readFileSync('./gibberish/data.js', 'utf-8'));

    return gib[0].comment;

}