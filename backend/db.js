const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Admin:Tima501%40@cluster0.845tjws.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo : todo
}