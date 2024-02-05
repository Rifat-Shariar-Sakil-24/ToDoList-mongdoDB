const express = require('express');
const bodyparser= require('body-parser');

app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));

var lists = [];

app.get("/",function(req,res){
    res.render('index', {Tasks : lists});
})
app.post("/",function(req,res){
    const formInput = req.body;
    const taskIs = formInput.nameOfTask;
    lists.push(taskIs);
    console.log(lists);
    res.redirect("/");
})

app.listen(4000, function(){
    console.log("app is running on port 4000");
})