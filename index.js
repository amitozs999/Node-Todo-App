var express = require('express');

var port = 8490;

var Todo=require('./models/todo');

var db=require('./config/mongoose')

var app = express();
 

app.set('view engine', 'ejs');
app.set('views',__dirname+ "/views");
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use(express.static('assets'));

var TodoList = [
    {
        title: "Amitoz singh",
        desciption: "1474847",
        cateogary:"work",
        deadline:"djd"
    },
    {
        title: "honey singh",
        desciption: "1474847",
        cateogary:"work",
        deadline:"djd"
    }
    
]

app.get('/', function(req, res){

    Todo.find({}).exec(function(err,data){
        if(err){
             return;
         }
         let todoss = [...data];
        
          return res.render('home',{
              title: "Contact List",
              todos:todoss});
          });
  
    

});

app.post('/todos', (req, res)=>{
    // console.log(req.body);
    let todo = JSON.parse(req.body.todo);
    console.log(todo)
    Todo.create(todo, (err, data)=>{
        if(err){
          
           
            return res.redirect('back');
        }
        return res.send('Success!');
    })
    
})




app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

app.delete('/todos', (req, res)=>{
    console.log(req.body);
    let ids = JSON.parse(req.body.ids)
    Todo.find({})
    .where('_id')
    .in(ids)
    .remove()
    .exec((err, data)=>{
        if(err){
            console.log('Error:', err);
            return;
        }
        console.log(data);
        return res.redirect(200, '/');
    });
})