var express = require('express');
var app = express();

//app.use('/static', express.static('public'));

app.get('/', function(req, res){
   res.sendFile(__dirname + "/pages/index.html");
});
app.get('/home', function(req, res){
    res.sendFile(__dirname + "/pages/hello.html");
 });
 app.get('/about', function(req, res){
    res.sendFile(__dirname + "/pages/about.html");
 });

app.listen(process.env.PORT || 3000);