var express = require('express');

var port = 8040;



var db=require('./config/mongoose')

var app = express();
 

app.set('view engine', 'ejs');
app.set('views',__dirname+ "/views");
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use(express.static('assets'));



app.get('/', function(req, res){
  
     return res.render('home');

});


app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})