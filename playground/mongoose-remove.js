const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// Removes all the documents from a collection
Todo.remove({})
    .then((result) => {
        console.log(result);
    });


// Todo.findOneAndRemove(); 
// Todo.findBuIdAndRemove();


Todo.findOneAndRemove({ _id: '5c38bf69ca1b92dba16a3054' })
    .then((todo) => {
        console.log(todo);
    });

Todo.findByIdAndRemove('5c38bf69ca1b92dba16a3054')
    .then((todo) => {
        console.log(todo);
    });