// dependencies
var express = require('express');
var methodOverride = ('method-override');
var bodyParser = ('body-parser');

var app = express();

/*
 * serve static content for the app from
 * the "public" directory in the application directory.
 */
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/ramen_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);
