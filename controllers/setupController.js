'use strict';

const Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {
        // seed database with test data
        var starterTodos = [
            {
                username: 'z',
                todo: 'buy milk',
                isdone: false,
                hasAttachment: false
            },
            {
                username: 'z',
                todo: 'feed dog',
                isdone: false,
                hasAttachment: false
            },
            {
                username: 'z',
                todo: 'drink milk',
                isdone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        })

    })

}