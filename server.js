var http = require('http'),
    url = require('url'),
    fs = require('fs');

http.createServer(function (req, res) {
    var urlParsed = url.parse(req.url, true);

    console.log('Request: ', JSON.stringify(urlParsed));

    res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });

    res.write('Request: ' + JSON.stringify(urlParsed));

    res.end();
}).listen('.nodejs.sock');
