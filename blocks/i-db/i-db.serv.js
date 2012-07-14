serv['i-db'] = function(data) {

    console.log('i-db');

    var dbUrl = 'wakaba',
        collections = ['posts'],
        db = require('mongojs').connect(dbUrl, collections);

    data.db = db;

}

serv['i-db'](data);
