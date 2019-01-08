const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5c34f8ed2c03b41a11d193f7';
var user_id = '5c34015c61fcda88179a93fe';

ObjectID.isValid();

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});


Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});
*/

/*
Todo.findById(id)
    .then((todo) => {
        if (!todo) {
            return console.log('ID not found');
        }
    console.log('Todo', todo);
}).catch((e) => console.log(e));
*/

// User.findById
// Query works, user found
// Query works, but no user
// Error occures
User.findById(user_id)
    .then((user) => {
        if (!user) {
            return console.log('Unable to find user');
        }
        console.log(console.log(JSON.stringify(user, undefined, 2)));
    })
    .catch((error) => {
        console.log(error);
    });