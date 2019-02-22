const path = require('path');
const express = require('express');
const handlebars = require('hbs');
const bodyParser = require('body-parser');
const app = express();

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set folder public as static folder for static files
app.use('/assets',express.static(__dirname + '/public'));

// For details on bodyParser config see https://github.com/expressjs/body-parser
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));


//list products
app.get('/list',(req, res) => {
  res.render('products-fake',{
    results: []
  });
});

//route for insert data
app.post('/buy',(req, res) => {
  let data = {name: req.body.name, credit_card: req.body.credit_card};
  console.log("STEALING DATA");
  console.log(data);
  console.log("DATA STOLEN");
  res.redirect('/list');
});

//server listening
app.listen(config.fakeserver.port, () => {
  console.log('Server is running at port ' + config.fakeserver.port);
});
