const mongoos = require("mongoose");

/*
create a mongoose database for todo app
Todo{
    title:string,
    description:string,
    completed:boolean
}
*/
mongoos.connect("mongodb://127.0.0.1:27017/Todo-app");

const todoSchema = mongoos.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoos.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
