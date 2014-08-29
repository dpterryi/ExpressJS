var express = require('express'),
	morgan 	= require( 'morgan' ),
    path 	= require('path'),
    exphbs  = require('express-handlebars');
    
var app = express();

app.use(morgan());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/example', function (req, res) {
    res.render('example');
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});