app.get('/post/', function(req, res){
    res.send(serv['b-post']());
});