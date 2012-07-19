exports.serv = function(ctx, callback) {

    ctx.data = {
        text: "Hello, World!"
    };

    callback(null);

}