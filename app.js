const express = require('express'),
      app = express(),
      path = require("path");

app.use(express.static('scripts'));
app.use(express.static('style'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/liamhome.html'));
});

app.get('/facebook', function(req,res){
  res.redirect('https://www.facebook.com/bantertruck');
});

app.listen(3000);
console.log("Running at Port 3000");
