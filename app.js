const express = require('express'),
      app = express(),
      path = require("path");

app.use(express.static('scripts'));
app.use(express.static('style'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/liamhome.html'));
});

app.get('/about', function(req,res){
  res.sendFile(path.join(__dirname+'about.html'));
});

app.get('/media', function(req,res){
  res.sendFile(path.join(__dirname+'media.html'));
});

app.listen(3000);
console.log("Running at Port 3000");
