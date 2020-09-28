var express = require('express');
var app = express();

//app.use('/static', express.static('public'));

app.get('/', function(req, res){
   res.sendFile(__dirname + "/pages/index.html");
});
app.get('/hello', function(req, res){
    res.sendFile(__dirname + "/pages/hello.html");
 });
 app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
       name: "TutorialsPoint", 
       url:"http://www.tutorialspoint.com"
    });
 });

app.listen(3000);