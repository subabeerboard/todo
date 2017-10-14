var express     = require("express");
var cors        = require('cors');
var bodyParser  = require('body-parser');
var app=express();

app.use(cors());



var todo = require( './todo.js' );
app.get('/getTodo',cors(), todo.getToDo);

app.listen(3001);
