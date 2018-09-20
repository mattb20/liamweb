const express = require('express'),
      app = express(),
      path = require("path");

app.use(express.static('scripts'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/liamhome.html'));
});

app.listen(3000);
console.log("Running at Port 3000");
