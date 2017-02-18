'use strict';

const configValues = require('./config');

module.exports = {
    getDbConnection: function() {
        return 'mongodb://' + configValues.uname + ':' +configValues.pwd + '@ds153709.mlab.com:53709/nodetodo'
    }
}