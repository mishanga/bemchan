app.get('/post/*', function(req, res){
    console.log(req.query);
    console.log(req.url);

    res.send(serv['b-post'](data, req));
});