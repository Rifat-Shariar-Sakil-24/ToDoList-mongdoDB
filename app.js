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


const taskSchema = new mongoose.Schema({
    name: String,
    id: Number

  });
  const TaskModel = mongoose.model('task', taskSchema);



var lists = [];



app.get("/",function(req,res){
    lists = [];
   
    getAllTasks();
    async function getAllTasks(){
        const allTask = await TaskModel.find({});
 
        allTask.forEach(function(eachTask){
           lists.push(eachTask.name);
        })
        res.render('index', {Tasks : lists});
    }
   
})



app.post("/",function(req,res){
    const formInput = req.body;
    const taskIs = formInput.nameOfTask;
    
    
    const eachTask = new TaskModel({ name: taskIs });
    eachTask.save().then("pushed succesfully").catch();

    res.redirect("/");
})


app.post("/deleteTask", function(req,res){
    const gg = req.body;
    const indexOfTask = gg.submit;



    deleteTask();
    async function deleteTask(){

        let idToBeDelted;
        const allTask = await TaskModel.find({});
        for(let i=0;i<allTask.length;i++)
        {
            
            if(i==indexOfTask){
                idToBeDelted =  allTask[i]._id;
                break;
            }
        } 
       
   
        await TaskModel.deleteOne({ _id: idToBeDelted });
        
        
    }
  

    

    res.redirect("/");
})
app.listen(4000, function(){
    console.log("app is running on port 4000");
})