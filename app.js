const express = require('express');
const bodyparser= require('body-parser');

app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));


// db connection
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ToDoList').then(console.log("db is connected"));
}


var lists = [];

app.get("/",function(req,res){
    res.render('index', {Tasks : lists});
})


const taskSchema = new mongoose.Schema({
    name: String
  });
  const TaskModel = mongoose.model('task', taskSchema);

app.post("/",function(req,res){
    const formInput = req.body;
    const taskIs = formInput.nameOfTask;
    lists.push(taskIs);
    //console.log(lists);

    const eachTask = new TaskModel({ name: taskIs });
    eachTask.save().then("pushed succesfully").catch();
   // console.log(silence.name);
    res.redirect("/");
})

app.listen(4000, function(){
    console.log("app is running on port 4000");
})