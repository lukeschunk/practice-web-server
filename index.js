var express = require('express');

var app = express();


var middleware = require('./middleware');


//app.use(middleware.requireAuthentication); //this is application level middleWare


app.get('/', function (req, res) { 
    res.send('Hello Express');

});

app.get('/about', middleware.logger, function (req, res) { //when you view a page in your browser, it's always making a get request 
    res.send('Hello Express');

});


//We're going to expose an entire folder in our web Server:

//app.use(express.static(__dirname + '/public'));

app.listen(3000, function() { //the second argument in app.listen is a function that gets called once the server starts
   console.log("express server started"); 
});