exports.serv = function(ctx, callback) {

    var fs = require('fs'),
        //dummy = eval(fs.readFileSync('./gibberish/data.js', 'utf-8'));
        dummy = {comment: 'b-thread'};

    ctx.data = dummy;

    callback(null);

}