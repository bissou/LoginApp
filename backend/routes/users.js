var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'jarmouma50',
        database : 'users',
    });


connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });
/* GET users listing. */
app.get('/users', function(req, res, next) {
 // var username = req.body.username;
  //var password = req.body.password;
   var username = 'john';
   var password = 'abcd';
   connection.query("SELECT * FROM compte WHERE username = ? AND password = ?",[username,password],function(err,row,fields){
      
      if (err) console.log(err);
      if(row.length > 0)
      {res.send({'sucess' : true , 'message': row[0].username})}
      else{ res.send({'sucess' : false , 'message': 'user not found'})}
  })
 
});
app.listen(3400, function () {
 console.log('Example app listening on port 3400!')
});

module.exports = app;
