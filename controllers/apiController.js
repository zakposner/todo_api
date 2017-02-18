'use strict';


const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/users/:uname', function(req, res) {
        Todos.find({ username: req.params.uname }, function (err, results) {
            if (err) throw err;
            res.send(results);
        })
    });

    app.get('/api/todo/:id', function(req, res) {
        Todos.findById({ _id: req.params.id }, function(err, results) {
            if (err) throw err;
            res.send(results);
        })
    });


    app.post('/api/todo', function (req, res) {
        // if todo exists, update it
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment 
            }, function(err, results) {
                if (err) throw err;
                res.send('Success');
            });
        }
        // else create new todo
        else {
            let newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            })
            newTodo.save(function(err) {
                if (err) throw err;
                res.send('Success');
            })
        }
    });

    // Delete a user
    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
    })

}

