    
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;